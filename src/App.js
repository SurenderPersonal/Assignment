import React from "react";
import "./App.css";
import Footer from "./Pages/Footer";
import MainPage from "./Pages/MainPage";
import Nav from "./Pages/Nav";
const App = () => {
  return (
    <section className="w-screen h-screen flex flex-col justify-center items-center">
      <Nav />
      <MainPage />
      <Footer />
    </section>
  );
};

export default App;
