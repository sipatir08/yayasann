import React, { useState } from "react";
import "../assets/Postlist.css";

const PostList = () => {
  // State untuk kontrol deskripsi apakah panjang atau pendek
  const [isExpanded, setIsExpanded] = useState(false);

  // Fungsi untuk toggle state
  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="post-list">
      <div className="post">
        <div className="post-image">
          <img src={require("../assets/images/acara.jpg")} alt="Post Thumbnail" />
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
      {/* Tambahkan lebih banyak post jika perlu */}
    </div>
  );
};

export default PostList;
