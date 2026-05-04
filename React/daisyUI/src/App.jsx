import Nova from "./Components/superNova.particle"
import { HiAcademicCap } from "react-icons/hi";
import Card from "./Components/Hover.blur";
import Lottie from "lottie-react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const App = () => {
  return (
    <> 
    <section className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <HiAcademicCap className="text-4xl text-blue-500 mb-4" />
        <h1 className="text-2xl font-bold mb-2">Welcome to DaisyUI</h1>
        <p className="text-gray-600 mb-6">A Tailwind CSS component library.</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Get Started</button>
      </div>
    </section>
    <Card />
    <Nova />
     <DotLottieReact
      src="https://lottie.host/8e57001a-d8cd-46a3-9bb7-711f1a7d5af9/M066OHuKjk.lottie"
      stateMachineId="StateMachine1"
    />
   </>
  )
}

export default App
