import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import Weather from "./pages/Weather/Weather";
import Report from "./pages/Report/Report";
import SafetyGuide from "./pages/SafetyGuide/SafetyGuide";
import Emergency from "./pages/Emergency/Emergency";
import About from "./pages/About/About";


function App() {

  return (

    <BrowserRouter>

      <Navbar />


      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/weather" element={<Weather />} />

        <Route path="/report" element={<Report />} />

        <Route path="/guide" element={<SafetyGuide />} />

        <Route path="/emergency" element={<Emergency />} />

        <Route path="/about" element={<About />} />


      </Routes>


      <Footer />


    </BrowserRouter>

  );

}


export default App;