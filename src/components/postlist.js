import React, { useState, useEffect } from "react";
import "../assets/Postlist.css";

const PostList = () => {
  // State untuk kontrol deskripsi apakah panjang atau pendek
  const [isExpanded, setIsExpanded] = useState(false);

  // State untuk indeks gambar
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array foto untuk slideshow
  const images = [
    require("../assets/images/acara.jpg"),
    require("../assets/images/acara2.jpg"),
  ];

  // Fungsi untuk toggle deskripsi
  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  // Fungsi untuk manual control
  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // useEffect untuk mengganti gambar secara otomatis setiap beberapa detik
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Ganti gambar setiap 3 detik

    // Membersihkan interval saat komponen unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="post-list">
      <div className="post">
        <div className="post-image">
          <img
            src={images[currentImageIndex]}
            alt={`Post Thumbnail ${currentImageIndex + 1}`}
          />
          <div className="controls">
            <button onClick={handlePrevious} className="prev-button">
              ← Previous
            </button>
            <button onClick={handleNext} className="next-button">
              Next →
            </button>
          </div>
        </div>
        <div className="post-content">
          <h2 className="post-title">Berita Acara Terbaru</h2>
          <p className="post-description">
            {isExpanded
              ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Reiciendis aliquid atque, nulla? Vivamus facilisis mauris vel turpis pretium, sed auctor odio feugiat. Integer ut volutpat odio. Quisque id ante vel neque sagittis ultricies. Etiam ut lacus vitae orci viverra interdum. Donec sed magna sit amet turpis bibendum accumsan. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce a risus dolor. Sed aliquam, arcu ac facilisis cursus, nulla nisl laoreet justo, ac ultricies tortor velit non arcu. Nulla gravida ipsum sit amet turpis tincidunt, vitae lobortis velit fringilla. Cras tincidunt magna eu urna faucibus ultricies. Aliquam erat volutpat. Duis et nisl a libero pharetra venenatis."
              : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Reiciendis aliquid atque, nulla?"}
          </p>
          <button className="read-more" onClick={toggleDescription}>
            {isExpanded ? "READ LESS →" : "READ MORE →"}
          </button>
        </div>
        <p className="post-footer">Acara Tanggal Sekian-sekian</p>
      </div>
    </div>
  );
};

export default PostList;
