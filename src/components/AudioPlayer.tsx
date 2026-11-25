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
      // Keep the voice pitch as natural as the browser allows when slowing playback.
      if ('preservesPitch' in audio) audio.preservesPitch = true
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
  const hasMp3 = Boolean(audioUrl && !sourceError)
  const canPlay = hasMp3 || Boolean(arabicVoice)
  const sourceLabel = hasMp3
    ? 'Rekaman MP3 Bahasa Arab'
    : arabicVoice
      ? `Pratinjau suara perangkat · ${arabicVoice.name}`
      : 'MP3 belum dibuat'

  const playDeviceVoice = () => {
    if (!('speechSynthesis' in window)) {
      setMessage('Browser tidak mendukung suara otomatis. Buat MP3 melalui JALANKAN_GENERATOR_AUDIO.bat di folder proyek.')
      return
    }
    if (!arabicVoice) {
      setMessage('File MP3 untuk materi ini belum tersedia. Jalankan JALANKAN_GENERATOR_AUDIO.bat di folder proyek agar audio bacaan dan soal menyimak dibuat otomatis.')
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
      setMessage('Suara perangkat gagal diputar. Buat atau periksa file MP3 materi ini.')
    }
    synth.speak(utterance)
  }

  const play = async () => {
    setMessage('')
    if (audioUrl && audioRef.current && !sourceError) {
      audioRef.current.playbackRate = speed === 'slow' ? 0.75 : 1
      if ('preservesPitch' in audioRef.current) audioRef.current.preservesPitch = true
      audioRef.current.volume = volume
      try {
        await audioRef.current.play()
        setIsPlaying(true)
      } catch {
        setIsPlaying(false)
        setSourceError(true)
        // If a local MP3 is missing, immediately try a device Arabic voice when available.
        if (arabicVoice) playDeviceVoice()
        else setMessage('File MP3 belum ditemukan. Jalankan JALANKAN_GENERATOR_AUDIO.bat di folder proyek untuk membuat audio seluruh materi dan soal istimā’.')
      }
      return
    }
    playDeviceVoice()
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
          onError={() => {
            setIsPlaying(false)
            setSourceError(true)
            if (!arabicVoice) setMessage('MP3 materi ini belum tersedia. Jalankan JALANKAN_GENERATOR_AUDIO.bat agar audio bacaan dan soal menyimak dibuat otomatis.')
          }}
        />
      )}
      <div className="audio-icon"><Headphones size={compact ? 18 : 22}/></div>
      <div className="audio-copy">
        <strong>{compact ? 'Dengarkan audio soal' : 'Audio Bahasa Arab'}</strong>
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
      {!canPlay && !message && <p className="audio-message" role="status"><AlertCircle size={14}/>Audio untuk materi dan soal ini belum dibuat. Jalankan JALANKAN_GENERATOR_AUDIO.bat untuk menghasilkan MP3 seluruh lokasi dan jenjang.</p>}
      {canPlay && !hasMp3 && <p className="audio-hint"><CheckCircle2 size={13}/> Suara perangkat tersedia sebagai pratinjau. MP3 lokal akan digunakan setelah generator dijalankan.</p>}
    </div>
  )
}
