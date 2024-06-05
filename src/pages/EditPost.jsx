import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/configur";
import Container from "../components/container/Container";
import PostForm from "../components/post-form/PostForm";
import Loading from "../components/Loading";

function EditPost() {
   const [posts, setPosts] = useState([null]);
   const [loading, setLoading] = useState(true);
   const { slug } = useParams();
   const navigate = useNavigate();
   useEffect(() => {
      if (slug) {
         appwriteService
            .getPost(slug)
            .then((post) => {
               if (post) {
                  setPosts(post);
               }
            })
            .finally(()=>setLoading(false));
      } else {
         navigate("/");
      }
   }, [posts]);
   return (
      <div>
         <Container>
            {loading ? (
               <>
                  <Loading />
               </>
            ) : (
               <>
                  <PostForm post={posts} />
               </>
            )}
         </Container>
      </div>
   );
}

export default EditPost;
