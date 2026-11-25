import { useEffect, useMemo, useRef, useState } from 'react'
import { AlertCircle, CheckCircle2, Headphones, Pause, Play, Repeat2, Volume2 } from 'lucide-react'

interface AudioPlayerProps {
  text: string
  audioUrl?: string | null
  compact?: boolean
}

export default function AudioPlayer({ text, audioUrl, compact = false }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [speed, setSpeed] = useState<'slow' | 'normal'>('slow')
  const [isPlaying, setIsPlaying] = useState(false)
  const [message, setMessage] = useState('')
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([])
  const [volume, setVolume] = useState(0.85)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [sourceError, setSourceError] = useState(false)

  useEffect(() => {
    if (!('speechSynthesis' in window)) return
    const synth = window.speechSynthesis
    const refreshVoices = () => setVoices(synth.getVoices())
    refreshVoices()
    synth.addEventListener('voiceschanged', refreshVoices)
    return () => {
      synth.removeEventListener('voiceschanged', refreshVoices)
      synth.cancel()
    }
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      audio.pause()
      audio.playbackRate = speed === 'slow' ? 0.75 : 1
      audio.volume = volume
    }
  }, [speed, volume, audioUrl])

  useEffect(() => {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel()
    setIsPlaying(false)
    setCurrentTime(0)
    setDuration(0)
    setMessage('')
    setSourceError(false)
    if (audioRef.current) audioRef.current.load()
  }, [audioUrl, text])

  const arabicVoice = useMemo(
    () => voices.find((voice) => voice.lang.toLowerCase().startsWith('ar')),
    [voices],
  )
  const canPlay = Boolean(audioUrl && !sourceError) || Boolean(arabicVoice)
  const sourceLabel = audioUrl && !sourceError
    ? 'Rekaman MP3'
    : arabicVoice
      ? `Pratinjau suara perangkat · ${arabicVoice.name}`
      : 'Audio belum tersedia'

  const play = async () => {
    setMessage('')
    if (audioUrl && audioRef.current && !sourceError) {
      audioRef.current.playbackRate = speed === 'slow' ? 0.75 : 1
      audioRef.current.volume = volume
      try {
        await audioRef.current.play()
        setIsPlaying(true)
      } catch {
        setIsPlaying(false)
        setSourceError(true)
        setMessage('MP3 tidak dapat diputar. Jika suara Bahasa Arab tersedia di perangkat, tombol putar dapat menggunakan pratinjau suara perangkat.')
      }
      return
    }

    if (!('speechSynthesis' in window)) {
      setMessage('Browser ini tidak mendukung suara otomatis. Hubungkan rekaman MP3 Bahasa Arab untuk materi ini.')
      return
    }
    if (!arabicVoice) {
      setMessage('Perangkat ini tidak menyediakan suara Bahasa Arab. Hubungkan rekaman MP3 agar audio dapat didengarkan.')
      return
    }

    const synth = window.speechSynthesis
    synth.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = arabicVoice.lang || 'ar'
    utterance.voice = arabicVoice
    utterance.rate = speed === 'slow' ? 0.75 : 1
    utterance.pitch = 1
    utterance.volume = volume
    utterance.onstart = () => setIsPlaying(true)
    utterance.onend = () => setIsPlaying(false)
    utterance.onerror = () => {
      setIsPlaying(false)
      setMessage('Browser gagal menjalankan pratinjau suara. Gunakan rekaman MP3 untuk pemutaran yang lebih konsisten.')
    }
    synth.speak(utterance)
  }

  const pause = () => {
    if (audioUrl && audioRef.current && !sourceError) audioRef.current.pause()
    else if ('speechSynthesis' in window) window.speechSynthesis.cancel()
    setIsPlaying(false)
  }

  const replay = () => {
    if (audioUrl && audioRef.current && !sourceError) {
      audioRef.current.currentTime = 0
      void play()
      return
    }
    if ('speechSynthesis' in window) window.speechSynthesis.cancel()
    setIsPlaying(false)
    window.setTimeout(() => { void play() }, 100)
  }

  const formatTime = (seconds: number) => `${Math.floor(seconds / 60).toString().padStart(2, '0')}:${Math.floor(seconds % 60).toString().padStart(2, '0')}`

  return (
    <div className={`audio-player ${compact ? 'audio-player-compact' : ''}`}>
      {audioUrl && (
        <audio
          ref={audioRef}
          src={audioUrl}
          preload="metadata"
          onLoadedMetadata={(event) => setDuration(event.currentTarget.duration || 0)}
          onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
          onEnded={() => setIsPlaying(false)}
          onPause={() => setIsPlaying(false)}
          onError={() => { setIsPlaying(false); setSourceError(true); setMessage('Berkas MP3 tidak dapat dimuat. Periksa URL atau unggah ulang audio ke penyimpanan.') }}
        />
      )}
      <div className="audio-icon"><Headphones size={compact ? 18 : 22}/></div>
      <div className="audio-copy">
        <strong>{compact ? 'Dengarkan audio' : 'Audio Bahasa Arab'}</strong>
        <span>{sourceLabel}</span>
      </div>
      <button className="audio-play" onClick={isPlaying ? pause : play} type="button" aria-label={isPlaying ? 'Jeda audio' : 'Putar audio'} disabled={!canPlay}>
        {isPlaying ? <Pause size={19} fill="currentColor" /> : <Play size={19} fill="currentColor" />}
      </button>
      <div className="audio-speed-control" aria-label="Kecepatan audio">
        <button className={speed === 'slow' ? 'active' : ''} onClick={() => setSpeed('slow')} type="button">0,75×</button>
        <button className={speed === 'normal' ? 'active' : ''} onClick={() => setSpeed('normal')} type="button">1×</button>
      </div>
      {audioUrl && !sourceError && (
        <div className="audio-timeline">
          <span>{formatTime(currentTime)}</span>
          <input type="range" min="0" max={duration || 0} step="0.1" value={Math.min(currentTime, duration || 0)} onChange={(event) => { if (audioRef.current) { audioRef.current.currentTime = Number(event.target.value); setCurrentTime(Number(event.target.value)) } }} aria-label="Posisi audio" disabled={!duration}/>
          <span>{duration ? formatTime(duration) : '--:--'}</span>
        </div>
      )}
      <button className="audio-replay" onClick={replay} type="button" aria-label="Ulangi audio" disabled={!canPlay}><Repeat2 size={16}/></button>
      <Volume2 className="audio-volume" size={16}/>
      <input className="audio-volume-range" type="range" min="0" max="1" step="0.05" value={volume} onChange={(event) => setVolume(Number(event.target.value))} aria-label="Atur volume" />
      {message && <p className="audio-message" role="status"><AlertCircle size={14}/>{message}</p>}
      {!canPlay && !message && <p className="audio-message" role="status"><AlertCircle size={14}/>Rekaman MP3 belum dihubungkan dan perangkat tidak memiliki suara Bahasa Arab.</p>}
      {canPlay && !audioUrl && <p className="audio-hint"><CheckCircle2 size={13}/> Suara perangkat tersedia sebagai pratinjau. Rekaman MP3 tetap disarankan untuk pembelajaran kelas.</p>}
    </div>
  )
}
