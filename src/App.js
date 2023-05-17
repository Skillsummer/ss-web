import React, { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import  "./App.css"

const App = () => {
  return (
    <>
      <Header> </Header>
      <Footer> </Footer>

      <div className="main-content-box d-flex flex-column align-items-center">
        <div className="main-text-box d-flex flex-column">
          <div className="text-container"> Helping Students to get Internships & Jobs</div>
          {/* <div className="sub-text d-flex flex-row">  */}
          {/* <div className="tech"> Tech Internships :  */}
          {/* <div className="sub-tech"> Full Stack Web Development <br/> Data Science/AI , <br /> App Development </div> </div> */}
          {/* <div className="tech"> Non Tech Internships : <div className="sub-tech"> Product Management , <br /> Finance , Marketing ,  <br />Buisness Analyst </div> </div>
           </div>  */}
           </div>
          {/* <div className="button-apply"> Apply for Interhsip</div> */}
        

        {/* <div className="images"> </div> */}
      </div>
    </>
  );
};

export default App;
