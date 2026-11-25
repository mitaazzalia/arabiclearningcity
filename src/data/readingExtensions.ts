export interface ReadingExtension {
  smp: { reading: string; translation: string }
  sma: { reading: string; translation: string }
}

/** Tambahan bacaan orisinal untuk memperkaya konteks dan memberi ruang analisis. */
export const readingExtensions: Record<string, ReadingExtension> = {
  school: {
    smp: {
      reading: "وَفِي يَوْمِ الْخَمِيسِ، يُشَارِكُ عَلِيٌّ فِي نَشَاطِ الْقِرَاءَةِ مَعَ أَصْدِقَائِهِ. يَتَقَاسَمُ الطُّلَّابُ الْكُتُبَ وَيَتَنَاقَشُونَ فِي مَعَانِي الْكَلِمَاتِ الْجَدِيدَةِ. وَقَبْلَ الْمُغَادَرَةِ، يُسَاعِدُ عَلِيٌّ فِي تَرْتِيبِ الْمَقَاعِدِ وَإِغْلَاقِ النَّوَافِذِ.",
      translation: "Pada hari Kamis, Ali mengikuti kegiatan membaca bersama teman-temannya. Para siswa berbagi buku dan mendiskusikan makna kosakata baru. Sebelum pulang, Ali membantu merapikan kursi dan menutup jendela.",
    },
    sma: {
      reading: "وَتُنَظِّمُ الْمَدْرَسَةُ أَنْشِطَةً لَا صَفِّيَّةً، مِثْلَ نَادِي الْقِرَاءَةِ وَالْفُنُونِ وَالرِّيَاضَةِ. تُتِيحُ هَذِهِ الْأَنْشِطَةُ لِلطُّلَّابِ فُرْصَةً لِاكْتِشَافِ مَوَاهِبِهِمْ وَتَعَلُّمِ الْعَمَلِ الْجَمَاعِيِّ. وَيُسَاعِدُ تَقْيِيمُ الْأَنْشِطَةِ بَعْدَ انْتِهَائِهَا عَلَى تَحْسِينِ الْبَرَامِجِ فِي الْفَصْلِ التَّالِي.",
      translation: "Sekolah menyelenggarakan kegiatan ekstrakurikuler, seperti klub membaca, seni, dan olahraga. Kegiatan tersebut memberi siswa kesempatan menemukan bakat dan belajar bekerja sama. Evaluasi setelah kegiatan membantu sekolah memperbaiki program pada periode berikutnya.",
    },
  },
  classroom: {
    smp: {
      reading: "فِي الْعَمَلِ الْجَمَاعِيِّ، تَتَقَاسَمُ فَاطِمَةُ وَزَمِيلَاتُهَا الْمَهَامَّ. تَقْرَأُ إِحْدَاهُنَّ السُّؤَالَ، وَتَكْتُبُ الْأُخْرَى الْإِجَابَةَ عَلَى الْوَرَقَةِ. وَإِذَا اخْتَلَفْنَ فِي الْإِجَابَةِ، يَرْجِعْنَ إِلَى الْكِتَابِ وَيَسْأَلْنَ الْمُعَلِّمَ عِنْدَ الْحَاجَةِ.",
      translation: "Dalam kerja kelompok, Fatimah dan teman-temannya membagi tugas. Seorang membaca pertanyaan, sedangkan yang lain menulis jawaban. Jika terdapat perbedaan pendapat, mereka memeriksa buku dan bertanya kepada guru bila diperlukan.",
    },
    sma: {
      reading: "وَقَدْ يَسْتَخْدِمُ الْمُعَلِّمُ وَسَائِلَ مُتَنَوِّعَةً، مِثْلَ الْخَرَائِطِ وَالْجَدَاوِلِ وَالتَّسْجِيلَاتِ الصَّوْتِيَّةِ. وَيَتَعَلَّمُ الطُّلَّابُ أَنْ يُقَارِنُوا الْمَعْلُومَاتِ وَيُبَيِّنُوا أَسْبَابَ اخْتِيَارِ الْإِجَابَةِ. وَبِهَذِهِ الطَّرِيقَةِ، لَا يَكُونُ دَوْرُهُمْ مُجَرَّدَ الِاسْتِمَاعِ، بَلْ يَشْمَلُ الْمُنَاقَشَةَ وَالتَّفْكِيرَ النَّاقِدَ.",
      translation: "Guru dapat menggunakan media yang beragam, seperti peta, tabel, dan rekaman suara. Siswa belajar membandingkan informasi serta menjelaskan alasan memilih jawaban. Dengan cara ini, peran siswa tidak hanya mendengarkan, tetapi juga berdiskusi dan berpikir kritis.",
    },
  },
  canteen: {
    smp: {
      reading: "بَعْدَ الِانْتِهَاءِ مِنَ الطَّلَبِ، يَشْكُرُ أَحْمَدُ الْبَائِعَ وَيَحْمِلُ صِينِيَّتَهُ إِلَى الطَّاوِلَةِ. يَأْكُلُ مَعَ صَدِيقِهِ بِهُدُوءٍ، وَلَا يَتْرُكُ بَقَايَا الطَّعَامِ عَلَى الْمَقْعَدِ. ثُمَّ يَضَعُ الْأَوَانِيَ فِي مَكَانِهَا وَيَغْسِلُ يَدَيْهِ قَبْلَ الْعَوْدَةِ إِلَى الْفَصْلِ.",
      translation: "Setelah memesan, Ahmad berterima kasih kepada penjual dan membawa nampannya ke meja. Ia makan bersama temannya dengan tertib dan tidak meninggalkan sisa makanan di kursi. Kemudian ia mengembalikan peralatan ke tempatnya dan mencuci tangan sebelum kembali ke kelas.",
    },
    sma: {
      reading: "وَيَنْبَغِي لِلطَّالِبِ أَنْ يَنْتَبِهَ إِلَى نَظَافَةِ الْأَطْعِمَةِ وَطَرِيقَةِ حِفْظِهَا. فَبَعْضُ الْوَجَبَاتِ تُقَدَّمُ سَاخِنَةً، وَبَعْضُ الْمَشْرُوبَاتِ تُحْفَظُ فِي أَوْعِيَةٍ مُغْلَقَةٍ. وَيَسْتَطِيعُ الطَّالِبُ أَنْ يَسْأَلَ الْبَائِعَ عَنْ الْمُكَوِّنَاتِ إِذَا احْتَاجَ إِلَى مَعْلُومَاتٍ إِضَافِيَّةٍ.",
      translation: "Siswa perlu memperhatikan kebersihan makanan dan cara penyimpanannya. Sebagian hidangan disajikan panas, sedangkan minuman disimpan dalam wadah tertutup. Siswa dapat menanyakan bahan makanan kepada penjual jika memerlukan informasi tambahan.",
    },
  },
  library: {
    smp: {
      reading: "وَتَسْتَخْدِمُ مَرْيَمُ فِهْرِسَ الْمَكْتَبَةِ لِلْبَحْثِ عَنْ كِتَابٍ آخَرَ. تَكْتُبُ عُنْوَانَ الْكِتَابِ وَاسْمَ مُؤَلِّفِهِ فِي دَفْتَرِهَا، ثُمَّ تُعِيدُهُ إِلَى الرَّفِّ بَعْدَ الْقِرَاءَةِ. وَتُخْفِضُ صَوْتَهَا لِكَيْ لَا تُزْعِجَ الْقُرَّاءَ الْآخَرِينَ.",
      translation: "Maryam menggunakan katalog perpustakaan untuk mencari buku lain. Ia mencatat judul dan nama penulis di buku catatan, lalu mengembalikan buku ke rak setelah membaca. Ia berbicara dengan suara pelan agar tidak mengganggu pembaca lain.",
    },
    sma: {
      reading: "وَعِنْدَ إِعْدَادِ الْبَحْثِ، تُقَارِنُ مَرْيَمُ بَيْنَ مَعْلُومَاتِ كِتَابَيْنِ وَتَتَأَكَّدُ مِنْ مَصْدَرِ كُلِّ مَعْلُومَةٍ. وَتَكْتُبُ بَيَانَاتِ الْمَرْجِعِ حَتَّى تَسْتَطِيعَ الرُّجُوعَ إِلَيْهِ. وَتَفْهَمُ أَنَّ الِاسْتِفَادَةَ مِنَ الْمَصَادِرِ تَحْتَاجُ إِلَى الْأَمَانَةِ وَعَدَمِ نَسْخِ عَمَلِ الْآخَرِينَ دُونَ ذِكْرِهِمْ.",
      translation: "Saat menyusun tugas, Maryam membandingkan informasi dari dua buku dan memeriksa sumber setiap informasi. Ia mencatat identitas referensi agar dapat menggunakannya kembali. Ia memahami bahwa pemanfaatan sumber memerlukan kejujuran dan tidak menyalin karya orang lain tanpa menyebutkan sumbernya.",
    },
  },
  home: {
    smp: {
      reading: "قَبْلَ وَقْتِ النَّوْمِ، يُرَاجِعُ أَحْمَدُ جَدْوَلَهُ لِلْيَوْمِ التَّالِي. يُجَهِّزُ الْكُتُبَ وَالْقَلَمَ وَالزِّيَّ الْمَدْرَسِيَّ، ثُمَّ يَضَعُهَا فِي مَكَانٍ وَاحِدٍ. وَتُذَكِّرُهُ أُمُّهُ بِأَهَمِّيَّةِ النَّوْمِ الْكَافِي وَالِاسْتِعْدَادِ الْمُبَكِّرِ.",
      translation: "Sebelum tidur, Ahmad memeriksa jadwal untuk hari berikutnya. Ia menyiapkan buku, pena, dan seragam sekolah, kemudian meletakkannya di satu tempat. Ibunya mengingatkan pentingnya tidur cukup dan mempersiapkan keperluan lebih awal.",
    },
    sma: {
      reading: "وَتُسَاعِدُ الْمُشَارَكَةُ فِي الْأَعْمَالِ الْمَنْزِلِيَّةِ عَلَى تَعْلِيمِ الْأَبْنَاءِ تَحَمُّلَ الْمَسْؤُولِيَّةِ. فَيَتَوَلَّى كُلُّ فَرْدٍ مَهَمَّةً تُنَاسِبُ وَقْتَهُ وَقُدْرَتَهُ، مَعَ مُرَاعَاةِ حَاجَاتِ الْآخَرِينَ. وَعِنْدَ حُدُوثِ خِلَافٍ، يَتَحَاوَرُ أَفْرَادُ الْأُسْرَةِ لِلْوُصُولِ إِلَى حَلٍّ مُنَاسِبٍ.",
      translation: "Keikutsertaan dalam pekerjaan rumah mengajarkan anak bertanggung jawab. Setiap anggota keluarga memperoleh tugas sesuai waktu dan kemampuannya dengan tetap memperhatikan kebutuhan orang lain. Jika terjadi perbedaan pendapat, keluarga berdialog untuk menemukan penyelesaian yang sesuai.",
    },
  },
  market: {
    smp: {
      reading: "وَعِنْدَ اخْتِيَارِ الْفَوَاكِهِ، تَنْظُرُ نُورٌ إِلَى لَوْنِهَا وَحَالَتِهَا وَتَسْأَلُ عَنِ الْوَزْنِ. يَضَعُ الْبَائِعُ الْمُشْتَرَيَاتِ فِي كِيسٍ، وَتُرَاجِعُ نُورٌ الْحِسَابَ قَبْلَ الدَّفْعِ. وَتَحْمِلُ قَائِمَةَ الْمُشْتَرَيَاتِ لِتَتَذَكَّرَ حَاجَاتِ الْبَيْتِ.",
      translation: "Saat memilih buah, Nur memperhatikan warna dan kondisinya serta menanyakan beratnya. Penjual memasukkan barang ke kantong, lalu Nur memeriksa perhitungan sebelum membayar. Ia membawa daftar belanja agar mengingat kebutuhan rumah.",
    },
    sma: {
      reading: "وَلَا تَعْتَمِدُ نُورٌ عَلَى السِّعْرِ وَحْدَهُ، بَلْ تُقَارِنُ أَيْضًا بَيْنَ الْجَوْدَةِ وَالْكَمِّيَّةِ وَتَارِيخِ الصَّلَاحِيَّةِ. وَتَسْأَلُ عَنِ الْمُنْتَجِ إِذَا لَمْ تَكُنْ مَعْلُومَاتُهُ وَاضِحَةً. وَبَعْدَ الشِّرَاءِ، تَحْتَفِظُ بِالْإِيصَالِ لِمُرَاجَعَةِ الْمَبْلَغِ وَالْأَصْنَافِ الَّتِي دَفَعَتْ ثَمَنَهَا.",
      translation: "Nur tidak hanya mempertimbangkan harga, tetapi juga membandingkan kualitas, jumlah, dan tanggal kedaluwarsa. Ia bertanya tentang produk jika informasinya belum jelas. Setelah berbelanja, ia menyimpan struk untuk memeriksa jumlah pembayaran dan barang yang dibeli.",
    },
  },
  mosque: {
    smp: {
      reading: "وَبَعْدَ الصَّلَاةِ، يُعِيدُ عُمَرُ الْمُصْحَفَ إِلَى الرَّفِّ وَيَتَأَكَّدُ مِنْ أَنَّ الْمَكَانَ مُرَتَّبٌ. يَتَحَدَّثُ مَعَ أَصْدِقَائِهِ بِصَوْتٍ مُنْخَفِضٍ، ثُمَّ يَعُودُ إِلَى الْفَصْلِ فِي الْوَقْتِ الْمُنَاسِبِ. وَيَتَعَلَّمُ أَنْ يَحْتَرِمَ حَقَّ الْآخَرِينَ فِي الْعِبَادَةِ.",
      translation: "Setelah salat, Umar mengembalikan mushaf ke rak dan memastikan tempat tetap rapi. Ia berbicara dengan teman-temannya menggunakan suara pelan, lalu kembali ke kelas tepat waktu. Ia belajar menghormati hak orang lain untuk beribadah.",
    },
    sma: {
      reading: "وَتُقَامُ فِي الْمَسْجِدِ بَعْضُ الْأَنْشِطَةِ، مِثْلَ دَرْسٍ قَصِيرٍ أَوْ حَلْقَةِ تِلَاوَةٍ. وَتَحْتَاجُ هَذِهِ الْأَنْشِطَةُ إِلَى تَنْظِيمِ الْوَقْتِ وَتَرْتِيبِ الْمَكَانِ وَمُرَاعَاةِ حُضُورِ الْمُصَلِّينَ. وَيَتَعَلَّمُ الطَّالِبُ مِنْهَا الْمُوَاظَبَةَ وَالْإِنْصَاتَ وَاحْتِرَامَ الْجَمَاعَةِ.",
      translation: "Masjid juga digunakan untuk kegiatan, seperti pelajaran singkat atau halaqah tilawah. Kegiatan tersebut memerlukan pengaturan waktu, penataan tempat, dan perhatian terhadap jamaah. Siswa belajar konsisten, menyimak, dan menghormati kebersamaan.",
    },
  },
  hospital: {
    smp: {
      reading: "بَعْدَ الْفَحْصِ، يَسْأَلُ أَحْمَدُ الْمُمَرِّضَةَ عَنْ مَكَانِ الصَّيْدَلِيَّةِ وَمَكْتَبِ الْمَوَاعِيدِ. تُرْشِدُهُ الْمُمَرِّضَةُ إِلَى الطَّرِيقِ الصَّحِيحِ، وَيَنْتَظِرُ مَعَ أُمِّهِ حَتَّى تَنْتَهِيَ الْإِجْرَاءَاتُ. وَيَحْرِصَانِ عَلَى حِفْظِ الْوَثَائِقِ وَعَدَمِ إِزْعَاجِ الْمَرْضَى الْآخَرِينَ.",
      translation: "Setelah pemeriksaan, Ahmad bertanya kepada perawat tentang lokasi apotek dan bagian jadwal. Perawat menunjukkan arah yang benar, lalu Ahmad menunggu bersama ibunya sampai prosedur selesai. Mereka menjaga dokumen dan tidak mengganggu pasien lain.",
    },
    sma: {
      reading: "وَتَتَعَاوَنُ أَقْسَامُ الْمُسْتَشْفَى لِتَنْظِيمِ خِدْمَةِ الْمَرْضَى، فَيَنْتَقِلُ الْمَرِيضُ بَيْنَ الِاسْتِقْبَالِ وَالْفَحْصِ وَالْمُخْتَبَرِ عِنْدَ الْحَاجَةِ. وَمِنَ الْمُهِمِّ أَنْ يَحْتَفِظَ بِمَعْلُومَاتِ مَوْعِدِهِ وَأَنْ يَسْأَلَ عَنِ الْإِجْرَاءَاتِ الَّتِي لَا يَفْهَمُهَا. وَيُسَاعِدُ التَّوَاصُلُ الْوَاضِحُ عَلَى تَقْلِيلِ سُوءِ الْفَهْمِ.",
      translation: "Bagian-bagian rumah sakit bekerja sama mengatur layanan pasien. Pasien dapat berpindah dari pendaftaran ke pemeriksaan dan laboratorium jika diperlukan. Ia perlu menyimpan informasi jadwal dan bertanya tentang prosedur yang belum dipahami. Komunikasi yang jelas membantu mengurangi kesalahpahaman.",
    },
  },
  park: {
    smp: {
      reading: "وَفِي نِهَايَةِ الزِّيَارَةِ، تَجْمَعُ فَاطِمَةُ الْأَوْرَاقَ الصَّغِيرَةَ الَّتِي وَجَدَتْهَا قُرْبَ الْمَقْعَدِ. تَضَعُهَا فِي سَلَّةِ الْمُهْمَلَاتِ وَتُذَكِّرُ أَخَاهَا بِعَدَمِ قَطْفِ الْأَزْهَارِ. وَتَفْهَمُ أَنَّ الْحَدِيقَةَ مَكَانٌ مُشْتَرَكٌ يَجِبُ عَلَى الْجَمِيعِ الْمُحَافَظَةُ عَلَيْهِ.",
      translation: "Pada akhir kunjungan, Fatimah mengumpulkan kertas kecil yang ditemukan di dekat bangku. Ia membuangnya ke tempat sampah dan mengingatkan adiknya agar tidak memetik bunga. Ia memahami bahwa taman merupakan tempat bersama yang perlu dijaga semua orang.",
    },
    sma: {
      reading: "وَتُعَدُّ الْحَدِيقَةُ الْعَامَّةُ مَسَاحَةً مُشْتَرَكَةً لِأَفْرَادِ الْمُجْتَمَعِ. فَالزَّائِرُ يَسْتَفِيدُ مِنَ الْمَرَافِقِ، وَفِي الْمُقَابِلِ يَلْتَزِمُ بِالْقَوَاعِدِ وَيَحْمِي النَّبَاتَاتِ وَالْأَثَاثَ. وَتُسَاعِدُ الْمُشَارَكَةُ فِي الْمُحَافَظَةِ عَلَى النَّظَافَةِ عَلَى جَعْلِ الْمَكَانِ مُرِيحًا وَآمِنًا لِلْأَطْفَالِ وَالْكِبَارِ.",
      translation: "Taman umum merupakan ruang bersama bagi masyarakat. Pengunjung memanfaatkan fasilitas sekaligus menaati aturan dan menjaga tanaman serta perabot. Partisipasi dalam menjaga kebersihan membuat tempat tersebut nyaman dan aman bagi anak-anak maupun orang dewasa.",
    },
  },
  restaurant: {
    smp: {
      reading: "وَإِذَا وَصَلَ الطَّعَامُ، تَتَأَكَّدُ نُورٌ مِنْ أَنَّ الطَّلَبَ مُطَابِقٌ لِمَا اخْتَارَتْهُ. تَشْكُرُ الْخَادِمَ وَتَتَنَاوَلُ وَجْبَتَهَا مَعَ أُسْرَتِهَا. وَبَعْدَ الْفَرَاغِ، تَطْلُبُ الْحِسَابَ وَتُرَاجِعُ الْمَبْلَغَ قَبْلَ الدَّفْعِ.",
      translation: "Ketika makanan datang, Nur memastikan pesanan sesuai dengan pilihannya. Ia berterima kasih kepada pelayan dan makan bersama keluarga. Setelah selesai, ia meminta tagihan dan memeriksa jumlahnya sebelum membayar.",
    },
    sma: {
      reading: "وَتَخْتَلِفُ الْمَطَاعِمُ فِي قَوَائِمِهَا وَأَسْعَارِهَا وَطَرِيقَةِ تَقْدِيمِ الْخِدْمَةِ. لِذَلِكَ يَقْرَأُ الزَّبُونُ الْقَائِمَةَ وَيَسْأَلُ عَنِ الْمُكَوِّنَاتِ أَوْ طَرِيقَةِ التَّحْضِيرِ إِذَا احْتَاجَ إِلَى ذَلِكَ. وَعِنْدَ وُجُودِ خَطَأٍ فِي الطَّلَبِ، يَشْرَحُ الْمُشْكِلَةَ بِهُدُوءٍ وَاحْتِرَامٍ.",
      translation: "Restoran memiliki menu, harga, dan cara pelayanan yang berbeda. Karena itu, pelanggan membaca menu dan bertanya tentang bahan atau cara penyajian jika diperlukan. Jika terdapat kesalahan pesanan, pelanggan menjelaskan masalah dengan tenang dan sopan.",
    },
  },
  beach: {
    smp: {
      reading: "وَيَبْقَى حَسَنٌ قَرِيبًا مِنْ أَفْرَادِ أُسْرَتِهِ وَلَا يَذْهَبُ إِلَى مَكَانٍ عَمِيقٍ. يَقْرَأُ الْإِرْشَادَاتِ الْمَوْجُودَةَ عَلَى اللَّافِتَاتِ وَيَسْتَمِعُ إِلَى تَوْجِيهَاتِ الْمُنْقِذِ. وَقَبْلَ الْمُغَادَرَةِ، يَتَأَكَّدُ مِنْ نَظَافَةِ الْمَكَانِ وَيَأْخُذُ أَغْرَاضَهُ.",
      translation: "Hasan tetap dekat dengan anggota keluarganya dan tidak pergi ke area yang dalam. Ia membaca petunjuk pada papan dan mendengarkan arahan penjaga pantai. Sebelum pulang, ia memastikan tempat tetap bersih dan membawa barang-barangnya.",
    },
    sma: {
      reading: "وَتَتَأَثَّرُ الْبِيئَةُ السَّاحِلِيَّةُ بِالسُّلُوكِ الْيَوْمِيِّ لِلزُّوَّارِ، فَتَرْكُ الْمُخَلَّفَاتِ قَدْ يُضِرُّ بِالْحَيَوَانَاتِ وَالْمِيَاهِ. وَيَسْتَطِيعُ الزَّائِرُ أَنْ يُقَلِّلَ اسْتِخْدَامَ الْبِلَاسْتِيكِ وَأَنْ يَجْمَعَ نُفَايَاتِهِ قَبْلَ الْمُغَادَرَةِ. وَتُسَاعِدُ هَذِهِ الْخُطُوَاتُ عَلَى حِمَايَةِ الشَّاطِئِ لِلزُّوَّارِ فِي الْمُسْتَقْبَلِ.",
      translation: "Lingkungan pesisir dipengaruhi perilaku sehari-hari pengunjung. Sampah yang ditinggalkan dapat membahayakan hewan dan kualitas air. Pengunjung dapat mengurangi penggunaan plastik serta mengumpulkan sampah sebelum pulang. Langkah tersebut membantu menjaga pantai bagi pengunjung pada masa mendatang.",
    },
  },
  airport: {
    smp: {
      reading: "بَعْدَ تَسْلِيمِ الْحَقِيبَةِ، تَحْصُلُ سَلْمَى عَلَى بِطَاقَةِ الصُّعُودِ. تَقْرَأُ رَقْمَ الْبَوَّابَةِ وَتَجْلِسُ فِي صَالَةِ الِانْتِظَارِ. وَعِنْدَ اقْتِرَابِ وَقْتِ الرِّحْلَةِ، تَسْتَمِعُ إِلَى الْإِعْلَانِ وَتَسْتَعِدُّ لِلصُّعُودِ مَعَ أُسْرَتِهَا.",
      translation: "Setelah menyerahkan bagasi, Salma menerima kartu naik pesawat. Ia membaca nomor gerbang dan duduk di ruang tunggu. Ketika waktu penerbangan mendekat, ia mendengarkan pengumuman dan bersiap naik bersama keluarganya.",
    },
    sma: {
      reading: "وَتَتَطَلَّبُ الرِّحْلَةُ الْجَوِّيَّةُ الِانْتِبَاهَ إِلَى الْوَثَائِقِ وَمَوَاعِيدِ الْحُضُورِ وَإِجْرَاءَاتِ الْأَمْتِعَةِ. وَيُفَضَّلُ أَنْ يَصِلَ الْمُسَافِرُ مُبَكِّرًا لِيَجِدَ وَقْتًا كَافِيًا لِلتَّسْجِيلِ وَالتَّفْتِيشِ. وَإِذَا تَغَيَّرَتِ الْبَوَّابَةُ، فَيَنْبَغِي مُرَاجَعَةُ الشَّاشَةِ وَاتِّبَاعُ تَوْجِيهَاتِ الْمَوْظَّفِينَ.",
      translation: "Perjalanan udara memerlukan perhatian terhadap dokumen, waktu kedatangan, dan prosedur bagasi. Penumpang sebaiknya datang lebih awal agar memiliki waktu cukup untuk check-in dan pemeriksaan. Jika gerbang berubah, penumpang perlu memeriksa layar dan mengikuti arahan petugas.",
    },
  },
  station: {
    smp: {
      reading: "يَحْمِلُ مَاهِرٌ تَذْكِرَتَهُ وَيُحَافِظُ عَلَيْهَا حَتَّى نِهَايَةِ الرِّحْلَةِ. وَعِنْدَ الْوُصُولِ، يَنْتَظِرُ أُخْتَهُ قُرْبَ الْبَوَّابَةِ وَلَا يَتْرُكُ أَمْتِعَتَهُ فِي الْمَحَطَّةِ. ثُمَّ يَخْرُجَانِ مِنَ الْمَحَطَّةِ وَيَتَّبِعَانِ لَافِتَاتِ الْخُرُوجِ.",
      translation: "Mahir menyimpan tiket sampai perjalanan selesai. Setelah tiba, ia menunggu saudarinya di dekat pintu keluar dan tidak meninggalkan barang bawaan di stasiun. Kemudian mereka keluar dengan mengikuti papan petunjuk.",
    },
    sma: {
      reading: "وَتَتَغَيَّرُ بَعْضُ مَوَاعِيدِ الْقِطَارَاتِ فِي أَيَّامِ الْعُطْلَةِ بِسَبَبِ زِيَادَةِ عَدَدِ الْمُسَافِرِينَ. لِذَلِكَ يُرَاجِعُ مَاهِرٌ الْمَعْلُومَاتِ قَبْلَ التَّوَجُّهِ إِلَى الرَّصِيفِ، وَيَسْأَلُ الْمُوَظَّفَ إِذَا لَمْ يَفْهَمِ الْإِعْلَانَ. وَيُسَاعِدُ التَّخْطِيطُ الْمُبَكِّرُ عَلَى تَجَنُّبِ التَّأَخُّرِ.",
      translation: "Sebagian jadwal kereta berubah pada hari libur karena jumlah penumpang meningkat. Mahir memeriksa informasi sebelum menuju peron dan bertanya kepada petugas jika tidak memahami pengumuman. Perencanaan lebih awal membantu menghindari keterlambatan.",
    },
  },
  'bus-terminal': {
    smp: {
      reading: "يَحْمِلُ يُوسُفُ حَقِيبَتَهُ إِلَى الرَّصِيفِ وَيَنْتَظِرُ قُرْبَ الْحَافِلَةِ الْمُخَصَّصَةِ لِرِحْلَتِهِ. يَسْأَلُ السَّائِقَ عَنْ الْمَقْعَدِ وَيَضَعُ حَقِيبَتَهُ فِي الْمَكَانِ الْمُنَاسِبِ. وَقَبْلَ الْحَرَكَةِ، يَتَأَكَّدُ مِنْ أَنَّ تَذْكِرَتَهُ مَعَهُ.",
      translation: "Yusuf membawa tas ke peron dan menunggu di dekat bus untuk perjalanannya. Ia bertanya kepada sopir tentang tempat duduk dan meletakkan tas di tempat yang sesuai. Sebelum bus berangkat, ia memastikan tiket masih dibawanya.",
    },
    sma: {
      reading: "وَقَدْ تَتَغَيَّرُ أَرْقَامُ الْأَرْصِفَةِ أَوْ أَوْقَاتُ الْمُغَادَرَةِ بِسَبَبِ الظُّرُوفِ الْمُرُورِيَّةِ. لِذَلِكَ يَتَأَكَّدُ الْمُسَافِرُ مِنَ الْمَعْلُومَاتِ قَبْلَ الصُّعُودِ وَيَحْتَفِظُ بِتَذْكِرَتِهِ. وَعِنْدَ وُجُودِ تَأْخِيرٍ، يَسْتَفْسِرُ مِنْ مَكْتَبِ الْمَعْلُومَاتِ وَيُنَظِّمُ وَقْتَ الِانْتِظَارِ.",
      translation: "Nomor peron atau waktu keberangkatan dapat berubah karena kondisi lalu lintas. Penumpang memastikan informasi sebelum naik dan menyimpan tiket. Jika terjadi keterlambatan, ia bertanya di pusat informasi dan mengatur waktu menunggu.",
    },
  },
  pharmacy: {
    smp: {
      reading: "تَقْرَأُ مَرْيَمُ اسْمَ الدَّوَاءِ وَتَارِيخَ صَلَاحِيَّتِهِ عَلَى الْعُلْبَةِ. وَإِذَا لَمْ تَفْهَمْ كَلِمَةً فِي التَّعْلِيمَاتِ، تَسْأَلُ الصَّيْدَلِيَّ عَنْ مَعْنَاهَا. وَتَضَعُ الدَّوَاءَ فِي مَكَانٍ آمِنٍ بَعِيدًا عَنْ مُتَنَاوَلِ الْأَطْفَالِ.",
      translation: "Maryam membaca nama obat dan tanggal kedaluwarsa pada kemasan. Jika tidak memahami kata dalam petunjuk, ia bertanya kepada apoteker. Ia menyimpan obat di tempat aman dan jauh dari jangkauan anak-anak.",
    },
    sma: {
      reading: "وَلَا يَنْبَغِي لِلْمَرِيضِ أَنْ يُغَيِّرَ الْجُرْعَةَ أَوْ وَقْتَ الِاسْتِعْمَالِ مِنْ تِلْقَاءِ نَفْسِهِ. فَإِذَا ظَهَرَتْ مَعْلُومَةٌ غَيْرُ وَاضِحَةٍ عَلَى الْعُلْبَةِ، فَالْأَفْضَلُ أَنْ يَسْأَلَ الصَّيْدَلِيَّ أَوِ الطَّبِيبَ. وَيَجِبُ أَيْضًا مُرَاعَاةُ تَارِيخِ الصَّلَاحِيَّةِ وَشُرُوطِ التَّخْزِينِ.",
      translation: "Pasien tidak seharusnya mengubah dosis atau waktu penggunaan obat atas inisiatif sendiri. Jika informasi pada kemasan tidak jelas, sebaiknya ia bertanya kepada apoteker atau dokter. Tanggal kedaluwarsa dan ketentuan penyimpanan juga perlu diperhatikan.",
    },
  },
  clinic: {
    smp: {
      reading: "بَعْدَ الْفَحْصِ، يَحْصُلُ خَالِدٌ عَلَى وَرَقَةٍ فِيهَا مَوْعِدُ الزِّيَارَةِ التَّالِيَةِ. يَضَعُهَا فِي حَقِيبَتِهِ وَيُخْبِرُ أَبَاهُ بِمَا قَالَهُ الطَّبِيبُ. وَيَتَعَلَّمُ أَنْ يَصِفَ شُعُورَهُ بِكَلِمَاتٍ وَاضِحَةٍ وَأَنْ يَسْأَلَ عِنْدَ عَدَمِ الْفَهْمِ.",
      translation: "Setelah pemeriksaan, Khalid menerima kertas berisi jadwal kunjungan berikutnya. Ia menyimpannya di tas dan memberi tahu ayahnya tentang penjelasan dokter. Ia belajar menjelaskan perasaannya dengan kata-kata yang jelas dan bertanya jika belum memahami sesuatu.",
    },
    sma: {
      reading: "وَتَسْتَخْدِمُ الْعِيَادَةُ بَطَاقَةً لِتَسْجِيلِ مَوَاعِيدِ الْمُرَاجَعَةِ وَمُلَاحَظَاتِ الْفَحْصِ. وَيَحْتَفِظُ الْمَرِيضُ بِهَذِهِ الْمَعْلُومَاتِ لِيُقَدِّمَهَا فِي الزِّيَارَةِ التَّالِيَةِ. كَمَا يُخْبِرُ الطَّبِيبَ بِأَيِّ تَغَيُّرٍ فِي الْأَعْرَاضِ، وَيَسْأَلُ عَنِ الْخُطْوَةِ التَّالِيَةِ إِذَا احْتَاجَ إِلَى تَوْضِيحٍ.",
      translation: "Klinik menggunakan kartu untuk mencatat jadwal kunjungan dan catatan pemeriksaan. Pasien menyimpan informasi tersebut untuk disampaikan pada kunjungan berikutnya. Ia juga memberi tahu dokter tentang perubahan gejala dan bertanya mengenai langkah selanjutnya jika memerlukan penjelasan.",
    },
  },
  playground: {
    smp: {
      reading: "يَتَّفِقُ الطُّلَّابُ عَلَى قَوَاعِدَ اللَّعِبِ قَبْلَ بَدْءِ الْمُبَارَاةِ. يَنْتَظِرُ كُلُّ فَرِيقٍ دَوْرَهُ، وَيُسَاعِدُ اللَّاعِبُونَ مَنْ يَتَعَثَّرُ أَوْ يَحْتَاجُ إِلَى الْمُسَاعَدَةِ. وَبَعْدَ النَّشَاطِ، يَجْمَعُونَ الْأَدَوَاتِ وَيُعِيدُونَهَا إِلَى مَكَانِهَا.",
      translation: "Para siswa menyepakati aturan permainan sebelum pertandingan dimulai. Setiap tim menunggu giliran, dan pemain membantu teman yang terjatuh atau memerlukan bantuan. Setelah kegiatan, mereka mengumpulkan peralatan dan mengembalikannya ke tempat semula.",
    },
    sma: {
      reading: "وَيُقَيِّمُ الْمُعَلِّمُ أَدَاءَ الْفِرَقِ بَعْدَ النَّشَاطِ، وَيُشَجِّعُ الطُّلَّابَ عَلَى ذِكْرِ نِقَاطِ الْقُوَّةِ وَمَا يَحْتَاجُ إِلَى تَحْسِينٍ. وَيَتَعَلَّمُونَ أَنَّ الْفَوْزَ لَيْسَ الْهَدَفَ الْوَحِيدَ؛ فَالِالْتِزَامُ بِالْقَوَاعِدِ وَاحْتِرَامُ الْمُنَافِسِ وَالْعَمَلُ الْجَمَاعِيُّ قِيَمٌ أَسَاسِيَّةٌ.",
      translation: "Guru mengevaluasi kinerja tim setelah kegiatan dan mendorong siswa menyebutkan kelebihan serta hal yang perlu diperbaiki. Mereka belajar bahwa kemenangan bukan satu-satunya tujuan; menaati aturan, menghormati lawan, dan bekerja sama merupakan nilai penting.",
    },
  },
  'living-room': {
    smp: {
      reading: "وَأَثْنَاءَ الْجُلُوسِ، يُقَدِّمُ حَسَنٌ الْمَاءَ لِلضَّيْفِ وَيَسْأَلُهُ عَنْ رِحْلَتِهِ. تَسْتَمِعُ الْأُسْرَةُ إِلَى الْحَدِيثِ وَلَا تُقَاطِعُ الْمُتَكَلِّمَ. وَبَعْدَ الْمُغَادَرَةِ، تُرَتِّبُ الْأُسْرَةُ الْغُرْفَةَ وَتَجْمَعُ الْأَكْوَابَ.",
      translation: "Saat duduk bersama, Hasan menyajikan air kepada tamu dan menanyakan perjalanannya. Keluarga mendengarkan percakapan tanpa memotong pembicaraan. Setelah tamu pulang, keluarga merapikan ruangan dan mengumpulkan gelas.",
    },
    sma: {
      reading: "وَيُعَدُّ حُسْنُ اسْتِقْبَالِ الضَّيْفِ مِنَ الْعَادَاتِ الَّتِي تُعَزِّزُ الْعَلَاقَاتِ الِاجْتِمَاعِيَّةَ. وَيَشْمَلُ ذَلِكَ التَّرْحِيبَ وَتَقْدِيمَ مَكَانٍ مُنَاسِبٍ وَالِاسْتِمَاعَ بِاهْتِمَامٍ. وَيَتَعَلَّمُ أَفْرَادُ الْأُسْرَةِ أَنْ يَتَحَدَّثُوا بِاحْتِرَامٍ وَأَنْ يُرَاعُوا وَقْتَ الضَّيْفِ وَخُصُوصِيَّتَهُ.",
      translation: "Sikap menerima tamu dengan baik merupakan kebiasaan yang memperkuat hubungan sosial. Hal tersebut mencakup sambutan, penyediaan tempat yang sesuai, dan kesediaan mendengarkan. Anggota keluarga belajar berbicara dengan hormat serta menghargai waktu dan privasi tamu.",
    },
  },
  kitchen: {
    smp: {
      reading: "قَبْلَ اسْتِعْمَالِ الْأَدَوَاتِ، تَغْسِلُ لَيْلَى يَدَيْهَا وَتَتَأَكَّدُ مِنْ نَظَافَةِ الْمَائِدَةِ. تُبَاعِدُ الْأَوْعِيَةَ عَنِ حَافَّةِ الطَّاوِلَةِ، وَتَطْلُبُ مُسَاعَدَةَ أُمِّهَا عِنْدَ اسْتِعْمَالِ الْأَدَوَاتِ الْحَادَّةِ. وَبَعْدَ الطَّهْيِ، تُنَظِّفُ مَكَانَ الْعَمَلِ.",
      translation: "Sebelum menggunakan peralatan, Laila mencuci tangan dan memastikan meja bersih. Ia menjauhkan wadah dari tepi meja dan meminta bantuan ibunya ketika menggunakan alat tajam. Setelah memasak, ia membersihkan area kerja.",
    },
    sma: {
      reading: "وَمِنْ عَادَاتِ الْمَطْبَخِ الصِّحِّيِّ فَصْلُ الْأَطْعِمَةِ النَّيِّئَةِ عَنِ الْمَطْبُوخَةِ وَحِفْظُ الْمَوَادِّ فِي أَوْعِيَةٍ مُغْلَقَةٍ. كَمَا يَنْبَغِي تَهْوِيَةُ الْغُرْفَةِ وَإِبْعَادُ الْأَشْيَاءِ الْقَابِلَةِ لِلِاشْتِعَالِ عَنِ الْمَوْقِدِ. وَتُسَاعِدُ هَذِهِ الْخُطُوَاتُ عَلَى الْمُحَافَظَةِ عَلَى النَّظَافَةِ وَالسَّلَامَةِ.",
      translation: "Kebiasaan dapur yang sehat mencakup pemisahan makanan mentah dan matang serta penyimpanan bahan dalam wadah tertutup. Ruangan juga perlu memiliki ventilasi dan benda mudah terbakar harus dijauhkan dari kompor. Langkah tersebut membantu menjaga kebersihan dan keselamatan.",
    },
  },
  supermarket: {
    smp: {
      reading: "وَتَقْرَأُ دِينَا بَعْضَ الْبِطَاقَاتِ الْمَوْجُودَةِ أَمَامَ الرُّفُوفِ لِمَعْرِفَةِ أَسْعَارِ السِّلَعِ. تَضَعُ الْمُنْتَجَاتِ فِي الْعَرَبَةِ بِتَرْتِيبٍ، وَتَنْتَظِرُ دَوْرَهَا عِنْدَ صُنْدُوقِ الدَّفْعِ. وَبَعْدَ ذَلِكَ، تَحْمِلُ الْمُشْتَرَيَاتِ مَعَ أَبِيهَا إِلَى السَّيَّارَةِ.",
      translation: "Dina membaca label di depan rak untuk mengetahui harga barang. Ia menata produk di troli dan menunggu giliran di kasir. Setelah membayar, ia membawa belanjaan bersama ayahnya ke mobil.",
    },
    sma: {
      reading: "وَيُسَاعِدُ تَخْطِيطُ الْمُشْتَرَيَاتِ عَلَى تَجَنُّبِ شِرَاءِ أَشْيَاءَ غَيْرِ ضَرُورِيَّةٍ. فَيُعِدُّ الْمُشْتَرِي قَائِمَةً وَيُقَارِنُ بَيْنَ الْحَجْمِ وَالسِّعْرِ وَالْجَوْدَةِ. وَقَبْلَ الدَّفْعِ، يُرَاجِعُ الْإِيصَالَ لِلتَّأَكُّدِ مِنْ صِحَّةِ الْحِسَابِ وَعَدَدِ الْمُنْتَجَاتِ.",
      translation: "Perencanaan belanja membantu menghindari pembelian barang yang tidak diperlukan. Pembeli membuat daftar dan membandingkan ukuran, harga, serta kualitas. Sebelum meninggalkan kasir, ia memeriksa struk untuk memastikan jumlah pembayaran dan barang sudah benar.",
    },
  },
}
