import React, { useState } from "react";
import Container from "./container/Container";
import Logo from "./Logo";
import Input from "./Input";
import Button from "./Button";
import { useForm } from "react-hook-form";
import authService from "../appwrite/authService";
import { useDispatch } from "react-redux";
import { login as authLogin } from "../feature/authSlice";
import { useNavigate } from "react-router-dom";

function Login() {
   const [error, setError] = useState("");
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const { register, handleSubmit } = useForm();
   const dataSubmit = async (data) => {
      setError("");
      try {
         const userLogin = await authService.login(data)
         if (userLogin) {
            dispatch(authLogin(userLogin));
               navigate("/");
         }
      } catch (error) {
         setError(error.message)
         // error.message;
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
                     Login to already have account
                  </h2>
                  <p className="mt-2 text-center text-base text-gray-600">
                     Don't have an account?{" "}
                     <a
                        href="#"
                        title=""
                        className="font-medium text-black transition-all duration-200 hover:underline"
                     >
                        Sign up
                     </a>
                  </p>
                  {error && <p className="text-red-600 text-xs mt-2 text-center sm:text-base">{error}</p>}
                  <form onSubmit={handleSubmit(dataSubmit)} className="mt-8">
                     <div className="space-y-5">
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
                              className="inline-flex w-full items-center justify-center rounded-md  px-3.5 py-2.5 font-semibold leading-7  hover:bg-blue-950"
                           >
                              Login
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

export default Login;
