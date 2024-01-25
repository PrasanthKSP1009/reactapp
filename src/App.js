import logo from "./logo.svg";
import "./App.css";
// import PropsComponent from './components/functionalComponents/PropsComponent';
// import StateComponent from './components/classComponents/StateComponent';
import NavBar from "./components/functionalComponents/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Experience from "./components/functionalComponents/Experience";
import About from "./components/functionalComponents/About";
import Login from "./components/functionalComponents/Login";
import Home from "./components/functionalComponents/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/experience" element={<Experience />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <PropsComponent name="KEC" course="MERN"/> */}
    </div>
  );
}

export default App;
