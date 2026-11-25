import { localLessons } from '../data/lessons'
import type { Lesson } from '../types'
import { supabase } from './supabase'

type DatabaseLesson = {
  id: string
  name: string
  arabic_name: string
  category: string
  description: string
  color: string
  orbit_position: [number, number, number]
  smp: Lesson['smp']
  sma: Lesson['sma']
  quiz_smp: Lesson['quizSmp']
  quiz_sma: Lesson['quizSma']
  audio_smp_url: string | null
  audio_sma_url: string | null
}

export async function loadLessons(): Promise<{ lessons: Lesson[]; source: 'local' | 'supabase' }> {
  if (!supabase) return { lessons: localLessons, source: 'local' }

  try {
    const { data, error } = await supabase
      .from('lessons')
      .select('id,name,arabic_name,category,description,color,orbit_position,smp,sma,quiz_smp,quiz_sma,audio_smp_url,audio_sma_url')
      .eq('is_published', true)
      .order('sort_order', { ascending: true })

    if (error || !data?.length) return { lessons: localLessons, source: 'local' }

    const rows = data as unknown as DatabaseLesson[]
    const lessons: Lesson[] = rows.map((row) => ({
      id: row.id,
      name: row.name,
      arabicName: row.arabic_name,
      category: row.category,
      description: row.description,
      color: row.color,
      orbitPosition: row.orbit_position,
      smp: row.smp,
      sma: row.sma,
      quizSmp: row.quiz_smp,
      quizSma: row.quiz_sma,
      audioSmpUrl: row.audio_smp_url,
      audioSmaUrl: row.audio_sma_url,
    }))

    return { lessons, source: 'supabase' }
  } catch {
    return { lessons: localLessons, source: 'local' }
  }
}
