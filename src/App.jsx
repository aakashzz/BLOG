import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { login, logout } from "./feature/authSlice";
import authService from "./appwrite/authService";
import { useDispatch } from "react-redux";

function App() {
   const [loading, setLoading] = useState(true);
   const dispatch = useDispatch();
   useEffect(() => {
      authService
         .getCurrentUser()
         .then((userData) => {
            if (userData) {
               dispatch(login({ userData }));
            } else {
               dispatch(logout());
            }
         })
         .finally(() => setLoading(false));
   }, []);

   return loading ? (
      <div className="w-full h-screen gap-x-2 flex justify-center items-center">
         <div className="w-5 bg-[#d991c2] animate-pulse h-5 rounded-full animate-bounce"></div>
         <div className="w-5 animate-pulse h-5 bg-[#9869b8] rounded-full animate-bounce"></div>
         <div className="w-5 h-5 animate-pulse bg-[#6756cc] rounded-full animate-bounce"></div>
      </div>
   ) : (
      <div className="min-h-screen flex flex-wrap content-between">
         <div className="w-full block">
            <Header />
            <main className="h-full">
               <Outlet />
            </main>
            <Footer />
         </div>
      </div>
   );
}

export default App;
