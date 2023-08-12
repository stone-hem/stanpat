import { useState } from "react";
import Navigation from "./components/Navigation";
import SideMobile from "./components/SideMobile";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  const [open, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!open);
  };

  return (
    <>
      <SideMobile open={open} toggle={toggle} />
      <Navigation toggle={toggle} />
     <Outlet/>
     <Footer/>
    </>
  );
}

export default App;
