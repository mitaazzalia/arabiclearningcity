import type { Lesson, QuizQuestion, VocabularyItem } from '../types'

const v = (arabic: string, latin: string, meaning: string): VocabularyItem => ({ arabic, latin, meaning })

function q(id: string, source: 'qiraah' | 'istima', prompt: string, correct: string, wrong1: string, wrong2: string, explanation: string): QuizQuestion {
  return { id, source, prompt, options: [correct, wrong1, wrong2], answerIndex: 0, explanation }
}

type PlaceSpec = {
  id: string
  name: string
  arabicName: string
  description: string
  color: string
  smpReading: string
  smpTranslation: string
  smaReading: string
  smaTranslation: string
  audioSmp: string
  audioSma: string
  vocabulary: VocabularyItem[]
  questions: [string, string, string, string, string, string]
}

const places: PlaceSpec[] = [
  {
    id: 'bedroom', name: 'Kamar Tidur', arabicName: 'غُرْفَةُ النَّوْمِ', description: 'Mengenal perabot kamar tidur dan rutinitas merapikan tempat istirahat.', color: '#F97316',
    smpReading: 'هَذِهِ غُرْفَةُ النَّوْمِ. فِيهَا سَرِيرٌ وَوِسَادَةٌ وَخِزَانَةٌ. تَضَعُ سَلْمَى مَلَابِسَهَا فِي الْخِزَانَةِ، وَتُرَتِّبُ السَّرِيرَ كُلَّ صَبَاحٍ. تَفْتَحُ النَّافِذَةَ لِيَدْخُلَ الْهَوَاءُ.',
    smpTranslation: 'Ini adalah kamar tidur. Di dalamnya terdapat tempat tidur, bantal, dan lemari. Salma meletakkan pakaiannya di lemari dan merapikan tempat tidur setiap pagi. Ia membuka jendela agar udara masuk.',
    smaReading: 'تُحَافِظُ سَلْمَى عَلَى نَظَافَةِ غُرْفَةِ النَّوْمِ وَتُنَظِّمُ أَشْيَاءَهَا كُلَّ يَوْمٍ. تَضَعُ الْمَلَابِسَ فِي الْخِزَانَةِ، وَتُغَيِّرُ غِطَاءَ السَّرِيرِ بِانْتِظَامٍ. وَتَسْتَخْدِمُ الْمِصْبَاحَ عِنْدَ الْقِرَاءَةِ لَيْلًا. قَبْلَ النَّوْمِ، تُغْلِقُ النَّافِذَةَ وَتُطْفِئُ الْمِصْبَاحَ لِتَسْتَرِيحَ جَيِّدًا.',
    smaTranslation: 'Salma menjaga kebersihan kamar tidur dan menata barang-barangnya setiap hari. Ia meletakkan pakaian di lemari dan mengganti seprai secara teratur. Ia menggunakan lampu ketika membaca pada malam hari. Sebelum tidur, ia menutup jendela dan mematikan lampu agar dapat beristirahat dengan baik.',
    audioSmp: 'هَذِهِ غُرْفَةُ النَّوْمِ. فِيهَا سَرِيرٌ وَوِسَادَةٌ وَخِزَانَةٌ. تُرَتِّبُ سَلْمَى السَّرِيرَ كُلَّ صَبَاحٍ.',
    audioSma: 'تُنَظِّمُ سَلْمَى غُرْفَةَ النَّوْمِ كُلَّ يَوْمٍ. تَضَعُ الْمَلَابِسَ فِي الْخِزَانَةِ وَتُطْفِئُ الْمِصْبَاحَ قَبْلَ النَّوْمِ.',
    vocabulary: [v('غُرْفَةُ النَّوْمِ','ghurfatun-nawm','Kamar tidur'),v('سَرِيرٌ','sarīr','Tempat tidur'),v('وِسَادَةٌ','wisādah','Bantal'),v('خِزَانَةٌ','khizānah','Lemari'),v('بِطَانِيَّةٌ','biṭāniyyah','Selimut'),v('مِصْبَاحٌ','miṣbāḥ','Lampu'),v('نَافِذَةٌ','nāfidhah','Jendela')],
    questions: ['مَاذَا تُرَتِّبُ سَلْمَى كُلَّ صَبَاحٍ؟','السَّرِيرَ','الْمَائِدَةَ','الْحَافِلَةَ','Salma merapikan tempat tidur setiap pagi.','istima'],
  },
  {
    id: 'bathroom', name: 'Kamar Mandi', arabicName: 'الْحَمَّامُ', description: 'Mempelajari perlengkapan mandi dan ungkapan menjaga kebersihan diri.', color: '#0EA5E9',
    smpReading: 'يَدْخُلُ عَلِيٌّ إِلَى الْحَمَّامِ فِي الصَّبَاحِ. يَغْسِلُ وَجْهَهُ وَيَدَيْهِ بِالْمَاءِ وَالصَّابُونِ. يَسْتَخْدِمُ فُرْشَاةَ الْأَسْنَانِ وَمَعْجُونَ الْأَسْنَانِ، ثُمَّ يُجَفِّفُ وَجْهَهُ بِالْمَنْشَفَةِ.',
    smpTranslation: 'Ali masuk ke kamar mandi pada pagi hari. Ia mencuci wajah dan tangannya dengan air dan sabun. Ia menggunakan sikat gigi dan pasta gigi, kemudian mengeringkan wajahnya dengan handuk.',
    smaReading: 'يَهْتَمُّ عَلِيٌّ بِالنَّظَافَةِ الشَّخْصِيَّةِ كُلَّ صَبَاحٍ. يَغْسِلُ يَدَيْهِ وَوَجْهَهُ، ثُمَّ يُنَظِّفُ أَسْنَانَهُ بِالْفُرْشَاةِ وَالْمَعْجُونِ. بَعْدَ ذَلِكَ، يَسْتَخْدِمُ الْمِرْآةَ لِيَتَأَكَّدَ مِنْ نَظَافَتِهِ وَيُعَلِّقُ الْمَنْشَفَةَ فِي مَكَانِهَا. وَيُحَافِظُ عَلَى جَفَافِ أَرْضِيَّةِ الْحَمَّامِ حَتَّى لَا يَنْزَلِقَ أَحَدٌ.',
    smaTranslation: 'Ali memperhatikan kebersihan diri setiap pagi. Ia mencuci tangan dan wajah, lalu membersihkan gigi dengan sikat dan pasta gigi. Setelah itu, ia menggunakan cermin untuk memastikan dirinya bersih dan menggantung handuk pada tempatnya. Ia menjaga lantai kamar mandi tetap kering agar tidak ada orang yang terpeleset.',
    audioSmp: 'يَغْسِلُ عَلِيٌّ وَجْهَهُ بِالْمَاءِ وَالصَّابُونِ. ثُمَّ يَسْتَخْدِمُ فُرْشَاةَ الْأَسْنَانِ وَالْمَنْشَفَةَ.',
    audioSma: 'يَهْتَمُّ عَلِيٌّ بِالنَّظَافَةِ الشَّخْصِيَّةِ. يُنَظِّفُ أَسْنَانَهُ وَيُعَلِّقُ الْمَنْشَفَةَ فِي مَكَانِهَا.',
    vocabulary: [v('الْحَمَّامُ','al-ḥammām','Kamar mandi'),v('مِرْآةٌ','mirʾāh','Cermin'),v('مِغْسَلَةٌ','mighsalah','Wastafel'),v('صَابُونٌ','ṣābūn','Sabun'),v('مَنْشَفَةٌ','manshafah','Handuk'),v('فُرْشَاةُ الْأَسْنَانِ','furshāt al-asnān','Sikat gigi'),v('مَعْجُونُ الْأَسْنَانِ','maʿjūn al-asnān','Pasta gigi'),v('مِرْحَاضٌ','mirḥāḍ','Toilet')],
    questions: ['بِمَاذَا يَغْسِلُ عَلِيٌّ وَجْهَهُ؟','بِالْمَاءِ وَالصَّابُونِ','بِالزَّيْتِ','بِالْحَبْلِ','Ali mencuci wajah dengan air dan sabun.','qiraah'],
  },
  {
    id: 'dining-room', name: 'Ruang Makan', arabicName: 'غُرْفَةُ الطَّعَامِ', description: 'Mengenal peralatan makan dan kebiasaan berkumpul saat makan.', color: '#F59E0B',
    smpReading: 'تَجْتَمِعُ الْأُسْرَةُ فِي غُرْفَةِ الطَّعَامِ. عَلَى الْمَائِدَةِ أَطْبَاقٌ وَمَلَاعِقُ وَأَكْوَابٌ. يَجْلِسُ كُلُّ فَرْدٍ عَلَى كُرْسِيٍّ، وَيَأْكُلُونَ الطَّعَامَ مَعًا. بَعْدَ الْأَكْلِ، تُنَظِّفُ سَلْمَى الْمَائِدَةَ.',
    smpTranslation: 'Keluarga berkumpul di ruang makan. Di atas meja terdapat piring, sendok, dan gelas. Setiap anggota duduk di kursi dan makan bersama. Setelah makan, Salma membersihkan meja.',
    smaReading: 'تَجْعَلُ الْأُسْرَةُ وَقْتَ الطَّعَامِ فُرْصَةً لِلْحِوَارِ وَتَبَادُلِ الْأَخْبَارِ. تُرَتِّبُ الْأُمُّ الْمَائِدَةَ وَتَضَعُ الْأَطْبَاقَ وَالْمَلَاعِقَ وَالْأَكْوَابَ فِي أَمَاكِنِهَا. يَسَاعِدُ الْأَبُ فِي تَقْدِيمِ الطَّعَامِ، وَيَحْمِلُ الْأَبْنَاءُ الْمَاءَ. بَعْدَ الْوَجْبَةِ، يَتَعَاوَنُ الْجَمِيعُ عَلَى تَنْظِيفِ الْغُرْفَةِ وَتَرْتِيبِ الْأَدَوَاتِ.',
    smaTranslation: 'Keluarga menjadikan waktu makan sebagai kesempatan untuk berdialog dan bertukar kabar. Ibu menata meja serta meletakkan piring, sendok, dan gelas pada tempatnya. Ayah membantu menyajikan makanan, sedangkan anak-anak membawa air. Setelah makan, semua anggota bekerja sama membersihkan ruang dan merapikan peralatan.',
    audioSmp: 'تَجْتَمِعُ الْأُسْرَةُ فِي غُرْفَةِ الطَّعَامِ. تَضَعُ الْأُمُّ الْأَطْبَاقَ وَالْمَلَاعِقَ عَلَى الْمَائِدَةِ.',
    audioSma: 'يَتَعَاوَنُ أَفْرَادُ الْأُسْرَةِ عَلَى تَرْتِيبِ الْمَائِدَةِ وَتَنْظِيفِ غُرْفَةِ الطَّعَامِ بَعْدَ الْوَجْبَةِ.',
    vocabulary: [v('غُرْفَةُ الطَّعَامِ','ghurfat aṭ-ṭaʿām','Ruang makan'),v('مَائِدَةٌ','māʾidah','Meja makan'),v('كُرْسِيٌّ','kursiyy','Kursi'),v('طَبَقٌ','ṭabaq','Piring'),v('مِلْعَقَةٌ','milʿaqah','Sendok'),v('شَوْكَةٌ','shawkah','Garpu'),v('كُوبٌ','kūb','Gelas')],
    questions: ['أَيْنَ تَجْتَمِعُ الْأُسْرَةُ؟','فِي غُرْفَةِ الطَّعَامِ','فِي الْمَرْأَبِ','فِي الْمِينَاءِ','Keluarga berkumpul di ruang makan.','qiraah'],
  },
  {
    id: 'study-room', name: 'Ruang Belajar', arabicName: 'غُرْفَةُ الدِّرَاسَةِ', description: 'Mempelajari benda-benda belajar dan rutinitas menyiapkan tugas.', color: '#7C3AED',
    smpReading: 'يَجْلِسُ أَحْمَدُ فِي غُرْفَةِ الدِّرَاسَةِ بَعْدَ الْعَصْرِ. يَفْتَحُ الْكِتَابَ وَالدَّفْتَرَ، وَيَكْتُبُ بِالْقَلَمِ عَلَى الْمَكْتَبِ. يَسْتَخْدِمُ الْحَاسُوبَ لِبَحْثٍ قَصِيرٍ. بَعْدَ ذَلِكَ، يَرْتِّبُ أَدَوَاتَهُ فِي الْحَقِيبَةِ.',
    smpTranslation: 'Ahmad duduk di ruang belajar setelah waktu Asar. Ia membuka buku dan buku tulis, lalu menulis dengan pena di meja. Ia menggunakan komputer untuk mencari informasi singkat. Setelah itu, ia merapikan perlengkapannya di dalam tas.',
    smaReading: 'يُخَصِّصُ أَحْمَدُ وَقْتًا لِلدِّرَاسَةِ فِي غُرْفَةٍ هَادِئَةٍ. يَضَعُ الْكُتُبَ وَالدَّفَاتِرَ عَلَى الْمَكْتَبِ، وَيُعِدُّ قَائِمَةً بِالْمَهَامِّ الَّتِي يَجِبُ إِنْجَازُهَا. يَسْتَخْدِمُ الْحَاسُوبَ لِلْبَحْثِ، وَلَكِنَّهُ يُغْلِقُ التَّطْبِيقَاتِ غَيْرَ الْمُرْتَبِطَةِ بِالدِّرَاسَةِ. وَعِنْدَ الِانْتِهَاءِ، يُرَاجِعُ الْمُلَاحَظَاتِ وَيَضَعُ الْأَدَوَاتِ فِي الْحَقِيبَةِ.',
    smaTranslation: 'Ahmad menyediakan waktu belajar di ruangan yang tenang. Ia meletakkan buku dan catatan di meja serta membuat daftar tugas yang harus diselesaikan. Ia menggunakan komputer untuk mencari informasi, tetapi menutup aplikasi yang tidak berkaitan dengan pelajaran. Setelah selesai, ia meninjau catatan dan memasukkan perlengkapan ke dalam tas.',
    audioSmp: 'يَجْلِسُ أَحْمَدُ فِي غُرْفَةِ الدِّرَاسَةِ. يَفْتَحُ الْكِتَابَ وَيَكْتُبُ فِي الدَّفْتَرِ.',
    audioSma: 'يُرَتِّبُ أَحْمَدُ الْكُتُبَ وَالدَّفَاتِرَ عَلَى الْمَكْتَبِ، وَيَسْتَخْدِمُ الْحَاسُوبَ لِلْبَحْثِ.',
    vocabulary: [v('غُرْفَةُ الدِّرَاسَةِ','ghurfat ad-dirāsah','Ruang belajar'),v('مَكْتَبٌ','maktab','Meja belajar'),v('دَفْتَرٌ','daftar','Buku tulis'),v('قَلَمٌ','qalam','Pulpen'),v('حَاسُوبٌ','ḥāsūb','Komputer'),v('حَقِيبَةٌ','ḥaqībah','Tas'),v('كِتَابٌ','kitāb','Buku')],
    questions: ['بِمَاذَا يَكْتُبُ أَحْمَدُ؟','بِالْقَلَمِ','بِالْمِلْعَقَةِ','بِالْمِفْتَاحِ','Ahmad menulis menggunakan pena.','istima'],
  },
  {
    id: 'garage', name: 'Garasi', arabicName: 'الْمَرْأَبُ', description: 'Mengenal kendaraan pribadi dan benda yang disimpan di garasi.', color: '#64748B',
    smpReading: 'تَقِفُ السَّيَّارَةُ فِي الْمَرْأَبِ أَمَامَ الْبَيْتِ. يَضَعُ الْأَبُ الدَّرَّاجَةَ بِجَانِبِ السَّيَّارَةِ. يَحْفَظُ الْمِفْتَاحَ فِي صُنْدُوقٍ صَغِيرٍ، وَيُغْلِقُ بَابَ الْمَرْأَبِ بَعْدَ الدُّخُولِ.',
    smpTranslation: 'Mobil berada di garasi depan rumah. Ayah meletakkan sepeda di samping mobil. Ia menyimpan kunci di kotak kecil dan menutup pintu garasi setelah masuk.',
    smaReading: 'يُسْتَخْدَمُ الْمَرْأَبُ لِحِفْظِ السَّيَّارَةِ وَالدَّرَّاجَةِ وَبَعْضِ الْأَدَوَاتِ. يَتَأَكَّدُ الْأَبُ مِنْ سَلَامَةِ الْإِطَارَاتِ وَمُسْتَوَى الْوُقُودِ قَبْلَ السَّفَرِ. وَيَضَعُ الْمِفْتَاحَ فِي مَكَانٍ مَعْرُوفٍ حَتَّى يَسْهُلَ الْعُثُورُ عَلَيْهِ. كَمَا يُحَافِظُ عَلَى نَظَافَةِ الْمَرْأَبِ وَيُبْعِدُ الْأَدَوَاتِ عَنْ مَمَرِّ الْحَرَكَةِ.',
    smaTranslation: 'Garasi digunakan untuk menyimpan mobil, sepeda, dan sejumlah peralatan. Ayah memastikan kondisi ban dan jumlah bahan bakar sebelum bepergian. Ia meletakkan kunci di tempat yang mudah ditemukan. Ia juga menjaga kebersihan garasi dan menjauhkan peralatan dari jalur kendaraan.',
    audioSmp: 'تَقِفُ السَّيَّارَةُ فِي الْمَرْأَبِ. يَضَعُ الْأَبُ الدَّرَّاجَةَ بِجَانِبِهَا.',
    audioSma: 'يَفْحَصُ الْأَبُ الْإِطَارَاتِ وَالْوُقُودَ قَبْلَ السَّفَرِ، وَيَحْفَظُ الْمِفْتَاحَ فِي مَكَانٍ آمِنٍ.',
    vocabulary: [v('الْمَرْأَبُ','al-marʾab','Garasi'),v('سَيَّارَةٌ','sayyārah','Mobil'),v('دَرَّاجَةٌ','darrājah','Sepeda'),v('مِفْتَاحٌ','miftāḥ','Kunci'),v('إِطَارٌ','iṭār','Ban'),v('مُحَرِّكٌ','muḥarrik','Mesin'),v('أَدَوَاتٌ','adawāt','Peralatan')],
    questions: ['أَيْنَ تَقِفُ السَّيَّارَةُ؟','فِي الْمَرْأَبِ','فِي الْمَطَارِ','فِي الْمَكْتَبَةِ','Mobil berada di garasi.','qiraah'],
  },
  {
    id: 'garden', name: 'Taman Rumah', arabicName: 'حَدِيقَةُ الْمَنْزِلِ', description: 'Mempelajari tanaman, bagian taman, dan kegiatan merawat lingkungan rumah.', color: '#16A34A',
    smpReading: 'فِي حَدِيقَةِ الْمَنْزِلِ شَجَرَةٌ وَأَزْهَارٌ كَثِيرَةٌ. تَسْقِي مَرْيَمُ النَّبَاتَاتِ كُلَّ صَبَاحٍ. تَجْمَعُ الْأَوْرَاقَ الْيَابِسَةَ وَتَضَعُهَا فِي سَلَّةِ الْمُهْمَلَاتِ. تَجْلِسُ الْأُسْرَةُ فِي الْحَدِيقَةِ بَعْدَ الْعَصْرِ.',
    smpTranslation: 'Di taman rumah terdapat pohon dan banyak bunga. Maryam menyiram tanaman setiap pagi. Ia mengumpulkan daun kering dan meletakkannya di tempat sampah. Keluarga duduk di taman setelah Asar.',
    smaReading: 'تُسَاعِدُ حَدِيقَةُ الْمَنْزِلِ عَلَى تَحْسِينِ الْهَوَاءِ وَتَوْفِيرِ مَكَانٍ مُرِيحٍ لِلْأُسْرَةِ. تَزْرَعُ مَرْيَمُ الْأَزْهَارَ فِي تُرْبَةٍ جَيِّدَةٍ، وَتَسْقِي النَّبَاتَاتِ بِكَمِّيَّةٍ مُنَاسِبَةٍ مِنَ الْمَاءِ. وَتُزِيلُ الْأَعْشَابَ غَيْرَ الْمَرْغُوبَةِ وَتَجْمَعُ الْأَوْرَاقَ الْيَابِسَةَ. وَتَتَعَلَّمُ أَنَّ الْعِنَايَةَ بِالنَّبَاتَاتِ تَحْتَاجُ إِلَى صَبْرٍ وَاسْتِمْرَارٍ.',
    smaTranslation: 'Taman rumah membantu memperbaiki kualitas udara dan menyediakan tempat yang nyaman bagi keluarga. Maryam menanam bunga di tanah yang baik dan menyiram tanaman dengan jumlah air yang sesuai. Ia menyingkirkan rumput liar serta mengumpulkan daun kering. Ia belajar bahwa merawat tanaman membutuhkan kesabaran dan konsistensi.',
    audioSmp: 'تَسْقِي مَرْيَمُ النَّبَاتَاتِ فِي حَدِيقَةِ الْمَنْزِلِ. فِي الْحَدِيقَةِ شَجَرَةٌ وَأَزْهَارٌ.',
    audioSma: 'تَزْرَعُ مَرْيَمُ الْأَزْهَارَ وَتُحَافِظُ عَلَى نَظَافَةِ التُّرْبَةِ وَالْمَكَانِ.',
    vocabulary: [v('حَدِيقَةُ الْمَنْزِلِ','ḥadīqat al-manzil','Taman rumah'),v('شَجَرَةٌ','shajarah','Pohon'),v('زَهْرَةٌ','zahrah','Bunga'),v('عُشْبٌ','ʿushb','Rumput'),v('تُرْبَةٌ','turbah','Tanah'),v('مَاءٌ','māʾ','Air'),v('نَبَاتٌ','nabāt','Tanaman')],
    questions: ['مَاذَا تَسْقِي مَرْيَمُ؟','النَّبَاتَاتِ','السَّيَّارَةَ','الْكُتُبَ','Maryam menyiram tanaman di taman.','istima'],
  },
  {
    id: 'laundry-room', name: 'Ruang Cuci', arabicName: 'غُرْفَةُ الْغَسِيلِ', description: 'Mengenal perlengkapan mencuci, pakaian, dan kegiatan merapikan baju.', color: '#06B6D4',
    smpReading: 'تَغْسِلُ الْأُمُّ الْمَلَابِسَ فِي غُرْفَةِ الْغَسِيلِ. تَضَعُ الْمَلَابِسَ فِي الْغَسَّالَةِ مَعَ الصَّابُونِ وَالْمَاءِ. بَعْدَ الْغَسْلِ، تَنْشُرُهَا عَلَى حَبْلِ الْغَسِيلِ. ثُمَّ تَكْوِي الْقَمِيصَ بِالْمِكْوَاةِ.',
    smpTranslation: 'Ibu mencuci pakaian di ruang cuci. Ia memasukkan pakaian ke mesin cuci bersama sabun dan air. Setelah dicuci, ia menjemurnya di tali jemuran. Kemudian ia menyetrika kemeja dengan setrika.',
    smaReading: 'تُنَظِّمُ الْأُسْرَةُ أَعْمَالَ الْغَسِيلِ حَتَّى تَبْقَى الْمَلَابِسُ نَظِيفَةً وَجَاهِزَةً لِلِاسْتِخْدَامِ. تَفْصِلُ الْأُمُّ الْمَلَابِسَ الْفَاتِحَةَ عَنِ الْمَلَابِسِ الدَّاكِنَةِ، ثُمَّ تَضَعُهَا فِي الْغَسَّالَةِ. بَعْدَ ذَلِكَ، تَنْشُرُهَا فِي مَكَانٍ تَصِلُ إِلَيْهِ الشَّمْسُ وَالْهَوَاءُ. وَعِنْدَمَا تَجِفُّ، تَكْوِيهَا وَتَطْوِيهَا وَتَضَعُهَا فِي الْخِزَانَةِ.',
    smaTranslation: 'Keluarga mengatur kegiatan mencuci agar pakaian tetap bersih dan siap digunakan. Ibu memisahkan pakaian berwarna terang dan gelap, lalu memasukkannya ke mesin cuci. Setelah itu, ia menjemurnya di tempat yang terkena sinar matahari dan udara. Ketika kering, pakaian disetrika, dilipat, dan disimpan di lemari.',
    audioSmp: 'تَغْسِلُ الْأُمُّ الْمَلَابِسَ فِي الْغَسَّالَةِ. ثُمَّ تَنْشُرُهَا عَلَى حَبْلِ الْغَسِيلِ.',
    audioSma: 'تَفْصِلُ الْأُمُّ الْمَلَابِسَ قَبْلَ الْغَسْلِ، وَتَكْوِيهَا بَعْدَ أَنْ تَجِفَّ.',
    vocabulary: [v('غُرْفَةُ الْغَسِيلِ','ghurfat al-ghasīl','Ruang cuci'),v('غَسَّالَةٌ','ghassālah','Mesin cuci'),v('مَلَابِسُ','malābis','Pakaian'),v('صَابُونٌ','ṣābūn','Sabun'),v('مِكْوَاةٌ','mikwāh','Setrika'),v('حَبْلُ الْغَسِيلِ','ḥabl al-ghasīl','Tali jemuran'),v('خِزَانَةٌ','khizānah','Lemari')],
    questions: ['أَيْنَ تَضَعُ الْأُمُّ الْمَلَابِسَ لِلْغَسْلِ؟','فِي الْغَسَّالَةِ','فِي الْمَرْأَبِ','فِي الْفُرْنِ','Ibu memasukkan pakaian ke mesin cuci.','qiraah'],
  },
  {
    id: 'balcony', name: 'Balkon', arabicName: 'الشُّرْفَةُ', description: 'Mendeskripsikan balkon, pemandangan, dan aktivitas santai di rumah.', color: '#0D9488',
    smpReading: 'تَجْلِسُ الْأُسْرَةُ فِي الشُّرْفَةِ بَعْدَ الْمَغْرِبِ. فِيهَا كُرْسِيَّانِ وَنَبَاتَاتٌ صَغِيرَةٌ. يَنْظُرُ أَحْمَدُ إِلَى الشَّارِعِ وَيَسْتَمْتِعُ بِالْهَوَاءِ. تُغْلِقُ الْأُمُّ الْبَابَ عِنْدَمَا يَدْخُلُونَ.',
    smpTranslation: 'Keluarga duduk di balkon setelah Magrib. Di sana terdapat dua kursi dan tanaman kecil. Ahmad melihat ke arah jalan dan menikmati udara. Ibu menutup pintu ketika mereka masuk.',
    smaReading: 'تُعَدُّ الشُّرْفَةُ مَكَانًا مُنَاسِبًا لِلْجُلُوسِ وَقِرَاءَةِ الْكِتَابِ وَمُشَاهَدَةِ الْمَنْظَرِ الْخَارِجِيِّ. تَضَعُ الْأُسْرَةُ كَرَاسِيَّ مُرِيحَةً وَبَعْضَ أَصْصِ النَّبَاتَاتِ فِيهَا. وَتَحْرِصُ عَلَى تَنْظِيفِ الْأَرْضِيَّةِ وَعَدَمِ تَرْكِ الْأَشْيَاءِ فِي مَمَرِّ الْبَيْتِ. وَفِي الْمَسَاءِ، يَجْلِسُ أَفْرَادُ الْأُسْرَةِ لِلتَّحَدُّثِ وَالرَّاحَةِ.',
    smaTranslation: 'Balkon merupakan tempat yang sesuai untuk duduk, membaca buku, dan menikmati pemandangan luar. Keluarga meletakkan kursi yang nyaman serta beberapa pot tanaman di sana. Mereka menjaga kebersihan lantai dan tidak meletakkan barang di jalur rumah. Pada sore hari, anggota keluarga duduk untuk berbincang dan beristirahat.',
    audioSmp: 'تَجْلِسُ الْأُسْرَةُ فِي الشُّرْفَةِ. فِيهَا كَرَاسِيُّ وَنَبَاتَاتٌ صَغِيرَةٌ.',
    audioSma: 'تَسْتَخْدِمُ الْأُسْرَةُ الشُّرْفَةَ لِلرَّاحَةِ وَقِرَاءَةِ الْكُتُبِ وَالتَّحَدُّثِ.',
    vocabulary: [v('الشُّرْفَةُ','ash-shurfah','Balkon'),v('كُرْسِيٌّ','kursiyy','Kursi'),v('نَبَاتٌ','nabāt','Tanaman'),v('بَابٌ','bāb','Pintu'),v('مَنْظَرٌ','manẓar','Pemandangan'),v('هَوَاءٌ','hawāʾ','Udara')],
    questions: ['أَيْنَ تَجْلِسُ الْأُسْرَةُ بَعْدَ الْمَغْرِبِ؟','فِي الشُّرْفَةِ','فِي الْمَطَارِ','فِي الْمَكْتَبَةِ','Keluarga duduk di balkon setelah Magrib.','istima'],
  },
  {
    id: 'hallway', name: 'Lorong Rumah', arabicName: 'مَمَرُّ الْبَيْتِ', description: 'Mengenal bagian penghubung antarruangan dan benda yang ada di lorong.', color: '#A855F7',
    smpReading: 'يَمُرُّ أَحْمَدُ فِي مَمَرِّ الْبَيْتِ لِيَذْهَبَ إِلَى غُرْفَتِهِ. عَلَى الْجِدَارِ صُورَةٌ وَسَاعَةٌ. يَضَعُ الْحِذَاءَ فِي الرَّفِّ قُرْبَ الْبَابِ، وَلَا يَتْرُكُ الْأَشْيَاءَ فِي الطَّرِيقِ.',
    smpTranslation: 'Ahmad melewati lorong rumah untuk menuju kamarnya. Di dinding terdapat gambar dan jam. Ia meletakkan sepatu di rak dekat pintu dan tidak meninggalkan barang di jalan.',
    smaReading: 'يَرْبِطُ مَمَرُّ الْبَيْتِ بَيْنَ الْغُرَفِ وَيُسَهِّلُ الْحَرَكَةَ دَاخِلَ الْمَنْزِلِ. تَضَعُ الْأُسْرَةُ فِيهِ سَجَّادَةً وَرَفًّا صَغِيرًا لِلْأَحْذِيَةِ. وَتُحَافِظُ عَلَى إِضَاءَتِهِ وَتُبْعِدُ الْأَثَاثَ عَنِ الْمَمَرِّ حَتَّى لَا يَتَعَثَّرَ أَحَدٌ. وَيُسَاعِدُ التَّرْتِيبُ عَلَى جَعْلِ الْبَيْتِ أَكْثَرَ أَمَانًا وَرَاحَةً.',
    smaTranslation: 'Lorong rumah menghubungkan ruangan dan memudahkan pergerakan di dalam rumah. Keluarga meletakkan karpet dan rak kecil untuk sepatu. Mereka menjaga pencahayaan dan menjauhkan perabot dari lorong agar tidak ada yang tersandung. Kerapian membuat rumah lebih aman dan nyaman.',
    audioSmp: 'فِي مَمَرِّ الْبَيْتِ صُورَةٌ وَسَاعَةٌ. يَضَعُ أَحْمَدُ الْحِذَاءَ قُرْبَ الْبَابِ.',
    audioSma: 'يُحَافِظُ أَفْرَادُ الْأُسْرَةِ عَلَى نَظَافَةِ الْمَمَرِّ وَيُبْعِدُونَ الْأَثَاثَ عَنْهُ.',
    vocabulary: [v('مَمَرٌّ','mamarr','Lorong'),v('جِدَارٌ','jidār','Dinding'),v('سَاعَةٌ','sāʿah','Jam'),v('صُورَةٌ','ṣūrah','Gambar'),v('حِذَاءٌ','ḥidhāʾ','Sepatu'),v('رَفٌّ','raff','Rak')],
    questions: ['مَاذَا يَضَعُ أَحْمَدُ قُرْبَ الْبَابِ؟','الْحِذَاءَ','الْكِتَابَ','الطَّعَامَ','Ahmad meletakkan sepatu dekat pintu.','qiraah'],
  },
  {
    id: 'taxi-stand', name: 'Pangkalan Taksi', arabicName: 'مَوْقِفُ سَيَّارَاتِ الْأُجْرَةِ', description: 'Berlatih menyebut taksi, pengemudi, penumpang, tujuan, dan ongkos.', color: '#2563EB',
    smpReading: 'تَقِفُ سَيَّارَاتُ الْأُجْرَةِ فِي الْمَوْقِفِ. يَسْأَلُ الرَّاكِبُ السَّائِقَ عَنِ الْأُجْرَةِ إِلَى الْمَحَطَّةِ. يُجِيبُ السَّائِقُ وَيَفْتَحُ بَابَ السَّيَّارَةِ. يَجْلِسُ الرَّاكِبُ وَيَذْهَبَانِ إِلَى الْوِجْهَةِ.',
    smpTranslation: 'Taksi berhenti di pangkalan. Penumpang bertanya kepada pengemudi tentang ongkos menuju stasiun. Pengemudi menjawab dan membuka pintu mobil. Penumpang duduk dan mereka berangkat menuju tujuan.',
    smaReading: 'يَخْتَارُ الْمُسَافِرُ سَيَّارَةَ الْأُجْرَةِ عِنْدَمَا يَحْتَاجُ إِلَى وَسِيلَةِ نَقْلٍ مُبَاشِرَةٍ. قَبْلَ الرُّكُوبِ، يَسْأَلُ عَنِ الْأُجْرَةِ وَالْوَقْتِ الْمُتَوَقَّعِ لِلْوُصُولِ. يَذْكُرُ الْوِجْهَةَ بِوُضُوحٍ، وَيَتَأَكَّدُ مِنْ أَنَّ السَّائِقَ فَهِمَ الْعُنْوَانَ. وَعِنْدَ الْوُصُولِ، يَدْفَعُ الْأُجْرَةَ وَيَشْكُرُ السَّائِقَ.',
    smaTranslation: 'Penumpang memilih taksi ketika membutuhkan transportasi langsung. Sebelum naik, ia menanyakan ongkos dan perkiraan waktu tiba. Ia menyebutkan tujuan dengan jelas serta memastikan pengemudi memahami alamat. Setibanya di tujuan, ia membayar ongkos dan mengucapkan terima kasih kepada pengemudi.',
    audioSmp: 'يَسْأَلُ الرَّاكِبُ سَائِقَ سَيَّارَةِ الْأُجْرَةِ عَنِ الْأُجْرَةِ. ثُمَّ يَذْهَبَانِ إِلَى الْمَحَطَّةِ.',
    audioSma: 'يَذْكُرُ الرَّاكِبُ الْوِجْهَةَ بِوُضُوحٍ، وَيَسْأَلُ عَنِ الْأُجْرَةِ قَبْلَ الرُّكُوبِ.',
    vocabulary: [v('مَوْقِفُ سَيَّارَاتِ الْأُجْرَةِ','mawqif sayyārāt al-ujrah','Pangkalan taksi'),v('سَيَّارَةُ أُجْرَةٍ','sayyārat ujrah','Taksi'),v('سَائِقٌ','sāʾiq','Pengemudi'),v('رَاكِبٌ','rākib','Penumpang'),v('أُجْرَةٌ','ujrah','Ongkos'),v('وِجْهَةٌ','wijhah','Tujuan')],
    questions: ['مَاذَا يَسْأَلُ الرَّاكِبُ السَّائِقَ؟','عَنِ الْأُجْرَةِ','عَنِ الطَّعَامِ','عَنِ الْمَدْرَسَةِ','Penumpang menanyakan ongkos kepada pengemudi.','istima'],
  },
  {
    id: 'bus-stop', name: 'Halte Bus', arabicName: 'مَوْقِفُ الْحَافِلَاتِ', description: 'Mempelajari halte, rute, jadwal, dan cara menunggu bus.', color: '#0D9488',
    smpReading: 'يَنْتَظِرُ الطُّلَّابُ الْحَافِلَةَ فِي مَوْقِفِ الْحَافِلَاتِ. يَقْرَأُ أَحْمَدُ رَقْمَ الْحَافِلَةِ وَوِجْهَتَهَا عَلَى اللَّافِتَةِ. عِنْدَمَا تَصِلُ الْحَافِلَةُ، يَصْعَدُ الطُّلَّابُ بِالتَّرْتِيبِ وَيَجْلِسُونَ فِي مَقَاعِدِهِمْ.',
    smpTranslation: 'Para siswa menunggu bus di halte. Ahmad membaca nomor bus dan tujuannya pada papan informasi. Ketika bus tiba, para siswa naik dengan tertib dan duduk di tempat masing-masing.',
    smaReading: 'يُسَاعِدُ مَوْقِفُ الْحَافِلَاتِ عَلَى تَنْظِيمِ صُعُودِ الرُّكَّابِ وَنُزُولِهِمْ. يَنْظُرُ الْمُسَافِرُ إِلَى رَقْمِ الْخَطِّ وَمَوْعِدِ الْوُصُولِ قَبْلَ اخْتِيَارِ الْحَافِلَةِ. وَيَنْتَظِرُ خَلْفَ الْخَطِّ الْمُحَدَّدِ حَتَّى تَقِفَ الْحَافِلَةُ تَمَامًا. وَيَحْفَظُ التَّذْكِرَةَ لِتَقْدِيمِهَا عِنْدَ الْحَاجَةِ.',
    smaTranslation: 'Halte bus membantu mengatur naik dan turunnya penumpang. Penumpang melihat nomor rute dan waktu kedatangan sebelum memilih bus. Ia menunggu di belakang garis yang ditentukan hingga bus berhenti sepenuhnya. Ia menyimpan tiket untuk ditunjukkan jika diperlukan.',
    audioSmp: 'يَنْتَظِرُ الطُّلَّابُ الْحَافِلَةَ فِي الْمَوْقِفِ. يَقْرَأُ أَحْمَدُ رَقْمَ الْحَافِلَةِ عَلَى اللَّافِتَةِ.',
    audioSma: 'يَنْظُرُ الْمُسَافِرُ إِلَى رَقْمِ الْخَطِّ وَمَوْعِدِ الْوُصُولِ قَبْلَ صُعُودِ الْحَافِلَةِ.',
    vocabulary: [v('مَوْقِفُ الْحَافِلَاتِ','mawqif al-ḥāfilāt','Halte bus'),v('حَافِلَةٌ','ḥāfilah','Bus'),v('رَقْمٌ','raqm','Nomor'),v('خَطٌّ','khaṭṭ','Rute'),v('مَوْعِدٌ','mawʿid','Jadwal'),v('تَذْكِرَةٌ','tadhkirah','Tiket'),v('رَاكِبٌ','rākib','Penumpang')],
    questions: ['أَيْنَ يَنْتَظِرُ الطُّلَّابُ الْحَافِلَةَ؟','فِي مَوْقِفِ الْحَافِلَاتِ','فِي الْمَطْبَخِ','فِي الْمُسْتَشْفَى','Siswa menunggu bus di halte.','qiraah'],
  },
  {
    id: 'port', name: 'Pelabuhan', arabicName: 'الْمِينَاءُ', description: 'Mengenal kapal, dermaga, penumpang, dan kegiatan bongkar muat.', color: '#0284C7',
    smpReading: 'تَقِفُ السَّفِينَةُ فِي الْمِينَاءِ. يَنْتَظِرُ الْمُسَافِرُونَ قُرْبَ الرَّصِيفِ حَتَّى يَسْمَحَ الْمُوَظَّفُ لَهُمْ بِالصُّعُودِ. يَحْمِلُ الْعُمَّالُ الْبَضَائِعَ مِنَ السَّفِينَةِ إِلَى الْمَخْزَنِ. وَيُشَاهِدُ الْأَطْفَالُ الْقَوَارِبَ فِي الْبَحْرِ.',
    smpTranslation: 'Kapal berhenti di pelabuhan. Para penumpang menunggu dekat dermaga hingga petugas mengizinkan mereka naik. Para pekerja membawa barang dari kapal ke gudang. Anak-anak melihat perahu di laut.',
    smaReading: 'يُعَدُّ الْمِينَاءُ مَرْكَزًا لِنَقْلِ الرُّكَّابِ وَالْبَضَائِعِ بَيْنَ الْمُدُنِ وَالْبُلْدَانِ. تَصِلُ إِلَيْهِ سُفُنٌ مُخْتَلِفَةٌ، مِنْهَا سُفُنُ الرُّكَّابِ وَنَاقِلَاتُ الْبُتْرُولِ وَالسُّفُنُ الْكَبِيرَةُ. يَتَأَكَّدُ الْمُوَظَّفُونَ مِنْ وَثَائِقِ الشَّحْنِ وَسَلَامَةِ الْحُمُولَةِ قَبْلَ التَّحْرِيكِ. وَتَحْتَاجُ الْمَرَافِقُ الْبَحْرِيَّةُ إِلَى تَنْظِيمٍ وَرِقَابَةٍ مُسْتَمِرَّةٍ.',
    smaTranslation: 'Pelabuhan merupakan pusat pemindahan penumpang dan barang antarkota maupun antarnegara. Berbagai kapal datang ke sana, termasuk kapal penumpang, kapal tanker minyak, dan kapal besar. Petugas memeriksa dokumen pengiriman serta keamanan muatan sebelum kapal bergerak. Fasilitas pelabuhan membutuhkan pengelolaan dan pengawasan berkelanjutan.',
    audioSmp: 'تَقِفُ السَّفِينَةُ فِي الْمِينَاءِ. يَنْتَظِرُ الْمُسَافِرُونَ قُرْبَ الرَّصِيفِ.',
    audioSma: 'تَنْقُلُ السُّفُنُ الرُّكَّابَ وَالْبَضَائِعَ، وَتَحْتَاجُ إِلَى تَنْظِيمٍ وَرِقَابَةٍ.',
    vocabulary: [v('الْمِينَاءُ','al-mīnāʾ','Pelabuhan'),v('سَفِينَةٌ','safīnah','Kapal'),v('نَاقِلَةُ بُتْرُولٍ','nāqilat bitrūl','Kapal tanker minyak'),v('غَوَّاصَةٌ','ghawwāṣah','Kapal selam'),v('رَصِيفٌ','raṣīf','Dermaga'),v('مَخْزَنٌ','makhzan','Gudang'),v('بَضَائِعُ','baḍāʾiʿ','Barang dagangan')],
    questions: ['أَيْنَ تَقِفُ السَّفِينَةُ؟','فِي الْمِينَاءِ','فِي الْمَدْرَسَةِ','فِي الْمَكْتَبَةِ','Kapal berhenti di pelabuhan.','istima'],
  },
  {
    id: 'parking', name: 'Tempat Parkir', arabicName: 'مَوْقِفُ السَّيَّارَاتِ', description: 'Mempelajari area parkir, kendaraan, pengemudi, dan aturan parkir.', color: '#475569',
    smpReading: 'يَدْخُلُ السَّائِقُ إِلَى مَوْقِفِ السَّيَّارَاتِ بِبُطْءٍ. يَبْحَثُ عَنْ مَكَانٍ فَارِغٍ لِسَيَّارَتِهِ. بَعْدَ إِيقَافِ السَّيَّارَةِ، يُغْلِقُ الْبَابَ وَيَحْمِلُ مِفْتَاحَهُ. لَا يَضَعُ سَيَّارَتَهُ أَمَامَ الْمَدْخَلِ.',
    smpTranslation: 'Pengemudi memasuki tempat parkir dengan perlahan. Ia mencari tempat kosong untuk mobilnya. Setelah memarkir mobil, ia menutup pintu dan membawa kuncinya. Ia tidak memarkir kendaraan di depan pintu masuk.',
    smaReading: 'تُسَاعِدُ مَوَاقِفُ السَّيَّارَاتِ الْمُنَظَّمَةُ عَلَى تَقْلِيلِ الِازْدِحَامِ وَتَسْهِيلِ حَرَكَةِ الْمَرْكَبَاتِ. يَتَّبِعُ السَّائِقُ الْعَلَامَاتِ الْمَرْسُومَةَ وَيَضَعُ سَيَّارَتَهُ دَاخِلَ الْخَطِّ الْمُخَصَّصِ. وَيَتْرُكُ مَمَرَّ الْمُشَاةِ وَمَخَارِجَ الطَّوَارِئِ خَالِيَةً. وَيُسَاعِدُ الِالْتِزَامُ بِالْقَوَاعِدِ عَلَى حِمَايَةِ الْمُسْتَخْدِمِينَ.',
    smaTranslation: 'Tempat parkir yang tertata membantu mengurangi kemacetan dan memudahkan pergerakan kendaraan. Pengemudi mengikuti tanda yang tersedia dan memarkir mobil di dalam garis yang ditentukan. Ia membiarkan jalur pejalan kaki dan pintu darurat tetap kosong. Kepatuhan terhadap aturan membantu melindungi semua pengguna.',
    audioSmp: 'يَبْحَثُ السَّائِقُ عَنْ مَكَانٍ فَارِغٍ فِي مَوْقِفِ السَّيَّارَاتِ.',
    audioSma: 'يَتَّبِعُ السَّائِقُ الْعَلَامَاتِ وَيَتْرُكُ مَمَرَّ الْمُشَاةِ خَالِيًا.',
    vocabulary: [v('مَوْقِفُ السَّيَّارَاتِ','mawqif as-sayyārāt','Tempat parkir'),v('سَيَّارَةٌ','sayyārah','Mobil'),v('سَائِقٌ','sāʾiq','Pengemudi'),v('مَكَانٌ فَارِغٌ','makān fārigh','Tempat kosong'),v('مَدْخَلٌ','madkhal','Pintu masuk'),v('مَخْرَجٌ','makhraj','Pintu keluar'),v('مَمَرُّ الْمُشَاةِ','mamarr al-mushāh','Jalur pejalan kaki')],
    questions: ['عَمَّاذَا يَبْحَثُ السَّائِقُ؟','عَنْ مَكَانٍ فَارِغٍ','عَنْ كِتَابٍ','عَنْ طَعَامٍ','Pengemudi mencari tempat parkir yang kosong.','qiraah'],
  },
  {
    id: 'fuel-station', name: 'SPBU', arabicName: 'مَحَطَّةُ الْوَقُودِ', description: 'Mengenal bahan bakar, pompa bensin, dan percakapan saat mengisi kendaraan.', color: '#EAB308',
    smpReading: 'تَذْهَبُ السَّيَّارَةُ إِلَى مَحَطَّةِ الْوَقُودِ. يَطْلُبُ السَّائِقُ مِنَ الْعَامِلِ مِلْءَ الْخَزَّانِ بِالْوَقُودِ. يَفْتَحُ الْعَامِلُ غِطَاءَ الْخَزَّانِ وَيَسْتَخْدِمُ الْمِضَخَّةَ. بَعْدَ الدَّفْعِ، يُوَاصِلُ السَّائِقُ رِحْلَتَهُ.',
    smpTranslation: 'Mobil pergi ke SPBU. Pengemudi meminta petugas mengisi tangki dengan bahan bakar. Petugas membuka penutup tangki dan menggunakan pompa. Setelah membayar, pengemudi melanjutkan perjalanan.',
    smaReading: 'يَتَوَقَّفُ السَّائِقُ فِي مَحَطَّةِ الْوَقُودِ عِنْدَمَا يَقِلُّ الْوَقُودُ فِي الْخَزَّانِ. يَخْتَارُ نَوْعَ الْوَقُودِ الْمُنَاسِبَ لِلْمَرْكَبَةِ، وَيَتَأَكَّدُ مِنْ إِغْلَاقِ الْخَزَّانِ بَعْدَ الِامْتِلَاءِ. وَيَلْتَزِمُ بِإِرْشَادَاتِ السَّلَامَةِ وَيُبْعِدُ الْهَاتِفَ عَنْ مَنْطِقَةِ التَّعْبِئَةِ. وَتَسْتَخْدِمُ الْمَحَطَّةُ الْمِضَخَّاتِ لِتَوْصِيلِ الْوَقُودِ إِلَى الْمَرْكَبَاتِ.',
    smaTranslation: 'Pengemudi berhenti di SPBU ketika bahan bakar di tangki mulai berkurang. Ia memilih jenis bahan bakar yang sesuai dengan kendaraan dan memastikan tangki ditutup setelah terisi. Ia mematuhi petunjuk keselamatan dan menjauhkan telepon dari area pengisian. SPBU menggunakan pompa untuk menyalurkan bahan bakar ke kendaraan.',
    audioSmp: 'يَطْلُبُ السَّائِقُ الْوَقُودَ فِي مَحَطَّةِ الْوَقُودِ. يَسْتَخْدِمُ الْعَامِلُ الْمِضَخَّةَ.',
    audioSma: 'يَخْتَارُ السَّائِقُ الْوَقُودَ الْمُنَاسِبَ وَيَلْتَزِمُ بِإِرْشَادَاتِ السَّلَامَةِ.',
    vocabulary: [v('مَحَطَّةُ الْوَقُودِ','maḥaṭṭat al-waqūd','SPBU'),v('وَقُودٌ','waqūd','Bahan bakar'),v('مِضَخَّةٌ','miḍakhkhah','Pompa'),v('خَزَّانٌ','khazzān','Tangki'),v('سَائِقٌ','sāʾiq','Pengemudi'),v('عَامِلٌ','ʿāmil','Petugas'),v('مَرْكَبَةٌ','markabah','Kendaraan')],
    questions: ['مَاذَا يَطْلُبُ السَّائِقُ؟','الْوَقُودَ','الْكُتُبَ','الْمَلَابِسَ','Pengemudi meminta bahan bakar.','istima'],
  },
  {
    id: 'bridge', name: 'Jalan dan Jembatan', arabicName: 'الطَّرِيقُ وَالْجِسْرُ', description: 'Mengenal jalan, jembatan, lampu lalu lintas, dan keselamatan berkendara.', color: '#EA580C',
    smpReading: 'يَمُرُّ الطَّرِيقُ فَوْقَ الْجِسْرِ وَتَعْبُرُهُ السَّيَّارَاتُ وَالْحَافِلَاتُ. يَقِفُ السَّائِقُ عِنْدَ إِشَارَةِ الْمُرُورِ الْحَمْرَاءِ. بَعْدَ أَنْ تَضِيءَ الْإِشَارَةُ الْخَضْرَاءُ، يَتَحَرَّكُ بِحَذَرٍ. يَعْبُرُ الْمُشَاةُ مِنَ الْمَمَرِّ الْمُخَصَّصِ.',
    smpTranslation: 'Jalan melintasi jembatan dan dilewati mobil serta bus. Pengemudi berhenti ketika lampu lalu lintas berwarna merah. Setelah lampu hijau menyala, ia bergerak dengan hati-hati. Pejalan kaki menyeberang melalui jalur yang disediakan.',
    smaReading: 'تَرْبِطُ الطُّرُقُ وَالْجُسُورُ بَيْنَ الْمَنَاطِقِ وَتُسَهِّلُ انْتِقَالَ النَّاسِ وَالْبَضَائِعِ. يَجِبُ عَلَى السَّائِقِينَ مُرَاعَاةُ إِشَارَاتِ الْمُرُورِ وَالسُّرْعَةِ الْمُحَدَّدَةِ، خَاصَّةً عِنْدَ الْمُنْعَطَفَاتِ وَفَوْقَ الْجُسُورِ. وَيَسْتَخْدِمُ الْمُشَاةُ الْمَعَابِرَ الْمُخَصَّصَةَ لِعُبُورِ الطَّرِيقِ. وَتُسَاعِدُ قَوَاعِدُ السَّلَامَةِ عَلَى تَقْلِيلِ الْحَوَادِثِ.',
    smaTranslation: 'Jalan dan jembatan menghubungkan wilayah serta memudahkan perpindahan orang dan barang. Pengemudi harus memperhatikan lampu lalu lintas dan batas kecepatan, terutama di tikungan dan jembatan. Pejalan kaki menggunakan penyeberangan yang disediakan. Aturan keselamatan membantu mengurangi kecelakaan.',
    audioSmp: 'يَقِفُ السَّائِقُ عِنْدَ الْإِشَارَةِ الْحَمْرَاءِ. وَيَعْبُرُ الْمُشَاةُ مِنَ الْمَمَرِّ الْمُخَصَّصِ.',
    audioSma: 'تَرْبِطُ الطُّرُقُ وَالْجُسُورُ بَيْنَ الْمَنَاطِقِ، وَتُسَاعِدُ قَوَاعِدُ السَّلَامَةِ عَلَى تَقْلِيلِ الْحَوَادِثِ.',
    vocabulary: [v('طَرِيقٌ','ṭarīq','Jalan'),v('جِسْرٌ','jisr','Jembatan'),v('إِشَارَةُ الْمُرُورِ','ishārat al-murūr','Lampu lalu lintas'),v('سَيَّارَةٌ','sayyārah','Mobil'),v('حَافِلَةٌ','ḥāfilah','Bus'),v('مَشَاةٌ','mushāh','Pejalan kaki'),v('مَعْبَرٌ','maʿbar','Penyeberangan')],
    questions: ['مَتَى يَقِفُ السَّائِقُ؟','عِنْدَ الْإِشَارَةِ الْحَمْرَاءِ','عِنْدَ الْإِشَارَةِ الْخَضْرَاءِ','عِنْدَ الْمَطْعَمِ','Pengemudi berhenti ketika lampu merah menyala.','qiraah'],
  },
  {
    id: 'workshop', name: 'Bengkel Kendaraan', arabicName: 'وَرْشَةُ السَّيَّارَاتِ', description: 'Mempelajari bagian kendaraan, peralatan bengkel, dan percakapan perbaikan.', color: '#7C2D12',
    smpReading: 'تَدْخُلُ السَّيَّارَةُ إِلَى وَرْشَةِ السَّيَّارَاتِ لِأَنَّ إِطَارَهَا تَالِفٌ. يَفْحَصُ الْمِيكَانِيكِيُّ الْإِطَارَ وَالْمُحَرِّكَ. يَسْتَخْدِمُ الْأَدَوَاتِ لِإِصْلَاحِ الْعُطْلِ. بَعْدَ الْإِصْلَاحِ، يَجَرِّبُ السَّيَّارَةَ قَبْلَ تَسْلِيمِهَا.',
    smpTranslation: 'Mobil masuk ke bengkel karena bannya rusak. Montir memeriksa ban dan mesin. Ia menggunakan peralatan untuk memperbaiki kerusakan. Setelah diperbaiki, ia mencoba mobil sebelum menyerahkannya.',
    smaReading: 'تُقَدِّمُ وَرْشَةُ السَّيَّارَاتِ خَدَمَاتِ الْفَحْصِ وَالصِّيَانَةِ وَإِصْلَاحِ الْأَعْطَالِ. يَسْتَمِعُ الْمِيكَانِيكِيُّ إِلَى وَصْفِ السَّائِقِ لِلْمُشْكِلَةِ، ثُمَّ يَفْحَصُ الْمُحَرِّكَ وَالْإِطَارَاتِ وَالْمَكَابِحَ. بَعْدَ تَحْدِيدِ السَّبَبِ، يَشْرَحُ الْإِجْرَاءَاتِ وَالتَّكْلِفَةَ الْمُتَوَقَّعَةَ. وَيَتَأَكَّدُ مِنْ سَلَامَةِ الْمَرْكَبَةِ قَبْلَ إِعَادَتِهَا إِلَى صَاحِبِهَا.',
    smaTranslation: 'Bengkel kendaraan menyediakan layanan pemeriksaan, perawatan, dan perbaikan kerusakan. Montir mendengarkan penjelasan pengemudi tentang masalah kendaraan, lalu memeriksa mesin, ban, dan rem. Setelah menemukan penyebabnya, ia menjelaskan tindakan dan perkiraan biaya. Ia memastikan kendaraan aman sebelum mengembalikannya kepada pemilik.',
    audioSmp: 'يَفْحَصُ الْمِيكَانِيكِيُّ الْإِطَارَ وَالْمُحَرِّكَ. ثُمَّ يُصْلِحُ السَّيَّارَةَ فِي الْوَرْشَةِ.',
    audioSma: 'يَفْحَصُ الْمِيكَانِيكِيُّ الْمَكَابِحَ وَالْمُحَرِّكَ، وَيَتَأَكَّدُ مِنْ سَلَامَةِ الْمَرْكَبَةِ.',
    vocabulary: [v('وَرْشَةُ السَّيَّارَاتِ','warshat as-sayyārāt','Bengkel kendaraan'),v('مِيكَانِيكِيٌّ','mīkānīkiyy','Montir'),v('إِطَارٌ','iṭār','Ban'),v('مُحَرِّكٌ','muḥarrik','Mesin'),v('مِكْبَحٌ','mikbaḥ','Rem'),v('أَدَوَاتٌ','adawāt','Peralatan'),v('إِصْلَاحٌ','iṣlāḥ','Perbaikan')],
    questions: ['مَنْ يَفْحَصُ السَّيَّارَةَ فِي الْوَرْشَةِ؟','الْمِيكَانِيكِيُّ','الْمُعَلِّمُ','الطَّبِيبُ','Montir memeriksa kendaraan di bengkel.','istima'],
  },
  {
    id: 'bicycle-station', name: 'Stasiun Sepeda', arabicName: 'مَحَطَّةُ الدَّرَّاجَاتِ', description: 'Mengenal sepeda, penyewaan, helm, dan perjalanan ramah lingkungan.', color: '#65A30D',
    smpReading: 'يَسْتَأْجِرُ حَسَنٌ دَرَّاجَةً مِنْ مَحَطَّةِ الدَّرَّاجَاتِ. يَخْتَارُ دَرَّاجَةً مُنَاسِبَةً وَيَأْخُذُ خُوذَةً لِلْحِمَايَةِ. يَقُودُهَا فِي الْمَسَارِ الْمُخَصَّصِ، وَلَا يَسِيرُ فِي مَسَارِ السَّيَّارَاتِ.',
    smpTranslation: 'Hasan menyewa sepeda dari stasiun sepeda. Ia memilih sepeda yang sesuai dan mengambil helm untuk perlindungan. Ia mengendarainya di jalur khusus dan tidak melintas di jalur mobil.',
    smaReading: 'تُوَفِّرُ مَحَطَّاتُ الدَّرَّاجَاتِ وَسِيلَةَ نَقْلٍ مُنَاسِبَةً لِلْمَسَافَاتِ الْقَصِيرَةِ. يَسْتَأْجِرُ الْمُسْتَخْدِمُ دَرَّاجَةً وَيَتَأَكَّدُ مِنْ سَلَامَةِ الْمَكَابِحِ وَالْإِطَارَاتِ قَبْلَ الْمُغَادَرَةِ. وَيَلْتَزِمُ بِارْتِدَاءِ الْخُوذَةِ وَالسَّيْرِ فِي الْمَسَارِ الْمُخَصَّصِ. وَتُسَاعِدُ هَذِهِ الْوَسِيلَةُ عَلَى تَقْلِيلِ الِاعْتِمَادِ عَلَى السَّيَّارَاتِ فِي بَعْضِ الرِّحْلَاتِ.',
    smaTranslation: 'Stasiun sepeda menyediakan sarana transportasi yang sesuai untuk jarak pendek. Pengguna menyewa sepeda dan memastikan rem serta ban dalam kondisi baik sebelum berangkat. Ia memakai helm dan menggunakan jalur khusus. Sarana ini membantu mengurangi ketergantungan pada mobil untuk perjalanan tertentu.',
    audioSmp: 'يَسْتَأْجِرُ حَسَنٌ دَرَّاجَةً وَيَأْخُذُ خُوذَةً. يَقُودُ الدَّرَّاجَةَ فِي الْمَسَارِ الْمُخَصَّصِ.',
    audioSma: 'يَفْحَصُ الْمُسْتَخْدِمُ الْمَكَابِحَ وَالْإِطَارَاتِ، وَيَلْتَزِمُ بِارْتِدَاءِ الْخُوذَةِ.',
    vocabulary: [v('مَحَطَّةُ الدَّرَّاجَاتِ','maḥaṭṭat ad-darrājāt','Stasiun sepeda'),v('دَرَّاجَةٌ','darrājah','Sepeda'),v('خُوذَةٌ','khūdhah','Helm'),v('مَسَارٌ','masār','Jalur'),v('مِكْبَحٌ','mikbaḥ','Rem'),v('إِطَارٌ','iṭār','Ban'),v('اِسْتِئْجَارٌ','istiʾjār','Penyewaan')],
    questions: ['مَاذَا يَأْخُذُ حَسَنٌ لِلْحِمَايَةِ؟','خُوذَةً','مِظَلَّةً','حَقِيبَةً','Hasan mengambil helm untuk perlindungan.','qiraah'],
  },
]

export const expandedCityLessons: Lesson[] = places.map((place) => {
  const [prompt, correct, wrong1, wrong2, explanation, source] = place.questions
  return {
    id: place.id,
    name: place.name,
    arabicName: place.arabicName,
    category: place.id === 'bedroom' || place.id === 'bathroom' || place.id === 'dining-room' || place.id === 'study-room' || place.id === 'garage' || place.id === 'garden' || place.id === 'laundry-room' || place.id === 'balcony' || place.id === 'hallway' ? 'Kehidupan Sehari-hari' : 'Transportasi',
    description: place.description,
    color: place.color,
    orbitPosition: [0, 0, 0],
    smp: { reading: place.smpReading, translation: place.smpTranslation, audioText: place.audioSmp, vocabulary: place.vocabulary },
    sma: { reading: place.smaReading, translation: place.smaTranslation, audioText: place.audioSma, vocabulary: place.vocabulary },
    quizSmp: [q(`${place.id}-smp-q1`, source === 'istima' ? 'istima' : 'qiraah', prompt, correct, wrong1, wrong2, explanation), q(`${place.id}-smp-q2`, 'qiraah', `Apa arti nama tempat ${place.arabicName}?`, place.name, 'Bandara', 'Perpustakaan', `${place.arabicName} berarti ${place.name}.`)],
    quizSma: [q(`${place.id}-sma-q1`, 'qiraah', prompt, correct, wrong1, wrong2, explanation), q(`${place.id}-sma-q2`, 'istima', `Kosakata utama yang paling sesuai dengan audio ${place.name.toLowerCase()} adalah ...`, place.vocabulary[0].arabic, place.vocabulary[1].arabic, place.vocabulary[2].arabic, `Audio membahas ${place.name.toLowerCase()}.`)],
  }
})
