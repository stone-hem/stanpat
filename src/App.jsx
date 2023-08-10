import { useState } from "react";
import Navigation from "./components/Navigation";
import SideMobile from "./components/SideMobile";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideMobile isOpen={isOpen} toggle={toggle} />
      <Navigation toggle={toggle} />
     <Outlet/>
     <Footer/>
    </>
  );
}

export default App;
