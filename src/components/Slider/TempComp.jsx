import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import Container from "../container/Container";
import Main from "../Main";

function TempComp() {
   return (
      <div className="h-fit">
         <Container> 
            <AwesomeSlider className="h-[200px] sm:h-fit lg:h-[400px] ">
               <div className="">
                  <Main />
               </div>
            </AwesomeSlider>
         </Container>
      </div>
   );
}

export default TempComp;
