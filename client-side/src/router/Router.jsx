import React, { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "../pages/About";
import LandingPage from "../pages/LandingPage";
import Menu from "../pages/Menu";
import Profil from "../pages/Profil";
import App from "../App";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import OneProduct from "../pages/OneProduct";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../store/auth";
function Router() {
  const user = useSelector((store) => store.auth.me);
  

  const dispatch = useDispatch();

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) dispatch(getMe());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<LandingPage />} />

        <Route path="/about" element={<About />} />
        <Route path="/OneProduct/:id" element={<OneProduct />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/menu' element={user ? <Menu /> : <Navigate to="/login" />} />
        {/* {user && <Route path="/menu" element={<Menu />} />} */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
