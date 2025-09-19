import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Testimon from "../components/Testimon";
function LandingPage() {
  return (
    <>
      <div className="bg-gradient-to-t from-[#c8e2b1] to-[#f3f5f0] h-screen   rounded-r-full rounded-tl-full">
        <Navbar />
        <Header />
      </div>

      <Cards />
      <Testimon />
      <Footer />
    </>
  );
}

export default LandingPage;
