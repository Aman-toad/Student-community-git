import Sidebar from "../components/Sidebar.jsx";
import Bottombar from '../components/Bottombar'
import { Settings } from "lucide-react";

export default function Chats() {

  return (
    <div className="flex bg-slate-100 text-black dark:text-white dark:bg-slate-700">

      <div className="hidden md:block">
        <Sidebar />
      </div>
      <div className=" md:block">
        <Bottombar />
      </div>
      <main className="flex-1 pt-5">
        <div className="bg-slate-800 rounded-xl border border-gray-200 shadow-sm p-12 text-center">
          <div className="max-w-md mx-auto">
            <div className="text-gray-400 mb-4">
              <Settings className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-xl font-bold mb-2">Coming Soon</h3>
            <p className="text-gray-300 mb-6">
              We're working on this feature and it will be available soon. Check back later!
            </p>
            <button
            //make this  working
              onClick={() => setActiveTab("/dashboard")}
              className="bg-[#118AB2] hover:bg-[#118AB2]/90 text-white rounded-lg px-4 py-2 font-medium"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
        <div className="dark:bg-slate-700 bg-white text-black dark:text-white border-2 mt-10 h-130 rounded-2xl shadow-2xl flex flex-col justify-between lg:w-1/2 md:w-100">
          <div>
            <h1 className="m-4 text-3xl font-extrabold">AI Chat Room</h1>
          </div>

          <div >
            <input className="border-2 m-4 mr-2 p-2 rounded-2xl w-70 " type="text" />
            <button className="bg-sky-400 p-2 rounded-2xl w-20">Send </button>
          </div>
        </div>

      </main>

    </div>
  )
}