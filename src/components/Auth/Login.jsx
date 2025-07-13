"use client"

import { useState } from "react"
import LoginHelpModal from "./LoginHelpModal"

function Login({ handleLogin }) {
  // console.log(handleLogin)

  //2 way binding
  const [showHelp, setShowHelp] = useState(false)
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()
    // console.log("hello");
    handleLogin(email, password)
    // console.log("email : ",email)
    // console.log("password : ",password)
    setemail("")
    setpassword("")
  }

  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 dark:from-black dark:via-gray-900 dark:to-emerald-950">
        <div className="rounded-2xl border-2 border-emerald-500/30 dark:border-emerald-400/20 p-20 bg-black/40 dark:bg-black/60 backdrop-blur-xl shadow-2xl shadow-emerald-500/10 dark:shadow-emerald-400/5">
          <div className="mb-8 text-center">
            <div className="w-16 h-16 bg-emerald-500/20 dark:bg-emerald-400/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/30 dark:border-emerald-400/20">
              <span className="text-2xl">🔐</span>
            </div>
            <h1 className="text-3xl font-bold text-white dark:text-gray-100 mb-2">Welcome Back</h1>
            <p className="text-emerald-300 dark:text-emerald-400 text-sm">Sign in to your account</p>
          </div>

          <form
            onSubmit={(e) => {
              submitHandler(e)
            }}
            className="flex flex-col items-center justify-center space-y-6"
          >
            <div className="relative w-full">
              <input
                value={email}
                onChange={(e) => {
                  // console.log(e.target.value)
                  setemail(e.target.value)
                }}
                required
                className="w-full border-2 border-emerald-500/50 dark:border-emerald-400/30 px-6 py-4 text-xl text-white dark:text-gray-100 outline-none bg-black/20 dark:bg-black/40 placeholder:text-emerald-200/70 dark:placeholder:text-emerald-300/60 rounded-full focus:border-emerald-400 dark:focus:border-emerald-300 focus:bg-black/30 dark:focus:bg-black/50 transition-all duration-300 focus:shadow-lg focus:shadow-emerald-500/20 dark:focus:shadow-emerald-400/10"
                type="email"
                placeholder="Enter Your Email"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500/10 to-transparent dark:from-emerald-400/5 pointer-events-none"></div>
            </div>

            <div className="relative w-full">
              <input
                value={password}
                onChange={(e) => {
                  // console.log(e.target.value)
                  setpassword(e.target.value)
                }}
                required
                className="w-full border-2 border-emerald-500/50 dark:border-emerald-400/30 px-6 py-4 text-xl text-white dark:text-gray-100 outline-none bg-black/20 dark:bg-black/40 placeholder:text-emerald-200/70 dark:placeholder:text-emerald-300/60 rounded-full focus:border-emerald-400 dark:focus:border-emerald-300 focus:bg-black/30 dark:focus:bg-black/50 transition-all duration-300 focus:shadow-lg focus:shadow-emerald-500/20 dark:focus:shadow-emerald-400/10"
                type="password"
                placeholder="Enter Your Password"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500/10 to-transparent dark:from-emerald-400/5 pointer-events-none"></div>
            </div>

            <button className="w-full border-2 border-none bg-gradient-to-r from-emerald-600 to-emerald-500 dark:from-emerald-500 dark:to-emerald-400 hover:from-emerald-500 hover:to-emerald-400 dark:hover:from-emerald-400 dark:hover:to-emerald-300 px-6 py-4 text-xl font-semibold text-white dark:text-gray-900 outline-none rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-emerald-500/30 dark:shadow-emerald-400/20 hover:shadow-xl hover:shadow-emerald-500/40 dark:hover:shadow-emerald-400/30">
              Log in
            </button>

            <p
              className="mt-6 text-sm text-emerald-300 dark:text-emerald-400 underline cursor-pointer hover:text-emerald-200 dark:hover:text-emerald-300 transition-colors duration-200 flex items-center gap-2"
              onClick={() => setShowHelp(true)}
            >
              
              Login Help?
            </p>
          </form>
        </div>
      </div>
      <LoginHelpModal show={showHelp} onClose={() => setShowHelp(false)} />
    </>
  )
}

export default Login
