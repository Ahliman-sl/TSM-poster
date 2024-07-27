/* eslint-disable react/prop-types */
import { useFormik } from "formik";
import * as Yup from "yup";
import { signIn } from "../services/auth";
import { useNavigate } from "react-router-dom";
import CheckBox from "./Checkbox";
import { ClipLoader } from "react-spinners";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { AiFillApple } from "react-icons/ai";
import { useState } from "react";

function LoginForm({ onSwitchToSignUp }) {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      setErrorMessage("");
      setLoading(true);
      // Burada auth.js'deki signin fonksiyonunu cagira biliriz
      try {
        const user = await signIn(values.email, values.password);
        console.log("User signed in:", user);
        navigate("/home");
      } catch (error) {
        console.error("Error signing in:", error);
        setErrorMessage("Invalid email or password"); // Hata mesajını güncelle
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <form
      className="flex flex-col gap-6 p-8 h-max w-full items-center justify-center"
      onSubmit={formik.handleSubmit}
    >
      {/* Diğer form alanları */}
      {errorMessage && (
        <div className="text-red-500 text-sm">{errorMessage}</div>
      )}
      <div className="relative w-full max-w-md">
        <label
          htmlFor="email"
          className="absolute left-3 -top-2.5 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all bg-white"
        >
          Your email
        </label>
        <input
          id="email"
          type="email"
          {...formik.getFieldProps("email")}
          placeholder="Enter your email"
          className="peer h-10 w-full border-2 border-slate-200 px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500"
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-500 text-sm">{formik.errors.email}</div>
        ) : null}
      </div>

      <div className="relative w-full max-w-md">
        <label
          htmlFor="password"
          className="absolute left-3 -top-2.5 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all bg-white"
        >
          Your password
        </label>
        <input
          id="password"
          type="password"
          placeholder="Enter your email"
          {...formik.getFieldProps("password")}
          className="peer h-10 w-full border-2 border-slate-200 px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500"
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="text-red-500 text-sm">{formik.errors.password}</div>
        ) : null}
      </div>

      <div className="flex flex-col text-center max-sm:items-center sm:flex-row gap-4 sm:gap-10 justify-between w-full max-w-md">
        <CheckBox />
        <a
          href="#"
          className="text-md text-slate-400 hover:text-slate-600 transition duration-300"
        >
          Forgot your password?
        </a>
      </div>

      <div className="w-full max-w-md">
        <button
          type="submit"
          className="w-full h-12 inline-flex items-center justify-center gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded bg-sky-500 hover:bg-sky-600 focus:bg-sky-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-sky-300 disabled:bg-sky-300 disabled:shadow-none"
        >
          {loading ? (
            <ClipLoader size={25} color="#ffffff" />
          ) : (
            <span>Login</span>
          )}
        </button>
      </div>
      <div className="w-full h-max mt-2 flex items-center justify-center gap-3 z-10 ">
        <a
          href="/"
          className=" px-4 py-2 md:px-8 md:py-3 bg-sky-100 hover:bg-sky-200 rounded-md transiton duration-300"
        >
          <FcGoogle className="text-2xl" />
        </a>
        <a
          href="/"
          className="px-4 py-2 md:px-8 md:py-3 bg-sky-100 hover:bg-sky-200  rounded-md transiton duration-300"
        >
          <BsFacebook className="text-2xl text-sky-700" />
        </a>
        <a
          href="/"
          className="px-4 py-2 md:px-8 md:py-3 bg-sky-100 hover:bg-sky-200  rounded-md transiton duration-300"
        >
          <AiFillApple className="text-2xl" />
        </a>
      </div>
      <div className="w-full h-[2rem] text-center mt-2 mb-2 sm:mb-0 flex items-center justify-center gap-5">
        <p
          className="text-sm  hover:text-gray-500 decoration-none transition duration-300 cursor-pointer"
          onClick={onSwitchToSignUp}
        >
          <span>{`Don't have account?`}</span>
          <span className="font-bold pl-1">Register now</span>
        </p>
      </div>
    </form>
  );
}

export default LoginForm;
