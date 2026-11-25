import { useMemo, useState } from 'react'
import { BookOpen, Search, X, ChevronDown } from 'lucide-react'
import { mufradat } from '../data/mufradat'

type KindFilter = 'all' | 'isim' | 'fiil'

const normalizeSearch = (value: string) => value.toLocaleLowerCase().normalize('NFD').replace(/[\u064B-\u065F\u0670\u0640\u0300-\u036F]/g, '').normalize('NFC')

export default function MufradatView() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('Semua')
  const [kind, setKind] = useState<KindFilter>('all')
  const [visibleCount, setVisibleCount] = useState(48)

  const categories = useMemo(() => ['Semua', ...Array.from(new Set(mufradat.map((item) => item.category)))], [])
  const filtered = useMemo(() => {
    const term = normalizeSearch(query.trim())
    return mufradat.filter((item) => {
      const categoryMatch = category === 'Semua' || item.category === category
      const kindMatch = kind === 'all' || item.kind === kind
      const searchText = normalizeSearch([item.arabic, item.meaning, item.english, item.madhi, item.mudhari, item.amr].filter(Boolean).join(' '))
      return categoryMatch && kindMatch && (!term || searchText.includes(term))
    })
  }, [category, kind, query])

  const shown = filtered.slice(0, visibleCount)
  const nounCount = mufradat.filter((item) => item.kind === 'isim' && item.source === 'Kamus').length
  const verbCount = mufradat.filter((item) => item.kind === 'fiil' && item.source === 'Kamus').length
  const enrichmentCount = mufradat.filter((item) => item.source === 'Pengayaan lokasi').length

  const chooseCategory = (value: string) => {
    setCategory(value)
    setVisibleCount(48)
  }

  const chooseKind = (value: KindFilter) => {
    setKind(value)
    setVisibleCount(48)
  }

  return (
    <section className="mufradat-page">
      <div className="mufradat-hero">
        <div>
          <span className="section-tag">PUSAT KOSAKATA</span>
          <h1>Kamus Mufradat</h1>
          <p>Jelajahi kosakata berdasarkan tema. Cari kata Arab, arti Indonesia, atau bentuk kata kerja yang ingin dipelajari.</p>
        </div>
        <div className="mufradat-hero-icon"><BookOpen size={34}/><span>مُفْرَدَاتٌ</span></div>
      </div>

      <div className="mufradat-stats">
        <article><strong>{mufradat.length.toLocaleString('id-ID')}</strong><span>Total kosakata</span></article>
        <article><strong>{nounCount.toLocaleString('id-ID')}</strong><span>Isim dari kamus</span></article>
        <article><strong>{verbCount.toLocaleString('id-ID')}</strong><span>Fi'il dari kamus</span></article>
        <article><strong>{enrichmentCount.toLocaleString('id-ID')}</strong><span>Pengayaan lokasi</span></article>
      </div>

      <div className="mufradat-controls">
        <label className="mufradat-search"><Search size={18}/><input value={query} onChange={(event) => { setQuery(event.target.value); setVisibleCount(48) }} placeholder="Cari kata Arab atau arti Indonesia..."/><button type="button" onClick={() => { setQuery(''); setVisibleCount(48) }} aria-label="Hapus pencarian" disabled={!query}><X size={16}/></button></label>
        <div className="mufradat-kind-filter" aria-label="Filter jenis kata">
          <button type="button" className={kind === 'all' ? 'selected' : ''} onClick={() => chooseKind('all')}>Semua</button>
          <button type="button" className={kind === 'isim' ? 'selected' : ''} onClick={() => chooseKind('isim')}>Isim</button>
          <button type="button" className={kind === 'fiil' ? 'selected' : ''} onClick={() => chooseKind('fiil')}>Fi'il</button>
        </div>
      </div>

      <div className="mufradat-category-label"><strong>Kelompok kosakata</strong><span>{filtered.length.toLocaleString('id-ID')} hasil ditemukan</span></div>
      <div className="mufradat-category-list">
        {categories.map((item) => {
          const count = item === 'Semua' ? mufradat.length : mufradat.filter((entry) => entry.category === item).length
          return <button type="button" key={item} className={category === item ? 'selected' : ''} onClick={() => chooseCategory(item)}>{item}<small>{count}</small></button>
        })}
      </div>

      {shown.length ? <div className="mufradat-grid">
        {shown.map((item) => (
          <article className={`mufradat-card ${item.kind === 'fiil' ? 'verb-card' : ''}`} key={item.id}>
            <div className="mufradat-card-top"><span className={`mufradat-kind ${item.kind}`}>{item.kind === 'isim' ? 'ISIM' : "FI'IL"}</span><span className="mufradat-source">{item.source === 'Kamus' ? `Hlm. ${item.page}` : 'Pengayaan'}</span></div>
            {item.kind === 'fiil' ? <>
              <div className="mufradat-arabic verb-main" dir="rtl" lang="ar">{item.madhi || item.arabic}</div>
              <div className="mufradat-meaning">{item.meaning}</div>
              <div className="verb-forms" dir="rtl" lang="ar">
                <span><small>مَاضٍ</small><strong>{item.madhi || '—'}</strong></span>
                <span><small>مُضَارِعٌ</small><strong>{item.mudhari || '—'}</strong></span>
                <span><small>أَمْرٌ</small><strong>{item.amr || '—'}</strong></span>
              </div>
            </> : <>
              <div className="mufradat-arabic" dir="rtl" lang="ar">{item.arabic}</div>
              <div className="mufradat-meaning">{item.meaning}</div>
            </>}
            <div className="mufradat-card-category">{item.category}</div>
          </article>
        ))}
      </div> : <div className="mufradat-empty"><Search size={26}/><strong>Kosakata tidak ditemukan</strong><p>Coba kata kunci atau kelompok tema yang berbeda.</p></div>}

      {filtered.length > shown.length && <button className="mufradat-load-more" type="button" onClick={() => setVisibleCount((count) => count + 48)}>Tampilkan {Math.min(48, filtered.length - shown.length)} kosakata berikutnya <ChevronDown size={17}/></button>}
      <p className="mufradat-source-note">Sumber utama: <strong>Kamus Bahasa Arab untuk Pemula</strong>, halaman 5–46. Kosakata rumah dan fasilitas transportasi tambahan ditandai sebagai pengayaan lokasi. Beberapa padanan terjemahan dirapikan agar konsisten untuk pembelajaran.</p>
    </section>
  )
}
