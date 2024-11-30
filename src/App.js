import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import Stats from "./components/stats";
import PostList from "./components/postlist";
import Login from "./components/login";
import Register from "./components/register"; // Halaman Register
import Donation from "./components/donation";
import PrivateRoute from "./components/privateRoute"; // Import PrivateRoute baru
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route untuk halaman login */}
          <Route path="/login" element={<Login />} />
          
          {/* Route untuk halaman register */}
          <Route path="/register" element={<Register />} />
          
          {/* Route untuk halaman donasi (diproteksi) */}
          <Route 
            path="/donate" 
            element={
              <PrivateRoute>
                <>
                  <Header />
                  <div className="content">
                    <Donation />
                  </div>
                  <Footer />
                </>
              </PrivateRoute>
            } 
          />

          {/* Route untuk halaman utama (Home) */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <div className="content">
                  <PostList />
                  <Sidebar />
                </div>
                <Stats />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
