//https://www.youtube.com/watch?app=desktop&v=I2NNxr3WPDo&t=0s
import Navbar from "./scenes/navbar";//refers to index.tsx without having to put it in the path
import { useEffect, useState } from "react";
import { SelectedPage } from "./shared/types";
import Home from "./scenes/home";
import Benefits from "./scenes/benefits";
import OurClasses from "./scenes/ourclasses";
import ContactPage from "./scenes/contactpage";
import Footer from "./scenes/footer";


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home); //typescript inferred types can find the type for you by default, but better to be explicit
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => { //useEffect updates dynamically 
    const handleScroll = () => {
      if (window.scrollY === 0) {
        //at top of page 
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home); //selected page will change color in navbar if mobile menu item modal is open
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll); //window type objects should have event listener 
    return () => window.removeEventListener("scroll", handleScroll); //remove when leave the page 
  })
  return <div className="app bg-gray-20">
    <Navbar 
      isTopOfPage={isTopOfPage}
      selectedPage={selectedPage} 
      setSelectedPage={setSelectedPage}
    />
    <Home setSelectedPage={setSelectedPage} />
    <Benefits setSelectedPage={setSelectedPage} />
    <OurClasses setSelectedPage={setSelectedPage}/>
    <ContactPage setSelectedPage={setSelectedPage}/>
    <Footer/>
  </div>
}

export default App;
