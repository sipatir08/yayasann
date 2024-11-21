import React from 'react';
import '../assets/sidebar.css';


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="category-section">
        <h3>Kategori</h3>
        <ul>
          <li>Panti Asuhan</li>
          <li>Dinas Sosial</li>
          <li>Pendidikan</li>
          <li>Kesehatan</li>
        </ul>
      </div>
      <div className="popular-posts-section">
        <h3>Post Populer</h3>
        <div className="popular-post">
          <img src="https://via.placeholder.com/150x90" alt="Popular Post" />
          <p>Lorem ipsum dolor sit amet</p>
          <span>By Jhon Doe</span>
        </div>
        {/* Tambahkan lebih banyak popular post jika perlu */}
      </div>
    </div>
  );
};

export default Sidebar;