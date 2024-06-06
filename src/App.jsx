import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { login, logout } from "./feature/authSlice";
import authService from "./appwrite/authService";
import { useDispatch } from "react-redux";
import Loading from "./components/Loading";

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
      <Loading />
   ) : (
      <div className="min-h-screen flex flex-wrap content-between">
         <div className="w-full h-full block">
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
