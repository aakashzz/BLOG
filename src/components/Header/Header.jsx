import React, { useState } from "react";
import Container from "../container/Container";
import Logo from "../Logo";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import User from "./User";

function Header() {
   const [menuOption, setMenuOption] = useState("hidden");
   const authStatus = useSelector((state) => state.auth.status);
   const navItems = [
      {
         name: "Home",
         slug: "/",
         active: true,
      },
      {
         name: "Login",
         slug: "/login",
         active: !authStatus,
      },
      {
         name: "Signup",
         slug: "/signup",
         active: !authStatus,
      },
      {
         name: "Add Post",
         slug: "/add-post",
         active: authStatus,
      },
      {
         name: "Feedback",
         slug: "/feedback",
         active: authStatus,
      },
   ];
   function showNavigation(){
     setMenuOption(menuOption === "hidden" ? 'visible' : 'hidden')
   }
   return (
      <header className=" shadow ">
         <Container>
            <nav className="lg:flex ">
               <div className="flex items-center w-full lg:w-fit">
                  <div className="mr-4">
                     <Logo />
                  </div>
                  <div className=" h-10 w-full flex justify-end  lg:hidden  ">
                     <button id="nav-toggle" className=" focus:outline-none duration-200" onClick={showNavigation}>
                        <img
                           src="../../../public/static/menubar.svg"
                           className="w-8 "
                           alt=""
                        />
                     </button>
                  </div>
               </div>

                  <ul className={`nan-link lg:flex ml-auto items-center  bg-white   top-[9%] w-full lg:w-full ${menuOption} duration-300  lg:justify-end `} >
                  {navItems.map((item) =>
                     item.active ? (
                        <li key={item.name} className="w-fit">
                           <NavLink
                              to={item.slug}
                              className={({ isActive }) =>
                                 `inline-block  sm:px-6 px-2 sm:text-lg py-2 text-sm font-Inter font-semibold  duration-200 ${
                                    isActive ? "text-blue-700" : "text-gray-700"
                                 }  cursor-pointer`
                              }
                           >
                              {item.name}
                           </NavLink>
                        </li>
                     ) : null
                  )}
                  {authStatus && (
                     <li className=" w-12 md:gap-2 md:w-auto">
                        <User />
                     </li>
                  )}
               </ul>
            </nav>
         </Container>
      </header>
   );
}

export default Header;
