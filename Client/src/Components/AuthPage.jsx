import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGoogle, FaGithub, FaLinkedin } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

const AuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const toggleForm = () => setIsSignIn(!isSignIn);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (email === "test@gmail.com" && password === "1234") {
        toast.success("Login Successful");
        navigate("/dashboard");
      } else {
        toast.error("Invalid email or password");
      }
    }, 1500);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Account Created Successfully");
      setIsSignIn(true);
    }, 1500);
  };

  return (
    <motion.div
      initial={false}
      animate={{
        background: isSignIn
          ? "linear-gradient(to top right, #eef2ff, #c7d2fe, #a5b4fc)"
          : "linear-gradient(to top right, #a5b4fc, #c7d2fe, #eef2ff)",
      }}
      transition={{ duration: 1 }}
      className="min-h-screen flex items-center justify-center px-4"
    >
      <Toaster />
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={isSignIn ? "signin-text" : "signup-text"}
            className="bg-indigo-700 text-white flex flex-col justify-center items-center p-8"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <h2 className="text-4xl font-bold mb-4">
              {isSignIn ? "Welcome Back!" : "Hello, Friend!"}
            </h2>
            <p className="mb-6 text-center">
              {isSignIn
                ? "To keep connected with us please login with your personal info!"
                : "Enter your personal details and start your journey with us!"}
            </p>
            <button
              className="bg-white text-indigo-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-100"
              onClick={toggleForm}
            >
              {isSignIn ? "Sign Up" : "Sign In"}
            </button>
          </motion.div>
        </AnimatePresence>

        {/* Right Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={isSignIn ? "signin-form" : "signup-form"}
            className="p-8"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">
              {isSignIn ? "Sign In to Your Account" : "Create a New Account"}
            </h3>

            <form
              className="space-y-4"
              onSubmit={isSignIn ? handleLogin : handleSignup}
            >
              {!isSignIn && (
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              )}
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-indigo-700 text-white py-2 rounded-md hover:bg-indigo-800 transition duration-200 flex items-center justify-center"
              >
                {loading ? (
    <ClipLoader size={22} color="#ffffff" />
          ) : isSignIn ? (
            "Sign In"
          ) : (
            "Sign Up"
          )}

              </button>
            </form>

            <div className="mt-6 text-center text-gray-500">or continue with</div>
            <div className="flex justify-center gap-6 mt-4">
              <FaGoogle className="text-2xl cursor-pointer hover:text-red-500 transition duration-200" />
              <FaGithub className="text-2xl cursor-pointer hover:text-black transition duration-200" />
              <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600 transition duration-200" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default AuthPage;
