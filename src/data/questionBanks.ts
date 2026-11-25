import type { DifficultyQuestionBank, GradeLevel, Lesson, QuizQuestion } from '../types'

function unique(values: string[], correct: string, count = 2): string[] {
  const candidates = [...new Set(values.filter((value) => value && value !== correct))]
  const selected: string[] = []
  while (selected.length < count && candidates.length) {
    const index = (selected.length * 3 + 1) % candidates.length
    selected.push(candidates.splice(index, 1)[0])
  }
  return [correct, ...selected]
}

function makeQuestion(
  id: string,
  source: 'qiraah' | 'istima',
  prompt: string,
  correct: string,
  distractors: string[],
  explanation: string,
): QuizQuestion {
  const options = unique(distractors, correct, 2)
  return { id, source, prompt, options, answerIndex: options.indexOf(correct), explanation }
}

function baseQuestions(lesson: Lesson, grade: GradeLevel): QuizQuestion[] {
  return grade === 'SMP' ? lesson.quizSmp : lesson.quizSma
}

export function buildQuestionBank(lesson: Lesson, grade: GradeLevel, allLessons: Lesson[]): DifficultyQuestionBank {
  const content = grade === 'SMP' ? lesson.smp : lesson.sma
  const seeds = baseQuestions(lesson, grade)
  const otherLessons = allLessons.filter((item) => item.id !== lesson.id)
  const otherNames = otherLessons.map((item) => item.name)
  const otherArabicNames = otherLessons.map((item) => item.arabicName)
  const otherDescriptions = otherLessons.map((item) => item.description)
  const firstSentence = (value: string) => value.split(/[.!?؟]/).map((part) => part.trim()).filter(Boolean)[0] ?? value
  const otherTranslations = otherLessons.map((item) => firstSentence(grade === 'SMP' ? item.smp.translation : item.sma.translation))
  const conciseTranslation = firstSentence(content.translation)
  const allVocabulary = allLessons.flatMap((item) => (grade === 'SMP' ? item.smp : item.sma).vocabulary)

  const easy: QuizQuestion[] = []
  content.vocabulary.slice(0, 3).forEach((word, index) => {
    easy.push(makeQuestion(
      `${lesson.id}-${grade}-easy-vocab-${index + 1}`,
      'qiraah',
      `Apa arti kosakata ${word.arabic}?`,
      word.meaning,
      allVocabulary.map((item) => item.meaning),
      `${word.arabic} berarti “${word.meaning}”.`,
    ))
    easy.push(makeQuestion(
      `${lesson.id}-${grade}-easy-reverse-${index + 1}`,
      'qiraah',
      `Kosakata Arab yang berarti “${word.meaning}” adalah ...`,
      word.arabic,
      allVocabulary.map((item) => item.arabic),
      `Kosakata yang tepat adalah ${word.arabic}.`,
    ))
  })
  seeds.slice(0, 2).forEach((question, index) => easy.push({ ...question, id: `${lesson.id}-${grade}-easy-seed-${index + 1}` }))
  easy.push(makeQuestion(
    `${lesson.id}-${grade}-easy-place`, 'qiraah', `Apa arti nama tempat ${lesson.arabicName}?`, lesson.name,
    otherNames, `${lesson.arabicName} berarti ${lesson.name}.`,
  ))
  easy.push(makeQuestion(
    `${lesson.id}-${grade}-easy-arabic-place`, 'qiraah', 'Nama tempat yang sesuai dengan materi ini adalah ...', lesson.arabicName,
    otherArabicNames, `Materi ini membahas ${lesson.name.toLowerCase()}.`,
  ))

  const medium: QuizQuestion[] = []
  seeds.slice(0, 2).forEach((question, index) => medium.push({ ...question, id: `${lesson.id}-${grade}-medium-seed-${index + 1}` }))
  medium.push(makeQuestion(
    `${lesson.id}-${grade}-medium-main-idea`, 'qiraah', 'Gagasan utama yang paling sesuai dengan bacaan adalah ...', lesson.description,
    otherDescriptions, `Bacaan berfokus pada konteks ${lesson.name.toLowerCase()}: ${lesson.description.toLowerCase()}`,
  ))
  medium.push(makeQuestion(
    `${lesson.id}-${grade}-medium-reading-detail`, 'qiraah', 'Informasi utama pada bagian awal bacaan adalah ...', conciseTranslation,
    otherTranslations, 'Ringkasan ini sesuai dengan informasi pada bacaan yang dipelajari.',
  ))
  medium.push(makeQuestion(
    `${lesson.id}-${grade}-medium-audio-context`, 'istima', 'Percakapan atau narasi audio ini paling sesuai dengan situasi di ...', lesson.name,
    otherNames, `Konteks audio pada materi ini berkaitan dengan ${lesson.name.toLowerCase()}.`,
  ))
  medium.push(makeQuestion(
    `${lesson.id}-${grade}-medium-audio-topic`, 'istima', 'Topik yang paling dekat dengan audio yang didengarkan adalah ...', lesson.description,
    otherDescriptions, `Audio dipelajari dalam konteks ${lesson.name.toLowerCase()}.`,
  ))
  medium.push(makeQuestion(
    `${lesson.id}-${grade}-medium-content-match`, 'qiraah', 'Pernyataan yang paling sesuai dengan bacaan adalah ...', conciseTranslation,
    otherTranslations, 'Pernyataan tersebut merangkum informasi utama dari bacaan.',
  ))
  medium.push(makeQuestion(
    `${lesson.id}-${grade}-medium-place-match`, 'istima', 'Jika ingin mempraktikkan kosakata dalam audio, tempat yang paling relevan adalah ...', lesson.name,
    otherNames, `Kosakata audio digunakan dalam konteks ${lesson.name.toLowerCase()}.`,
  ))
  medium.push(makeQuestion(
    `${lesson.id}-${grade}-medium-context`, 'qiraah', 'Konteks kehidupan sehari-hari yang dibahas dalam bacaan adalah ...', lesson.name,
    otherNames, `Bacaan mengambil latar ${lesson.name.toLowerCase()}.`,
  ))
  medium.push(makeQuestion(
    `${lesson.id}-${grade}-medium-place-vocabulary`, 'istima', 'Lokasi yang paling tepat untuk menggunakan kosakata utama dalam audio adalah ...', lesson.name,
    otherNames, `Kosakata audio digunakan dalam konteks ${lesson.name.toLowerCase()}.`,
  ))

  const advanced: QuizQuestion[] = []
  seeds.slice(0, 2).forEach((question, index) => advanced.push({ ...question, id: `${lesson.id}-${grade}-advanced-seed-${index + 1}` }))
  advanced.push(makeQuestion(
    `${lesson.id}-${grade}-advanced-inference`, 'qiraah', 'Simpulan yang paling tepat berdasarkan keseluruhan bacaan adalah ...', lesson.description,
    otherDescriptions, `Simpulan harus tetap sesuai dengan konteks dan aktivitas utama dalam bacaan.`,
  ))
  advanced.push(makeQuestion(
    `${lesson.id}-${grade}-advanced-summary`, 'qiraah', 'Pernyataan yang paling dapat dipertahankan berdasarkan bacaan adalah ...', conciseTranslation,
    otherTranslations, 'Interpretasi ini mempertahankan informasi penting dalam teks.',
  ))
  advanced.push(makeQuestion(
    `${lesson.id}-${grade}-advanced-transfer`, 'istima', 'Dalam situasi nyata, audio tersebut paling tepat digunakan untuk berlatih komunikasi di ...', lesson.name,
    otherNames, `Konteks komunikasi yang dilatih adalah ${lesson.name.toLowerCase()}.`,
  ))
  advanced.push(makeQuestion(
    `${lesson.id}-${grade}-advanced-purpose`, 'istima', 'Tujuan pembelajaran yang paling relevan dengan audio ini adalah ...', lesson.description,
    otherDescriptions, `Audio mendukung pemahaman bahasa dalam konteks ${lesson.name.toLowerCase()}.`,
  ))
  advanced.push(makeQuestion(
    `${lesson.id}-${grade}-advanced-application`, 'qiraah', 'Jika peserta didik menghadapi situasi serupa, konteks yang perlu dikenali terlebih dahulu adalah ...', lesson.name,
    otherNames, `Situasi dalam bacaan berlangsung di ${lesson.name.toLowerCase()}.`,
  ))
  advanced.push(makeQuestion(
    `${lesson.id}-${grade}-advanced-evaluation`, 'qiraah', 'Informasi yang didukung oleh bagian awal bacaan adalah ...', conciseTranslation,
    otherTranslations, 'Jawaban harus didukung oleh informasi yang benar-benar terdapat dalam bacaan.',
  ))
  advanced.push(makeQuestion(
    `${lesson.id}-${grade}-advanced-context`, 'istima', 'Konteks yang paling konsisten dengan kosakata dan isi audio adalah ...', lesson.description,
    otherDescriptions, `Kosakata dan isi audio mengarah pada konteks ${lesson.name.toLowerCase()}.`,
  ))
  advanced.push(makeQuestion(
    `${lesson.id}-${grade}-advanced-location`, 'qiraah', 'Tempat yang paling tepat untuk menerapkan ungkapan dalam materi ini adalah ...', lesson.name,
    otherNames, `Ungkapan dipelajari dalam konteks ${lesson.name.toLowerCase()}.`,
  ))

  const audioUrl = grade === 'SMP' ? lesson.audioSmpUrl : lesson.audioSmaUrl
  const attachListeningAudio = (items: QuizQuestion[]) => items.map((item) => item.source === 'istima'
    ? { ...item, audioText: content.audioText, audioUrl: audioUrl ?? null }
    : item)

  return {
    beginner: attachListeningAudio(easy),
    intermediate: attachListeningAudio(medium),
    advanced: attachListeningAudio(advanced),
  }
}

export function attachQuestionBanks(lessons: Lesson[]): Lesson[] {
  return lessons.map((lesson) => ({
    ...lesson,
    questionBanks: {
      SMP: buildQuestionBank(lesson, 'SMP', lessons),
      SMA: buildQuestionBank(lesson, 'SMA', lessons),
    },
  }))
}
