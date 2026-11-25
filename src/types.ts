export type GradeLevel = 'SMP' | 'SMA'
export type LearningView = 'universe' | 'progress'
export type LessonTab = 'reading' | 'listening' | 'vocabulary' | 'quiz'
export type QuizSource = 'qiraah' | 'istima'
export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced'

export interface VocabularyItem {
  arabic: string
  latin: string
  meaning: string
}

export interface LessonContent {
  reading: string
  translation: string
  audioText: string
  vocabulary: VocabularyItem[]
}

export interface QuizQuestion {
  id: string
  source: QuizSource
  prompt: string
  options: string[]
  answerIndex: number
  explanation: string
  audioText?: string
  audioUrl?: string | null
}

export interface DifficultyQuestionBank {
  beginner: QuizQuestion[]
  intermediate: QuizQuestion[]
  advanced: QuizQuestion[]
}

export interface Lesson {
  id: string
  name: string
  arabicName: string
  category: string
  description: string
  color: string
  orbitPosition: [number, number, number]
  smp: LessonContent
  sma: LessonContent
  quizSmp: QuizQuestion[]
  quizSma: QuizQuestion[]
  questionBanks?: Record<GradeLevel, DifficultyQuestionBank>
  audioSmpUrl?: string | null
  audioSmaUrl?: string | null
}

export const difficultyOrder: DifficultyLevel[] = ['beginner', 'intermediate', 'advanced']

export const difficultyLabels: Record<DifficultyLevel, { title: string; arabic: string; subtitle: string; threshold: number }> = {
  beginner: { title: 'Mudah', arabic: 'الْمُبْتَدِئُ', subtitle: 'Kenali kosakata dan informasi langsung.', threshold: 75 },
  intermediate: { title: 'Menengah', arabic: 'الْمُتَوَسِّطُ', subtitle: 'Hubungkan informasi dan pahami konteks.', threshold: 75 },
  advanced: { title: 'Sulit', arabic: 'الْمُتَقَدِّمُ', subtitle: 'Tarik simpulan dan analisis makna.', threshold: 75 },
}
