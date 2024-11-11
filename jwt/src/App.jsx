import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import RegisterWithCustomHooks from "./pages/RegisterWithCustomHooks";
import Login from "./pages/Login";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Pizza from "./pages/Pizza";
import NotFound from "./pages/NotFound";
import { CartProvider } from "./contexts/cartContext";
import { AuthProvider } from "./contexts/AuthContext";
import { UserProvider } from "./contexts/UserContext";
import ProtectedRoute from "./contexts/ProtectedRoute";
import "./App.css";

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <UserProvider>
          <div className="app-container">
            <Navbar />
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pizza/:id" element={<Pizza />} />
              <Route path="/RegisterWithCustomHooks.jsx" element={<RegisterWithCustomHooks.jsx />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </div>
        </UserProvider>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
