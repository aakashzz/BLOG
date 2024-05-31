import React, { useState } from "react";
import Container from "./container/Container";
import Input from "./Input";
import Logo from "./Logo";
import Button from "./Button";
import { useForm } from "react-hook-form";
import authService from "../appwrite/authService";
import { login } from "../feature/authSlice";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
   const dispatch = useDispatch();
   const { register, handleSubmit } = useForm();
   const navigate = useNavigate();
   const [error, setError] = useState("");
   const create = async (data) => {
      setError("");
      try {
         const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(login(userData));
                navigate("/")
            
         } else {
            console.log("create account failed");
         }
      } catch (error) {
         error.message;
         setError(error);
      }
   };
   return (
      <div>
         <Container>
            <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 ">
               <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md ">
                  <div className="mb-2 flex justify-center">
                     <Logo />
                  </div>
                  <h2 className="text-center text-2xl font-bold leading-tight text-black">
                     Sign up to create your account
                  </h2>
                  <p className="mt-2 text-center text-base text-gray-600">
                     Already have an account?{" "}
                     <Link
                        to={'/login'}
                        className="font-medium text-black transition-all duration-200 hover:underline"
                     >
                        Sign In
                     </Link>
                  </p>
                  {error && <p className="text-red-600 mt-2">{error}</p>}
                  <form onSubmit={handleSubmit(create)} className="mt-8">
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
                              <Input
                                 label="Password"
                                 type="password"
                                 placeholder="Password"
                                 className="mt-2"
                                 {...register("password", { required: true })}
                              />
                           </div>
                        </div>
                        <div>
                           <Button
                              type="button"
                              bgColor="bg-blue-900"
                              textColor="text-white"
                              className="inline-flex w-full items-center justify-center rounded-md  px-3.5 py-2.5 font-semibold leading-7  hover:bg-black/80"
                           >
                              Create Account
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

export default Signup;
