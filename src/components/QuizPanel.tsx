import { useMemo, useRef, useState } from 'react'
import { CheckCircle2, LockKeyhole, RotateCcw, Trophy } from 'lucide-react'
import type { DifficultyLevel, QuizQuestion } from '../types'
import AudioPlayer from './AudioPlayer'
import { difficultyLabels } from '../types'

interface QuizPanelProps {
  questions: QuizQuestion[]
  difficulty: DifficultyLevel
  onComplete: (score: number, difficulty: DifficultyLevel) => void
}

const QUESTION_COUNT = 5
const hasArabic = (value: string) => /[\u0600-\u06FF]/.test(value)

function shuffleQuestions(items: QuizQuestion[]): QuizQuestion[] {
  const shuffled = items.slice()
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1))
    ;[shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]]
  }
  return shuffled
}

function shuffleOptions(question: QuizQuestion): QuizQuestion {
  const options = question.options.map((option, index) => ({ option, correct: index === question.answerIndex }))
  for (let index = options.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(Math.random() * (index + 1))
    ;[options[index], options[swap]] = [options[swap], options[index]]
  }
  return { ...question, options: options.map((item) => item.option), answerIndex: options.findIndex((item) => item.correct) }
}

function chooseSessionQuestions(pool: QuizQuestion[], previousIds: string[] = []): QuizQuestion[] {
  const count = Math.min(QUESTION_COUNT, pool.length)
  let chosen: QuizQuestion[] = []
  for (let attempt = 0; attempt < 10; attempt += 1) {
    const reading = shuffleQuestions(pool.filter((item) => item.source === 'qiraah')).slice(0, 2)
    const listening = shuffleQuestions(pool.filter((item) => item.source === 'istima')).slice(0, 2)
    const used = new Set([...reading, ...listening].map((item) => item.id))
    const remaining = shuffleQuestions(pool.filter((item) => !used.has(item.id)))
    chosen = shuffleQuestions([...reading, ...listening, ...remaining.slice(0, Math.max(0, count - reading.length - listening.length))]).slice(0, count)
    const signature = chosen.map((item) => item.id).sort().join('|')
    if (signature !== previousIds.slice().sort().join('|')) break
  }
  return chosen.map(shuffleOptions)
}

export default function QuizPanel({ questions, difficulty, onComplete }: QuizPanelProps) {
  const lastSessionIds = useRef<string[]>([])
  const [sessionQuestions, setSessionQuestions] = useState<QuizQuestion[]>(() => {
    const selected = chooseSessionQuestions(questions)
    lastSessionIds.current = selected.map((item) => item.id)
    return selected
  })
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [submitted, setSubmitted] = useState(false)
  const [attempt, setAttempt] = useState(1)
  const correctCount = useMemo(
    () => sessionQuestions.filter((question) => answers[question.id] === question.answerIndex).length,
    [answers, sessionQuestions],
  )
  const score = Math.round((correctCount / Math.max(sessionQuestions.length, 1)) * 100)
  const passed = score >= difficultyLabels[difficulty].threshold

  const submit = () => {
    if (Object.keys(answers).length !== sessionQuestions.length) return
    setSubmitted(true)
    onComplete(score, difficulty)
  }

  const reset = () => {
    const next = chooseSessionQuestions(questions, lastSessionIds.current)
    lastSessionIds.current = next.map((item) => item.id)
    setSessionQuestions(next)
    setAnswers({})
    setSubmitted(false)
    setAttempt((value) => value + 1)
  }

  return (
    <div className="quiz-panel">
      <div className="quiz-intro">
        <div className="quiz-icon"><Trophy size={21} /></div>
        <div>
          <h3>Tantangan {difficultyLabels[difficulty].title}</h3>
          <p>{difficultyLabels[difficulty].subtitle}</p>
        </div>
        <span className="quiz-count">{sessionQuestions.length} soal · Percobaan {attempt}</span>
      </div>

      <div className="quiz-session-note">
        <span>Bank soal: {questions.length} pertanyaan</span>
        <span>Ambang kelulusan: {difficultyLabels[difficulty].threshold}%</span>
      </div>

      {sessionQuestions.map((question, index) => (
        <section className="question-card" key={question.id}>
          <div className="question-meta">
            <span>SOAL {index + 1} DARI {sessionQuestions.length}</span>
            <span className={question.source === 'qiraah' ? 'source-pill reading' : 'source-pill listening'}>
              {question.source === 'qiraah' ? 'Qirā’ah · Membaca' : 'Istimā’ · Menyimak'}
            </span>
          </div>
          <h4 dir={hasArabic(question.prompt) ? 'rtl' : 'ltr'} className={`arabic-question ${hasArabic(question.prompt) ? '' : 'question-indonesian'}`}>{question.prompt}</h4>
          {question.source === 'istima' && <div className="quiz-question-audio"><AudioPlayer compact text={question.audioText ?? question.prompt} audioUrl={question.audioUrl}/></div>}
          <div className="answer-options">
            {question.options.map((option, optionIndex) => {
              const selected = answers[question.id] === optionIndex
              const isCorrect = question.answerIndex === optionIndex
              const resultClass = submitted ? (isCorrect ? 'correct' : selected ? 'incorrect' : '') : ''
              return (
                <button
                  className={`answer-option ${selected ? 'selected' : ''} ${resultClass}`}
                  disabled={submitted}
                  key={`${question.id}-${optionIndex}`}
                  onClick={() => setAnswers((current) => ({ ...current, [question.id]: optionIndex }))}
                  type="button"
                >
                  <span className="option-letter">{String.fromCharCode(65 + optionIndex)}</span>
                  <span dir={hasArabic(option) ? 'rtl' : 'ltr'}>{option}</span>
                  {submitted && isCorrect && <CheckCircle2 size={17} className="answer-check" />}
                </button>
              )
            })}
          </div>
          {submitted && <p className="answer-explanation">{question.explanation}</p>}
        </section>
      ))}

      {submitted ? (
        <div className={`quiz-result ${passed ? 'passed' : 'not-passed'}`}>
          <div className="quiz-result-icon">{passed ? <Trophy size={23} /> : <LockKeyhole size={22} />}</div>
          <div className="quiz-result-copy">
            <span>HASIL EVALUASI</span>
            <strong>{correctCount} / {sessionQuestions.length} benar · {score}%</strong>
            <p>{passed ? 'Bagus! Tahap ini berhasil diselesaikan.' : 'Nilai belum mencapai 75%. Pelajari kembali materi, lalu coba set soal yang berbeda.'}</p>
            {passed && <small>Level berikutnya dapat dibuka jika masih tersedia.</small>}
          </div>
          <button className="secondary-button" onClick={reset} type="button"><RotateCcw size={16} /> Soal baru</button>
        </div>
      ) : (
        <button className="primary-button quiz-submit" disabled={Object.keys(answers).length !== sessionQuestions.length} onClick={submit} type="button">
          Periksa Jawaban <span>→</span>
        </button>
      )}
    </div>
  )
}
