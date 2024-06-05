import React, { useState } from "react";
import Container from "./container/Container";
import Button from "./Button";
import Input from "./Input";
import Logo from "./Logo";
import appwriteService from "../appwrite/configur";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
function Feedback() {
   const [error, setError] = useState();
   const { register, handleSubmit } = useForm();
   const navigate = useNavigate();
   const feedbackSubmit = async (data) => {
      try {
         const feedbackData = await appwriteService.createFeedback({ ...data });
         if (feedbackData) {
            navigate("/");
         }
      } catch (error) {
         setError(error.message);
         throw error;
      }
   };
   return (
      <div className="py-2">
         <Container>
            <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 ">
               <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md ">
                  <div className="mb-2 flex justify-center">
                     <Logo />
                  </div>
                  <h2 className="text-center text-2xl font-bold leading-tight text-black">
                     Give your feedback about of experience
                  </h2>
                  {error && <p className="text-red-600 mt-2">{error}</p>}
                  <form
                     className="mt-8"
                     onSubmit={handleSubmit(feedbackSubmit)}
                  >
                     <div className="space-y-5">
                        <div>
                           <Input
                              label="Full Name"
                              type="text"
                              placeholder="Full Name"
                              className="mt-2"
                              {...register("name", { required: true })}
                           />
                        </div>
                        <div>
                           <Input
                              label="Email"
                              type="email"
                              placeholder="Email"
                              className="mt-2"
                              {...register("email", {
                                 required: true,
                                 validate: {
                                    matchPatern: (value) =>
                                       /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                                          value
                                       ) ||
                                       "Email address must be a valid address",
                                 },
                              })}
                           />
                        </div>
                        <div>
                           <div>
                              <label
                                 htmlFor=""
                                 className="text-base font-medium text-gray-900"
                              >
                                 Additional FeedBack:
                              </label>
                              <textarea
                                 rows={8}
                                 className="w-full border rounded-md border-gray-300 p-2 outline-none"
                                 {...register("feedback", {
                                    required: true,
                                 })}
                              />
                           </div>
                        </div>
                        <div>
                           <Button
                              type="button"
                              bgColor="bg-blue-900"
                              textColor="text-white"
                              className="inline-flex w-full items-center justify-center rounded-md  px-3.5 py-2.5 font-semibold leading-7  hover:bg-blue-950"
                           >
                              Submit Feedback
                           </Button>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </Container>
      </div>
   );
}

export default Feedback;
