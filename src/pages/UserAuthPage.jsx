import Lottie from "lottie-react";
import loginAnimation from "../data/loginAnimation.json";
import LoginForm from "../ui/LoginForm";
import { useState } from "react";
import SignUpForm from "../ui/SignUpForm";

function UserAuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  const handleSwitchToSignUp = () => {
    setIsLogin(false);
  };

  const handleSwitchToLogin = () => {
    setIsLogin(true);
  };
  return (
    <div className="w-full h-screen flex items-center justify-center bg-slate-900">
      <div className="grid grid-cols-4 gap-2 md:grid-cols-8 lg:grid-cols-12 w-full max-w-7xl h-full sm:h-[40rem]">
        <div className="col-span-4 lg:col-span-6 bg-slate-50 flex flex-col items-center justify-center gap-5 loginBackground relative rounded-lg">
          <div className="absolute inset-0 bg-black opacity-25"></div>
          <h1 className=" text-3xl lg:text-4xl text-[#ffff] font-bold z-10">
            TSM poster
          </h1>
          <Lottie animationData={loginAnimation} className="max-w-full" />
          <p className="text-md font-bold text-[#ffff] z-10 text-center px-4">
            Streamline Your Social Sharing: Maximize Impact, Minimize Effort
          </p>
        </div>
        <div className="col-span-4 lg:col-span-6 bg-slate-50 rounded-lg flex flex-col items-center justify-center p-4 sm:p-8">
          <p className="text-3xl p-4 text-center">
            {isLogin ? `Welcome Back !` : `Welcome`}
          </p>
          {isLogin ? (
            <LoginForm onSwitchToSignUp={handleSwitchToSignUp} />
          ) : (
            <SignUpForm onSwitchToLogin={handleSwitchToLogin} />
          )}
        </div>
      </div>
    </div>
  );
}

export default UserAuthPage;
