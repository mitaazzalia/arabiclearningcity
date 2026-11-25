import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  Award, BookOpen, CheckCircle2, ChevronRight, Flame, GraduationCap,
  HeartPulse, House, Map, MapPinned, Menu, ShoppingBag, Sparkles,
  TrainFront, Trophy, Trees, X, Zap,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import CityMap from './components/CityMap'
import DistrictView from './components/DistrictView'
import MufradatView from './components/MufradatView'
import LessonModal from './components/LessonModal'
import { cityDistricts, extraLessons, type CityArea, type DistrictId } from './data/cityData'
import { additionalCityLessons } from './data/moreCityLessons'
import { expandedCityLessons } from './data/expandedCityLessons'
import { enrichLessons } from './data/lessonEnrichment'
import { localLessons } from './data/lessons'
import { attachQuestionBanks } from './data/questionBanks'
import { loadLessons } from './lib/lessonRepository'
import type { DifficultyLevel, GradeLevel, Lesson } from './types'

const districtIcons: Record<DistrictId, LucideIcon> = {
  education: GraduationCap,
  transport: TrainFront,
  health: HeartPulse,
  home: House,
  commerce: ShoppingBag,
  recreation: Trees,
}

function App() {
  const [grade, setGrade] = useState<GradeLevel>('SMP')
  const [lessons, setLessons] = useState<Lesson[]>(() => attachQuestionBanks(enrichLessons([...localLessons, ...extraLessons, ...additionalCityLessons, ...expandedCityLessons])))
  const [dataSource, setDataSource] = useState<'local' | 'supabase'>('local')
  const [activeDistrict, setActiveDistrict] = useState<DistrictId | null>(null)
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null)
  const [currentView, setCurrentView] = useState<'city' | 'progress' | 'dictionary'>('city')
  const [passedLevels, setPassedLevels] = useState<Record<string, DifficultyLevel[]>>(() => {
    try {
      const saved = window.localStorage.getItem('alu-city-v04-progress') ?? window.localStorage.getItem('alu-city-v03-progress')
      return saved ? JSON.parse(saved) as Record<string, DifficultyLevel[]> : {}
    } catch {
      return {}
    }
  })
  const [xp, setXp] = useState(() => {
    try { return Number(window.localStorage.getItem('alu-city-v04-xp') ?? 0) || 0 } catch { return 0 }
  })
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  useEffect(() => {
    let mounted = true
    loadLessons().then((result) => {
      if (!mounted) return
      const allExtras = [...extraLessons, ...additionalCityLessons, ...expandedCityLessons]
      const merged = [...result.lessons, ...allExtras.filter((extra) => !result.lessons.some((lesson) => lesson.id === extra.id))]
      setLessons(attachQuestionBanks(enrichLessons(merged)))
      setDataSource(result.source)
    })
    return () => { mounted = false }
  }, [])

  useEffect(() => {
    window.localStorage.setItem('alu-city-v04-progress', JSON.stringify(passedLevels))
  }, [passedLevels])

  useEffect(() => {
    window.localStorage.setItem('alu-city-v04-xp', String(xp))
  }, [xp])

  const completedIds = useMemo(
    () => lessons.filter((lesson) => passedLevels[`${grade}:${lesson.id}`]?.includes('advanced')).map((lesson) => lesson.id),
    [grade, lessons, passedLevels],
  )
  const progress = useMemo(() => Math.round((completedIds.length / Math.max(lessons.length, 1)) * 100), [completedIds.length, lessons.length])

  const recordLevelResult = (lessonId: string, resultGrade: GradeLevel, difficulty: DifficultyLevel, score: number) => {
    if (score < 75) return
    const progressKey = `${resultGrade}:${lessonId}`
    if ((passedLevels[progressKey] ?? []).includes(difficulty)) return
    setPassedLevels((current) => {
      const currentLevels = current[progressKey] ?? []
      if (currentLevels.includes(difficulty)) return current
      return { ...current, [progressKey]: [...currentLevels, difficulty] }
    })
    setXp((currentXp) => currentXp + Math.max(10, Math.round(score * 0.25)))
  }

  const handleSelectDistrict = useCallback((districtId: DistrictId) => {
    setActiveDistrict(districtId)
    setCurrentView('city')
  }, [])

  const handleSelectArea = (area: CityArea) => {
    const lesson = lessons.find((item) => item.id === area.lessonId)
    if (lesson) {
      setSelectedLesson({
        ...lesson,
        name: area.name,
        arabicName: area.arabicName,
        description: area.description,
        category: activeDistrictData?.category ?? lesson.category,
      })
    }
  }

  const goToCity = () => {
    setCurrentView('city')
    setActiveDistrict(null)
    setMobileNavOpen(false)
  }

  const goToProgress = () => {
    setCurrentView('progress')
    setActiveDistrict(null)
    setMobileNavOpen(false)
  }

  const goToDictionary = () => {
    setCurrentView('dictionary')
    setActiveDistrict(null)
    setMobileNavOpen(false)
  }

  const activeDistrictData = cityDistricts.find((district) => district.id === activeDistrict) ?? null

  return (
    <div className="city-app-shell">
      <aside className={`city-sidebar ${mobileNavOpen ? 'mobile-open' : ''}`}>
        <div className="city-brand">
          <div className="city-brand-mark"><BookOpen size={23}/><span>ع</span></div>
          <div><strong>Arabic Learning</strong><small>مدينة اللغة العربية</small></div>
          <button className="city-icon-button mobile-close" onClick={() => setMobileNavOpen(false)} type="button" aria-label="Tutup menu"><X size={18}/></button>
        </div>
        <div className="city-sidebar-caption">RUANG BELAJAR</div>
        <nav className="city-nav">
          <button className={currentView === 'city' && !activeDistrict ? 'active' : ''} onClick={goToCity} type="button"><MapPinned size={18}/><span>Peta Kota</span><ChevronRight size={15}/></button>
          <button className={currentView === 'progress' ? 'active' : ''} onClick={goToProgress} type="button"><Trophy size={18}/><span>Progres Belajar</span><ChevronRight size={15}/></button>
          <button className={currentView === 'dictionary' ? 'active' : ''} onClick={goToDictionary} type="button"><BookOpen size={18}/><span>Kamus Mufradat</span><ChevronRight size={15}/></button>
        </nav>
        <div className="city-sidebar-caption">JELAJAHI KAWASAN</div>
        <div className="city-sidebar-districts">
          {cityDistricts.map((district) => {
            const Icon = districtIcons[district.id]
            return <button key={district.id} className={activeDistrict === district.id ? 'selected' : ''} onClick={() => { handleSelectDistrict(district.id); setMobileNavOpen(false) }} type="button"><span className="sidebar-district-icon" style={{ background: `${district.color}22`, color: district.color }}><Icon size={16}/></span><span>{district.name}</span></button>
          })}
        </div>
        <div className="city-sidebar-bottom">
          <div className="city-mission-card">
            <div className="mission-top"><span><Sparkles size={16}/></span><strong>Terus menjelajah!</strong></div>
            <p>Setiap tempat punya cerita dan kosakata baru.</p>
            <div className="mission-track"><i style={{ width: `${progress}%` }}/></div>
            <small>{completedIds.length} dari {lessons.length} materi tuntas</small>
          </div>
          <div className="city-data-status"><i/> {dataSource === 'supabase' ? 'Terhubung ke Supabase' : 'Mode demo lokal'} · v0.5</div>
        </div>
      </aside>

      {mobileNavOpen && <button className="city-mobile-scrim" onClick={() => setMobileNavOpen(false)} type="button" aria-label="Tutup navigasi"/>}

      <main className="city-main">
        <header className="city-topbar">
          <button className="city-icon-button mobile-menu" onClick={() => setMobileNavOpen(true)} type="button" aria-label="Buka menu"><Menu size={20}/></button>
          <div className="city-breadcrumb"><span>Kota Bahasa Arab</span>{activeDistrictData && <><ChevronRight size={14}/><strong>{activeDistrictData.name}</strong></>}{currentView === 'dictionary' && <><ChevronRight size={14}/><strong>Kamus Mufradat</strong></>}{currentView === 'progress' && <><ChevronRight size={14}/><strong>Progres Belajar</strong></>}</div>
          <div className="city-top-actions">
            <div className="city-grade-switch" aria-label="Pilih jenjang belajar">
              <button className={grade === 'SMP' ? 'selected' : ''} onClick={() => setGrade('SMP')} type="button">SMP / MTs</button>
              <button className={grade === 'SMA' ? 'selected' : ''} onClick={() => setGrade('SMA')} type="button">SMA / MA</button>
            </div>
            <div className="city-xp"><Zap size={15} fill="currentColor"/><strong>{xp} XP</strong></div>
            <div className="city-avatar">A</div>
          </div>
        </header>

        <div className="city-page-content">
          {currentView === 'dictionary' ? (
            <MufradatView/>
          ) : currentView === 'progress' ? (
            <ProgressView lessons={lessons} completedIds={completedIds} progress={progress} xp={xp} onSelect={(lesson) => setSelectedLesson(lesson)}/>
          ) : activeDistrictData ? (
            <DistrictView district={activeDistrictData} lessons={lessons} completedIds={completedIds} onBack={() => setActiveDistrict(null)} onSelectArea={handleSelectArea}/>
          ) : (
            <>
              <section className="city-welcome">
                <div>
                  <div className="city-eyebrow"><span>✦</span> PETUALANGAN BELAJAR BAHASA ARAB</div>
                  <h1>Selamat datang di <em>Kota Bahasa!</em></h1>
                  <p>Jelajahi tempat-tempat di sekitar kita. Baca ceritanya, dengarkan percakapannya, dan selesaikan tantangannya.</p>
                </div>
                <div className="city-streak"><span><Flame size={18} fill="currentColor"/></span><div><strong>Mulai hari ini</strong><small>Satu materi, satu kemajuan</small></div></div>
              </section>
              <section className="city-map-section">
                <div className="city-section-heading"><div><span className="section-tag">PETA INTERAKTIF</span><h2>Jelajahi seluruh kota</h2><p>Pilih bangunan untuk memperbesar tampilan dan masuk ke kawasannya.</p></div><div className="map-location-count"><Map size={17}/><strong>{cityDistricts.length} kawasan</strong><span>·</span><span>{cityDistricts.reduce((total, district) => total + district.areas.length, 0)} tempat</span></div></div>
                <CityMap onSelectDistrict={handleSelectDistrict}/>
              </section>
              <section className="city-quick-districts">
                <div className="city-section-heading"><div><span className="section-tag">PILIH KAWASAN</span><h2>Mulai dari tempat yang kamu kenal</h2></div></div>
                <div className="quick-district-grid">
                  {cityDistricts.map((district) => {
                    const Icon = districtIcons[district.id]
                    return <button key={district.id} onClick={() => handleSelectDistrict(district.id)} type="button" className="quick-district-card"><span className="quick-district-icon" style={{ background: `${district.color}22`, color: district.color }}><Icon size={21}/></span><span><strong>{district.name}</strong><small dir="rtl">{district.arabicName}</small></span><ChevronRight size={17}/></button>
                  })}
                </div>
              </section>
            </>
          )}
          <footer className="city-footer"><span>مَدِينَةُ اللُّغَةِ الْعَرَبِيَّةِ</span><span>اقْرَأْ · اِسْتَمِعْ · تَعَلَّمْ</span></footer>
        </div>
      </main>

      {selectedLesson && <LessonModal key={`${selectedLesson.id}-${grade}`} lesson={selectedLesson} grade={grade} completed={completedIds.includes(selectedLesson.id)} passedLevels={passedLevels[`${grade}:${selectedLesson.id}`] ?? []} onClose={() => setSelectedLesson(null)} onLevelPassed={recordLevelResult}/>}
    </div>
  )
}

function ProgressView({ lessons, completedIds, progress, xp, onSelect }: { lessons: Lesson[]; completedIds: string[]; progress: number; xp: number; onSelect: (lesson: Lesson) => void }) {
  const completedLessons = lessons.filter((lesson) => completedIds.includes(lesson.id))
  return (
    <section className="city-progress-page">
      <div className="city-eyebrow"><span>✦</span> RINGKASAN PEMBELAJARAN</div>
      <h1>Progres belajarmu</h1>
      <p className="city-progress-lead">Pantau perkembangan keterampilan membaca dan menyimak Bahasa Arab.</p>
      <div className="city-stat-grid">
        <article><span className="stat-icon mint"><Zap size={19}/></span><small>Total XP</small><strong>{xp}</strong><p>Poin pengalaman</p></article>
        <article><span className="stat-icon pink"><CheckCircle2 size={19}/></span><small>Materi tuntas</small><strong>{completedIds.length}<i> / {lessons.length}</i></strong><p>Lokasi yang dipelajari</p></article>
        <article><span className="stat-icon gold"><Award size={19}/></span><small>Penyelesaian</small><strong>{progress}%</strong><p>Progres keseluruhan</p></article>
      </div>
      <section className="city-progress-panel"><div><span className="section-tag">LEARNING JOURNEY</span><h2>Perjalanan pembelajaran</h2></div><strong>{progress}%</strong><div className="city-progress-track"><i style={{ width: `${progress}%` }}/></div><p>{completedIds.length ? `Kamu telah menuntaskan ${completedIds.length} dari ${lessons.length} materi.` : 'Belum ada materi yang dituntaskan. Pilih kawasan dan mulai petualangan pertamamu.'}</p></section>
      <section className="city-completed-section"><div className="city-section-heading"><div><span className="section-tag">MATERI SELESAI</span><h2>Daftar pembelajaran</h2></div></div>{completedLessons.length ? <div className="city-completed-list">{completedLessons.map((lesson) => <button key={lesson.id} onClick={() => onSelect(lesson)} type="button"><CheckCircle2 size={18}/><span><strong>{lesson.name}</strong><small dir="rtl">{lesson.arabicName}</small></span><ChevronRight size={16}/></button>)}</div> : <div className="city-empty-progress"><Trophy size={26}/><strong>Perjalananmu dimulai di sini</strong><p>Selesaikan tiga tahap evaluasi untuk menuntaskan satu materi.</p></div>}</section>
    </section>
  )
}

export default App
