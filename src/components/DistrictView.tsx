import { motion } from 'framer-motion'
import { ArrowLeft, ArrowUpRight, BookMarked, BookOpen, CheckCircle2, MapPin } from 'lucide-react'
import type { CityArea, CityDistrict } from '../data/cityData'
import type { Lesson } from '../types'

interface DistrictViewProps {
  district: CityDistrict
  lessons: Lesson[]
  completedIds: string[]
  onBack: () => void
  onSelectArea: (area: CityArea) => void
}

function AreaArtwork({ kind, tint, className = '' }: { kind: CityArea['icon']; tint: string; className?: string }) {
  const art = (() => {
    switch (kind) {
      case 'school': return <g stroke="#8c6856" strokeWidth="2.2" strokeLinejoin="round"><path d="M18 43 60 14 102 43v43H18Z" fill="#cf7771"/><path d="m12 44 48-36 48 36" fill="none" stroke="#a95150" strokeWidth="8"/><rect x="28" y="49" width="64" height="37" fill="#f8e4c7"/><rect x="51" y="63" width="18" height="23" fill="#98725d"/><path d="M34 54h12v12H34zm36 0h12v12H70z" fill="#b9dfe4" stroke="#fff" strokeWidth="3"/><path d="M60 8V0m0 0 13 4-13 4" fill="none" stroke="#d88ea8" strokeWidth="2"/></g>
      case 'classroom': return <g stroke="#7e8d73" strokeWidth="2" strokeLinejoin="round"><rect x="20" y="17" width="80" height="53" rx="3" fill="#fff1d9"/><rect x="30" y="25" width="60" height="27" rx="2" fill="#67927a"/><path d="M35 31h50m-50 7h38" stroke="#f7f2df" strokeWidth="2"/><path d="M23 73h74M32 73v12m56-12v12" stroke="#9a795c" strokeWidth="4"/><path d="M37 61h17v9H37zm34 0h17v9H71z" fill="#d9a16c"/><path d="M45 70v10m0-10 10 10m27-10v10m0-10-10 10" stroke="#8d6b52" strokeWidth="2"/></g>
      case 'canteen': return <g stroke="#8d715b" strokeWidth="2" strokeLinejoin="round"><rect x="18" y="39" width="84" height="47" fill="#fff1d9"/><path d="M13 39 25 17h70l12 22Z" fill="#fff"/><path d="M25 17h14l-3 22H13zm28 0h14l-2 22H39zm28 0h14l3 22H67z" fill="#dc8791"/><rect x="27" y="48" width="66" height="24" fill="#c6dfd0"/><path d="M25 76h70" stroke="#a7795b" strokeWidth="5"/><circle cx="40" cy="59" r="5" fill="#e9ad58" stroke="none"/><circle cx="55" cy="59" r="5" fill="#8ebd78" stroke="none"/><circle cx="70" cy="59" r="5" fill="#dc8791" stroke="none"/></g>
      case 'library': return <g stroke="#8c735c" strokeWidth="2" strokeLinejoin="round"><rect x="19" y="15" width="82" height="72" rx="3" fill="#f7e8cf"/><rect x="27" y="23" width="66" height="57" fill="#b9d4c2"/><path d="M27 43h66M27 62h66" stroke="#8b7057" strokeWidth="4"/><path d="M33 26v15m12-15v15m14-15v15m12-15v15m13-15v15M35 46v14m14-14v14m14-14v14m14-14v14" stroke="#d17f83" strokeWidth="7"/><path d="M27 83h66" stroke="#8b7057" strokeWidth="5"/></g>
      case 'mosque': return <g stroke="#8b795f" strokeWidth="2" strokeLinejoin="round"><rect x="27" y="49" width="66" height="38" fill="#f7e8c8"/><path d="M22 50q38-36 76 0Z" fill="#86b89a"/><path d="M42 50q18-30 36 0" fill="#d9a4b4"/><rect x="13" y="24" width="13" height="63" fill="#f4e4c6"/><path d="M12 25 19.5 9 27 25Z" fill="#d69a79"/><path d="M94 49v-29h9v29" fill="#f4e4c6"/><path d="M93 20 98.5 7 104 20Z" fill="#d69a79"/><path d="M53 87V68q7-13 14 0v19" fill="#8fbac0"/></g>
      case 'playground': return <g stroke="#8b745b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M27 23v54m48-54v54M27 24h48" fill="none"/><path d="M36 24v27m30-27v27" stroke="#d28b80"/><path d="M32 51h9l-4 13h-9zm30 0h9l-4 13h-9z" fill="#f3c46e"/><path d="M78 76 91 42l13 34m-20-14h14" fill="none"/><circle cx="92" cy="35" r="7" fill="#9bc97e"/></g>
      case 'airport': return <g stroke="#718b96" strokeWidth="2" strokeLinejoin="round"><path d="M12 48h96v39H12Z" fill="#d7edf0"/><path d="M9 48 22 26h76l13 22Z" fill="#83aec7"/><rect x="22" y="55" width="76" height="23" fill="#a6d1d7"/><path d="M31 55v23m18-23v23m18-23v23m18-23v23" stroke="#fff" strokeWidth="3"/><path d="M58 20q17-10 31-1l-13 5-4 12-4-1 1-10-11-2Z" fill="#fff"/><path d="M58 20 48 17 56 25" fill="#fff"/></g>
      case 'train': return <g stroke="#6e7e7b" strokeWidth="2.2" strokeLinejoin="round"><path d="M14 75h94" stroke="#8d765e" strokeWidth="5"/><path d="M23 83h77M30 78v9m18-9v9m18-9v9m18-9v9" stroke="#8d765e"/><rect x="22" y="29" width="78" height="45" rx="8" fill="#80b4c7"/><path d="M30 38h62v19H30Z" fill="#d8edf0"/><path d="M45 38v19m20-19v19m20-19v19" stroke="#fff" strokeWidth="2"/><path d="M32 64h56" stroke="#fff" strokeWidth="3"/><circle cx="40" cy="75" r="5" fill="#59635f"/><circle cx="83" cy="75" r="5" fill="#59635f"/></g>
      case 'bus': return <g stroke="#7b745f" strokeWidth="2.2" strokeLinejoin="round"><path d="M17 47 28 27h65l12 20v29H17Z" fill="#e7b65f"/><rect x="27" y="34" width="67" height="21" rx="3" fill="#c8e6e7"/><path d="M49 34v21m22-21v21" stroke="#fff" strokeWidth="2"/><rect x="27" y="59" width="66" height="12" fill="#f6e8c8"/><circle cx="35" cy="77" r="7" fill="#555d59"/><circle cx="86" cy="77" r="7" fill="#555d59"/></g>
      case 'hospital': return <g stroke="#8c7770" strokeWidth="2.2" strokeLinejoin="round"><rect x="24" y="26" width="72" height="61" fill="#fff4e8"/><rect x="42" y="15" width="36" height="18" rx="3" fill="#f4dce3"/><path d="M60 18v12m-6-6h12" stroke="#d77991" strokeWidth="5" strokeLinecap="round"/><rect x="34" y="41" width="14" height="13" fill="#b9e0e5" stroke="#fff" strokeWidth="3"/><rect x="72" y="41" width="14" height="13" fill="#b9e0e5" stroke="#fff" strokeWidth="3"/><path d="M51 87V62h18v25" fill="#a17c65"/></g>
      case 'pharmacy': return <g stroke="#7f8d72" strokeWidth="2" strokeLinejoin="round"><rect x="19" y="36" width="82" height="51" fill="#fff2df"/><path d="M16 36h88l-8-18H24Z" fill="#8dbd91"/><rect x="43" y="45" width="34" height="27" rx="3" fill="#fff"/><path d="M60 49v19m-9-9h18" stroke="#6eaa7b" strokeWidth="5" strokeLinecap="round"/><rect x="30" y="74" width="60" height="13" fill="#c7e0d2"/></g>
      case 'clinic': return <g stroke="#8a796c" strokeWidth="2" strokeLinejoin="round"><path d="M24 39 60 17l36 22v48H24Z" fill="#f7e6d4"/><path d="M18 40 60 12l42 28" fill="none" stroke="#d58e94" strokeWidth="7"/><rect x="47" y="53" width="26" height="34" fill="#9d7b65"/><path d="M60 30v15m-8-7h16" stroke="#d67f8f" strokeWidth="4"/></g>
      case 'house': return <g stroke="#866f5c" strokeWidth="2.2" strokeLinejoin="round"><path d="M20 48 60 15l40 33v39H20Z" fill="#f5e2c5"/><path d="M14 49 60 10l46 39" fill="none" stroke="#d18c78" strokeWidth="8"/><rect x="51" y="58" width="18" height="29" fill="#96715c"/><rect x="29" y="53" width="14" height="15" fill="#b9e0e5" stroke="#fff" strokeWidth="3"/><rect x="77" y="53" width="14" height="15" fill="#b9e0e5" stroke="#fff" strokeWidth="3"/></g>
      case 'living': return <g stroke="#8b735f" strokeWidth="2" strokeLinejoin="round"><path d="M25 50q0-8 8-8h54q8 0 8 8v25H25Z" fill="#d99caf"/><rect x="19" y="58" width="12" height="21" rx="4" fill="#e8b6c5"/><rect x="89" y="58" width="12" height="21" rx="4" fill="#e8b6c5"/><path d="M31 75v10m58-10v10" strokeWidth="4"/><path d="M44 35h32v10H44z" fill="#f4d9a6"/><path d="M60 35V22" stroke="#9e805f"/><circle cx="60" cy="19" r="6" fill="#8fbb7e"/></g>
      case 'kitchen': return <g stroke="#8b7765" strokeWidth="2" strokeLinejoin="round"><rect x="19" y="41" width="82" height="44" fill="#f5e7d1"/><path d="M16 42h88" stroke="#9b7a5d" strokeWidth="5"/><rect x="27" y="49" width="28" height="29" fill="#b9dfe3"/><rect x="65" y="50" width="27" height="13" fill="#d5a36f"/><circle cx="73" cy="69" r="4" fill="#8c9d8d"/><circle cx="84" cy="69" r="4" fill="#8c9d8d"/><path d="M32 30q7-10 14 0" fill="none" stroke="#d18b7b" strokeWidth="3"/></g>
      case 'bedroom': return <g stroke="#7C3AED" strokeWidth="2.2" strokeLinejoin="round"><rect x="18" y="55" width="84" height="27" rx="5" fill="#fff"/><rect x="24" y="43" width="31" height="17" rx="5" fill="#A78BFA"/><path d="M18 58V85m84-27V85M28 82v7m64-7v7" stroke="#6D28D9" strokeWidth="4"/><rect x="77" y="25" width="18" height="17" rx="2" fill="#FDE68A"/><path d="M86 25V16m-8 26h16" stroke="#D97706" strokeWidth="3"/></g>
      case 'bathroom': return <g stroke="#0369A1" strokeWidth="2.2" strokeLinejoin="round"><path d="M20 52h80v20q0 12-12 12H32Q20 84 20 72Z" fill="#fff"/><path d="M28 52V31q0-10 10-10h7" fill="none" stroke="#0284C7" strokeWidth="4"/><circle cx="45" cy="21" r="4" fill="#38BDF8"/><path d="M53 55v-8m9 8v-8m9 8v-8" stroke="#38BDF8" strokeWidth="3"/><rect x="73" y="20" width="20" height="22" rx="3" fill="#fff"/><circle cx="83" cy="31" r="6" fill="#BAE6FD"/></g>
      case 'dining': return <g stroke="#92400E" strokeWidth="2.2" strokeLinejoin="round"><path d="M23 48h74v10H23Z" fill="#F59E0B"/><path d="M30 58v29m60-29v29" stroke="#92400E" strokeWidth="5"/><rect x="34" y="27" width="52" height="18" rx="5" fill="#fff"/><path d="M45 28v-8m30 8v-8" stroke="#92400E" strokeWidth="2"/><circle cx="60" cy="36" r="6" fill="#86EFAC"/><path d="M15 55v21m-4-21h8m85 0v21m-4-21h8" stroke="#92400E" strokeWidth="3"/></g>
      case 'study': return <g stroke="#5B21B6" strokeWidth="2.2" strokeLinejoin="round"><rect x="18" y="51" width="84" height="10" rx="2" fill="#8B5CF6"/><path d="M27 61v25m66-25v25" stroke="#5B21B6" strokeWidth="4"/><rect x="32" y="25" width="39" height="25" rx="3" fill="#1D4ED8"/><rect x="36" y="29" width="31" height="17" fill="#BFDBFE"/><path d="M47 50h10m-5 0v5" stroke="#5B21B6" strokeWidth="3"/><rect x="77" y="35" width="17" height="15" rx="2" fill="#FDE68A"/><path d="M80 39h11m-11 5h8" stroke="#92400E" strokeWidth="1.5"/></g>
      case 'garage': return <g stroke="#334155" strokeWidth="2.2" strokeLinejoin="round"><path d="M15 42 60 13l45 29v45H15Z" fill="#94A3B8"/><path d="M24 48h72v38H24Z" fill="#E2E8F0"/><path d="M29 55h62m-62 8h62m-62 8h62m-62 8h62" stroke="#64748B" strokeWidth="2"/><rect x="43" y="68" width="35" height="14" rx="5" fill="#2563EB"/><circle cx="51" cy="83" r="4" fill="#1E293B"/><circle cx="70" cy="83" r="4" fill="#1E293B"/></g>
      case 'garden': return <g stroke="#166534" strokeWidth="2" strokeLinejoin="round"><path d="M8 84q24-22 52-7 27-20 52 7Z" fill="#4ADE80"/><path d="M59 54V31" stroke="#854D0E" strokeWidth="6"/><circle cx="60" cy="25" r="18" fill="#22C55E"/><circle cx="46" cy="37" r="12" fill="#16A34A"/><circle cx="74" cy="37" r="12" fill="#86EFAC"/><circle cx="23" cy="72" r="5" fill="#F43F5E"/><circle cx="35" cy="78" r="5" fill="#FACC15"/><circle cx="92" cy="73" r="5" fill="#A855F7"/></g>
      case 'laundry': return <g stroke="#0E7490" strokeWidth="2.2" strokeLinejoin="round"><rect x="22" y="26" width="45" height="61" rx="5" fill="#fff"/><rect x="28" y="32" width="33" height="8" rx="2" fill="#67E8F9"/><circle cx="44" cy="62" r="15" fill="#CFFAFE"/><circle cx="44" cy="62" r="10" fill="none" stroke="#0891B2" strokeWidth="3"/><path d="M75 28h28m-26 0 8 17m10-17-8 17" stroke="#0E7490" strokeWidth="2.5"/><path d="M76 46q8-8 16 0t16 0" fill="none" stroke="#F43F5E" strokeWidth="4"/></g>
      case 'balcony': return <g stroke="#0F766E" strokeWidth="2.2" strokeLinejoin="round"><rect x="15" y="26" width="90" height="58" rx="3" fill="#CCFBF1"/><path d="M15 57h90M25 57v27m17-27v27m17-27v27m17-27v27m17-27v27" stroke="#0F766E" strokeWidth="3"/><path d="M30 54V34h20v20" fill="#FDE68A"/><path d="M79 55V35m-8 9q8-16 16 0" stroke="#16A34A" strokeWidth="4"/><circle cx="87" cy="31" r="7" fill="#FACC15"/></g>
      case 'hallway': return <g stroke="#6B21A8" strokeWidth="2.2" strokeLinejoin="round"><path d="M23 18h74v70H23Z" fill="#F3E8FF"/><rect x="37" y="30" width="25" height="34" rx="2" fill="#fff"/><path d="M41 35h17m-17 7h17m-17 7h12" stroke="#A855F7"/><rect x="72" y="35" width="17" height="53" fill="#C084FC"/><circle cx="84" cy="61" r="2" fill="#581C87"/><path d="M30 76h34" stroke="#D97706" strokeWidth="5"/></g>
      case 'taxi': return <g stroke="#1E3A8A" strokeWidth="2.2" strokeLinejoin="round"><rect x="14" y="48" width="92" height="28" rx="8" fill="#FACC15"/><path d="M32 48 43 31h34l14 17Z" fill="#FDE68A"/><path d="M47 34h27l9 13H39Z" fill="#BFDBFE"/><circle cx="35" cy="78" r="8" fill="#1E293B"/><circle cx="85" cy="78" r="8" fill="#1E293B"/><rect x="48" y="22" width="25" height="9" rx="3" fill="#fff"/><text x="60" y="29" textAnchor="middle" fontSize="6" fill="#1E40AF" stroke="none" fontWeight="800">TAXI</text></g>
      case 'busstop': return <g stroke="#0F766E" strokeWidth="2.2" strokeLinejoin="round"><path d="M15 38h90v47H15Z" fill="#CCFBF1"/><path d="M20 38V20h80v18" fill="#14B8A6"/><path d="M28 47h64v28H28Z" fill="#fff"/><path d="M60 47v28" stroke="#0F766E"/><rect x="35" y="54" width="18" height="15" fill="#7DD3FC"/><rect x="67" y="54" width="18" height="15" fill="#7DD3FC"/><path d="M15 85h90" stroke="#0F766E" strokeWidth="4"/></g>
      case 'port': return <g stroke="#075985" strokeWidth="2.2" strokeLinejoin="round"><path d="M10 75q25-12 50 0t50 0v13H10Z" fill="#38BDF8"/><path d="M26 54h67l-10 22H38Z" fill="#fff"/><rect x="46" y="33" width="27" height="20" fill="#FDE68A"/><path d="M59 33V17m0 0h22v10H59" stroke="#075985" strokeWidth="3"/><path d="M18 53V28h9v25m65 0V22h9v31" stroke="#075985" strokeWidth="4"/></g>
      case 'parking': return <g stroke="#334155" strokeWidth="2.2" strokeLinejoin="round"><rect x="14" y="23" width="92" height="63" rx="5" fill="#E2E8F0"/><path d="M25 76V46h18v30m34 0V46h18v30" fill="#BFDBFE"/><path d="M60 28v21" stroke="#2563EB" strokeWidth="4"/><circle cx="60" cy="20" r="12" fill="#2563EB"/><text x="60" y="25" textAnchor="middle" fontSize="14" fill="#fff" stroke="none" fontWeight="800">P</text></g>
      case 'fuel': return <g stroke="#92400E" strokeWidth="2.2" strokeLinejoin="round"><rect x="30" y="25" width="43" height="62" rx="4" fill="#fff"/><rect x="37" y="32" width="29" height="19" fill="#FDE68A"/><rect x="39" y="57" width="25" height="22" fill="#F59E0B"/><path d="M73 39h10q7 0 7 8v23q0 6 7 6" fill="none" stroke="#92400E" strokeWidth="3"/><path d="M46 25V16h12v9" fill="#F59E0B"/></g>
      case 'bridge': return <g stroke="#9A3412" strokeWidth="2.2" strokeLinejoin="round"><path d="M8 77q52-40 104 0v10H8Z" fill="#FDBA74"/><path d="M14 77q46-32 92 0" fill="none" stroke="#C2410C" strokeWidth="5"/><path d="M23 55v23m74-23v23M23 55h74" stroke="#9A3412" strokeWidth="4"/><path d="M0 88h120" stroke="#38BDF8" strokeWidth="5"/></g>
      case 'workshop': return <g stroke="#7C2D12" strokeWidth="2.2" strokeLinejoin="round"><path d="M16 43 60 15l44 28v43H16Z" fill="#FED7AA"/><path d="M22 46h76v40H22Z" fill="#fff"/><rect x="32" y="59" width="55" height="17" rx="5" fill="#EA580C"/><circle cx="43" cy="78" r="5" fill="#334155"/><circle cx="77" cy="78" r="5" fill="#334155"/><path d="m82 28 9 9m-12-1 7-7" stroke="#7C2D12" strokeWidth="4"/></g>
      case 'bicycle': return <g stroke="#3F6212" strokeWidth="3" strokeLinejoin="round" fill="none"><circle cx="31" cy="69" r="17"/><circle cx="89" cy="69" r="17"/><path d="M31 69 47 42h17l25 27H58L47 42m17 0 9-8m-15 8h18" stroke="#65A30D" strokeWidth="3"/><circle cx="47" cy="42" r="3" fill="#65A30D"/></g>
      case 'market': return <g stroke="#8a705a" strokeWidth="2" strokeLinejoin="round"><path d="M18 39h84v48H18Z" fill="#f7e9cf"/><path d="M14 39 24 18h72l10 21Z" fill="#fff"/><path d="M24 18h14l-3 21H14zm28 0h14l2 21H38zm28 0h14l6 21H66z" fill="#d9828a"/><path d="M28 52h64v25H28Z" fill="#c9e1cb"/><circle cx="40" cy="59" r="6" fill="#e4a75c"/><circle cx="56" cy="59" r="6" fill="#8fbd7b"/><circle cx="73" cy="59" r="6" fill="#d77f8b"/></g>
      case 'supermarket': return <g stroke="#887361" strokeWidth="2" strokeLinejoin="round"><rect x="14" y="35" width="92" height="52" fill="#f8ead1"/><path d="M10 35 23 14h74l13 21Z" fill="#fff"/><path d="M23 14h15l-3 21H10zm30 0h15l3 21H38zm30 0h15l9 21H68z" fill="#e0a0ad"/><rect x="27" y="46" width="66" height="26" fill="#c6e2d4"/><path d="M35 49v20m18-20v20m18-20v20" stroke="#fff" strokeWidth="3"/><rect x="48" y="73" width="25" height="14" fill="#a27a60"/></g>
      case 'restaurant': return <g stroke="#8b705c" strokeWidth="2" strokeLinejoin="round"><path d="M18 42h84v45H18Z" fill="#fff0d9"/><path d="M13 42 24 18h72l11 24Z" fill="#fff"/><path d="M24 18h14l-3 24H13zm28 0h14l2 24H39zm28 0h14l9 24H67z" fill="#d77f83"/><rect x="32" y="53" width="56" height="23" fill="#b7d8d0"/><path d="M44 87v-9m32 9v-9" stroke="#98765e" strokeWidth="4"/></g>
      case 'park': return <g stroke="#7b9b70" strokeWidth="2.2" strokeLinejoin="round"><path d="M12 83q20-28 44-8 26-23 52 8Z" fill="#9fca83"/><path d="M29 62V38m63 24V32" stroke="#8b7056" strokeWidth="5"/><circle cx="29" cy="30" r="18" fill="#8fbd7c"/><circle cx="92" cy="24" r="22" fill="#acd18b"/><path d="M44 73h34m-28-8v14m22-14v14" stroke="#98775c" strokeWidth="4"/></g>
      case 'cinema': return <g stroke="#7e6e6e" strokeWidth="2" strokeLinejoin="round"><rect x="19" y="25" width="82" height="62" fill="#e6d8f0"/><path d="M19 25h82v17H19Z" fill="#d58aa7"/><path d="M26 30h8m9 0h8m9 0h8m9 0h8m9 0h8" stroke="#fff5d9" strokeWidth="4"/><rect x="32" y="49" width="56" height="25" fill="#6e83a4"/><path d="M60 49v25" stroke="#fff" strokeWidth="2"/><path d="M49 87V75h22v12" fill="#9a7965"/></g>
      case 'beach': return <g stroke="#8d9b89" strokeWidth="2" strokeLinejoin="round"><path d="M8 66q17-10 34 0t34 0 34 0v22H8Z" fill="#8fc7d0"/><path d="M8 78q17-10 34 0t34 0 34 0" fill="none" stroke="#fff" strokeWidth="3"/><path d="M60 22v51" stroke="#94785c" strokeWidth="3"/><path d="M60 22q-28 1-29 20h29Z" fill="#d98da0"/><path d="M60 22q28 1 29 20H60Z" fill="#f2cf86"/><circle cx="93" cy="18" r="9" fill="#f2cf86" stroke="none"/></g>
      default: return <g stroke="#8a715d" strokeWidth="2"><rect x="20" y="34" width="80" height="53" fill="#f5e5ca"/><path d="M15 35 60 10l45 25" fill="none" stroke="#d58d87" strokeWidth="7"/></g>
    }
  })()

  return (
    <svg className={`area-artwork ${className}`} viewBox="0 0 120 100" role="img" aria-label={`Ilustrasi ${kind}`}>
      <rect width="120" height="100" fill={tint}/>
      <circle cx="99" cy="17" r="11" fill="#fff" opacity=".52"/>
      <path d="M0 83q27-13 55-4t65-1v22H0Z" fill="#8dbb83" opacity=".35"/>
      <path d="M0 90h120" stroke="#fff" strokeWidth="3" opacity=".65"/>
      {art}
      <circle cx="12" cy="15" r="2" fill="#fff" opacity=".8"/><circle cx="109" cy="48" r="2" fill="#fff" opacity=".8"/>
    </svg>
  )
}

function DistrictIllustration({ district }: { district: CityDistrict }) {
  const firstArea = district.areas[0]
  return (
    <div className={`district-illustration district-illustration-${district.id}`} aria-hidden="true">
      <div className="district-scene-sky" />
      <div className="district-scene-cloud cloud-a" />
      <div className="district-scene-cloud cloud-b" />
      <div className="district-scene-hill hill-a" />
      <div className="district-scene-hill hill-b" />
      {firstArea && <AreaArtwork kind={firstArea.icon} tint={firstArea.tint} className="district-scene-art" />}
      <div className="district-scene-path" />
      <span className="district-scene-tree tree-one" />
      <span className="district-scene-tree tree-two" />
    </div>
  )
}

export default function DistrictView({ district, lessons, completedIds, onBack, onSelectArea }: DistrictViewProps) {
  const availableCount = district.areas.filter((area) => lessons.some((lesson) => lesson.id === area.lessonId)).length
  return (
    <motion.section className="district-page" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .28, ease: 'easeOut' }}>
      <div className="district-breadcrumb">
        <button type="button" onClick={onBack}><ArrowLeft size={16}/> Kembali ke peta kota</button>
        <span>/</span><strong>{district.name}</strong>
      </div>
      <div className="district-hero">
        <div className="district-hero-copy">
          <span className="section-tag">{district.category.toUpperCase()}</span>
          <h1>{district.name}</h1>
          <h2 dir="rtl" lang="ar">{district.arabicName}</h2>
          <p>{district.description}</p>
          <div className="district-hero-meta"><span><MapPin size={14}/> {district.areas.length} area belajar</span><span><BookOpen size={14}/> {availableCount} materi tersedia</span></div>
        </div>
        <DistrictIllustration district={district}/>
      </div>
      <div className="district-section-heading">
        <div><span className="section-tag">PILIH TEMPAT BELAJAR</span><h2>Jelajahi bagian di dalam kawasan</h2><p>Setiap tempat memiliki bacaan, audio, kosakata, dan tantangan tersendiri.</p></div>
        <span className="district-count">{district.areas.length} tempat</span>
      </div>
      <div className="area-grid">
        {district.areas.map((area, index) => {
          const lesson = lessons.find((item) => item.id === area.lessonId)
          const completed = completedIds.includes(area.lessonId)
          return (
            <motion.button
              className={`area-card ${!lesson ? 'area-card-disabled' : ''}`}
              key={area.id}
              type="button"
              disabled={!lesson}
              onClick={() => onSelectArea(area)}
              whileHover={lesson ? { y: -4 } : undefined}
              whileTap={lesson ? { scale: .985 } : undefined}
              transition={{ duration: .16 }}
            >
              <div className="area-card-art" style={{ background: area.tint }}>
                <AreaArtwork kind={area.icon} tint={area.tint}/>
                <span className="area-card-number">{String(index + 1).padStart(2, '0')}</span>
                {completed && <span className="area-art-complete"><CheckCircle2 size={14}/> Tuntas</span>}
              </div>
              <div className="area-card-copy">
                <div className="area-card-title-row"><strong>{area.name}</strong>{completed && <span className="area-complete">Selesai</span>}</div>
                <span className="area-arabic" dir="rtl" lang="ar">{area.arabicName}</span>
                <p>{area.description}</p>
                <div className="area-card-action">{lesson ? 'Masuk dan belajar' : 'Materi disiapkan'} <ArrowUpRight size={15}/></div>
              </div>
            </motion.button>
          )
        })}
      </div>
      <div className="district-note"><BookMarked size={17}/><span>Pilih satu tempat untuk mulai membaca, menyimak, dan mengerjakan evaluasi Bahasa Arab.</span></div>
    </motion.section>
  )
}
