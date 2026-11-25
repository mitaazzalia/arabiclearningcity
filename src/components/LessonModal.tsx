import { useState } from 'react'
import { BookOpen, Check, CheckCircle2, ChevronRight, Headphones, Languages, LockKeyhole, Star, X } from 'lucide-react'
import AudioPlayer from './AudioPlayer'
import { getLessonAudioUrl } from '../lib/audioAssets'
import QuizPanel from './QuizPanel'
import type { DifficultyLevel, GradeLevel, Lesson, LessonTab } from '../types'
import { difficultyLabels, difficultyOrder } from '../types'

interface LessonModalProps {
  lesson: Lesson
  grade: GradeLevel
  completed: boolean
  passedLevels: DifficultyLevel[]
  onClose: () => void
  onLevelPassed: (lessonId: string, grade: GradeLevel, difficulty: DifficultyLevel, score: number) => void
}

const tabs: { id: LessonTab; label: string; icon: typeof BookOpen }[] = [
  { id: 'reading', label: 'Qirā’ah', icon: BookOpen },
  { id: 'listening', label: 'Istimā’', icon: Headphones },
  { id: 'vocabulary', label: 'Mufradāt', icon: Languages },
  { id: 'quiz', label: 'Tantangan', icon: Star },
]

export default function LessonModal({ lesson, grade, completed, passedLevels, onClose, onLevelPassed }: LessonModalProps) {
  const [activeTab, setActiveTab] = useState<LessonTab>('reading')
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyLevel>('beginner')
  const [showTranslation, setShowTranslation] = useState(true)
  const [showTranscript, setShowTranscript] = useState(false)
  const content = grade === 'SMP' ? lesson.smp : lesson.sma
  const readingWordCount = content.reading.trim().split(/\s+/).length
  const questionBank = lesson.questionBanks?.[grade]
  const selectedQuestions = questionBank?.[selectedDifficulty] ?? (grade === 'SMP' ? lesson.quizSmp : lesson.quizSma)
  const levelIndex = difficultyOrder.indexOf(selectedDifficulty)
  const previousLevel = levelIndex > 0 ? difficultyOrder[levelIndex - 1] : null
  const selectedUnlocked = !previousLevel || passedLevels.includes(previousLevel)

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
      <section className="lesson-modal" role="dialog" aria-modal="true" aria-labelledby="lesson-title">
        <header className="lesson-modal-header">
          <div className="lesson-heading-icon" style={{ background: `${lesson.color}22`, color: lesson.color }}><BookOpen size={23} /></div>
          <div className="lesson-heading-copy">
            <div className="lesson-kicker">KOTA BELAJAR · {lesson.category.toUpperCase()}</div>
            <h2 id="lesson-title">{lesson.name}</h2>
            <p dir="rtl">{lesson.arabicName}</p>
          </div>
          <div className="lesson-header-right">
            <span className="grade-chip">Jenjang {grade === 'SMP' ? 'SMP / MTs' : 'SMA / MA'}</span>
            {completed && <span className="completed-chip"><Check size={13} /> Tuntas</span>}
            <button className="icon-button close-button" onClick={onClose} type="button" aria-label="Tutup materi"><X size={20} /></button>
          </div>
        </header>

        <nav className="lesson-tabs" aria-label="Bagian materi">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button className={activeTab === id ? 'lesson-tab active' : 'lesson-tab'} key={id} onClick={() => setActiveTab(id)} type="button">
              <Icon size={16} /> {label}
            </button>
          ))}
        </nav>

        <div className="lesson-content">
          {activeTab === 'reading' && (
            <div className="reading-content">
              <div className="section-eyebrow">MAHĀRAH AL-QIRĀ’AH · KETERAMPILAN MEMBACA</div>
              <h3>اقْرَأِ النَّصَّ بِتَرْكِيزٍ</h3>
              <p className="section-description">Bacalah cerita berikut dengan saksama. Perhatikan kosakata, urutan peristiwa, dan informasi penting di dalam teks.</p>
              <div className="reading-meta"><span>{grade === 'SMP' ? 'SMP / MTs' : 'SMA / MA'}</span><span>·</span><span>{readingWordCount} kata Arab</span><span>·</span><span>Teks kontekstual</span></div>
              <div className="arabic-reading" dir="rtl" lang="ar">{content.reading}</div>
              <div className="translation-heading">
                <strong>Terjemahan Bahasa Indonesia</strong>
                <button className="text-button" onClick={() => setShowTranslation((value) => !value)} type="button">{showTranslation ? 'Sembunyikan' : 'Tampilkan'}</button>
              </div>
              {showTranslation && <p className="translation-box">{content.translation}</p>}
              <section className="reading-analysis" aria-label="Panduan analisis bacaan">
                <div className="reading-analysis-heading"><span>LATIHAN ANALISIS</span><strong>Setelah membaca, coba temukan hal-hal berikut.</strong></div>
                <div className="reading-analysis-grid">
                  <article><b>01 · Gagasan pokok</b><p>Apa topik utama yang dibahas dalam teks?</p></article>
                  <article><b>02 · Informasi rinci</b><p>Siapa tokohnya, di mana peristiwa berlangsung, dan kegiatan apa yang dilakukan?</p></article>
                  <article><b>03 · Urutan peristiwa</b><p>Bagaimana urutan kegiatan dari awal hingga akhir cerita?</p></article>
                  <article><b>04 · Simpulan</b><p>Pelajaran atau pesan apa yang dapat disimpulkan dari bacaan?</p></article>
                </div>
              </section>
              <button className="inline-next" onClick={() => setActiveTab('listening')} type="button">Lanjut ke latihan menyimak <ChevronRight size={16} /></button>
            </div>
          )}

          {activeTab === 'listening' && (
            <div className="listening-content">
              <div className="section-eyebrow">MAHĀRAH AL-ISTIMĀ’ · KETERAMPILAN MENYIMAK</div>
              <h3>اِسْتَمِعْ إِلَى النَّصِّ</h3>
              <p className="section-description">Dengarkan narasi Bahasa Arab yang membacakan teks materi. Coba menyimak tanpa membuka transkrip terlebih dahulu, lalu putar kembali untuk memeriksa pemahaman.</p>
              <AudioPlayer text={content.audioText} audioUrl={(grade === 'SMP' ? lesson.audioSmpUrl : lesson.audioSmaUrl) || getLessonAudioUrl(lesson.id, grade)} />
              <div className="listening-tip"><Headphones size={17} /><span>Dengarkan satu kali tanpa membaca transkrip. Setelah itu, putar kembali untuk memeriksa pemahamanmu.</span></div>
              <div className="transcript-area">
                <button className="transcript-toggle" onClick={() => setShowTranscript((value) => !value)} type="button">{showTranscript ? 'Sembunyikan transkrip' : 'Tampilkan transkrip audio'}</button>
                {showTranscript && <p className="arabic-transcript" dir="rtl" lang="ar">{content.audioText}</p>}
              </div>
              <button className="inline-next" onClick={() => setActiveTab('quiz')} type="button">Mulai tantangan bertingkat <ChevronRight size={16} /></button>
            </div>
          )}

          {activeTab === 'vocabulary' && (
            <div className="vocabulary-content">
              <div className="section-eyebrow">MUFRADĀT · KOSAKATA</div>
              <h3>مُفْرَدَاتٌ جَدِيدَةٌ</h3>
              <p className="section-description">Pelajari kosakata penting yang muncul dalam materi ini.</p>
              <div className="vocabulary-grid">
                {content.vocabulary.map((item) => (
                  <article className="vocabulary-card" key={item.arabic}>
                    <span className="vocab-meaning">{item.meaning}</span>
                    <strong className="vocab-arabic" dir="rtl">{item.arabic}</strong>
                    <span className="vocab-latin">{item.latin}</span>
                  </article>
                ))}
              </div>
              <button className="inline-next" onClick={() => setActiveTab('quiz')} type="button">Uji pemahamanmu <ChevronRight size={16} /></button>
            </div>
          )}

          {activeTab === 'quiz' && (
            <div className="quiz-content">
              <div className="section-eyebrow">LEARNING QUEST · EVALUASI BERTAHAP</div>
              <h3>اِخْتَبِرْ مَهَارَاتِكَ</h3>
              <p className="section-description">Selesaikan tahap mudah terlebih dahulu. Nilai minimal 75 diperlukan untuk membuka tahap berikutnya.</p>
              <div className="difficulty-path">
                {difficultyOrder.map((difficulty, index) => {
                  const previous = index > 0 ? difficultyOrder[index - 1] : null
                  const unlocked = !previous || passedLevels.includes(previous)
                  const passed = passedLevels.includes(difficulty)
                  const selected = selectedDifficulty === difficulty
                  return (
                    <button
                      className={`difficulty-card ${difficulty} ${selected ? 'selected' : ''} ${passed ? 'passed' : ''} ${!unlocked ? 'locked' : ''}`}
                      key={difficulty}
                      disabled={!unlocked}
                      onClick={() => setSelectedDifficulty(difficulty)}
                      type="button"
                    >
                      <span className="difficulty-card-top"><span>TAHAP {index + 1}</span>{passed ? <CheckCircle2 size={17} /> : !unlocked ? <LockKeyhole size={16} /> : <Star size={16} />}</span>
                      <strong>{difficultyLabels[difficulty].title}</strong>
                      <span className="difficulty-arabic" dir="rtl">{difficultyLabels[difficulty].arabic}</span>
                      <small>{passed ? 'Sudah lulus' : unlocked ? 'Terbuka' : 'Selesaikan tahap sebelumnya'}</small>
                    </button>
                  )
                })}
              </div>
              {selectedUnlocked ? (
                <QuizPanel
                  key={`${lesson.id}-${grade}-${selectedDifficulty}`}
                  questions={selectedQuestions}
                  difficulty={selectedDifficulty}
                  onComplete={(score, difficulty) => onLevelPassed(lesson.id, grade, difficulty, score)}
                />
              ) : (
                <div className="locked-level-message"><LockKeyhole size={19} /><span>Tahap ini masih terkunci. Raih nilai minimal 75 pada tahap sebelumnya untuk membukanya.</span></div>
              )}
            </div>
          )}
        </div>
        <footer className="lesson-modal-footer">
          <span><span className="footer-dot" /> Materi {grade === 'SMP' ? 'SMP / MTs' : 'SMA / MA'} · {lesson.name}</span>
          <span>Arabic Learning City · v0.6</span>
        </footer>
      </section>
    </div>
  )
}
