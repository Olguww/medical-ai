import { Route, Routes } from "react-router";
import Navbar from "./Navbar";
import HomePage from "./Home";
import ContactPage from "./Contact";
import AboutPage from "./About";
import Footer from "./Footer";
import ServicesPage from "./Services";

function App() {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/anasayfa" element={<HomePage />} />
        <Route path="/hakkimizda" element={<AboutPage />} />
        <Route path="/servisler" element={<ServicesPage />} />
        <Route path="/iletisim" element={<ContactPage />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
