import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import appwriteService  from "../../appwrite/configur.js"
import Input from "../Input";
import Button from "../Button";
import RTE from '../RTE'
import Selector from '../Selector'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PostForm({ post }) {
   const { register, handleSubmit, watch, control, setValue, getValues } =
      useForm({
         defaultValues: {
            title: post?.title || "",
            slug: post?.slug || "",
            content: post?.content || "",
            status: post?.status || "public",
         },
      });
   const navigate = useNavigate();
   const userData = useSelector((state) => state.auth.userData);
   const submit = async (data) => {
      if (post) {
         
         const file = data?.image[0]
            ? await appwriteService.uploadFile(data?.image[0])
            : null;
         if (file) {
            appwriteService.deleteFile(post.featuredImage);
         }
         const dbPost = await appwriteService.updatePost(post.$id, {
            ...data,
            featuredImage: file ? file.$id : undefined,
         });

         if (dbPost) {
            navigate(`/post/${dbPost.$id}`);
         }
      } else {
         const file = await appwriteService.uploadFile(data.image[0])
         if (file) {
            const fileId = file.$id;
            data.featuredImage = fileId;
            const dbPost = await appwriteService.createPost({
               ...data,
               userId: userData.$id,
            });
            
            if(dbPost){
               navigate(`/post/${dbPost.$id}`);
            }
         }
      }
   };

   const slugTransform = useCallback((value)=>{
      if (value && typeof value === 'string') {
         return value.trim().toLowerCase().replace(/[^a-zA-Z\d\s]+/g, "-").replace(/\s/g,"-"); 
      }
   },[]) ;
   useEffect(()=>{
      const subscribe = watch((value,{name})=>{
         if (name === "title") {
            setValue("slug", slugTransform(value.title, {shouldValidate:true}));
         }
         return ()=> subscribe.unsubscribe();
      })
   },[watch, slugTransform, setValue])
   
   return (
      
      <form onSubmit={handleSubmit(submit)} className="md:flex md:flex-wrap px-4 py-4">
         <div className="md:w-2/3 w-full px-2">
            <Input
               label="Title :"
               placeholder="Title"
               className="mb-4"
               {...register("title", { required: true })}
            />
            <Input
               label="Slug :"
               placeholder="Slug"
               className="mb-4"
               {...register("slug", { required: true })}
               onInput={(e) => {
                  setValue("slug", slugTransform(e.currentTarget.value), {
                     shouldValidate: true,
                  });
               }}
            />
            <RTE
               label="Content :"
               name="content"
               control={control}
               defaultValue={getValues("content")}
            />
         </div>
         <div className="md:w-1/3 w-full px-2">
            <Input
               label="Featured Image :"
               type="file"
               className="mb-4"
               accept="image/png, image/jpg, image/jpeg, image/gif "
               {...register("image", { required: !post })}
            />
            {post && (
               <div className="w-full mb-4">
                  <img
               src={appwriteService.getFilePreview(post.featuredImage)}
               alt={post.title}
               className="rounded-lg"
            />
               </div>
            )}
            <Selector
         options={["public", "private"]}
         label="Status"
         className="mb-4"
         {...register("status", { required: true })}
      />
            <Button
               type="submit"
               bgColor={post ? "bg-blue-600" : undefined}
               className="w-full bg-blue-500 p-1.5 rounded-md text-white"
               
            >
               {post ? "Update" : "Submit"}
            </Button>
         </div>
      </form>
   );
}

export default PostForm;
