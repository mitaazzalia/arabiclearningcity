import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, MapPin } from 'lucide-react'
import type { CSSProperties } from 'react'
import type { DistrictId } from '../data/cityData'

interface CityMapProps {
  onSelectDistrict: (districtId: DistrictId) => void
}

interface BuildingProps {
  x: number
  y: number
  label: string
  arabic: string
  districtId: DistrictId
  variant: 'school' | 'transport' | 'hospital' | 'home' | 'market' | 'park'
  onSelect: (districtId: DistrictId, point: { x: number; y: number }) => void
}

function Building({ x, y, label, arabic, districtId, variant, onSelect }: BuildingProps) {
  const activate = () => onSelect(districtId, { x: x + 90, y: y + 88 })
  return (
    <g
      className={`city-building city-building-${variant}`}
      transform={`translate(${x} ${y})`}
      role="button"
      tabIndex={0}
      aria-label={`Masuk ke ${label}`}
      onClick={activate}
      onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); activate() } }}
    >
      <title>{label} — {arabic}</title>
      <ellipse cx="90" cy="163" rx="91" ry="12" fill="#597b5b" opacity=".15" />
      {variant === 'school' && (
        <g stroke="#765a50" strokeLinejoin="round" strokeWidth="2.5">
          <path d="M18 68 L90 22 L162 68 V143 H18Z" fill="#c75d59" />
          <path d="M10 69 L90 13 L170 69 L160 76 L90 29 L20 76Z" fill="#a94346" />
          <path d="M28 75 H152 V143 H28Z" fill="#f6dfbd" />
          <path d="M40 82 H140 V136 H40Z" fill="#d77a6f" stroke="none" />
          {[0, 1, 2].map((row) => [0, 1, 2, 3].map((col) => <g key={`${row}-${col}`}><rect x={47 + col * 25} y={84 + row * 17} width="15" height="11" rx="1" fill="#c9e6e7" stroke="#fff8e8" strokeWidth="3"/><path d={`M${54.5 + col * 25} ${84 + row * 17}v11`} stroke="#fff" strokeWidth="1"/></g>))}
          <path d="M76 110 H104 V143 H76Z" fill="#946b54" />
          <circle cx="98" cy="127" r="2" fill="#f6d77e" stroke="none" />
          <path d="M14 145 H166" stroke="#f8f0dc" strokeWidth="7" />
          <path d="M90 13 V-4" stroke="#795b4c" strokeWidth="2" />
          <path d="M90 -4 L111 2 L90 9Z" fill="#e7a2b5" />
          <rect x="65" y="48" width="50" height="18" rx="4" fill="#fff8e8" />
          <text x="90" y="61" textAnchor="middle" fill="#8a5d4e" stroke="none" fontSize="10" fontWeight="800">SEKOLAH</text>
        </g>
      )}
      {variant === 'transport' && (
        <g stroke="#6a7774" strokeLinejoin="round" strokeWidth="2.5">
          <path d="M15 76 L30 43 H150 L165 76 V142 H15Z" fill="#d9edf0" />
          <path d="M8 76 H172 L158 57 H22Z" fill="#80a9c7" />
          <path d="M25 82 H155 V137 H25Z" fill="#a9d3d9" />
          <path d="M25 82 H155 V137 H25Z" fill="#e6f4ef" opacity=".45" />
          {[0, 1, 2, 3].map((i) => <rect key={i} x={34 + i * 31} y="88" width="23" height="42" rx="3" fill="#9bcbd5" stroke="#fff" strokeWidth="3"/>)}
          <path d="M75 108 H105 V142 H75Z" fill="#8d6d5a" />
          <circle cx="90" cy="35" r="16" fill="#fff7e7" />
          <circle cx="90" cy="35" r="11" fill="none" stroke="#7c9d9d" strokeWidth="2" />
          <path d="M90 26 V35 L98 39" stroke="#7c9d9d" strokeWidth="2" fill="none" />
          <rect x="47" y="53" width="86" height="17" rx="4" fill="#fffdf5" />
          <text x="90" y="65" textAnchor="middle" fill="#547d91" stroke="none" fontSize="9" fontWeight="800">TRANSPORTASI</text>
          <path d="M15 143 H165" stroke="#fff6e8" strokeWidth="6" />
        </g>
      )}
      {variant === 'hospital' && (
        <g stroke="#8b6e6c" strokeLinejoin="round" strokeWidth="2.5">
          <rect x="22" y="55" width="136" height="88" rx="4" fill="#fff5e8" />
          <rect x="33" y="42" width="114" height="101" rx="4" fill="#f5dce2" />
          <rect x="65" y="24" width="50" height="28" rx="4" fill="#fff5e8" />
          <path d="M90 29 V47 M81 38 H99" stroke="#d77f91" strokeWidth="7" strokeLinecap="round" />
          {[0, 1, 2].map((i) => <g key={i}><rect x={42 + i * 37} y="65" width="22" height="20" rx="2" fill="#b9dfe6" stroke="#fff" strokeWidth="3"/><rect x={42 + i * 37} y="97" width="22" height="20" rx="2" fill="#b9dfe6" stroke="#fff" strokeWidth="3"/></g>)}
          <path d="M78 112 H102 V143 H78Z" fill="#9b7665" />
          <rect x="56" y="130" width="68" height="15" rx="4" fill="#fffdf5" />
          <text x="90" y="141" textAnchor="middle" fill="#bd6d82" stroke="none" fontSize="9" fontWeight="800">RUMAH SAKIT</text>
        </g>
      )}
      {variant === 'home' && (
        <g stroke="#826c59" strokeLinejoin="round" strokeWidth="2.5">
          <path d="M18 83 L90 25 L162 83 V143 H18Z" fill="#f5e2c5" />
          <path d="M9 84 L90 18 L171 84 L160 94 L90 38 L20 94Z" fill="#d58d75" />
          <rect x="73" y="94" width="34" height="49" rx="2" fill="#96735d" />
          <rect x="33" y="89" width="27" height="28" rx="2" fill="#b9e0e4" stroke="#fff" strokeWidth="4" />
          <rect x="120" y="89" width="27" height="28" rx="2" fill="#b9e0e4" stroke="#fff" strokeWidth="4" />
          <path d="M46 89 V117 M33 103 H60 M133 89 V117 M120 103 H147" stroke="#fff" strokeWidth="2" />
          <path d="M72 143 H108" stroke="#fff8e9" strokeWidth="6" />
          <path d="M22 146 H158" stroke="#85b47d" strokeWidth="5" />
          <circle cx="31" cy="136" r="8" fill="#e8a6b7" stroke="none"/><circle cx="149" cy="136" r="8" fill="#e8a6b7" stroke="none"/>
        </g>
      )}
      {variant === 'market' && (
        <g stroke="#786b5d" strokeLinejoin="round" strokeWidth="2.5">
          <rect x="19" y="67" width="142" height="76" rx="3" fill="#fff4dc" />
          <path d="M12 67 L26 39 H154 L168 67Z" fill="#e8b66c" />
          <path d="M26 39 H154 L164 67 H16Z" fill="#fffdf5" />
          {Array.from({ length: 8 }, (_, i) => <path key={i} d={`M${26 + i * 17} 40 H${26 + i * 17 + 17} L${30 + i * 17 + 17} 67 H${16 + i * 17}Z`} fill={i % 2 ? '#fff8e9' : '#d9787c'} stroke="none"/>)}
          <path d="M34 81 H146 V131 H34Z" fill="#d8e9d8" stroke="none" />
          <rect x="73" y="93" width="34" height="50" fill="#8e705b" />
          <path d="M38 104 H67 M113 104 H142" stroke="#fff" strokeWidth="4" />
          <circle cx="47" cy="91" r="6" fill="#e7a35e" stroke="none"/><circle cx="60" cy="91" r="6" fill="#8dbb78" stroke="none"/><circle cx="131" cy="91" r="6" fill="#df899d" stroke="none"/>
          <rect x="52" y="22" width="76" height="18" rx="4" fill="#fffdf5" />
          <text x="90" y="35" textAnchor="middle" fill="#987044" stroke="none" fontSize="10" fontWeight="800">TOKO</text>
        </g>
      )}
      {variant === 'park' && (
        <g stroke="#73966d" strokeLinejoin="round" strokeWidth="2.5">
          <path d="M8 145 Q45 123 90 140 Q132 120 172 144Z" fill="#a9d18e" />
          <path d="M48 113 V74 L90 42 L132 74 V113Z" fill="#f7e7c7" stroke="#94785e" />
          <path d="M40 76 L90 32 L140 76" fill="none" stroke="#d28b83" strokeWidth="11" />
          <path d="M76 113 V87 Q90 70 104 87 V113" fill="#9bc6cb" stroke="#fff" strokeWidth="3" />
          <TreeShape x={22} y={98} /><TreeShape x={158} y={98} />
          <path d="M66 126 H114 M72 119 V133 M108 119 V133" stroke="#9b795e" strokeWidth="4" />
          <path d="M80 20 Q90 5 100 20" fill="none" stroke="#fff" strokeWidth="3" />
        </g>
      )}
      <rect x="1" y="166" width="178" height="34" rx="10" fill="#fffdf6" stroke="#dce5d6" strokeWidth="1.5" />
      <text x="90" y="180" textAnchor="middle" className="map-label-main">{label}</text>
      <text x="90" y="193" textAnchor="middle" className="map-label-arabic">{arabic}</text>
      <circle cx="166" cy="18" r="10" fill="#fff" stroke="#dce5d6" strokeWidth="1.5" />
      <path d="M162 18 H170 M166 14 V22" stroke="#6a9f75" strokeWidth="2" strokeLinecap="round" />
    </g>
  )
}

function TreeShape({ x, y }: { x: number; y: number }) {
  return <g transform={`translate(${x} ${y})`}><path d="M-3 5 L-5 38 H5 L3 5Z" fill="#987452" stroke="none"/><circle cx="0" cy="-3" r="19" fill="#22C55E"/><circle cx="-12" cy="7" r="12" fill="#16A34A"/><circle cx="12" cy="7" r="12" fill="#86EFAC"/></g>
}

function Tree({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <ellipse cx="0" cy="24" rx="21" ry="6" fill="#8aa985" opacity=".25" />
      <path d="M-2 8 L-4 30 H4 L2 8Z" fill="#9b7558" />
      <circle cx="-8" cy="0" r="13" fill="#91c17d" stroke="#77a96c" strokeWidth="1.5" />
      <circle cx="7" cy="-6" r="15" fill="#a9cf8b" stroke="#77a96c" strokeWidth="1.5" />
      <circle cx="11" cy="8" r="10" fill="#84b975" stroke="#77a96c" strokeWidth="1.5" />
      <circle cx="-12" cy="-3" r="2" fill="#f5d88c" />
      <circle cx="8" cy="-11" r="2" fill="#f5d88c" />
    </g>
  )
}

function Car({ x, y, color, rotate = 0 }: { x: number; y: number; color: string; rotate?: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate})`}>
      <ellipse cx="0" cy="17" rx="31" ry="6" fill="#52645b" opacity=".18" />
      <rect x="-30" y="-3" width="60" height="22" rx="7" fill={color} stroke="#5e625c" strokeWidth="2" />
      <path d="M-17 -3 L-9 -16 H12 L22 -3Z" fill={color} stroke="#5e625c" strokeWidth="2" />
      <path d="M-7 -13 H9 L16 -3 H-14Z" fill="#d7edf0" stroke="#fff" strokeWidth="1.5" />
      <circle cx="-18" cy="18" r="6" fill="#46504d" stroke="#fff" strokeWidth="1.5" />
      <circle cx="18" cy="18" r="6" fill="#46504d" stroke="#fff" strokeWidth="1.5" />
      <rect x="25" y="4" width="4" height="6" rx="1" fill="#fff2c7" />
    </g>
  )
}

function Bus({ x, y, color = '#e7b34e' }: { x: number; y: number; color?: string }) {
  return <g transform={`translate(${x} ${y})`}><ellipse cx="0" cy="23" rx="49" ry="7" fill="#52645b" opacity=".16"/><rect x="-46" y="-17" width="92" height="39" rx="9" fill={color} stroke="#6c6556" strokeWidth="2.5"/><rect x="-35" y="-10" width="66" height="18" rx="3" fill="#c6e3e5" stroke="#fff" strokeWidth="2"/><path d="M-10 -10 V8 M12 -10 V8" stroke="#fff" strokeWidth="2"/><rect x="33" y="-8" width="8" height="23" rx="2" fill="#f7e7c7"/><circle cx="-29" cy="22" r="7" fill="#46504d" stroke="#fff" strokeWidth="2"/><circle cx="29" cy="22" r="7" fill="#46504d" stroke="#fff" strokeWidth="2"/></g>
}

function Person({ x, y, shirt = '#e9a0b5' }: { x: number; y: number; shirt?: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle cx="0" cy="-12" r="5" fill="#9b6e55" />
      <path d="M-5 -7 Q0 -10 5 -7 L7 7 H-7Z" fill={shirt} stroke="#765e54" strokeWidth="1" />
      <path d="M-3 7 L-5 17 M3 7 L5 17" stroke="#625b58" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M-5 -3 L-10 3 M5 -3 L10 2" stroke="#9b6e55" strokeWidth="2" strokeLinecap="round" />
    </g>
  )
}

export default function CityMap({ onSelectDistrict }: CityMapProps) {
  const [zoomTarget, setZoomTarget] = useState<{ id: DistrictId; point: { x: number; y: number } } | null>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const [mapSize, setMapSize] = useState({ width: 1200, height: 760 })

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return
    const update = () => {
      const rect = svg.getBoundingClientRect()
      if (rect.width > 0 && rect.height > 0) setMapSize({ width: rect.width, height: rect.height })
    }
    update()
    const observer = new ResizeObserver(update)
    observer.observe(svg)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!zoomTarget) return
    const timer = window.setTimeout(() => {
      onSelectDistrict(zoomTarget.id)
      setZoomTarget(null)
    }, 860)
    return () => window.clearTimeout(timer)
  }, [zoomTarget, onSelectDistrict])

  const choose = (districtId: DistrictId, point: { x: number; y: number }) => {
    if (zoomTarget) return
    setZoomTarget({ id: districtId, point })
  }

  const zoomScale = 1.95
  const offsetX = zoomTarget ? (mapSize.width / 2 - (zoomTarget.point.x / 1200) * mapSize.width) * zoomScale : 0
  const offsetY = zoomTarget ? (mapSize.height / 2 - (zoomTarget.point.y / 760) * mapSize.height) * zoomScale : 0
  const mapStyle = {
    transform: zoomTarget ? `translate(${offsetX}px, ${offsetY}px) scale(${zoomScale})` : 'translate(0, 0) scale(1)',
    transformOrigin: 'center center',
  } as CSSProperties

  return (
    <div className={`city-map-frame ${zoomTarget ? 'is-zooming' : ''}`}>
      <div className="city-map-toolbar">
        <span><MapPin size={15} /> PETA KOTA INTERAKTIF</span>
        <small>Klik salah satu bangunan untuk mendekat</small>
      </div>
      <svg
        ref={svgRef}
        className="city-map-svg"
        viewBox="0 0 1200 760"
        role="group"
        aria-label="Peta kota ilustratif dengan kawasan pendidikan, transportasi, kesehatan, permukiman, perdagangan, dan rekreasi. Pilih bangunan untuk masuk."
        style={mapStyle}
      >
        <defs>
          <pattern id="grassDots" width="42" height="42" patternUnits="userSpaceOnUse"><circle cx="8" cy="9" r="1.5" fill="#65A30D" opacity=".5"/><circle cx="31" cy="29" r="1.2" fill="#fff" opacity=".7"/></pattern>
          <pattern id="roadTexture" width="36" height="36" patternUnits="userSpaceOnUse"><circle cx="9" cy="11" r="1" fill="#fff" opacity=".1"/><circle cx="27" cy="25" r=".8" fill="#59625d" opacity=".08"/></pattern>
        </defs>
        <rect width="1200" height="760" fill="#C9F2A4" />
        <rect width="1200" height="760" fill="url(#grassDots)" />
        <path d="M-60 270 C180 170 355 205 500 285 S825 385 1260 220" fill="none" stroke="#CBD5E1" strokeWidth="124" strokeLinecap="round" />
        <path d="M-60 270 C180 170 355 205 500 285 S825 385 1260 220" fill="none" stroke="#475569" strokeWidth="101" strokeLinecap="round" />
        <path d="M-60 270 C180 170 355 205 500 285 S825 385 1260 220" fill="none" stroke="url(#roadTexture)" strokeWidth="99" strokeLinecap="round" />
        <path d="M65 800 C180 620 325 530 510 520 S865 560 1230 775" fill="none" stroke="#CBD5E1" strokeWidth="124" strokeLinecap="round" />
        <path d="M65 800 C180 620 325 530 510 520 S865 560 1230 775" fill="none" stroke="#475569" strokeWidth="101" strokeLinecap="round" />
        <path d="M65 800 C180 620 325 530 510 520 S865 560 1230 775" fill="none" stroke="url(#roadTexture)" strokeWidth="99" strokeLinecap="round" />
        <path d="M600 -55 C570 130 650 270 630 410 S620 650 690 820" fill="none" stroke="#CBD5E1" strokeWidth="100" strokeLinecap="round" />
        <path d="M600 -55 C570 130 650 270 630 410 S620 650 690 820" fill="none" stroke="#475569" strokeWidth="79" strokeLinecap="round" />
        <path d="M600 -55 C570 130 650 270 630 410 S620 650 690 820" fill="none" stroke="#fff" strokeWidth="3" strokeDasharray="23 25" opacity=".65" />
        <path d="M0 0 H1200 V760 H0Z" fill="none" stroke="#fff" strokeWidth="13" opacity=".5" />
        {/* Crosswalks and road markings */}
        <g fill="#fff" opacity=".8">
          {Array.from({ length: 7 }, (_, i) => <rect key={`cross-a-${i}`} x={270 + i * 13} y="203" width="7" height="34" rx="2" transform="rotate(-16 270 203)" />)}
          {Array.from({ length: 6 }, (_, i) => <rect key={`cross-b-${i}`} x={770 + i * 14} y="555" width="7" height="32" rx="2" transform="rotate(19 770 555)" />)}
          {Array.from({ length: 6 }, (_, i) => <rect key={`cross-c-${i}`} x={625} y={350 + i * 13} width="30" height="7" rx="2" />)}
        </g>
        <g opacity=".92">
          <Tree x={65} y={105} scale={1.25}/><Tree x={310} y={90} scale={.95}/><Tree x={450} y={110} scale={.82}/><Tree x={1080} y={100} scale={1.15}/>
          <Tree x={1090} y={420} scale={1.2}/><Tree x={1030} y={655} scale={1.1}/><Tree x={90} y={655} scale={1.1}/><Tree x={420} y={690} scale={.85}/>
          <Tree x={735} y={640} scale={.9}/><Tree x={245} y={405} scale={.8}/><Tree x={985} y={45} scale={.8}/><Tree x={45} y={400} scale={.85}/>
        </g>
        {/* Small town square */}
        <g>
          <path d="M430 345 C460 305 520 295 560 320 C600 290 675 305 694 348 C731 380 713 425 670 439 C628 465 548 453 510 435 C462 445 414 403 430 345Z" fill="#86EFAC" stroke="#4ADE80" strokeWidth="3" />
          <path d="M460 360 C490 333 520 345 543 362 M590 337 C630 326 663 344 675 371" stroke="#fff" strokeWidth="4" strokeLinecap="round" fill="none" opacity=".7" />
          <Tree x={485} y={385} scale={.8}/><Tree x={655} y={400} scale={.8}/>
          <path d="M535 412 Q580 390 615 413" stroke="#fff" strokeWidth="4" fill="none" strokeLinecap="round" />
          <rect x="548" y="406" width="72" height="18" rx="8" fill="#c99c70" />
          <path d="M555 415 V430 M613 415 V430" stroke="#8b684e" strokeWidth="3" />
          <Person x={578} y={386} shirt="#e9a0b5"/><Person x={612} y={390} shirt="#7ea7cf"/>
        </g>
        <Building x={60} y={72} label="Sekolah" arabic="الْمَدْرَسَةُ" districtId="education" variant="school" onSelect={choose}/>
        <Building x={465} y={48} label="Transportasi" arabic="الْمُوَاصَلَاتُ" districtId="transport" variant="transport" onSelect={choose}/>
        <Building x={900} y={75} label="Rumah Sakit" arabic="الْمُسْتَشْفَى" districtId="health" variant="hospital" onSelect={choose}/>
        <Building x={485} y={515} label="Permukiman" arabic="الْبَيْتُ" districtId="home" variant="home" onSelect={choose}/>
        <Building x={65} y={495} label="Perdagangan" arabic="التِّجَارَةُ" districtId="commerce" variant="market" onSelect={choose}/>
        <Building x={895} y={500} label="Rekreasi" arabic="التَّرْفِيهُ" districtId="recreation" variant="park" onSelect={choose}/>
        {/* Street life */}
        <g transform="translate(285 280) rotate(-13)"><Bus x={0} y={0} color="#e8b34d"/><Car x={0} y={100} color="#7fa9c7" rotate={180}/></g>
        <g transform="translate(850 425) rotate(14)"><Car x={0} y={0} color="#d77f9d"/><Car x={-90} y={70} color="#8a9aab" rotate={180}/></g>
        <Person x={220} y={315} shirt="#e5a1b6"/><Person x={250} y={326} shirt="#80a9cf"/><Person x={800} y={300} shirt="#e0b05d"/><Person x={830} y={312} shirt="#86b37f"/>
        <g transform="translate(1050 570)"><circle cx="0" cy="0" r="13" fill="none" stroke="#6b8c78" strokeWidth="3"/><circle cx="45" cy="0" r="13" fill="none" stroke="#6b8c78" strokeWidth="3"/><path d="M0 0 L17 -24 L31 0 H0 L22 -24 L45 0 M17 -24 H33" stroke="#6b8c78" strokeWidth="3" fill="none" strokeLinejoin="round"/></g>
        <g transform="translate(35 35)"><rect width="160" height="34" rx="10" fill="#fffdf6" stroke="#dce5d6"/><circle cx="18" cy="17" r="6" fill="#76ad7c"/><text x="32" y="21" className="map-mini-title">KOTA BAHASA ARAB</text></g>
      </svg>
      {zoomTarget && <div className="map-zoom-message"><span className="zoom-spinner"/> Mendekati {zoomTarget.id === 'education' ? 'kawasan pendidikan' : zoomTarget.id === 'transport' ? 'kawasan transportasi' : zoomTarget.id === 'health' ? 'kawasan kesehatan' : zoomTarget.id === 'home' ? 'kawasan permukiman' : zoomTarget.id === 'commerce' ? 'kawasan perdagangan' : 'kawasan rekreasi'}...</div>}
      <div className="city-map-legend"><span><i className="legend-green"/> Kawasan belajar</span><span><i className="legend-pink"/> Layanan publik</span><span><i className="legend-yellow"/> Aktivitas sehari-hari</span></div>
      <div className="map-mobile-hint"><ArrowUpRight size={14}/> Pilih bangunan untuk masuk</div>
    </div>
  )
}
