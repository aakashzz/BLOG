import React from "react";
import Container from "../container/Container";
import Logo from "../Logo";
import { NavLink, } from "react-router-dom";
import { useSelector } from "react-redux";
import User from "./User";

function Header() {
   
   const authStatus = useSelector(state=>state.auth.status);
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
   return (
      <header className=" shadow ">
         <Container>
            <nav className="flex">
               <div className="mr-4">
                  <Logo />
               </div>
               <ul className="flex ml-auto items-center">
                  {navItems.map((item) =>
                     item.active ? (
                        <li key={item.name}>
                           <NavLink
                               to={item.slug}
                               className={({isActive}) => 
                              `inline-block sm:px-6 px-2 sm:text-lg py-2 text-sm font-Inter font-semibold  duration-200 ${isActive ? "text-blue-700" : "text-gray-700"}  cursor-pointer`}
                           >
                              {item.name}
                           </NavLink>
                        </li>
                     ) : null
                  )}
                  {authStatus &&
                     <li className=" gap-x-2">
                        <User />
                     </li>
                     }
               </ul>
            </nav>
         </Container>
      </header>
   );
}

export default Header;
