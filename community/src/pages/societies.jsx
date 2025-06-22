import Sidebar from "../components/Sidebar";
import { useState, useEffect, useRef } from "react"
// import Image from "next/image"
import { Heart, Users, Calendar, Award, BookOpen, Music, Palette, Code, Camera, Globe } from "lucide-react"
import Footer from '../components/footer'
import Bottombar from '../components/Bottombar'
import { ToastContainer,toast } from "react-toastify";

export default function Societies() {
  const societiesRef = useRef(null)


  // Society data
  const societies = [
    {
      id: 1,
      name: "Photography Club",
      description: "Capture moments, tell stories, and explore the art of photography with like-minded enthusiasts.",
      members: 42,
      icon: <Camera className="w-6 h-6" />,
      color: "#EF476F",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 2,
      name: "Coding Wizards",
      description: "Build amazing projects, learn new technologies, and solve challenging problems together.",
      members: 56,
      icon: <Code className="w-6 h-6" />,
      color: "#118AB2",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 3,
      name: "Art Collective",
      description: "Express yourself through various art forms and collaborate on creative projects.",
      members: 38,
      icon: <Palette className="w-6 h-6" />,
      color: "#06D6A0",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 4,
      name: "Music Society",
      description: "Jam sessions, concerts, and musical exploration for all music lovers on campus.",
      members: 64,
      icon: <Music className="w-6 h-6" />,
      color: "#FFD166",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 5,
      name: "Book Club",
      description: "Dive into fascinating books, engage in thoughtful discussions, and expand your literary horizons.",
      members: 29,
      icon: <BookOpen className="w-6 h-6" />,
      color: "#073B4C",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 6,
      name: "Debate Society",
      description: "Sharpen your critical thinking and public speaking skills through engaging debates.",
      members: 35,
      icon: <Award className="w-6 h-6" />,
      color: "#EF476F",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 7,
      name: "Cultural Exchange",
      description: "Celebrate diversity, learn about different cultures, and build global connections.",
      members: 47,
      icon: <Globe className="w-6 h-6" />,
      color: "#118AB2",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 8,
      name: "Event Planning Committee",
      description: "Plan and execute exciting campus events that bring the community together.",
      members: 32,
      icon: <Calendar className="w-6 h-6" />,
      color: "#06D6A0",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  // Form validation
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !userName.trim() || !description.trim() || !email.trim()) {
      toast.error('Please fill all fields.');
      return;
    }

    toast.success('Information Submitted Successfully')

    console.log({ name, userName, description, email });
    setName('');
    setUserName('');
    setDescription('');
    setEmail('');
  }


  return (
    <div className="flex bg-slate-100 text-black dark:text-white dark:bg-slate-700">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <div className=" md:block">
        <Bottombar />
      </div>
      <main className="flex-1 pt-5">
        <div className="min-h-screen bg-slate-800 font-[system-ui]">
          {/* Header */}
          <div className="relative py-16 px-4 text-center">
            <div className="absolute inset-0 -z-10 opacity-10">
              <img src="/placeholder.svg?height=400&width=1200" alt="Doodle background" className="object-cover" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 relative">
              <span className="relative inline-block text-white">
                Our Campus Societies
                <div className="absolute -bottom-2 left-0 w-full h-3 bg-[#FFD166] -z-10 transform -rotate-1"></div>
              </span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-200">
              Discover amazing communities, pursue your passions, and connect with fellow students!
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <button className="bg-[#06D6A0] hover:bg-[#06D6A0]/90 text-white rounded-full px-8 py-4 text-lg font-bold shadow-lg transform transition-transform hover:scale-105 flex items-center">
                <Users className="mr-2 h-5 w-5" /> Find Your Society
              </button>
              <button className="bg-transparent hover:bg-[#118AB2]/10 rounded-full px-8 py-4 text-lg font-bold border-2 border-[#118AB2] text-[#118AB2] shadow-lg transform transition-transform hover:scale-105 flex items-center">
                <Heart className="mr-2 h-5 w-5" /> Start a New Society
              </button>
            </div>
          </div>

          {/* Society Cards with Stacking Effect */}
          <div className="max-w-7xl mx-auto px-4 py-12 relative" ref={societiesRef}>
            <div className="relative mb-16">
              <h2 className="text-3xl font-bold mb-4 text-center">
                <span className="relative inline-block text-white">
                  Find Your Community
                  <div className="absolute -bottom-1 left-0 w-full h-2 bg-[#FFD166] -z-10 transform -rotate-1"></div>
                </span>
              </h2>
              <p className="text-center text-gray-200 max-w-2xl mx-auto">
                Browse through our diverse range of student-led societies and find the perfect fit for your interests and
                passions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative perspective-1000">
              {societies.map((society) => (
                <div key={society.id} className="relative transition-all duration-300 ease-out">
                  <div
                    className={`border-4 border-dashed rounded-xl overflow-hidden bg-slate-900 shadow-lg hover:shadow-xl transition-transform hover:-translate-y-2`}
                    style={{ borderColor: society.color }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img src={society.image || "/placeholder.svg"} alt={society.name} className="object-cover" />
                      <div className="absolute inset-0 opacity-20" style={{ backgroundColor: society.color }}></div>
                      <div
                        className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center text-white"
                        style={{ backgroundColor: society.color }}
                      >
                        {society.icon}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2" style={{ color: society.color }}>
                        {society.name}
                      </h3>
                      <p className="text-gray-200 mb-4">{society.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center text-gray-200 text-sm">
                          <Users className="w-4 h-4 mr-1" />
                          {society.members} members
                        </span>
                        <button
                          className="rounded-full px-4 py-2 text-sm font-bold text-white transition-transform hover:scale-105"
                          style={{ backgroundColor: society.color }}
                        >
                          Join Now
                        </button>
                      </div>
                    </div>
                    <div
                      className="absolute -bottom-2 -right-2 w-20 h-20 rounded-full -z-10 opacity-20"
                      style={{ backgroundColor: society.color }}
                    ></div>
                    <div
                      className="absolute -top-2 -left-2 w-12 h-12 rounded-full -z-10 opacity-20"
                      style={{ backgroundColor: society.color }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Create Society Section */}
          <div className="bg-slate-800 border-t-4 border-dashed border-[#118AB2] py-16 px-4 mt-20">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-4">
                  <span className="relative inline-block">
                    Start Your Own Society
                    <div className="absolute -bottom-1 left-0 w-full h-2 bg-[#FFD166] -z-10 transform -rotate-1"></div>
                  </span>
                </h2>
                <p className="text-gray-200 max-w-2xl mx-auto">
                  Have a passion that's not represented yet? Create your own society and build a community around your
                  interests!
                </p>
              </div>

              <div className="bg-slate-900 rounded-xl p-8 border-4 border-dashed border-[#EF476F] relative">
                <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-[#EF476F] opacity-20"></div>
                <div className="absolute -bottom-6 -right-6 w-16 h-16 rounded-full bg-[#06D6A0] opacity-20"></div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-[#118AB2]">How It Works</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="bg-[#FFD166] rounded-full p-2 mt-1 text-white flex items-center justify-center w-8 h-8">
                          1
                        </div>
                        <div>
                          <h4 className="font-bold">Submit Your Idea</h4>
                          <p className="text-gray-300">Fill out the form with your society concept and goals</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-[#06D6A0] rounded-full p-2 mt-1 text-white flex items-center justify-center w-8 h-8">
                          2
                        </div>
                        <div>
                          <h4 className="font-bold">Gather Interest</h4>
                          <p className="text-gray-300">Find at least 10 students interested in joining</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-[#118AB2] rounded-full p-2 mt-1 text-white flex items-center justify-center w-8 h-8">
                          3
                        </div>
                        <div>
                          <h4 className="font-bold">Meet with Advisor</h4>
                          <p className="text-gray-300">Discuss your plans with a faculty advisor</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-[#EF476F] rounded-full p-2 mt-1 text-white flex items-center justify-center w-8 h-8">
                          4
                        </div>
                        <div>
                          <h4 className="font-bold">Launch Your Society</h4>
                          <p className="text-gray-300">Get approved and start building your community!</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4 text-[#EF476F]">Get Started</h3>
                    <div className="space-y-4 text-black">
                      <form
                        onSubmit={handleSubmit}
                        className="space-y-4 text-black" action="">
                        <div>
                          <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Society Name"
                            className="w-full rounded-full text-white border-2 border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#118AB2] focus:border-transparent"
                          />
                        </div>
                        <div>
                          <input
                            type="text"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            placeholder="Your Name"
                            className="w-full rounded-full text-white border-2 border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#118AB2] focus:border-transparent"
                          />
                        </div>
                        <div>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email Address"
                            className="w-full rounded-full border-2 text-white border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#118AB2] focus:border-transparent"
                          />
                        </div>
                        <div>
                          <textarea
                            placeholder="Describe your society idea..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full min-h-[120px] rounded-xl text-white border-2 border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-[#118AB2] focus:border-transparent"
                          ></textarea>
                        </div>
                        <div>
                          <button type="submit" className="w-full bg-[#EF476F] hover:bg-[#EF476F]/90 text-white rounded-full p-3 font-bold transform transition-transform hover:scale-105">
                            Submit Your Idea
                          </button>
                        </div>
                      </form>
                      <ToastContainer closeOnClick position="bottom-right" autoClose={3000} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">
                <span className="relative inline-block text-white">
                  Upcoming Society Events
                  <div className="absolute -bottom-1 left-0 w-full h-2 bg-[#FFD166] -z-10 transform -rotate-1"></div>
                </span>
              </h2>
              <p className="text-gray-200 max-w-2xl mx-auto">
                Check out these exciting events organized by our student societies!
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="border-4 border-[#118AB2] rounded-xl overflow-hidden bg-slate-900 shadow-md hover:shadow-lg transition-transform hover:-translate-y-1">
                <div className="p-4 bg-[#118AB2] text-white">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold">15</span>
                    <span>May</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">Photography Exhibition</h3>
                  <p className="text-gray-300 text-sm mb-3">Organized by Photography Club</p>
                  <p className="text-gray-300 mb-4">
                    Explore stunning photographs captured by our talented student photographers.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 flex items-center">
                      <Calendar className="w-4 h-4 mr-1" /> 3:00 PM - 7:00 PM
                    </span>
                    <button className="text-[#118AB2] hover:bg-[#118AB2]/10 rounded-full px-3 py-1 text-sm border border-[#118AB2]">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>

              <div className="border-4 border-[#06D6A0] rounded-xl overflow-hidden bg-slate-900 shadow-md hover:shadow-lg transition-transform hover:-translate-y-1">
                <div className="p-4 bg-[#06D6A0] text-white">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold">22</span>
                    <span>May</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">Coding Hackathon</h3>
                  <p className="text-gray-300 text-sm mb-3">Organized by Coding Wizards</p>
                  <p className="text-gray-300 mb-4">
                    24-hour coding challenge to build innovative solutions for campus problems.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 flex items-center">
                      <Calendar className="w-4 h-4 mr-1" /> 9:00 AM - Next Day
                    </span>
                    <button className="text-[#06D6A0] hover:bg-[#06D6A0]/10 rounded-full px-3 py-1 text-sm border border-[#06D6A0]">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>

              <div className="border-4 border-[#EF476F] rounded-xl overflow-hidden bg-slate-900 shadow-md hover:shadow-lg transition-transform hover:-translate-y-1">
                <div className="p-4 bg-[#EF476F] text-white">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold">29</span>
                    <span>May</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">Spring Concert</h3>
                  <p className="text-gray-300 text-sm mb-3">Organized by Music Society</p>
                  <p className="text-gray-300 mb-4">
                    Live performances featuring talented musicians from our campus community.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 flex items-center">
                      <Calendar className="w-4 h-4 mr-1" /> 6:00 PM - 9:00 PM
                    </span>
                    <button className="text-[#EF476F] hover:bg-[#EF476F]/10 rounded-full px-3 py-1 text-sm border border-[#EF476F]">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <button className="bg-[#FFD166] hover:bg-[#FFD166]/90 text-black rounded-full px-6 py-3 font-bold inline-flex items-center">
                <Calendar className="mr-2 h-5 w-5" /> View All Events
              </button>
            </div>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </main>

    </div>
  )
}
