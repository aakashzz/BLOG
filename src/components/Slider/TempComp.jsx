import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import Container from "../container/Container";
import Main from "../Main";
import Post from "../Post";

function TempComp() {
   const mainItems = [
      {
         img: "../../../public/Imagedemopng.png",
         userName: "Rohan Singh",
         content:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui minus     iusto illo, dolorum repellendus vero aut.",
         dateTime: "Monday , 02 Jan 2020",
      },
      {
         img: "../../../public/post.png",
         userName: "Jheng Li",
         content:
            "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
         dateTime: "Friday, 10 May 2021",
      },
      {
         img: "../../../public/API.png",
         userName: "Daniel Marshall",
         content:
            "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
         dateTime: "Tuesday, 18 Nov 2024",
      },
   ];
   return (
      <div className="h-auto">
         <Container>
            <AwesomeSlider className="h-[200px] sm:h-fit lg:h-[400px] ">
               {mainItems.map((item) => (
                  <div key={item.userName}>
                     <Main
                        userName={item.userName}
                        content={item.content}
                        dateTime={item.dateTime}
                        img={item.img}
                     />
                  </div>
               ))}
            </AwesomeSlider>
         <div className=" h-auto w-full mt-10 px-4">
            <h1 className="font-Inter lg:text-2xl sm:text-xl text-base font-bold">
               Recently Article
            </h1>
         </div>
         </Container>
      </div>
   );
}

export default TempComp;
