import React, { useState } from 'react';
import '../App.css';


// Data pengurus
const pengurusData = [
  {
    nama: 'John Doe',
    jabatan: 'Ketua Yayasan',
    deskripsi: 'John adalah ketua yayasan yang memiliki visi dan misi untuk meningkatkan kualitas hidup anak-anak yang kurang beruntung.',
    foto: 'https://via.placeholder.com/250x200?text=John+Doe',
    detail: 'John memiliki pengalaman lebih dari 10 tahun di bidang sosial dan kemanusiaan. Beliau menginisiasi banyak proyek untuk membantu anak-anak yang membutuhkan.'
  },
  {
    nama: 'Jane Smith',
    jabatan: 'Sekretaris',
    deskripsi: 'Jane bertanggung jawab untuk mengelola administrasi yayasan dan menjaga hubungan dengan donatur.',
    foto: 'https://via.placeholder.com/250x200?text=Jane+Smith',
    detail: 'Jane adalah lulusan dari Fakultas Ekonomi yang memiliki pengalaman dalam manajemen organisasi non-profit.'
  },
  {
    nama: 'Ahmad Nur',
    jabatan: 'Bendahara',
    deskripsi: 'Ahmad memastikan dana yayasan dikelola dengan baik dan digunakan untuk kepentingan anak-anak panti.',
    foto: 'https://via.placeholder.com/250x200?text=Ahmad+Nur',
    detail: 'Ahmad memiliki latar belakang di bidang keuangan dan telah bekerja di beberapa lembaga keuangan ternama sebelum bergabung dengan yayasan.'
  },
];

const Profile = () => {
  // State untuk mengatur apakah detail pengurus ditampilkan atau tidak
  const [showDetails, setShowDetails] = useState(false);

  // Fungsi untuk menampilkan detail pengurus
  const handleImageClick = () => {
    setShowDetails(true); // Mengubah state menjadi true ketika gambar diklik
  };

  // Fungsi untuk menutup detail
  const handleCloseDetails = () => {
    setShowDetails(false); // Menutup detail ketika tombol "Tutup" diklik
  };

  return (
    <div className="profile">
      <h1>Profil Yayasan Panti Asuhan</h1>
      <p>Yayasan ini berdiri untuk membantu anak-anak yang membutuhkan perhatian dan kasih sayang.</p>

      {/* Foto pengurus */}
      <div className="photo-container">
        <img
          src="https://via.placeholder.com/600x400?text=Foto+Pengurus"
          alt="Foto Pengurus Yayasan"
          className="main-photo"
          onClick={handleImageClick} // Menangani klik pada foto pengurus
        />
      </div>

      {/* Menampilkan detail pengurus jika showDetails adalah true */}
      {showDetails && (
        <div className="pengurus-detail">
          <h2>Detail Pengurus Yayasan</h2>
          {pengurusData.map((pengurus, index) => (
            <div key={index} className="detail-card">
              <h3>{pengurus.nama}</h3>
              <p><strong>{pengurus.jabatan}</strong></p>
              <p>{pengurus.deskripsi}</p>
              <p><strong>Detail:</strong> {pengurus.detail}</p>
            </div>
          ))}
          <button onClick={handleCloseDetails}>Tutup</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
