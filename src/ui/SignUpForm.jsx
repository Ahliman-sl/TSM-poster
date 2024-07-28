/* eslint-disable react/prop-types */
import { useFormik } from "formik";
import * as Yup from "yup";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { AiFillApple } from "react-icons/ai";
import { signUp } from "../services/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signup } from "../redux/authSlice";
function SignUpForm({ onSwitchToLogin }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      try {
        const { user, token, profile } = await signUp(
          values.name,
          values.email,
          values.password
        );
        if (user) {
          dispatch(signup({ token }));
          navigate("/home");
        }
        console.log("User signed up:", user, profile);
      } catch (error) {
        console.error("Error signing up:", error);
      }
    },
  });
  return (
    <form
      className="flex flex-col gap-6 p-8 h-max w-full items-center justify-center"
      onSubmit={formik.handleSubmit}
    >
      <div className="relative w-full max-w-xs sm:max-w-md">
        <label
          htmlFor="name"
          className="absolute left-3 -top-2.5 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all bg-white"
        >
          Your name
        </label>
        <input
          id="name"
          type="text"
          {...formik.getFieldProps("name")}
          placeholder="Enter your name"
          className="peer h-10 w-full border-2 border-slate-200 px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500"
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="text-red-500 text-sm">{formik.errors.name}</div>
        ) : null}
      </div>

      <div className="relative w-full max-w-xs sm:max-w-md">
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

      <div className="relative w-full max-w-xs sm:max-w-md">
        <label
          htmlFor="password"
          className="absolute left-3 -top-2.5 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all bg-white"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          {...formik.getFieldProps("password")}
          placeholder="Enter your password"
          className="peer h-10 w-full border-2 border-slate-200 px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500"
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="text-red-500 text-sm">{formik.errors.password}</div>
        ) : null}
      </div>

      <div className="relative w-full max-w-xs sm:max-w-md">
        <label
          htmlFor="confirmPassword"
          className="absolute left-3 -top-2.5 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all bg-white"
        >
          Confirm Password
        </label>
        <input
          id="confirmPassword"
          type="password"
          {...formik.getFieldProps("confirmPassword")}
          placeholder="Confirm your password"
          className="peer h-10 w-full border-2 border-slate-200 px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500"
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <div className="text-red-500 text-sm">
            {formik.errors.confirmPassword}
          </div>
        ) : null}
      </div>

      <div className="w-full max-w-xs sm:max-w-md">
        <button
          type="submit"
          className="w-full h-12 inline-flex items-center justify-center gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded bg-sky-500 hover:bg-sky-600 focus:bg-sky-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-sky-300 disabled:bg-sky-300 disabled:shadow-none"
        >
          <span>Sign Up</span>
        </button>
      </div>

      <div className="w-full h-max mt-2 flex items-center justify-center gap-3 z-10">
        <a
          href="/"
          className="px-4 py-2 md:px-8 md:py-3 bg-sky-100 hover:bg-sky-200 rounded-md transition duration-300"
        >
          <FcGoogle className="text-2xl" />
        </a>
        <a
          href="/"
          className="px-4 py-2 md:px-8 md:py-3 bg-sky-100 hover:bg-sky-200 rounded-md transition duration-300"
        >
          <BsFacebook className="text-2xl text-sky-700" />
        </a>
        <a
          href="/"
          className="px-4 py-2 md:px-8 md:py-3 bg-sky-100 hover:bg-sky-200 rounded-md transition duration-300"
        >
          <AiFillApple className="text-2xl" />
        </a>
      </div>

      <div className="w-full h-[2rem] mt-2 mb-2 sm:mb-0 flex items-center justify-center gap-5 z-50">
        <p
          className="text-sm hover:text-gray-500 transition duration-300 cursor-pointer"
          onClick={onSwitchToLogin}
        >
          <span>{`Already have an account?`}</span>
          <span className="font-bold pl-1">Login now</span>
        </p>
      </div>
    </form>
  );
}

export default SignUpForm;
