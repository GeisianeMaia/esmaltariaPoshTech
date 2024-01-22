import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./assets/components/footer/footer";
import Header from "./assets/components/header/header";
import Schedule from "./assets/components/schedule/schedule";
import Home from "./assets/components/home/home";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agenda" element={<Schedule />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
