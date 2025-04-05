import { useState } from "react";
import ImageLogin from "./assets/Mobile wireframe-cuate.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    // container
    <main className="w-full h-svh flex">
      {/* Esquerda */}
      <aside className=" bg-gradient-to-br from-orange-300 via-yellow-300 to-pink-400 w-[50%] h-svh flex flex-col items-center justify-center gap-2">
        <img
          className="max-w-[450px]"
          src={ImageLogin}
          alt="Ilustrative login image"
        />
        <h1 className="text-white text-3xl font-bold">Secure Login Portal</h1>
        <p className="text-white text-center">
          Acess your dachborad securely eith our protect login <br /> system.
          Your data is encrypted and secure.
        </p>
      </aside>
      {/* Direita */}
      <aside className="w-[50%] h-svh p-6 flex justify-center items-center">
        <div className="w-full h-full flex flex-col justify-center items-center">
          {/* container do formulário */}
          <form className="flex flex-col justify-center items-center w-full max-w-md gap-3">
            {/* topo */}
            <header className="text-center">
              <h1 className="text-3xl font-bold">Welcome Back</h1>
              <p className="text-gray-500">
                Enter yor details to sign in to your account
              </p>
            </header>
            {/* meio */}
            <main className="w-full">
              <label
                for="input-group-1"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your Email
              </label>
              <div className="relative mb-6">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="input-group-1"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                  placeholder="name@example.com"
                />
              </div>
              <label
                for="website-admin"
                className="block mb-2 text-sm font-medium text-black"
              >
                Password
              </label>
              <div className="flex">
              <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                </span>
                <input
                  type="password"
                  id="input-password"
                  className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 "
                  placeholder="Password"
                />
              </div>
              {/* botão */}
              <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-full mt-5">Sign Up</button>
            </main>
            {/* fim */}
          </form>
        </div>
      </aside>
    </main>
  );
}

export default App;
