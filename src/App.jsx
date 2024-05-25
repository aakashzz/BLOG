import React from "react";
import Header from "./components/Header/Header";
import Signup from "./components/Signup";
import Footer from './components/Footer/Footer'
import Login from "./components/Login";
import Main from './components/Main'
import TempComp from "./components/Slider/TempComp";
function App() {
   return <div>
      <Header />
         <TempComp />
      <Footer />
   </div>;
}

export default App;
