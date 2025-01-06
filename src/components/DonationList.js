import React, { useEffect, useState } from 'react';
import { getAllDonations, deleteDonation } from '../services/donationService';


const DonationList = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const data = await getAllDonations();
        setDonations(data);
      } catch (error) {
        console.error('Error fetching donations:', error);
      }
    };
    fetchDonations();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDonation(id);
      setDonations(donations.filter((donation) => donation.id !== id));
      alert('Donasi berhasil dihapus!');
    } catch (error) {
      console.error('Error deleting donation:', error);
    }
  };

  return (
    <div>
      <h1>Daftar Donasi</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nama Donatur</th>
            <th>Kategori</th>
            <th>Jumlah</th>
            <th>Tipe</th>
            <th>Tanggal</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {donations.map((donation) => (
            <tr key={donation.id}>
              <td>{donation.id}</td>
              <td>{donation.nama_donatur}</td>
              <td>{donation.kategori}</td>
              <td>{donation.jumlah}</td>
              <td>{donation.type}</td>
              <td>{donation.tanggal}</td>
              <td>
                <button onClick={() => handleDelete(donation.id)}>Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DonationList;
