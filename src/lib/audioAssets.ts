import type { GradeLevel } from '../types'

/**
 * The MP3 generator writes one listening track per lesson and grade.
 * Quiz listening items reuse the same track as the lesson's istima' section.
 */
export function getLessonAudioUrl(lessonId: string, grade: GradeLevel): string {
  const safeId = lessonId.toLowerCase().replace(/[^a-z0-9-]/g, '-')
  return `/audio/generated/${safeId}_${grade.toLowerCase()}_istima.mp3`
}
