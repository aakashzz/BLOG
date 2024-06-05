import React, { useState, useEffect } from "react";
import Container from "./container/Container";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/configur";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import Button from "../components/Button";

import Loading from "./Loading";
function Post() {
   const [loading, setLoading] = useState(true);
   const [posts, setPosts] = useState(null);
   const { slug } = useParams();
   const navigate = useNavigate();
   const userData = useSelector((state) => state.auth.userData);
   const isAuthor = posts && userData ? posts.userId === userData.$id : false;
   useEffect(() => {
      appwriteService
         .getPost(slug)
         .then((data) => {
            if (data) {
               // console.log(data)
               setPosts(data);
               setLoading(false);
            } else {
               navigate("/");
            }
         })
         .catch((err) => {
            console.log(err);
         });
   }, [posts]);
   const deletePost = () => {
      appwriteService.deletePost(posts.$id).then((status) => {
         if (status) {
            appwriteService.deleteFile(posts.featuredImage);
            navigate("/");
         }
      });
   };
   return (
      <div className="py-8 border ">
         <Container>
            {loading ? (
               <Loading />
            ) : (
               <div className="grid lg:px-44 justify-items-center">
                  <div className="flex justify-center">
                     <img
                        src={appwriteService.getFilePreview(
                           posts.featuredImage
                        )}
                        className=" w-80 sm:w-[90%] md:w-[90%]"
                        alt=""
                     />
                  </div>
                  <div className="w-80 sm:w-[90%] py-10 ">
                     <h2 className="font-Inter text-xs    sm:text-lg font-bold  text-purple-600 md:text-2xl md:text-left ">
                        {posts.$createdAt.substring(0, 10)}
                     </h2>
                     <p className="font-Inter text-sm sm:text-xl font-bold  md:text-3xl md:pt-2 md:text-left">
                        {posts.title}
                     </p>
                     <p className="  sm:w-full sm:pt-5 font-Inter text-xs sm:text-base pt-2  md:text-left">
                        {parse(posts.content)}
                     </p>
                     {isAuthor ? (
                        <div className="py-2">
                           <Link to={`/edit-post/${posts.$id}`}>
                              <Button
                                 bgColor="bg-green-200"
                                 className="mr-3 text-green-700 px-4 py-0.5 rounded-full font-medium"
                              >
                                 Edit
                              </Button>
                           </Link>
                           <Button
                              bgColor="bg-red-200"
                              onClick={deletePost}
                              textColor="text-red-600"
                              className="font-medium px-2 py-0.5 rounded-full "
                           >
                              Delete
                           </Button>
                        </div>
                     )
                  :(<><p className="text-xs text-red-500 pt-4">Use are not author his post that not show button</p></>)}
                  </div>
               </div>
            )}
         </Container>
      </div>
   );
}

export default Post;
