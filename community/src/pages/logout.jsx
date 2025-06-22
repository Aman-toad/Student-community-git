import { Settings } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import Bottombar from '../components/Bottombar';

function LogOut() {
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
      </main>

    </div>
  );
}

export default LogOut;