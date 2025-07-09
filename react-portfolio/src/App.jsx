// import { useState } from "react";
import "./App.css";
import "./css/styles.css";


import Header from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";
import About from "./components/About/About";
import Project from "./components/Project/Project";
import Certificates from "./components/Certificates/Certificates";
import Footer from "./components/Footer/Footer";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <h1>hi i am kal</h1>
      <Header/>
      <Homepage/>
      <About/>
      <Project/>
      <Certificates/>
      <Footer/>

    </>
  );
}

export default App;
