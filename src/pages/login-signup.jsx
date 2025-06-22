"use client"
import { useState } from "react"
import "./universal.css"
import { Link } from "react-router-dom"
import { AtSign, Eye, Facebook, Github, Lock, LockKeyhole,  Twitter, User } from "lucide-react"

export default function Login() {
  const [showSignIn, setShowSignIn] = useState(false)
  const [imagePopup, setImagePopup] = useState(false)

  const handleSignIn = () => {
    setShowSignIn(true)
    setImagePopup(true)
  }

  const handleSignUp = () => {
    setShowSignIn(false)
    setImagePopup(true)
  }

  return (
    <div>
      {/* Create Account form */}
      {showSignIn && (<div className="relative min-h-screen w-full overflow-hidden bg-linear-to-b from-gray-200 to-[#6d6c6c]">
        {/* Left side content */}
        <div className="absolute right-10 top-20 z-10">
          <div className="relative">
            <div className="hidden lg:block rotate-[-10deg] animate-bounce duration-300 ease-in-out">
              <h1 className="text-5xl font-bold text-black">HOLA, AMIGO!</h1>
              <p className="text-2xl italic mt-1 text-black font-cursive">Let's be Friends</p>
            </div>
          </div>
        </div>

        <div className="">
          {/* boy  illustration */}
          <div className="absolute hidden lg:block bottom-10 left-60">
            <div className="relative w-64 h-80">
              <img
                src="src/assets/doodles/boy-1.svg"
                alt="boy"
                width={110}
                className="object-contain scale-x-[-1] drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Create Account form container */}
        <div className="login-box absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] bg-gray-300 rounded-lg p-8 shadow-lg">
          {/* Person sitting on top illustration */}
          <div className="absolute -top-33 left-28 -translate-x-1/2">
            <img
              src="src/assets/doodles/boy-5.svg?height=150&width=200"
              alt="Person sitting"
              width={200}
              height={150}
              className="object-contain drop-shadow-2xl"
            />
          </div>

          {/* Social login buttons */}
          <div className="flex justify-center gap-4 mb-2">
            <button className="rounded-full bg-white p-2 hover:bg-gray-100 transition-colors">
              <span className="sr-only">Login with Google</span>
              <div className="h-6 w-6 flex items-center justify-center">
                <span className="text-3xl font-bold">G</span>
              </div>
            </button>
            <button className="rounded-full bg-white p-2 hover:bg-gray-100 transition-colors">
              <span className="sr-only">Login with Facebook</span>
              <Facebook className="h-6 w-6" />
            </button>
            <button className="rounded-full bg-white p-2 hover:bg-gray-100 transition-colors">
              <span className="sr-only">Login with Twitter</span>
              <Twitter className="h-6 w-6" />
            </button>
            <button className="rounded-full bg-white p-2 hover:bg-gray-100 transition-colors">
              <span className="sr-only">Login with GitHub</span>
              <Github className="h-6 w-6" />
            </button>
          </div>

          <p className="text-center text-md mb-4">or use your email for registration</p>

          {/* Signup form */}
          <form className="space-y-4">
            <div className="relative">
              {/* Name input  */}
              <input
                type="text"
                placeholder="Name"
                className="rounded-3xl pl-10 py-5 bg-gray-400/50 border-none text-black placeholder:text-black w-full h-3"
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <User className="h-5 w-5 text-black" />
              </div>
            </div>
            <div className="relative">
              {/* Email input  */}
              <input
                type="email"
                placeholder="Email"
                className="rounded-3xl pl-10 py-5 bg-gray-400/50 border-none text-black placeholder:text-black w-full h-3"
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <AtSign className="h-5 w-5 text-black" />
              </div>
            </div>

            <div className="relative">
              {/* password input  */}
              <input
                type="password"
                placeholder="Password"
                className="rounded-3xl pl-10 py-5 bg-gray-400/50 border-none text-black placeholder:text-black w-full h-3"
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <Lock className="h-5 w-5 text-black" />
              </div>
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-black hover:text-gray-700 transition-colors"
                onClick={() => {
                  // Toggle password visibility functionality would go here
                  const passwordInput = document.querySelector('input[type="password"]')
                  if (passwordInput) {
                    passwordInput.type = passwordInput.type === "password" ? "text" : "password"
                  }
                }}
              >
                <Eye className="h-5 w-5" />
                <span className="sr-only">Toggle password visibility</span>
              </button>
            </div>

            <div className="relative">
              {/* confirm-password input  */}
              <input
                type="password"
                placeholder="Confirm-Password"
                className="rounded-3xl pl-10 py-5 bg-gray-400/50 border-none text-black placeholder:text-black w-full h-3"
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <LockKeyhole className="h-5 w-5 text-black" />
              </div>
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-black hover:text-gray-700 transition-colors"
                onClick={() => {
                  // Toggle password visibility functionality would go here
                  const passwordInput = document.querySelector('input[type="password"]')
                  if (passwordInput) {
                    passwordInput.type = passwordInput.type === "password" ? "text" : "password"
                  }
                }}
              >
                <Eye className="h-5 w-5" />
                <span className="sr-only">Toggle password visibility</span>
              </button>
            </div>

            <p className="text-center text-md">
              have account?{" "}
              
              <Link href="#" className="cursor-pointer underline" onClick={handleSignUp}>
                login now
              </Link>
            </p>

            <div className="flex justify-center mt-4">
              <button className="our-web-btn bg-white text-black cursor-pointer ">Create Account</button>
            </div>
          </form>
        </div>

        {/* Girl on right side */}
        <div className="absolute md:block md:bottom-7 md:left-150 lg:bottom-7 lg:left-235 hidden">
          <div className="relative w-64 h-80">
            <img
              src="src/assets/doodles/girl-3.svg"
              alt="Girl with purple sweater"
              width={110}
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Plants decoration */}
        <div className="absolute bottom-5 left-5">
          <div className="relative w-64 h-40">
            <img
              src="/src/assets/images/plants.webp"
              alt="Plants"
              width={150}
              height={150}
              className="object-contain"
            />
          </div>
        </div>
      </div>)}

      {/* Login Account form  */}
      {!showSignIn && (<div className="relative min-h-screen w-full overflow-hidden bg-linear-to-b from-gray-200 to-[#6d6c6c]">
        {/* Left side content */}
        <div className="absolute left-10 top-20 z-10">
          <div className="relative">            
            <div className="hidden lg:block rotate-[10deg] animate-bounce duration-700">
              <h1 className="text-5xl font-bold text-black">HOLA, AMIGO!</h1>
              <p className="text-2xl italic mt-1 text-black font-cursive">Time to LOGIN!!</p>
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          {/*  bookshelf illustration */}
          <div className="absolute bottom-[-10px] left-0">
            <div className="relative w-64 h-80">
              <img
                src="src/assets/doodles/bookshelf.svg"
                alt="Girl with bookshelf"
                width={400}
                className="object-contain scale-x-[-1]"
              />
            </div>
          </div>

          {/* Girl with bookshelf illustration */}
          <div className="absolute bottom-4 left-60">
            <div className="relative w-64 h-80">
              <img
                src="src/assets/doodles/girl-2.svg"
                alt="Girl with bookshelf"
                width={100}
                height={100}
                className="object-contain scale-x-[-1] drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Login form container */}
        <div className="login-box absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] bg-gray-300 rounded-lg p-8 shadow-lg">
          {/* Person sitting on top illustration */}
          <div className="absolute -top-33 left-28 -translate-x-1/2">
            <img
              src="src/assets/doodles/boy-5.svg?height=150&width=200"
              alt="Person sitting"
              width={200}
              height={150}
              className="object-contain drop-shadow-2xl"
            />
          </div>

          {/* Social login buttons */}
          <div className="flex justify-center gap-4 mb-2">
            <button className="rounded-full bg-white p-2 hover:bg-gray-100 transition-colors">
              <span className="sr-only">Login with Google</span>
              <div className="h-8 w-8 flex items-center justify-center">
                <span className="text-4xl font-bold">G</span>
              </div>
            </button>
            <button className="rounded-full bg-white p-2 hover:bg-gray-100 transition-colors">
              <span className="sr-only">Login with Facebook</span>
              <Facebook className="h-8 w-8" />
            </button>
            <button className="rounded-full bg-white p-2 hover:bg-gray-100 transition-colors">
              <span className="sr-only">Login with Twitter</span>
              <Twitter className="h-8 w-8" />
            </button>
            <button className="rounded-full bg-white p-2 hover:bg-gray-100 transition-colors">
              <span className="sr-only">Login with GitHub</span>
              <Github className="h-8 w-8" />
            </button>
          </div>

          <p className="text-center text-md mb-4">or use your username and password</p>

          {/* Login form */}
          <form className="space-y-4">
            <div className="relative">
              {/* email input  */}
              <input
                type="email"
                placeholder="Email"
                className="rounded-3xl pl-10 py-6 bg-gray-400/50 border-none text-black placeholder:text-black w-full h-4"
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <AtSign className="h-5 w-5 text-black" />
              </div>
            </div>
            <div className="relative">
              {/* password input  */}
              <input
                type="password"
                placeholder="Password"
                className="pl-10 py-6 bg-gray-400/50 border-none text-black placeholder:text-black w-full h-4 rounded-3xl"
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-black hover:text-gray-700 transition-colors"
                onClick={() => {
                  // Toggle password visibility functionality would go here
                  const passwordInput = document.querySelector('input[type="password"]')
                  if (passwordInput) {
                    passwordInput.type = passwordInput.type === "password" ? "text" : "password"
                  }
                }}
              >
                <Eye className="h-5 w-5" />
                <span className="sr-only">Toggle password visibility</span>
              </button>
            </div>

            <p className="text-center text-md">
              don't have account?{" "}
              <Link href="#" className="cursor-pointer underline" onClick={handleSignIn}>
                create account
              </Link>
            </p>

            <div className="flex justify-center mt-4">
              <button className="our-web-btn bg-white text-black cursor-pointer ">LOGIN</button>
            </div>
          </form>
        </div>

        {/* Girl on right side */}
        <div className="absolute md:block md:bottom-0 md:left-5 lg:bottom-7 lg:left-235 hidden">
          <div className="relative w-64 h-80">
            <img
              src="src/assets/doodles/girl-1.svg?height=320&width=256"
              alt="Girl with purple sweater"
              width={100}
              height={100}
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Plants decoration */}
        <div className="absolute bottom-5 right-5">
          <div className="relative w-64 h-40">
            <img
              src="/src/assets/images/plants.webp"
              alt="Plants"
              width={150}
              height={150}
              className="object-contain"
            />
          </div>
        </div>
      </div>)}
    </div>
  )
}

