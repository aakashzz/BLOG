import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./store/store.js";
import { Provider } from "react-redux";
import Home from "./pages/Home.jsx";
import LogIn from "./pages/LogIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import AddPost from "./pages/AddPost.jsx";
import EditPost from "./pages/EditPost.jsx";
import Post from "./pages/Post.jsx";
import Feedback from "./pages/Feedback.jsx";
import UserProfile  from "./pages/UserProfile.jsx";
import AuthLayout from "./components/AuthLayout.jsx";
import User from "./components/Header/User.jsx";


const router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
         {
            path: "/login",
            element: (
               <AuthLayout authentication={false}>
                  <LogIn />
               </AuthLayout>
            ),
         },
         {
            path: "/signup",
            element: (
               <AuthLayout authentication={false}>
                  <SignUp />
               </AuthLayout>
            ),
         },
         {
            path: "/add-post",
            element:(
               <AuthLayout authentication >
                  <AddPost />
               </AuthLayout>
            )
         },
         {
            path: "/feedback",
            element:(
               <AuthLayout authentication >
                  <Feedback />
               </AuthLayout>
            ),
         },
         {
            path: "edit-post/:slug",
            element:(
               <AuthLayout authentication>
                  <EditPost />
               </AuthLayout>
            ),
         },
         {
            path: "/user",
            element:(
               <AuthLayout authentication >
                  <UserProfile />
               </AuthLayout>
            ),
            
         },
         {
            path: "/post/:slug",
            element: <Post />,
         },
         {
            path:"/user/:slug",
            element: <User />
         }
      ],
   },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <Provider store={store}>
         <RouterProvider router={router} />
      </Provider>
   </React.StrictMode>
);
