import "./App.css";
// import PropsComponent from './components/functionalComponents/PropsComponent';
// import StateComponent from './components/classComponents/StateComponent';
import NavBar from "./components/functionalComponents/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Experience from "./components/functionalComponents/Experience";
import About from "./components/functionalComponents/About";
import Login from "./components/functionalComponents/Login";
import Home from "./components/functionalComponents/Home";
import Footer from "./components/functionalComponents/FooterComp";
import Reference from "./components/functionalComponents/Reference";
import Memo from "./components/functionalComponents/Memo";
import Callback from "./components/functionalComponents/Callback";

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
          <Route path="/ref" element={<Reference />}></Route>
          <Route path="/memo" element={<Memo /> }></Route>
          <Route path="/call" element={<Callback />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
