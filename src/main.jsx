import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import store from "./store/store.js";
import { Provider } from "react-redux";
import Home from "./pages/Home.jsx";
import LogIn from "./pages/LogIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import AddPost from "./pages/AddPost.jsx";
import EditPost from "./pages/EditPost.jsx";
import Post from "./pages/Post.jsx";
import Feedback from "./pages/Feedback.jsx";
import UserProfile from "./pages/UserProfile.jsx";

const router = createBrowserRouter([
   {
      path:"/",
      element:<App />,
      children:[
         {
            path:"/",
            element:<Home />,
         },{
            path:"/login",
            element:<LogIn />
         },
         {
            path:"/signup",
            element:<SignUp />
         },{
            path:"/add-post",
            element:<AddPost />
         },
         {
            path:"/feedback",
            element:<Feedback />
         },{
            path: "edit-post/:slug",
            element:<EditPost />,
         },
         {
            path:"/user",
            element:<UserProfile />
         },{
            path:"/post/:slug",
            element:<Post />,
         }
      ]
   }
])

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <Provider store={store}>
         <RouterProvider router={router}/>
      </Provider>
   </React.StrictMode>
);
