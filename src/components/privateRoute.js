import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2"; // Pastikan SweetAlert sudah diinstal

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("token"); // Cek token login
  const location = useLocation(); // Untuk menyimpan lokasi yang diminta

  if (!isAuthenticated) {
    // Tampilkan SweetAlert jika belum login
    Swal.fire({
      title: "Akses Ditolak",
      text: "Anda harus login terlebih dahulu untuk melihat detail donasi!",
      icon: "warning",
      confirmButtonText: "OK",
    });

    // Redirect ke halaman login dan simpan lokasi tujuan
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Jika sudah login, tampilkan konten halaman
  return children;
};

export default PrivateRoute;
