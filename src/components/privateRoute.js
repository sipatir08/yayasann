import React from "react";
import { Navigate } from "react-router-dom";

// Menjaga agar pengguna tidak bisa mengakses halaman jika belum login
const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("token"); // Cek token login
  if (!isAuthenticated) {
    // Tampilkan SweetAlert jika belum login tapi tetap di halaman donasi
    return children;
  }
  return <Navigate to="/login" />; // Kembalikan ke halaman login jika tidak terautentikasi
};

export default PrivateRoute;
