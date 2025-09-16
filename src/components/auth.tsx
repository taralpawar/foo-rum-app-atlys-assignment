import { LogIn } from "lucide-react";
import React, { useState } from "react";

interface Props {
    setIsAuthenticated: (val:boolean) => void
}

const AuthForm: React.FC<Props> = (props) => {
  const [isSignIn, setIsSignIn] = useState<boolean>(true);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("sumittiing", username, password);
    props.setIsAuthenticated(true);
  }

  const handleFormSwitch = () => {
    setIsSignIn(!isSignIn);
    setUsername("");
    setPassword("");
    setPassword2("");
  }

  return (
    <div className="flex items-center justify-center w-[30%]">
    <div className="bg-[#ebebeb] p-2 rounded-2xl w-full">
      <div className="w-full rounded-2xl shadow-sm border border-gray-200 p-8 bg-white">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100">
            <LogIn />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-center text-lg font-bold mb-1">
          {isSignIn ? "Sign in to continue" : "Create an account to continue"}
        </h2>
        <p className="text-center text-sm text-gray-500 mb-12">
          {isSignIn
            ? "Sign in to access all the features on this app"
            : "Create an account to access all the features on this app"}
        </p>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleAuthSubmit}>
          
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">
              Email or username
            </label>
            <input
              type="text"
              required
              value={username}
              onChange={(e:React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
              placeholder="Enter your email or username"
              className="w-full px-3 py-2 rounded-xl border-none outline-none text-gray-700 placeholder-gray-400 bg-[#f4f4f4]"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e:React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-3 py-2 rounded-xl border-none outline-none text-gray-700 placeholder-gray-400 bg-[#f4f4f4]"
            />
          </div>
          {!isSignIn && (
            <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">
                    Repeat Password
                </label>
                <input
                    type="password"
                    value={password2}
                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => setPassword2(e.target.value)}
                    placeholder="Enter your password again"
                    className="w-full px-3 py-2 rounded-xl border-none outline-none text-gray-700 placeholder-gray-400 bg-[#f4f4f4]"
                />
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-xl font-medium transition"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
        </form>
      </div>
      {/* Toggle link */}
        <p className="m-4 text-center text-sm text-gray-600">
          {isSignIn ? "Do not have an account?" : "Already have an account?"}{" "}
          <button
            type="button"
            className="text-indigo-600 font-medium hover:underline"
            onClick={handleFormSwitch}
          >
            {isSignIn ? "Sign Up" : "Sign In"}
          </button>
        </p>
    </div>
    </div>
  );
};

export default AuthForm;
