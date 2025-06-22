"use client"
// import Image from "next/img"
import { useRef, useState } from "react"
import { Heart, Star, MessageSquare, Users, ShoppingBag, Share2, TwitterIcon, FacebookIcon, InstagramIcon, YoutubeIcon, File, Image, Download } from "lucide-react"
import Footer from '../components/footer'
import Sidebar from "../components/Sidebar.jsx";
import Bottombar from '../components/Bottombar'
import { toast, ToastContainer } from "react-toastify";

export default function Support() {
  const [activeTab, setActiveTab] = useState("donate")

  //copy text 
  const inputRef = useRef(null)
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const inputTextLink = inputRef.current;
    if (!inputTextLink) return;

    try {
      await navigator.clipboard.writeText(inputTextLink.value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error('Failed to Copy');
    }
  }

  //email acceptation
  const [email, setEmail] = useState('');

  const handleSend = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      toast.error('Please Enter the Email'); return;
    }
    else if (!emailRegex.test(email)) {
      toast.warning('Invalid Email'); return;
    }

    toast.success('Invitation Sent !');
    setEmail('')
  }

  // Volunteer application acceptance validation
  const [name, setName] = useState('');
  const [volunteerEmail, setVolunteerEmail] = useState('');
  const [description, setDescription] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState('')

  const handleVolunteerSubmit = (e) => {
    e.preventDefault();

    if (!name || !description.trim() || !phone || !interest.trim() || !volunteerEmail) {
      toast.error('Please fill all fields. !!');
      return;
    }

    toast.success('Application Submitted')
    setName('');
    setPhone('');
    setDescription('');
    setEmail('');
    setInterest('');
  }

  // Review section submit validation
  const [shareName, setShareName] = useState('');
  const [experienceDescription, setExperienceDescription] = useState('');

  const handleReviewSubmit = (e) => {
    e.preventDefault();

    if (!shareName || !experienceDescription.trim()) {
      toast.error('Please fill all fields. !!');
      return;
    }

    toast.success('Review Submitted')
    setShareName('');
    setExperienceDescription('');
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
                Support Our Community!
                <div className="absolute -bottom-2 left-0 w-full h-3 bg-[#ffd573] -z-10 transform -rotate-1"></div>
              </span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-200">
              Help our student community grow and thrive with your support. Every contribution makes a difference!
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <button className="bg-[#06D6A0] hover:bg-[#06D6A0]/90 text-white rounded-full px-8 py-6 text-lg font-bold shadow-lg transform transition-transform hover:scale-105 flex items-center">
                <Heart className="mr-2 h-5 w-5" /> Donate Now
              </button>
              <button className="bg-transparent hover:bg-[#118AB2]/10 rounded-full px-8 py-6 text-lg font-bold border-2 border-[#118AB2] text-[#118AB2] shadow-lg transform transition-transform hover:scale-105 flex items-center">
                <Users className="mr-2 h-5 w-5" /> Join Us
              </button>
            </div>
          </div>

          {/* Main content */}
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="w-full">
              {/* Custom Tabs */}
              <div className="grid w-full grid-cols-3 md:grid-cols-5 rounded-md md:rounded-full p-1 bg-[#1f1f1f91] mb-8 text-white">
                <button
                  onClick={() => setActiveTab("donate")}
                  className={`rounded-full py-2 px-4 flex items-center justify-center transition-colors ${activeTab === "donate" ? "bg-[#EF476F] text-white" : "hover:bg-gray-200 hover:text-gray-800"
                    }`}
                >
                  <Heart className="mr-2 h-4 w-4" /> Donate
                </button>
                <button
                  onClick={() => setActiveTab("reviews")}
                  className={`rounded-full py-2 px-4 flex items-center justify-center transition-colors ${activeTab === "reviews" ? "bg-[#EF476F] text-white" : "hover:bg-gray-200 hover:text-gray-800"
                    }`}
                >
                  <Star className="mr-2 h-4 w-4" /> Reviews
                </button>
                <button
                  onClick={() => setActiveTab("volunteer")}
                  className={`rounded-full py-2 px-4 flex items-center justify-center transition-colors ${activeTab === "volunteer" ? "bg-[#EF476F] text-white" : "hover:bg-gray-200 hover:text-gray-800"
                    }`}
                >
                  <Users className="mr-2 h-4 w-4" /> Volunteer
                </button>
                <button
                  onClick={() => setActiveTab("merch")}
                  className={`rounded-full py-2 px-4 flex items-center justify-center transition-colors ${activeTab === "merch" ? "bg-[#EF476F] text-white" : "hover:bg-gray-200 hover:text-gray-800"
                    }`}
                >
                  <ShoppingBag className="mr-2 h-4 w-4" /> Merch
                </button>
                <button
                  onClick={() => setActiveTab("share")}
                  className={`rounded-full py-2 px-4 flex items-center justify-center transition-colors ${activeTab === "share" ? "bg-[#EF476F] text-white" : "hover:bg-gray-200 hover:text-gray-800"
                    }`}
                >
                  <Share2 className="mr-2 h-4 w-4" /> Share
                </button>
              </div>

              {/* Donation Section */}
              {activeTab === "donate" && (
                <div className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="relative">
                        <h2 className="text-3xl font-bold mb-4">
                          <span className="relative inline-block text-white">
                            Support Our Mission
                            <div className="absolute -bottom-1 left-0 w-full h-2 bg-[#FFD166] -z-10 transform -rotate-1"></div>
                          </span>
                        </h2>
                        <p className="text-gray-200 mb-4">
                          Your donations help us organize events, provide resources, and create a vibrant community for all
                          students. Every contribution, no matter how small, makes a huge difference!
                        </p>
                        <div className="space-y-4">
                          <div className="flex flex-wrap gap-4">
                            <button className="bg-[#118AB2] hover:bg-[#118AB2]/90 text-white rounded-full px-6 py-2">
                              &#8377;5
                            </button>
                            <button className="bg-[#118AB2] hover:bg-[#118AB2]/90 text-white rounded-full px-6 py-2">
                              &#8377;10
                            </button>
                            <button className="bg-[#118AB2] hover:bg-[#118AB2]/90 text-white rounded-full px-6 py-2">
                              &#8377;25
                            </button>
                            <button className="bg-[#118AB2] hover:bg-[#118AB2]/90 text-white rounded-full px-6 py-2">
                              &#8377;50
                            </button>
                            <button className="bg-transparent hover:bg-[#118AB2]/10 rounded-full px-6 py-2 border border-[#118AB2] text-[#118AB2]">
                              Custom
                            </button>
                          </div>
                          <div className="space-y-2">
                            <input
                              type="text"
                              placeholder="Name"
                              className="w-full rounded-full border-2 border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-[#118AB2] focus:border-transparent "
                            />
                            <input
                              type="email"
                              placeholder="Email"
                              className="w-full rounded-full border-2 border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-[#118AB2] focus:border-transparent"
                            />
                            <div className="grid grid-cols-2 gap-2">
                              <input
                                type="text"
                                placeholder="Card Number"
                                className="w-full rounded-full border-2 border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-[#118AB2] focus:border-transparent"
                              />
                              <div className="grid grid-cols-2 gap-2">
                                <input
                                  type="text"
                                  placeholder="MM/YY"
                                  className="w-full rounded-full border-2 border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-[#118AB2] focus:border-transparent"
                                />
                                <input
                                  type="text"
                                  placeholder="CVC"
                                  className="w-full rounded-full border-2 border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-[#118AB2] focus:border-transparent"
                                />
                              </div>
                            </div>
                            <button className="w-full bg-[#EF476F] hover:bg-[#EF476F]/90 text-white rounded-full p-6 text-lg font-bold shadow-lg transform transition-transform hover:scale-105">
                              Donate Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="absolute -top-10 -left-10 w-24 h-24 text-[#EF476F] opacity-20">
                        <Heart className="w-full h-full" />
                      </div>
                      <div className="border-4 border-dashed border-[#06D6A0] rounded-xl p-6 bg-slate-900 ">
                        <h3 className="text-2xl font-bold mb-4 text-[#118AB2]">Where Your Money Goes</h3>
                        <ul className="space-y-4">
                          <li className="flex items-start gap-3">
                            <div className="bg-[#FFD166] rounded-full p-2 mt-1">
                              <span className="font-bold">40%</span>
                            </div>
                            <div>
                              <h4 className="font-bold">Student Events</h4>
                              <p className="text-gray-300">Workshops, meetups, and social gatherings</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="bg-[#06D6A0] rounded-full p-2 mt-1">
                              <span className="font-bold">30%</span>
                            </div>
                            <div>
                              <h4 className="font-bold">Learning Resources</h4>
                              <p className="text-gray-300">Books, online courses, and study materials</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="bg-[#118AB2] rounded-full p-2 mt-1">
                              <span className="font-bold">20%</span>
                            </div>
                            <div>
                              <h4 className="font-bold">Community Space</h4>
                              <p className="text-gray-300">Maintaining our physical and virtual spaces</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="bg-[#EF476F] rounded-full p-2 mt-1">
                              <span className="font-bold">10%</span>
                            </div>
                            <div>
                              <h4 className="font-bold">Scholarships</h4>
                              <p className="text-gray-300">Supporting students in need</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Reviews Section */}
              {activeTab === "reviews" && (
                <div className="space-y-8">
                  <div className="space-y-6">
                    <div className="relative">
                      <h2 className="text-3xl font-bold mb-4">
                        <span className="relative inline-block">
                          Community Reviews
                          <div className="absolute -bottom-1 left-0 w-full h-2 bg-[#FFD166] -z-10 transform -rotate-1"></div>
                        </span>
                      </h2>
                      <p className="text-gray-100 mb-6">
                        See what our community members have to say about their experiences with us!
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Review Cards */}
                      <div className="border-4 border-[#FFD166] rounded-xl overflow-hidden transform rotate-1 hover:rotate-0 transition-transform bg-slate-900 shadow-sm">
                        <div className="p-6">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-full bg-[#EF476F] flex items-center justify-center text-white font-bold text-xl">
                              AS
                            </div>
                            <div>
                              <h4 className="font-bold ">Aman Singh</h4>
                              <div className="flex text-[#FFD166]">
                                <Star className="fill-current h-4 w-4" />
                                <Star className="fill-current h-4 w-4" />
                                <Star className="fill-current h-4 w-4" />
                                <Star className="fill-current h-4 w-4" />
                                <Star className="fill-current h-4 w-4" />
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-400">
                            "This community has been a game-changer for me! The events are amazing and I've made so many
                            friends. The resources provided have helped me excel in my studies."
                          </p>
                        </div>
                      </div>

                      <div className="border-4 border-[#06D6A0] rounded-xl overflow-hidden transform -rotate-1 hover:rotate-0 transition-transform bg-slate-900  shadow-sm">
                        <div className="p-6">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-full bg-[#118AB2] flex items-center justify-center text-white font-bold text-xl">
                              PC
                            </div>
                            <div>
                              <h4 className="font-bold">Chitra</h4>
                              <div className="flex text-[#FFD166]">
                                <Star className="fill-current h-4 w-4" />
                                <Star className="fill-current h-4 w-4" />
                                <Star className="fill-current h-4 w-4" />
                                <Star className="fill-current h-4 w-4" />
                                <Star className="h-4 w-4 text-gray-300" />
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-400">
                            "The workshops organized by this community have taught me skills I wouldn't have learned in
                            class. The mentorship program was particularly helpful!"
                          </p>
                        </div>
                      </div>

                      <div className="border-4 border-[#118AB2] rounded-xl overflow-hidden transform rotate-1 hover:rotate-0 transition-transform bg-slate-900  shadow-sm">
                        <div className="p-6">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-full bg-[#FFD166] flex items-center justify-center text-white font-bold text-xl">
                              Y
                            </div>
                            <div>
                              <h4 className="font-bold">Yuvraj</h4>
                              <div className="flex text-[#FFD166]">
                                <Star className="fill-current h-4 w-4" />
                                <Star className="fill-current h-4 w-4" />
                                <Star className="fill-current h-4 w-4" />
                                <Star className="fill-current h-4 w-4" />
                                <Star className="fill-current h-4 w-4" />
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-400">
                            "I received a scholarship from this community which helped me continue my education during a
                            difficult time. Forever grateful for the support!"
                          </p>
                        </div>
                      </div>

                      <div className="border-4 border-[#EF476F] rounded-xl overflow-hidden transform -rotate-1 hover:rotate-0 transition-transform bg-slate-900  shadow-sm">
                        <div className="p-6">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-full bg-[#06D6A0] flex items-center justify-center text-white font-bold text-xl">
                              PS
                            </div>
                            <div>
                              <h4 className="font-bold">Priyanshu</h4>
                              <div className="flex text-[#FFD166]">
                                <Star className="fill-current h-4 w-4" />
                                <Star className="fill-current h-4 w-4" />
                                <Star className="fill-current h-4 w-4" />
                                <Star className="fill-current h-4 w-4" />
                                <Star className="fill-current h-4 w-4" />
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-400">
                            "The community space is my favorite place to study and hang out. The events are always fun and
                            educational. Can't imagine my college life without this community!"
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Add Review Form */}
                    <div className="mt-8 bg-white text-black dark:text-white dark:bg-slate-700 rounded-xl p-6 border-4 border-dashed border-[#118AB2]">
                      <h3 className="text-2xl font-bold mb-4">Share Your Experience</h3>
                      <form onSubmit={handleReviewSubmit}>
                        <div className="space-y-4">
                          <div className="flex items-center gap-2 mb-4">
                            <span className="font-medium">Your Rating:</span>
                            <div className="flex gap-1">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="h-6 w-6 cursor-pointer text-gray-300 hover:text-[#FFD166]" />
                              ))}
                            </div>
                          </div>
                          <input
                            type="text"
                            value={shareName}
                            onChange={(e) => setShareName(e.target.value)}
                            placeholder="Your Name"
                            className="w-full rounded-full border-2 border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-[#118AB2] focus:border-transparent"
                          />
                          <textarea
                            placeholder="Share your experience with our community..."
                            value={experienceDescription}
                            onChange={(e) => setExperienceDescription(e.target.value)}
                            className="w-full min-h-[120px] rounded-xl border-2 border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-[#118AB2] focus:border-transparent"
                          ></textarea>
                          <button type="submit" className="bg-[#EF476F] hover:bg-[#EF476F]/90 text-white rounded-full px-8 py-2 font-bold flex items-center">
                            <MessageSquare className="mr-2 h-4 w-4" /> Submit Review
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              )}

              {/* Volunteer Section */}
              {activeTab === "volunteer" && (
                <div className="space-y-8">
                  <div className="space-y-6">
                    <div className="relative">
                      <h2 className="text-3xl font-bold mb-4">
                        <span className="relative inline-block">
                          Volunteer Opportunities
                          <div className="absolute -bottom-1 left-0 w-full h-2 bg-[#FFD166] -z-10 transform -rotate-1"></div>
                        </span>
                      </h2>
                      <p className="text-gray-100 mb-6">
                        Share your time and skills to help our community grow! We have various volunteer opportunities
                        available.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="border-4 border-[#EF476F] rounded-xl overflow-hidden hover:shadow-xl transition-shadow bg-slate-900 ">
                        <div className="p-6">
                          <h3 className="text-xl font-bold mb-2 text-[#EF476F]">Event Organizer</h3>
                          <p className="text-gray-200 mb-4">
                            Help plan and execute community events, workshops, and social gatherings.
                          </p>
                          <ul className="space-y-2 mb-4">
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-[#EF476F]"></div>
                              <span className="text-gray-300">5-10 hours/month</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-[#EF476F]"></div>
                              <span className="text-gray-300">Planning & coordination</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-[#EF476F]"></div>
                              <span className="text-gray-300">Team collaboration</span>
                            </li>
                          </ul>
                          <a href="#volunteerApplication">
                            <button className="w-full bg-[#EF476F] hover:bg-[#EF476F]/90 text-white rounded-full py-2">
                              Apply Now
                            </button>
                          </a>
                        </div>
                      </div>

                      <div className="border-4 border-[#06D6A0] rounded-xl overflow-hidden hover:shadow-xl transition-shadow bg-slate-900 ">
                        <div className="p-6">
                          <h3 className="text-xl font-bold mb-2 text-[#06D6A0]">Mentor</h3>
                          <p className="text-gray-200 mb-4">
                            Share your knowledge and experience with other students through our mentorship program.
                          </p>
                          <ul className="space-y-2 mb-4">
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-[#06D6A0]"></div>
                              <span className="text-gray-300">2-4 hours/week</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-[#06D6A0]"></div>
                              <span className="text-gray-300">One-on-one guidance</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-[#06D6A0]"></div>
                              <span className="text-gray-300">Subject expertise</span>
                            </li>
                          </ul>
                          <a href="#volunteerApplication">
                            <button className="w-full bg-[#06D6A0] hover:bg-[#06D6A0]/90 text-white rounded-full py-2">
                              Apply Now
                            </button>
                          </a>
                        </div>
                      </div>

                      <div className="border-4 border-[#118AB2] rounded-xl overflow-hidden hover:shadow-xl transition-shadow bg-slate-900 ">
                        <div className="p-6">
                          <h3 className="text-xl font-bold mb-2 text-[#118AB2]">Content Creator</h3>
                          <p className="text-gray-200 mb-4">
                            Help create educational content, social media posts, and promotional materials.
                          </p>
                          <ul className="space-y-2 mb-4">
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-[#118AB2]"></div>
                              <span className="text-gray-300">Flexible hours</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-[#118AB2]"></div>
                              <span className="text-gray-300">Creative work</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-[#118AB2]"></div>
                              <span className="text-gray-300">Digital skills</span>
                            </li>
                          </ul>
                          <a href="#volunteerApplication">
                            <button className="w-full bg-[#118AB2] hover:bg-[#118AB2]/90 text-white rounded-full py-2">
                              Apply Now
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>

                    <section id="volunteerApplication">
                      <div className="mt-8 bg-white text-black dark:text-white dark:bg-slate-700 rounded-xl p-6 border-4 border-dashed border-[#FFD166]">
                        <h3 className="text-2xl font-bold mb-4">Volunteer Application</h3>
                        <form onSubmit={handleVolunteerSubmit}>
                          <div className="grid md:grid-cols-2 gap-4">
                            <input
                              type="text"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              placeholder="Your Name"
                              className="rounded-full border-2 border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-[#118AB2] focus:border-transparent"
                            />
                            <input
                              type="email"
                              value={volunteerEmail}
                              onChange={(e) => setVolunteerEmail(e.target.value)}
                              placeholder="Email"
                              className="rounded-full border-2 border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-[#118AB2] focus:border-transparent"
                            />
                            <input
                              type="number"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              placeholder="Phone"
                              className="rounded-full border-2 border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-[#118AB2] focus:border-transparent"
                            />
                            <input
                              type="text"
                              value={interest}
                              onChange={(e) => setInterest(e.target.value)}
                              placeholder="Area of Interest"
                              className="rounded-full border-2 border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-[#118AB2] focus:border-transparent"
                            />
                            <textarea
                              placeholder="Tell us about yourself and why you want to volunteer..."
                              value={description}
                              onChange={(e) => setDescription(e.target.value)}
                              className="md:col-span-2 min-h-[120px] rounded-xl border-2 border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-[#118AB2] focus:border-transparent"
                            ></textarea>
                            <button type="submit" className="md:col-span-2 bg-[#FFD166] hover:bg-[#FFD166]/90 text-black rounded-full px-8 py-2 font-bold">
                              Submit Application
                            </button>
                          </div>
                        </form>

                      </div>
                    </section>
                  </div>
                </div>
              )}

              {/* Merchandise Section */}
              {activeTab === "merch" && (
                <div className="space-y-8">
                  <div className="space-y-6">
                    <div className="relative">
                      <h2 className="text-3xl font-bold mb-4">
                        <span className="relative inline-block">
                          Community Merchandise
                          <div className="absolute -bottom-1 left-0 w-full h-2 bg-[#FFD166] -z-10 transform -rotate-1"></div>
                        </span>
                      </h2>
                      <p className="text-gray-100 mb-6">
                        Show your support by purchasing our community merchandise! All proceeds go directly to supporting
                        our programs.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="border-4 border-[#118AB2] rounded-xl overflow-hidden hover:shadow-xl transition-shadow bg-slate-900 ">
                        <div className="aspect-square relative">
                          <img src="/placeholder.svg?height=300&width=300" alt="T-shirt" className="object-cover" />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold mb-2 text-white">Community T-Shirt</h3>
                          <p className="text-gray-300 mb-4">Comfortable cotton t-shirt with our community logo.</p>
                          <div className="flex justify-between items-center">
                            <span className="text-xl font-bold text-green-500">$25.00</span>
                            <button className="bg-[#118AB2] hover:bg-[#118AB2]/90 text-white rounded-full px-4 py-2 ">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="border-4 border-[#EF476F] rounded-xl overflow-hidden hover:shadow-xl transition-shadow bg-slate-900 ">
                        <div className="aspect-square relative">
                          <img src="/placeholder.svg?height=300&width=300" alt="Hoodie" className="object-cover" />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold mb-2 text-white">Community Hoodie</h3>
                          <p className="text-gray-300 mb-4">Warm and cozy hoodie perfect for study sessions.</p>
                          <div className="flex justify-between items-center">
                            <span className="text-xl font-bold text-green-500">$45.00</span>
                            <button className="bg-[#EF476F] hover:bg-[#EF476F]/90 text-white rounded-full px-4 py-2">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="border-4 border-[#06D6A0] rounded-xl overflow-hidden hover:shadow-xl transition-shadow bg-slate-900 ">
                        <div className="aspect-square relative">
                          <img
                            src="/placeholder.svg?height=300&width=300"
                            alt="Sticker Pack"
                            className="object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold mb-2 text-white">Sticker Pack</h3>
                          <p className="text-gray-30 mb-4">Set of 5 doodle-style stickers to decorate your laptop.</p>
                          <div className="flex justify-between items-center">
                            <span className="text-xl font-bold text-green-500">$10.00</span>
                            <button className="bg-[#06D6A0] hover:bg-[#06D6A0]/90 text-white rounded-full px-4 py-2">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center mt-8">
                      <button className="bg-[#FFD166] hover:bg-[#FFD166]/90 text-black rounded-full px-8 py-2 text-lg font-bold flex items-center">
                        <ShoppingBag className="mr-2 h-5 w-5" /> View All Merchandise
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Share Section */}
              {activeTab === "share" && (
                <div className="space-y-8">
                  <div className="space-y-6">
                    <div className="relative">
                      <h2 className="text-3xl font-bold mb-4">
                        <span className="relative inline-block">
                          Spread the Word
                          <div className="absolute -bottom-1 left-0 w-full h-2 bg-[#FFD166] -z-10 transform -rotate-1"></div>
                        </span>
                      </h2>
                      <p className="text-gray-100 mb-6">
                        Help us grow by sharing our community with your friends and on social media!
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-white">Share on Social Media</h3>
                        <div className="flex gap-4">
                          <button className="bg-[#1DA1F2] hover:bg-[#1DA1F2]/90 text-white rounded-full h-14 w-14 p-0 flex items-center justify-center">

                            <TwitterIcon />
                          </button>
                          <button className="bg-[#4267B2] hover:bg-[#4267B2]/90 text-white rounded-full h-14 w-14 p-0 flex items-center justify-center">
                            <FacebookIcon />
                          </button>
                          <button className="bg-[#E1306C] hover:bg-[#E1306C]/90 text-white rounded-full h-14 w-14 p-0 flex items-center justify-center">
                            <InstagramIcon />
                          </button>
                          <button className="bg-[#FF0000] hover:bg-[#FF0000]/90 text-white rounded-full h-14 w-14 p-0 flex items-center justify-center">
                            <YoutubeIcon />
                          </button>
                        </div>

                        <div className="p-6 bg-slate-900  rounded-xl border-4 border-dashed border-[#118AB2]">
                          <h4 className="font-bold mb-2 text-gray-200">Share this link</h4>

                          <div className="flex gap-2">
                            <input
                              type="text"
                              value="https://studentcommunity.org/support"
                              ref={inputRef}
                              readOnly
                              className="w-full rounded-full border-2 border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#118AB2] focus:border-transparent text-gray-300"
                            />
                            <button
                              onClick={handleCopy}
                              className="bg-[#118AB2] hover:bg-[#118AB2]/90 text-white rounded-full px-4 py-2">
                              {copied ? 'Copied!' : 'copy'}
                            </button>
                          </div>
                        </div>

                        <div className="p-6 bg-slate-900 rounded-xl border-4 border-dashed border-[#EF476F]">
                          <h4 className="font-bold mb-2 text-gray-200">Share via Email</h4>

                          <div className="space-y-4">
                            <input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="Friend's Email"
                              className="w-full rounded-full border-2 border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#118AB2] focus:border-transparent text-white"
                            />
                            <button onClick={handleSend} className="w-full bg-[#EF476F] hover:bg-[#EF476F]/90 text-white rounded-full px-4 py-2">
                              Send Invitation
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <h3 className="text-2xl font-bold">Promotional Materials</h3>
                        <p className="text-gray-100">
                          Download these materials to help spread the word about our community!
                        </p>

                        <div className="grid gap-4">
                          <div className="border-2 border-[#06D6A0] rounded-xl overflow-hidden bg-slate-900">
                            <div className="p-4 flex justify-between items-center">
                              <div className="flex items-center gap-3">
                                <div className="bg-[#06D6A0]/10 p-3 rounded-full">
                                  <File className="text-green-500" />
                                </div>
                                <div>
                                  <h4 className="font-bold text-gray-200">Community Flyer</h4>
                                  <p className="text-sm text-gray-400">PDF, 2.3 MB</p>
                                </div>
                              </div>
                              <button className="border border-[#06D6A0] text-[#06D6A0] hover:bg-[#06D6A0]/10 rounded-full px-4 py-2">
                                Download
                              </button>
                            </div>
                          </div>

                          <div className="border-2 border-[#FFD166] rounded-xl overflow-hidden bg-slate-900">
                            <div className="p-4 flex justify-between items-center">
                              <div className="flex items-center gap-3">
                                <div className="bg-[#FFD166]/10 p-3 rounded-full">
                                  <Image className="text-yellow-400" />
                                </div>
                                <div>
                                  <h4 className="font-bold text-gray-200">Social Media Graphics</h4>
                                  <p className="text-sm text-gray-400">ZIP, 5.7 MB</p>
                                </div>
                              </div>
                              <button className="border border-[#FFD166] text-[#FFD166] hover:bg-[#FFD166]/10 rounded-full px-4 py-2">
                                Download
                              </button>
                            </div>
                          </div>

                          <div className="border-2 border-[#EF476F] rounded-xl overflow-hidden bg-slate-900">
                            <div className="p-4 flex justify-between items-center">
                              <div className="flex items-center gap-3">
                                <div className="bg-[#EF476F]/10 p-3 rounded-full">
                                  <Download className="text-red-500" />
                                </div>
                                <div>
                                  <h4 className="font-bold text-gray-200">Presentation Slides</h4>
                                  <p className="text-sm text-gray-400">PPTX, 3.1 MB</p>
                                </div>
                              </div>
                              <button className="border border-[#EF476F] text-[#EF476F] hover:bg-[#EF476F]/10 rounded-full px-4 py-2">
                                Download
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="p-6 bg-slate-900 rounded-xl border-4 border-dashed border-[#FFD166] mt-6">
                          <h4 className="font-bold mb-2 text-gray-200">Become an Ambassador</h4>
                          <p className="text-gray-400 mb-4">
                            Help us spread the word about our community and earn exclusive perks!
                          </p>
                          <button className="w-full bg-[#FFD166] hover:bg-[#FFD166]/90 text-black rounded-full px-4 py-2">
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <ToastContainer closeOnClick position="bottom-right" autoClose={3000} />

          {/* Doodle-style footer */}
          <Footer />
        </div>

      </main>
    </div>
  )
}
