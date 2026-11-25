-- Arabic Learning Universe: initial Supabase schema
-- Run this file in Supabase Dashboard > SQL Editor.

create extension if not exists pgcrypto;

create table if not exists public.lessons (
  id text primary key,
  name text not null,
  arabic_name text not null,
  category text not null default 'Umum',
  description text not null default '',
  color text not null default '#8b82ee',
  orbit_position jsonb not null default '[0,0,0]'::jsonb,
  smp jsonb not null,
  sma jsonb not null,
  quiz_smp jsonb not null default '[]'::jsonb,
  quiz_sma jsonb not null default '[]'::jsonb,
  audio_smp_url text,
  audio_sma_url text,
  sort_order integer not null default 0,
  is_published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  grade_level text check (grade_level in ('SMP', 'SMA')),
  role text not null default 'student' check (role in ('student', 'teacher', 'admin')),
  total_xp integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.lesson_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  lesson_id text not null references public.lessons(id) on delete cascade,
  grade_level text not null check (grade_level in ('SMP', 'SMA')),
  score integer not null check (score between 0 and 100),
  total_questions integer not null default 0,
  correct_answers integer not null default 0,
  answers jsonb not null default '{}'::jsonb,
  completed_at timestamptz not null default now()
);

create table if not exists public.lesson_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  lesson_id text not null references public.lessons(id) on delete cascade,
  grade_level text not null check (grade_level in ('SMP', 'SMA')),
  status text not null default 'in_progress' check (status in ('in_progress', 'completed')),
  best_score integer check (best_score between 0 and 100),
  xp_earned integer not null default 0,
  started_at timestamptz not null default now(),
  completed_at timestamptz,
  unique (user_id, lesson_id, grade_level)
);

create index if not exists lesson_attempts_user_idx on public.lesson_attempts(user_id, completed_at desc);
create index if not exists lesson_progress_user_idx on public.lesson_progress(user_id, status);
create index if not exists lessons_published_order_idx on public.lessons(is_published, sort_order);

alter table public.lessons enable row level security;
alter table public.profiles enable row level security;
alter table public.lesson_attempts enable row level security;
alter table public.lesson_progress enable row level security;

-- Published learning content can be read by visitors and signed-in users.
drop policy if exists "Published lessons are readable" on public.lessons;
create policy "Published lessons are readable"
  on public.lessons for select
  using (is_published = true);

-- Each learner can read and update only their own profile.
drop policy if exists "Users can read their own profile" on public.profiles;
create policy "Users can read their own profile"
  on public.profiles for select to authenticated
  using (auth.uid() = id);

drop policy if exists "Users can insert their own profile" on public.profiles;
create policy "Users can insert their own profile"
  on public.profiles for insert to authenticated
  with check (auth.uid() = id);

drop policy if exists "Users can update their own profile" on public.profiles;
create policy "Users can update their own profile"
  on public.profiles for update to authenticated
  using (auth.uid() = id)
  with check (auth.uid() = id);

-- Learners can manage only their own attempts and progress records.
drop policy if exists "Users can read their own attempts" on public.lesson_attempts;
create policy "Users can read their own attempts"
  on public.lesson_attempts for select to authenticated
  using (auth.uid() = user_id);

drop policy if exists "Users can insert their own attempts" on public.lesson_attempts;
create policy "Users can insert their own attempts"
  on public.lesson_attempts for insert to authenticated
  with check (auth.uid() = user_id);

drop policy if exists "Users can read their own progress" on public.lesson_progress;
create policy "Users can read their own progress"
  on public.lesson_progress for select to authenticated
  using (auth.uid() = user_id);

drop policy if exists "Users can insert their own progress" on public.lesson_progress;
create policy "Users can insert their own progress"
  on public.lesson_progress for insert to authenticated
  with check (auth.uid() = user_id);

drop policy if exists "Users can update their own progress" on public.lesson_progress;
create policy "Users can update their own progress"
  on public.lesson_progress for update to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- Public bucket for published Arabic listening recordings.
insert into storage.buckets (id, name, public)
values ('arabic-audio', 'arabic-audio', true)
on conflict (id) do update set public = excluded.public;

drop policy if exists "Published Arabic audio is readable" on storage.objects;
create policy "Published Arabic audio is readable"
  on storage.objects for select
  using (bucket_id = 'arabic-audio');

-- Content authoring policies for lessons should be added after an admin/teacher
-- authorization model is implemented. Do not expose anon insert/update/delete access.

-- Arabic Learning Universe v0.2: difficulty-based question banks and attempts.
create table if not exists public.question_banks (
  id uuid primary key default gen_random_uuid(),
  lesson_id text not null references public.lessons(id) on delete cascade,
  grade_level text not null check (grade_level in ('SMP', 'SMA')),
  difficulty_level text not null check (difficulty_level in ('beginner', 'intermediate', 'advanced')),
  title text not null,
  is_published boolean not null default false,
  created_at timestamptz not null default now(),
  unique (lesson_id, grade_level, difficulty_level)
);

create table if not exists public.questions (
  id uuid primary key default gen_random_uuid(),
  bank_id uuid not null references public.question_banks(id) on delete cascade,
  source text not null check (source in ('qiraah', 'istima')),
  prompt text not null,
  options jsonb not null check (jsonb_typeof(options) = 'array' and jsonb_array_length(options) >= 2),
  answer_index integer not null check (answer_index >= 0),
  explanation text not null default '',
  sort_order integer not null default 0,
  is_published boolean not null default false,
  created_at timestamptz not null default now()
);

alter table public.lesson_attempts
  add column if not exists difficulty_level text not null default 'beginner'
    check (difficulty_level in ('beginner', 'intermediate', 'advanced')),
  add column if not exists question_ids jsonb not null default '[]'::jsonb,
  add column if not exists passed boolean not null default false;

create table if not exists public.lesson_level_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  lesson_id text not null references public.lessons(id) on delete cascade,
  grade_level text not null check (grade_level in ('SMP', 'SMA')),
  difficulty_level text not null check (difficulty_level in ('beginner', 'intermediate', 'advanced')),
  status text not null default 'locked' check (status in ('locked', 'unlocked', 'passed')),
  best_score integer check (best_score between 0 and 100),
  passed_at timestamptz,
  updated_at timestamptz not null default now(),
  unique (user_id, lesson_id, grade_level, difficulty_level)
);

create index if not exists question_banks_lookup_idx
  on public.question_banks(lesson_id, grade_level, difficulty_level, is_published);
create index if not exists questions_bank_order_idx
  on public.questions(bank_id, is_published, sort_order);
create index if not exists lesson_level_progress_user_idx
  on public.lesson_level_progress(user_id, grade_level, lesson_id);

alter table public.question_banks enable row level security;
alter table public.questions enable row level security;
alter table public.lesson_level_progress enable row level security;

drop policy if exists "Published question banks are readable" on public.question_banks;
create policy "Published question banks are readable"
  on public.question_banks for select
  using (is_published = true);

drop policy if exists "Published questions are readable" on public.questions;
create policy "Published questions are readable"
  on public.questions for select
  using (
    is_published = true
    and exists (
      select 1 from public.question_banks bank
      where bank.id = public.questions.bank_id and bank.is_published = true
    )
  );

drop policy if exists "Users can read their own level progress" on public.lesson_level_progress;
create policy "Users can read their own level progress"
  on public.lesson_level_progress for select to authenticated
  using (auth.uid() = user_id);

drop policy if exists "Users can insert their own level progress" on public.lesson_level_progress;
create policy "Users can insert their own level progress"
  on public.lesson_level_progress for insert to authenticated
  with check (auth.uid() = user_id);

drop policy if exists "Users can update their own level progress" on public.lesson_level_progress;
create policy "Users can update their own level progress"
  on public.lesson_level_progress for update to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
