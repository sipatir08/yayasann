import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import PostList from "./components/postlist";
import Login from "./components/login";
import Register from "./components/register";
import Donation from "./components/donation";
import Education from "./components/donation/education";
import Health from "./components/donation/health";
import FoodAssistance from "./components/donation/foodAssistance";
import PrivateRoute from "./components/privateRoute"; // Import PrivateRoute
import DonationDetail from "./components/DonationDetail";
import DonationList from "./components/DonationList";
import AddDonation from "./components/AddDonation";

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

          {/* Route untuk halaman donasi utama */}
          <Route
            path="/donate"
            element={
              <>
                <Header />
                <div className="content">
                  <Donation />
                </div>
                <Footer />
              </>
            }
          />

          {/* Route untuk kategori Education */}
          <Route
            path="/donate/education/:id"
            element={
              <PrivateRoute>
                <div>
                  <Header />
                  <div className="content">
                    <Education />
                  </div>
                  <Footer />
                </div>
              </PrivateRoute>
            }
          />

          <Route
            path="/donate/food-assistance/:category"
            element={
              <PrivateRoute>
                <div>
                  <Header />
                  <div className="content">
                    <FoodAssistance />
                  </div>
                  <Footer />
                </div>
              </PrivateRoute>
            }
          />

          {/* Route untuk kategori Health */}
          <Route
            path="/donate/health"
            element={
              <PrivateRoute>
                <div>
                  <Header />
                  <div className="content">
                    <Health />
                  </div>
                  <Footer />
                </div>
              </PrivateRoute>
            }
          />

          {/* Route untuk detail donasi berdasarkan ID */}
          <Route
            path="/donate/:id"
            element={
              <PrivateRoute>
                <div>
                  <Header />
                  <div className="content">
                    <DonationDetail />
                  </div>
                  <Footer />
                </div>
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
