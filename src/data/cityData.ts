import type { Lesson } from '../types'

export type DistrictId = 'education' | 'transport' | 'health' | 'home' | 'commerce' | 'recreation'

export interface CityArea {
  id: string
  name: string
  arabicName: string
  description: string
  lessonId: string
  icon: 'school' | 'classroom' | 'canteen' | 'library' | 'mosque' | 'playground' | 'airport' | 'train' | 'bus' | 'hospital' | 'pharmacy' | 'clinic' | 'house' | 'living' | 'kitchen' | 'market' | 'supermarket' | 'restaurant' | 'park' | 'cinema' | 'beach'
  tint: string
}

export interface CityDistrict {
  id: DistrictId
  name: string
  arabicName: string
  category: string
  description: string
  color: string
  mapPoint: { x: number; y: number }
  areas: CityArea[]
}

export const cityDistricts: CityDistrict[] = [
  {
    id: 'education', name: 'Kawasan Pendidikan', arabicName: 'مِنْطَقَةُ التَّعْلِيمِ', category: 'Pendidikan',
    description: 'Jelajahi sekolah, ruang kelas, kantin, perpustakaan, dan berbagai fasilitas belajar.', color: '#70a97c', mapPoint: { x: 17, y: 29 },
    areas: [
      { id: 'school-main', name: 'Gedung Sekolah', arabicName: 'الْمَدْرَسَةُ', description: 'Mengenal lingkungan sekolah dan kegiatan belajar.', lessonId: 'school', icon: 'school', tint: '#e7f3e5' },
      { id: 'classroom', name: 'Ruang Kelas', arabicName: 'الْفَصْلُ', description: 'Benda, kegiatan, dan interaksi di dalam kelas.', lessonId: 'classroom', icon: 'classroom', tint: '#fce8ef' },
      { id: 'canteen', name: 'Kantin', arabicName: 'الْمَقْصَفُ', description: 'Memesan makanan dan minuman saat istirahat.', lessonId: 'canteen', icon: 'canteen', tint: '#fff1d8' },
      { id: 'library', name: 'Perpustakaan', arabicName: 'الْمَكْتَبَةُ', description: 'Membaca, mencari referensi, dan meminjam buku.', lessonId: 'library', icon: 'library', tint: '#e9effb' },
      { id: 'mosque', name: 'Masjid Sekolah', arabicName: 'مَسْجِدُ الْمَدْرَسَةِ', description: 'Kegiatan ibadah dan adab di lingkungan sekolah.', lessonId: 'mosque', icon: 'mosque', tint: '#e8f4ef' },
      { id: 'playground', name: 'Lapangan Sekolah', arabicName: 'مَلْعَبُ الْمَدْرَسَةِ', description: 'Olahraga, permainan, dan kegiatan bersama.', lessonId: 'playground', icon: 'playground', tint: '#eaf4df' },
    ],
  },
  {
    id: 'transport', name: 'Kawasan Transportasi', arabicName: 'مِنْطَقَةُ الْمُوَاصَلَاتِ', category: 'Transportasi',
    description: 'Pelajari perjalanan, jadwal keberangkatan, tiket, dan petunjuk arah.', color: '#719fc4', mapPoint: { x: 51, y: 21 },
    areas: [
      { id: 'airport', name: 'Bandara', arabicName: 'الْمَطَارُ', description: 'Check-in, ruang tunggu, dan keberangkatan pesawat.', lessonId: 'airport', icon: 'airport', tint: '#e9f2fa' },
      { id: 'station', name: 'Stasiun Kereta', arabicName: 'مَحَطَّةُ الْقِطَارِ', description: 'Membaca jadwal dan membeli tiket kereta.', lessonId: 'station', icon: 'train', tint: '#f0eafa' },
      { id: 'bus-terminal', name: 'Terminal Bus', arabicName: 'مَحَطَّةُ الْحَافِلَاتِ', description: 'Mencari bus, tujuan, dan jadwal perjalanan.', lessonId: 'bus-terminal', icon: 'bus', tint: '#fff0df' },
    ],
  },
  {
    id: 'health', name: 'Kawasan Kesehatan', arabicName: 'مِنْطَقَةُ الصِّحَّةِ', category: 'Layanan Publik',
    description: 'Kenali layanan kesehatan, ruang pemeriksaan, dan cara menyampaikan keluhan.', color: '#d77f9d', mapPoint: { x: 82, y: 27 },
    areas: [
      { id: 'hospital', name: 'Rumah Sakit', arabicName: 'الْمُسْتَشْفَى', description: 'Pendaftaran pasien dan percakapan dengan tenaga kesehatan.', lessonId: 'hospital', icon: 'hospital', tint: '#fbeaf0' },
      { id: 'pharmacy', name: 'Apotek', arabicName: 'الصَّيْدَلِيَّةُ', description: 'Membeli obat dan memahami petunjuk penggunaan.', lessonId: 'pharmacy', icon: 'pharmacy', tint: '#e8f4ef' },
      { id: 'clinic', name: 'Klinik', arabicName: 'الْعِيَادَةُ', description: 'Membuat janji dan menjelaskan gejala sederhana.', lessonId: 'clinic', icon: 'clinic', tint: '#eef0fb' },
    ],
  },
  {
    id: 'home', name: 'Kawasan Permukiman', arabicName: 'الْحَيُّ السَّكَنِيُّ', category: 'Kehidupan Sehari-hari',
    description: 'Bercerita tentang rumah, anggota keluarga, dan rutinitas di rumah.', color: '#c78d62', mapPoint: { x: 51, y: 69 },
    areas: [
      { id: 'house', name: 'Rumah Keluarga', arabicName: 'الْبَيْتُ', description: 'Mendeskripsikan rumah dan anggota keluarga.', lessonId: 'home', icon: 'house', tint: '#fff0e4' },
      { id: 'living-room', name: 'Ruang Keluarga', arabicName: 'غُرْفَةُ الْجُلُوسِ', description: 'Kegiatan bersama keluarga di ruang keluarga.', lessonId: 'living-room', icon: 'living', tint: '#fbeaf0' },
      { id: 'kitchen', name: 'Dapur', arabicName: 'الْمَطْبَخُ', description: 'Peralatan dapur dan kegiatan menyiapkan makanan.', lessonId: 'kitchen', icon: 'kitchen', tint: '#fff3d9' },
    ],
  },
  {
    id: 'commerce', name: 'Kawasan Perdagangan', arabicName: 'مِنْطَقَةُ التِّجَارَةِ', category: 'Perdagangan',
    description: 'Berlatih bertanya harga, memilih barang, dan berkomunikasi saat berbelanja.', color: '#d6a64e', mapPoint: { x: 18, y: 72 },
    areas: [
      { id: 'market', name: 'Pasar Tradisional', arabicName: 'السُّوقُ', description: 'Jual beli, tawar-menawar, dan nama bahan makanan.', lessonId: 'market', icon: 'market', tint: '#fff2d9' },
      { id: 'supermarket', name: 'Supermarket', arabicName: 'مَتْجَرٌ كَبِيرٌ', description: 'Mencari barang dan melakukan pembayaran.', lessonId: 'supermarket', icon: 'supermarket', tint: '#e8f2fb' },
      { id: 'restaurant', name: 'Restoran', arabicName: 'الْمَطْعَمُ', description: 'Membaca menu dan memesan hidangan.', lessonId: 'restaurant', icon: 'restaurant', tint: '#fbe8ed' },
    ],
  },
  {
    id: 'recreation', name: 'Kawasan Rekreasi', arabicName: 'مِنْطَقَةُ التَّرْفِيهِ', category: 'Rekreasi',
    description: 'Mendeskripsikan tempat wisata, kegiatan luang, cuaca, dan lingkungan.', color: '#79a96d', mapPoint: { x: 82, y: 72 },
    areas: [
      { id: 'park', name: 'Taman Kota', arabicName: 'الْحَدِيقَةُ', description: 'Kegiatan rekreasi dan menjaga kebersihan taman.', lessonId: 'park', icon: 'park', tint: '#eaf4df' },
      { id: 'beach', name: 'Pantai', arabicName: 'الشَّاطِئُ', description: 'Cuaca, pemandangan laut, dan liburan.', lessonId: 'beach', icon: 'beach', tint: '#e6f3f8' },
    ],
  },
]

const extraQuestion = (id: string, source: 'qiraah' | 'istima', prompt: string, options: string[], answerIndex: number, explanation: string) => ({ id, source, prompt, options, answerIndex, explanation })

export const extraLessons: Lesson[] = [
  {
    id: 'airport', name: 'Bandara', arabicName: 'الْمَطَارُ', category: 'Transportasi', description: 'Mengenal proses check-in, ruang tunggu, dan keberangkatan pesawat.', color: '#719fc4', orbitPosition: [0, 0, 0],
    smp: {
      reading: 'ذَهَبَتْ سَلْمَى مَعَ أُسْرَتِهَا إِلَى الْمَطَارِ فِي الصَّبَاحِ الْبَاكِرِ. كَانَتْ تُرِيدُ السَّفَرَ إِلَى مَدِينَةٍ أُخْرَى لِزِيَارَةِ جَدَّتِهَا. وَصَلُوا إِلَى الْمَطَارِ قَبْلَ مَوْعِدِ الرِّحْلَةِ بِسَاعَتَيْنِ. أَوَّلًا، ذَهَبُوا إِلَى مَكْتَبِ تَسْجِيلِ الْوُصُولِ، وَقَدَّمَتْ سَلْمَى جَوَازَ السَّفَرِ وَالْحَقِيبَةَ. بَعْدَ ذَلِكَ، أَخَذَتْ بِطَاقَةَ الصُّعُودِ إِلَى الطَّائِرَةِ. جَلَسَتِ الْأُسْرَةُ فِي صَالَةِ الِانْتِظَارِ، وَقَرَأَتْ سَلْمَى رَقْمَ الْبَوَّابَةِ عَلَى الشَّاشَةِ. عِنْدَمَا أُعْلِنَ عَنِ الرِّحْلَةِ، تَوَجَّهُوا إِلَى الْبَوَّابَةِ بِهُدُوءٍ.',
      translation: 'Salma pergi bersama keluarganya ke bandara pada pagi hari. Mereka akan bepergian ke kota lain untuk mengunjungi neneknya. Mereka tiba dua jam sebelum jadwal penerbangan. Pertama, mereka menuju meja check-in dan menyerahkan paspor serta koper. Setelah itu, Salma menerima kartu naik pesawat. Keluarga tersebut duduk di ruang tunggu, sementara Salma membaca nomor gerbang pada layar. Ketika penerbangan diumumkan, mereka berjalan menuju gerbang dengan tertib.',
      audioText: 'وَصَلَتْ سَلْمَى إِلَى الْمَطَارِ مُبَكِّرًا. ذَهَبَتْ إِلَى مَكْتَبِ تَسْجِيلِ الْوُصُولِ، ثُمَّ جَلَسَتْ فِي صَالَةِ الِانْتِظَارِ. بَعْدَ إِعْلَانِ الرِّحْلَةِ، تَوَجَّهَتْ إِلَى بَوَّابَةِ الصُّعُودِ.',
      vocabulary: [{ arabic: 'الْمَطَارُ', latin: 'al-maṭār', meaning: 'bandara' }, { arabic: 'بِطَاقَةُ الصُّعُودِ', latin: 'biṭāqat aṣ-ṣuʿūd', meaning: 'kartu naik pesawat' }, { arabic: 'صَالَةُ الِانْتِظَارِ', latin: 'ṣālat al-intiẓār', meaning: 'ruang tunggu' }, { arabic: 'الرِّحْلَةُ', latin: 'ar-riḥlah', meaning: 'perjalanan/penerbangan' }],
    },
    sma: {
      reading: 'تُعَدُّ الْمَطَارَاتُ مِنَ الْمَرَافِقِ الْمُهِمَّةِ فِي حَرَكَةِ السَّفَرِ بَيْنَ الْمُدُنِ وَالدُّوَلِ. ذَهَبَتْ سَلْمَى مَعَ أُسْرَتِهَا إِلَى الْمَطَارِ قَبْلَ مَوْعِدِ الرِّحْلَةِ بِسَاعَتَيْنِ حَتَّى تَتَجَنَّبَ التَّأَخُّرَ. فِي صَالَةِ الْمُغَادَرَةِ، بَحَثَتِ الْأُسْرَةُ عَنْ شَرِكَةِ الطَّيَرَانِ الْمُدَوَّنَةِ فِي التَّذْكِرَةِ. ثُمَّ قَدَّمُوا جَوَازَاتِ السَّفَرِ وَسَجَّلُوا الْحَقَائِبَ، وَاسْتَلَمُوا بِطَاقَاتِ الصُّعُودِ. بَعْدَ إِجْرَاءِ التَّفْتِيشِ الْأَمْنِيِّ، جَلَسُوا قُرْبَ الْبَوَّابَةِ الْمُحَدَّدَةِ. كَانَتِ الشَّاشَةُ الْإِلِكْتُرُونِيَّةُ تَعْرِضُ أَرْقَامَ الرِّحْلَاتِ وَأَوْقَاتَ الْمُغَادَرَةِ وَحَالَةَ كُلِّ رِحْلَةٍ. قَرَأَتْ سَلْمَى الْمَعْلُومَاتِ بِعِنَايَةٍ، ثُمَّ سَاعَدَتْ أَخَاهَا الصَّغِيرَ عَلَى فَهْمِ إِرْشَادَاتِ الْمَطَارِ. وَعِنْدَمَا بَدَأَ الصُّعُودُ، اصْطَفَّ الْمُسَافِرُونَ وَأَبْرَزُوا بِطَاقَاتِهِمْ لِلْمُوَظَّفِ. تَعَلَّمَتْ سَلْمَى أَنَّ قِرَاءَةَ الْإِعْلَانَاتِ وَمُرَاعَاةَ الْوَقْتِ تُسَاعِدَانِ عَلَى جَعْلِ الرِّحْلَةِ أَكْثَرَ رَاحَةً وَانْتِظَامًا.',
      translation: 'Bandara merupakan fasilitas penting dalam perjalanan antarkota dan antarnegara. Salma datang bersama keluarganya dua jam sebelum keberangkatan agar tidak terlambat. Di ruang keberangkatan, mereka mencari perusahaan penerbangan yang tercantum pada tiket. Mereka menyerahkan paspor, mendaftarkan bagasi, dan menerima kartu naik pesawat. Setelah pemeriksaan keamanan, mereka duduk di dekat gerbang yang ditentukan. Layar elektronik menampilkan nomor penerbangan, waktu keberangkatan, dan status setiap penerbangan. Salma membaca informasi tersebut dengan teliti dan membantu adiknya memahami petunjuk bandara. Ketika proses naik pesawat dimulai, para penumpang berbaris dan menunjukkan kartu kepada petugas. Salma belajar bahwa membaca pengumuman dan memperhatikan waktu membuat perjalanan lebih nyaman dan teratur.',
      audioText: 'فِي الْمَطَارِ، يَقْرَأُ الْمُسَافِرُونَ مَعْلُومَاتِ الرِّحْلَةِ عَلَى الشَّاشَةِ. يَذْهَبُونَ إِلَى مَكْتَبِ تَسْجِيلِ الْوُصُولِ، ثُمَّ يَنْتَظِرُونَ قُرْبَ بَوَّابَةِ الصُّعُودِ. يَجِبُ عَلَى الْمُسَافِرِ أَنْ يَصِلَ فِي الْوَقْتِ الْمُنَاسِبِ.',
      vocabulary: [{ arabic: 'صَالَةُ الْمُغَادَرَةِ', latin: 'ṣālat al-mughādarah', meaning: 'ruang keberangkatan' }, { arabic: 'التَّفْتِيشُ الْأَمْنِيُّ', latin: 'at-taftīsh al-amnī', meaning: 'pemeriksaan keamanan' }, { arabic: 'الْحَقَائِبُ', latin: 'al-ḥaqāʾib', meaning: 'bagasi/koper' }, { arabic: 'الْمُوَظَّفُ', latin: 'al-muwaẓẓaf', meaning: 'petugas' }],
    },
    quizSmp: [extraQuestion('airport-s1', 'qiraah', 'مَتَى وَصَلَتْ سَلْمَى إِلَى الْمَطَارِ؟', ['فِي الصَّبَاحِ الْبَاكِرِ', 'فِي الْمَسَاءِ', 'فِي مُنْتَصَفِ اللَّيْلِ'], 0, 'Salma tiba di bandara pada pagi hari.'), extraQuestion('airport-s2', 'istima', 'أَيْنَ جَلَسَتْ سَلْمَى؟', ['فِي صَالَةِ الِانْتِظَارِ', 'فِي الْمَطْعَمِ', 'فِي الْمَكْتَبَةِ'], 0, 'Audio menyebutkan ruang tunggu.')],
    quizSma: [extraQuestion('airport-a1', 'qiraah', 'لِمَاذَا وَصَلَتِ الْأُسْرَةُ مُبَكِّرًا؟', ['لِتَتَجَنَّبَ التَّأَخُّرَ', 'لِتَشْتَرِيَ الْمَلَابِسَ', 'لِتَزُورَ الْمَدِينَةَ'], 0, 'Mereka datang lebih awal agar tidak terlambat.'), extraQuestion('airport-a2', 'istima', 'مَاذَا يَقْرَأُ الْمُسَافِرُونَ عَلَى الشَّاشَةِ؟', ['مَعْلُومَاتِ الرِّحْلَةِ', 'أَسْمَاءَ الْمَطَاعِمِ', 'أَخْبَارَ الرِّيَاضَةِ'], 0, 'Audio menyebut informasi penerbangan pada layar.')],
  },
  {
    id: 'bus-terminal', name: 'Terminal Bus', arabicName: 'مَحَطَّةُ الْحَافِلَاتِ', category: 'Transportasi', description: 'Mengenal tujuan, jadwal, dan layanan terminal bus.', color: '#d6a64e', orbitPosition: [0, 0, 0],
    smp: {
      reading: 'ذَهَبَ يُوسُفُ مَعَ أَبِيهِ إِلَى مَحَطَّةِ الْحَافِلَاتِ لِلسَّفَرِ إِلَى قَرْيَةِ عَمِّهِ. وَقَفَا أَمَامَ لَوْحَةِ الْمَوَاعِيدِ وَبَحَثَا عَنْ اسْمِ الْقَرْيَةِ. سَأَلَ يُوسُفُ الْمُوَظَّفَ عَنْ رَقْمِ الْمَرْكَبَةِ وَمَوْعِدِ الْمُغَادَرَةِ. أَخْبَرَهُ الْمُوَظَّفُ أَنَّ الْحَافِلَةَ سَتَنْطَلِقُ بَعْدَ نِصْفِ سَاعَةٍ. اشْتَرَى الْأَبُ تَذْكِرَتَيْنِ، ثُمَّ وَضَعَا الْحَقَائِبَ فِي مَكَانِهَا. جَلَسَا فِي صَالَةِ الِانْتِظَارِ حَتَّى سَمِعَا النِّدَاءَ. عِنْدَمَا وَصَلَتِ الْحَافِلَةُ، صَعِدَ الرُّكَّابُ بِهُدُوءٍ وَاحْتَفَظُوا بِالتَّذَاكِرِ حَتَّى يَصِلُوا إِلَى الْوِجْهَةِ.',
      translation: 'Yusuf pergi bersama ayahnya ke terminal bus untuk bepergian ke desa pamannya. Mereka berdiri di depan papan jadwal dan mencari nama desa. Yusuf bertanya kepada petugas tentang nomor bus dan waktu keberangkatan. Petugas menjelaskan bahwa bus akan berangkat setengah jam lagi. Ayah membeli dua tiket, lalu mereka meletakkan koper di tempatnya. Mereka menunggu di ruang tunggu sampai mendengar pengumuman. Ketika bus tiba, para penumpang naik dengan tertib dan menyimpan tiket sampai tiba di tujuan.',
      audioText: 'ذَهَبَ يُوسُفُ إِلَى مَحَطَّةِ الْحَافِلَاتِ. سَأَلَ الْمُوَظَّفَ عَنْ مَوْعِدِ الْمُغَادَرَةِ، وَاشْتَرَى أَبُوهُ تَذْكِرَتَيْنِ. انْتَظَرَا الْحَافِلَةَ فِي الصَّالَةِ.',
      vocabulary: [{ arabic: 'مَحَطَّةُ الْحَافِلَاتِ', latin: 'maḥaṭṭat al-ḥāfilāt', meaning: 'terminal bus' }, { arabic: 'الْمُغَادَرَةُ', latin: 'al-mughādarah', meaning: 'keberangkatan' }, { arabic: 'التَّذْكِرَةُ', latin: 'at-tadhkirah', meaning: 'tiket' }, { arabic: 'الْوِجْهَةُ', latin: 'al-wijhah', meaning: 'tujuan' }],
    },
    sma: {
      reading: 'تَسْتَقْبِلُ مَحَطَّةُ الْحَافِلَاتِ مُسَافِرِينَ مِنْ مُدُنٍ وَقُرًى مُخْتَلِفَةٍ كُلَّ يَوْمٍ. ذَهَبَ يُوسُفُ مَعَ أَبِيهِ إِلَى الْمَحَطَّةِ لِزِيَارَةِ أَقَارِبِهِمَا فِي قَرْيَةٍ بَعِيدَةٍ. قَبْلَ شِرَاءِ التَّذَاكِرِ، قَرَأَ يُوسُفُ لَوْحَةَ الْمَوَاعِيدِ لِيَعْرِفَ أَوْقَاتَ الْحَافِلَاتِ وَأَسْمَاءَ الْمُدُنِ. ثُمَّ سَأَلَ الْمُوَظَّفَ عَنْ مَكَانِ الْمَقْعَدِ وَحَدِّ الْأَمْتِعَةِ الْمَسْمُوحِ بِهَا. أَجَابَ الْمُوَظَّفُ عَنْ أَسْئِلَتِهِ وَبَيَّنَ لَهُ رَقْمَ الرَّصِيفِ الَّذِي سَتَنْطَلِقُ مِنْهُ الْحَافِلَةُ. بَعْدَ ذَلِكَ، اشْتَرَى الْأَبُ التَّذَاكِرَ وَتَأَكَّدَ مِنْ صِحَّةِ الْبَيَانَاتِ الْمَكْتُوبَةِ عَلَيْهَا. فِي صَالَةِ الِانْتِظَارِ، لَاحَظَ يُوسُفُ أَنَّ الْمُسَافِرِينَ يَسْتَمِعُونَ إِلَى الْإِعْلَانَاتِ لِمَعْرِفَةِ تَغْيِيرَاتِ الْمَوَاعِيدِ. وَعِنْدَ إِعْلَانِ رَقْمِ حَافِلَتِهِمَا، تَوَجَّهَا إِلَى الرَّصِيفِ وَوَضَعَا الْأَمْتِعَةَ فِي الْمَكَانِ الْمُخَصَّصِ. فَهِمَ يُوسُفُ أَنَّ قِرَاءَةَ الْجَدَاوِلِ وَسُؤَالَ الْمُوَظَّفِينَ عِنْدَ الْحَاجَةِ يُسَاعِدَانِ الْمُسَافِرَ عَلَى اخْتِيَارِ الرِّحْلَةِ الْمُنَاسِبَةِ.',
      translation: 'Terminal bus melayani penumpang dari berbagai kota dan desa setiap hari. Yusuf pergi bersama ayahnya untuk mengunjungi kerabat di desa yang jauh. Sebelum membeli tiket, Yusuf membaca papan jadwal untuk mengetahui waktu keberangkatan dan nama kota. Ia kemudian bertanya kepada petugas tentang nomor kursi dan batas bagasi. Petugas menjelaskan nomor peron tempat bus akan berangkat. Ayah membeli tiket dan memeriksa informasi yang tertulis. Di ruang tunggu, Yusuf memperhatikan para penumpang mendengarkan pengumuman untuk mengetahui perubahan jadwal. Ketika nomor bus mereka diumumkan, mereka menuju peron dan meletakkan barang bawaan di tempat yang disediakan. Yusuf memahami bahwa membaca jadwal dan bertanya kepada petugas membantu penumpang memilih perjalanan yang sesuai.',
      audioText: 'فِي مَحَطَّةِ الْحَافِلَاتِ، يَقْرَأُ الْمُسَافِرُونَ لَوْحَةَ الْمَوَاعِيدِ. يَسْأَلُ يُوسُفُ الْمُوَظَّفَ عَنْ رَقْمِ الرَّصِيفِ، ثُمَّ يَنْتَظِرُ الْحَافِلَةَ مَعَ أَبِيهِ.',
      vocabulary: [{ arabic: 'لَوْحَةُ الْمَوَاعِيدِ', latin: 'lawḥat al-mawāʿīd', meaning: 'papan jadwal' }, { arabic: 'الرَّصِيفُ', latin: 'ar-raṣīf', meaning: 'peron' }, { arabic: 'الْأَمْتِعَةُ', latin: 'al-amtiʿah', meaning: 'barang bawaan' }, { arabic: 'الْإِعْلَانَاتُ', latin: 'al-iʿlānāt', meaning: 'pengumuman' }],
    },
    quizSmp: [extraQuestion('terminal-s1', 'qiraah', 'إِلَى أَيْنَ يُرِيدُ يُوسُفُ السَّفَرَ؟', ['إِلَى قَرْيَةِ عَمِّهِ', 'إِلَى الْمَدْرَسَةِ', 'إِلَى الْمُسْتَشْفَى'], 0, 'Yusuf akan mengunjungi pamannya.'), extraQuestion('terminal-s2', 'istima', 'مَاذَا اشْتَرَى أَبُو يُوسُفَ؟', ['تَذْكِرَتَيْنِ', 'ثَلَاثَ حَقَائِبَ', 'كِتَابَيْنِ'], 0, 'Ayah Yusuf membeli dua tiket.')],
    quizSma: [extraQuestion('terminal-a1', 'qiraah', 'لِمَاذَا قَرَأَ يُوسُفُ لَوْحَةَ الْمَوَاعِيدِ؟', ['لِيَعْرِفَ أَوْقَاتَ الْحَافِلَاتِ', 'لِيَعْرِفَ أَسْعَارَ الطَّعَامِ', 'لِيَبْحَثَ عَنْ كِتَابٍ'], 0, 'Papan jadwal berisi waktu keberangkatan dan tujuan.'), extraQuestion('terminal-a2', 'istima', 'عَمَّ يَسْأَلُ يُوسُفُ الْمُوَظَّفَ؟', ['عَنْ رَقْمِ الرَّصِيفِ', 'عَنْ لَوْنِ الْحَافِلَةِ', 'عَنْ مَكَانِ الْمَطْعَمِ'], 0, 'Audio menyebut Yusuf bertanya tentang peron.')],
  },
  {
    id: 'pharmacy', name: 'Apotek', arabicName: 'الصَّيْدَلِيَّةُ', category: 'Layanan Publik', description: 'Mengenal layanan apotek dan petunjuk penggunaan obat.', color: '#70a97c', orbitPosition: [0, 0, 0],
    smp: {
      reading: 'ذَهَبَتْ مَرْيَمُ مَعَ أُمِّهَا إِلَى الصَّيْدَلِيَّةِ بَعْدَ زِيَارَةِ الطَّبِيبِ. كَانَتْ أُمُّهَا تَحْمِلُ وَصْفَةً طِبِّيَّةً فِيهَا اسْمُ الدَّوَاءِ وَطَرِيقَةُ اسْتِعْمَالِهِ. قَدَّمَتِ الْوَصْفَةَ إِلَى الصَّيْدَلِيِّ، فَبَحَثَ عَنِ الدَّوَاءِ فِي الرَّفِّ. ثُمَّ شَرَحَ لَهُمَا وَقْتَ تَنَاوُلِ الدَّوَاءِ وَعَدَدَ الْمَرَّاتِ فِي الْيَوْمِ. اسْتَمَعَتْ مَرْيَمُ بِانْتِبَاهٍ وَقَرَأَتِ التَّعْلِيمَاتِ الْمَكْتُوبَةَ عَلَى الْعُلْبَةِ. قَبْلَ الْخُرُوجِ، شَكَرَتِ الصَّيْدَلِيَّ وَوَضَعَتِ الدَّوَاءَ فِي حَقِيبَتِهَا.',
      translation: 'Maryam pergi bersama ibunya ke apotek setelah mengunjungi dokter. Ibunya membawa resep yang berisi nama obat dan cara penggunaannya. Ia menyerahkan resep kepada apoteker, lalu apoteker mencari obat di rak. Setelah itu, apoteker menjelaskan waktu minum obat dan jumlah penggunaannya dalam sehari. Maryam mendengarkan dengan saksama dan membaca petunjuk pada kemasan. Sebelum keluar, ia berterima kasih kepada apoteker dan menyimpan obat di tas.',
      audioText: 'ذَهَبَتْ مَرْيَمُ إِلَى الصَّيْدَلِيَّةِ مَعَ أُمِّهَا. قَدَّمَتِ الْوَصْفَةَ إِلَى الصَّيْدَلِيِّ، وَاسْتَمَعَتْ إِلَى تَعْلِيمَاتِ اسْتِعْمَالِ الدَّوَاءِ.',
      vocabulary: [{ arabic: 'الصَّيْدَلِيَّةُ', latin: 'aṣ-ṣaydaliyyah', meaning: 'apotek' }, { arabic: 'الصَّيْدَلِيُّ', latin: 'aṣ-ṣaydaliyy', meaning: 'apoteker' }, { arabic: 'وَصْفَةٌ طِبِّيَّةٌ', latin: 'waṣfah ṭibbiyyah', meaning: 'resep dokter' }, { arabic: 'التَّعْلِيمَاتُ', latin: 'at-taʿlīmāt', meaning: 'petunjuk' }],
    },
    sma: {
      reading: 'تُسَاعِدُ الصَّيْدَلِيَّةُ الْمَرْضَى عَلَى الْحُصُولِ عَلَى الْأَدْوِيَةِ وَالْمَعْلُومَاتِ الْمُتَعَلِّقَةِ بِاسْتِعْمَالِهَا. بَعْدَ مُرَاجَعَةِ الطَّبِيبِ، ذَهَبَتْ مَرْيَمُ مَعَ أُمِّهَا إِلَى الصَّيْدَلِيَّةِ لِصَرْفِ وَصْفَةٍ طِبِّيَّةٍ. قَرَأَ الصَّيْدَلِيُّ اسْمَ الدَّوَاءِ وَالْجُرْعَةَ الْمَكْتُوبَةَ فِي الْوَصْفَةِ، ثُمَّ تَأَكَّدَ مِنْ أَنَّ الدَّوَاءَ مُنَاسِبٌ لِلْمَرِيضَةِ. شَرَحَ لَهُمَا مَوْعِدَ تَنَاوُلِ الدَّوَاءِ وَالْمُدَّةَ الْمُحَدَّدَةَ، وَنَبَّهَهُمَا إِلَى ضَرُورَةِ اتِّبَاعِ التَّعْلِيمَاتِ. سَأَلَتْ مَرْيَمُ عَنْ طَرِيقَةِ حِفْظِ الدَّوَاءِ، فَأَوْضَحَ الصَّيْدَلِيُّ أَنَّ بَعْضَ الْأَدْوِيَةِ يَحْتَاجُ إِلَى مَكَانٍ بَارِدٍ وَبَعْضَهَا يُحْفَظُ فِي دَرَجَةِ حَرَارَةٍ عَادِيَّةٍ. قَبْلَ الْمُغَادَرَةِ، رَاجَعَتِ الْأُمُّ الْمَعْلُومَاتِ الْمَكْتُوبَةَ عَلَى الْعُلْبَةِ وَاحْتَفَظَتْ بِالْإِيصَالِ. أَدْرَكَتْ مَرْيَمُ أَنَّ فَهْمَ الْإِرْشَادَاتِ وَسُؤَالَ الْمُخْتَصِّ عِنْدَ عَدَمِ الْوُضُوحِ أَمْرَانِ مُهِمَّانِ لِاسْتِعْمَالِ الدَّوَاءِ بِطَرِيقَةٍ صَحِيحَةٍ.',
      translation: 'Apotek membantu pasien memperoleh obat dan informasi penggunaannya. Setelah memeriksakan diri ke dokter, Maryam pergi bersama ibunya untuk menebus resep. Apoteker membaca nama obat dan dosis pada resep, lalu memastikan obat tersebut sesuai. Ia menjelaskan waktu dan lama penggunaan serta mengingatkan mereka untuk mengikuti petunjuk. Maryam bertanya tentang cara menyimpan obat. Apoteker menjelaskan bahwa sebagian obat memerlukan tempat sejuk, sedangkan yang lain dapat disimpan pada suhu ruang. Sebelum pergi, ibu Maryam memeriksa informasi pada kemasan dan menyimpan bukti pembayaran. Maryam memahami bahwa membaca petunjuk dan bertanya kepada tenaga yang kompeten penting untuk menggunakan obat dengan benar.',
      audioText: 'فِي الصَّيْدَلِيَّةِ، يَقْرَأُ الصَّيْدَلِيُّ الْوَصْفَةَ الطِّبِّيَّةَ. يَشْرَحُ وَقْتَ تَنَاوُلِ الدَّوَاءِ وَطَرِيقَةَ حِفْظِهِ، وَيُجِيبُ عَنْ أَسْئِلَةِ الْمَرِيضِ.',
      vocabulary: [{ arabic: 'الْجُرْعَةُ', latin: 'al-jurʿah', meaning: 'dosis' }, { arabic: 'صَرْفُ الدَّوَاءِ', latin: 'ṣarf ad-dawāʾ', meaning: 'penebusan obat' }, { arabic: 'دَرَجَةُ الْحَرَارَةِ', latin: 'darajat al-ḥarārah', meaning: 'suhu' }, { arabic: 'الْإِيصَالُ', latin: 'al-īṣāl', meaning: 'bukti pembayaran' }],
    },
    quizSmp: [extraQuestion('pharmacy-s1', 'qiraah', 'مَاذَا تَحْمِلُ أُمُّ مَرْيَمَ؟', ['وَصْفَةً طِبِّيَّةً', 'تَذْكِرَةَ سَفَرٍ', 'كِتَابًا'], 0, 'Ibu Maryam membawa resep dokter.'), extraQuestion('pharmacy-s2', 'istima', 'مَنْ يَشْرَحُ تَعْلِيمَاتِ الدَّوَاءِ؟', ['الصَّيْدَلِيُّ', 'السَّائِقُ', 'الْمُعَلِّمُ'], 0, 'Apoteker menjelaskan petunjuk penggunaan obat.')],
    quizSma: [extraQuestion('pharmacy-a1', 'qiraah', 'مَا الْفَائِدَةُ مِنْ قِرَاءَةِ التَّعْلِيمَاتِ؟', ['لِاسْتِعْمَالِ الدَّوَاءِ بِطَرِيقَةٍ صَحِيحَةٍ', 'لِتَغْيِيرِ اسْمِ الدَّوَاءِ', 'لِبَيْعِ الدَّوَاءِ'], 0, 'Petunjuk membantu pasien menggunakan obat dengan benar.'), extraQuestion('pharmacy-a2', 'istima', 'عَمَّ يَشْرَحُ الصَّيْدَلِيُّ؟', ['وَقْتَ تَنَاوُلِ الدَّوَاءِ وَطَرِيقَةَ حِفْظِهِ', 'مَوَاعِيدَ الْحَافِلَاتِ', 'أَسْعَارَ الْكُتُبِ'], 0, 'Audio berisi penjelasan waktu minum dan penyimpanan obat.')],
  },
  {
    id: 'clinic', name: 'Klinik', arabicName: 'الْعِيَادَةُ', category: 'Layanan Publik', description: 'Menyampaikan keluhan dan memahami alur pemeriksaan di klinik.', color: '#d77f9d', orbitPosition: [0, 0, 0],
    smp: {
      reading: 'شَعَرَ خَالِدٌ بِالصُّدَاعِ وَالتَّعَبِ، فَذَهَبَ مَعَ أَبِيهِ إِلَى الْعِيَادَةِ. اسْتَقْبَلَتْهُمَا الْمُمَرِّضَةُ فِي مَكْتَبِ الِاسْتِقْبَالِ وَسَأَلَتْ عَنْ اسْمِهِ وَعُمْرِهِ. بَعْدَ تَسْجِيلِ الْبَيَانَاتِ، جَلَسَ خَالِدٌ فِي غُرْفَةِ الِانْتِظَارِ. نَادَى الطَّبِيبُ اسْمَهُ، فَدَخَلَ مَعَ أَبِيهِ إِلَى غُرْفَةِ الْفَحْصِ. سَأَلَهُ الطَّبِيبُ عَنْ مَوْضِعِ الْأَلَمِ وَمُدَّتِهِ، ثُمَّ قَاسَ دَرَجَةَ حَرَارَتِهِ. أَجَابَ خَالِدٌ عَنِ الْأَسْئِلَةِ بِوُضُوحٍ وَاسْتَمَعَ إِلَى نَصِيحَةِ الطَّبِيبِ. بَعْدَ الْفَحْصِ، شَكَرَ الطَّبِيبَ وَعَادَ إِلَى الْبَيْتِ مَعَ أَبِيهِ.',
      translation: 'Khalid merasa sakit kepala dan lelah, sehingga ia pergi bersama ayahnya ke klinik. Perawat menyambut mereka di bagian pendaftaran dan menanyakan nama serta usia Khalid. Setelah data dicatat, Khalid duduk di ruang tunggu. Dokter memanggil namanya dan ia masuk bersama ayahnya ke ruang pemeriksaan. Dokter bertanya tentang letak dan lama rasa sakit, kemudian mengukur suhu tubuhnya. Khalid menjawab dengan jelas dan mendengarkan nasihat dokter. Setelah pemeriksaan, ia berterima kasih dan pulang bersama ayahnya.',
      audioText: 'ذَهَبَ خَالِدٌ إِلَى الْعِيَادَةِ مَعَ أَبِيهِ. سَأَلَهُ الطَّبِيبُ عَنْ مَوْضِعِ الْأَلَمِ وَمُدَّتِهِ، ثُمَّ فَحَصَهُ.',
      vocabulary: [{ arabic: 'الْعِيَادَةُ', latin: 'al-ʿiyādah', meaning: 'klinik' }, { arabic: 'الصُّدَاعُ', latin: 'aṣ-ṣudāʿ', meaning: 'sakit kepala' }, { arabic: 'غُرْفَةُ الْفَحْصِ', latin: 'ghurfat al-faḥṣ', meaning: 'ruang pemeriksaan' }, { arabic: 'الْمُمَرِّضَةُ', latin: 'al-mumarridah', meaning: 'perawat perempuan' }],
    },
    sma: {
      reading: 'تُقَدِّمُ الْعِيَادَةُ خَدَمَاتٍ صِحِّيَّةً لِلْمُرَاجِعِينَ الَّذِينَ يَحْتَاجُونَ إِلَى الِاسْتِشَارَةِ وَالْفَحْصِ الطِّبِّيِّ. شَعَرَ خَالِدٌ بِصُدَاعٍ مُسْتَمِرٍّ، فَذَهَبَ مَعَ أَبِيهِ إِلَى الْعِيَادَةِ. فِي مَكْتَبِ الِاسْتِقْبَالِ، سَجَّلَ الْمُوَظَّفُ بَيَانَاتِهِ وَطَلَبَ مِنْهُ الِانْتِظَارَ حَتَّى يَحِينَ دَوْرُهُ. عِنْدَمَا دَخَلَ غُرْفَةَ الْفَحْصِ، سَأَلَهُ الطَّبِيبُ عَنْ وَقْتِ بَدْءِ الصُّدَاعِ وَالْأَعْرَاضِ الْمُصَاحِبَةِ لَهُ. أَجَابَ خَالِدٌ عَنِ الْأَسْئِلَةِ، ثُمَّ قَاسَ الطَّبِيبُ دَرَجَةَ حَرَارَتِهِ وَفَحَصَ حَالَتَهُ. بَعْدَ ذَلِكَ، شَرَحَ الطَّبِيبُ خُطَّةَ الْعِنَايَةِ وَأَوْصَى بِالرَّاحَةِ وَمُرَاقَبَةِ الْأَعْرَاضِ. فَهِمَ خَالِدٌ أَنَّ وَصْفَ الْأَعْرَاضِ بِدِقَّةٍ وَطَرْحَ الْأَسْئِلَةِ عِنْدَ الْحَاجَةِ يُسَاعِدَانِ الطَّبِيبَ عَلَى فَهْمِ الْحَالَةِ. كَمَا تَعَلَّمَ أَنَّ احْتِرَامَ مَوَاعِيدِ الْمُرَاجَعَةِ وَاتِّبَاعَ الْإِرْشَادَاتِ مِنْ عَوَامِلِ تَنْظِيمِ الْخِدْمَةِ الصِّحِّيَّةِ.',
      translation: 'Klinik menyediakan layanan kesehatan bagi orang yang memerlukan konsultasi dan pemeriksaan. Khalid mengalami sakit kepala yang terus-menerus, sehingga ia pergi bersama ayahnya ke klinik. Di bagian pendaftaran, petugas mencatat datanya dan memintanya menunggu giliran. Di ruang pemeriksaan, dokter menanyakan kapan sakit kepala dimulai dan gejala lain yang menyertainya. Khalid menjawab pertanyaan tersebut, kemudian dokter mengukur suhu dan memeriksa kondisinya. Dokter menjelaskan rencana perawatan serta menyarankan istirahat dan pemantauan gejala. Khalid memahami bahwa menjelaskan gejala dengan tepat dan bertanya bila perlu membantu dokter memahami kondisi pasien. Ia juga belajar bahwa menghormati jadwal dan mengikuti petunjuk membantu keteraturan layanan kesehatan.',
      audioText: 'فِي الْعِيَادَةِ، يَسْأَلُ الطَّبِيبُ خَالِدًا عَنْ أَعْرَاضِهِ. يَصِفُ خَالِدٌ الصُّدَاعَ وَمُدَّتَهُ، ثُمَّ يَسْتَمِعُ إِلَى إِرْشَادَاتِ الطَّبِيبِ.',
      vocabulary: [{ arabic: 'الِاسْتِشَارَةُ', latin: 'al-istishārah', meaning: 'konsultasi' }, { arabic: 'الْأَعْرَاضُ', latin: 'al-aʿrāḍ', meaning: 'gejala' }, { arabic: 'مُرَاقَبَةٌ', latin: 'murāqabah', meaning: 'pemantauan' }, { arabic: 'الْمُرَاجَعَةُ', latin: 'al-murājaʿah', meaning: 'kunjungan pemeriksaan' }],
    },
    quizSmp: [extraQuestion('clinic-s1', 'qiraah', 'مَعَ مَنْ ذَهَبَ خَالِدٌ إِلَى الْعِيَادَةِ؟', ['مَعَ أَبِيهِ', 'مَعَ صَدِيقِهِ', 'مَعَ مُعَلِّمِهِ'], 0, 'Khalid pergi bersama ayahnya.'), extraQuestion('clinic-s2', 'istima', 'عَمَّ سَأَلَ الطَّبِيبُ خَالِدًا؟', ['عَنِ الْأَلَمِ', 'عَنِ السَّفَرِ', 'عَنِ الدِّرَاسَةِ'], 0, 'Dokter menanyakan letak dan lama rasa sakit.')],
    quizSma: [extraQuestion('clinic-a1', 'qiraah', 'مَا الَّذِي يُسَاعِدُ الطَّبِيبَ عَلَى فَهْمِ الْحَالَةِ؟', ['وَصْفُ الْأَعْرَاضِ بِدِقَّةٍ', 'تَغْيِيرُ مَوْعِدِ الْفَحْصِ', 'تَرْكُ الْأَسْئِلَةِ'], 0, 'Deskripsi gejala yang tepat membantu dokter memahami kondisi pasien.'), extraQuestion('clinic-a2', 'istima', 'مَاذَا يَصِفُ خَالِدٌ؟', ['الصُّدَاعَ وَمُدَّتَهُ', 'مَوْعِدَ الْحَافِلَةِ', 'طَعَامَ الْمَقْصَفِ'], 0, 'Audio menyebut Khalid menjelaskan sakit kepala dan durasinya.')],
  },
]
