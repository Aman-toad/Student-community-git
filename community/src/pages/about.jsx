import Sidebar from "../components/Sidebar.jsx";
import Bottombar from '../components/Bottombar'
import Footer from '../components/footer.jsx'
import { useEffect, useState } from "react";
import React from 'react';
// import Image from "next/image"
import {
  Heart,
  Users,
  Award,
  MessageSquare,
  Mail,
  MapPin,
  Phone,
  Clock,
  Lightbulb,
  Target,
  Smile,
  ChevronDown,
  ChevronUp,
  LucideLinkedin,
  LucideTwitter,
} from "lucide-react"
import { NavLink } from "react-router-dom";

export default function About() {
  const [activeTab, setActiveTab] = useState("mission")
  const [expandedFaq, setExpandedFaq] = useState(null)
  const [animateItems, setAnimateItems] = useState(false)

  useEffect(() => {
    setAnimateItems(true)
  }, [])

  const teamMembers = [
    {
      id: 1,
      name: "Aman Singh",
      role: "Frontend developer",
      bio: "Aman is a senior studying Computer Science with a passion for building inclusive communities.",
      image: "/placeholder.svg?height=200&width=200",
      color: "#EF476F",
    },
    {
      id: 2,
      name: "P. Chitranjali",
      role: "Frontend Developer",
      bio: "Chitra is a junior majoring in Computer Science Administration who loves organizing events and connecting people.",
      image: "/placeholder.svg?height=200&width=200",
      color: "#118AB2",
    },
    {
      id: 3,
      name: "Yuvraj",
      role: "Backend Developer",
      bio: "Yuvi is a senior studying Back who ensures our community resources are managed effectively.",
      image: "/placeholder.svg?height=200&width=200",
      color: "#06D6A0",
    },
    {
      id: 4,
      name: "Priyanshu Sharma",
      role: "Advisor & Backend Developer",
      bio: "Priyanshu is a sophomore studying Communications who brings creativity to all our community events.",
      image: "/placeholder.svg?height=200&width=200",
      color: "#FFD166",
    },
    {
      id: 5,
      name: "Om Sharma",
      role: "Treasurer & feature Builder",
      bio: "Om is a junior Scrapping the web to helps connect our community with external partners.",
      image: "/placeholder.svg?height=200&width=200",
      color: "#015c4E",
    },
    {
      id: 6,
      name: "Suhani Verma",
      role: "Designer",
      bio: "Suhani is a freshman designing our community Pages who keeps our community organized and informed.",
      image: "/placeholder.svg?height=200&width=200",
      color: "#EF476F",
    },
  ]

  // Timeline data
  const timelineEvents = [
    {
      year: "2015",
      title: "Community Founded",
      description:
        "Our student community was founded by a small group of passionate students who wanted to create a more inclusive campus environment.",
      color: "#EF476F",
    },
    {
      year: "2017",
      title: "First Major Event",
      description:
        "We organized our first campus-wide event that brought together over 500 students from different backgrounds.",
      color: "#118AB2",
    },
    {
      year: "2018",
      title: "Community Space",
      description:
        "We secured our first dedicated community space on campus, providing a home for student activities and gatherings.",
      color: "#06D6A0",
    },
    {
      year: "2020",
      title: "Virtual Transition",
      description:
        "During the pandemic, we successfully transitioned to virtual events and support services, reaching even more students.",
      color: "#FFD166",
    },
    {
      year: "2022",
      title: "Expansion",
      description:
        "We expanded our programs to include mentorship, scholarships, and professional development opportunities.",
      color: "#073B4C",
    },
    {
      year: "2023",
      title: "Today",
      description:
        "Today, we continue to grow and evolve, serving thousands of students and making a positive impact on campus life.",
      color: "#EF476F",
    },
  ]

  // FAQ data
  const faqItems = [
    {
      question: "How can I join the student community?",
      answer:
        "Joining is easy! Simply fill out the membership form on our website or visit our community space during open hours. There are no membership fees, and all students are welcome.",
    },
    {
      question: "What kinds of events do you organize?",
      answer:
        "We organize a wide variety of events including workshops, social gatherings, professional development sessions, cultural celebrations, and community service opportunities.",
    },
    {
      question: "Are there leadership opportunities available?",
      answer:
        "We have various leadership positions available each semester, and we also offer project-based leadership opportunities for those who want to gain experience.",
    },
    {
      question: "How is the community funded?",
      answer:
        "Our community is funded through a combination of university allocations, donations from alumni and supporters, and fundraising events organized by our members.",
    },
    {
      question: "Can I start my own initiative within the community?",
      answer:
        "Yes! We encourage members to bring their ideas and initiatives. We provide resources, mentorship, and support to help turn your ideas into reality.",
    },
  ]

  // Toggle FAQ item
  const toggleFaq = (index) => {
    if (expandedFaq === index) {
      setExpandedFaq(null)
    } else {
      setExpandedFaq(index)
    }
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
              <span className="relative inline-block">
                About Our Community
                <div className="absolute -bottom-2 left-0 w-full h-3 bg-[#FFD166] -z-10 transform -rotate-1"></div>
              </span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-200">
              Get to know the story, people, and mission behind our vibrant student community!
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <button className="bg-[#06D6A0] hover:bg-[#06D6A0]/90 text-white rounded-full px-8 py-4 text-lg font-bold shadow-lg transform transition-transform hover:scale-105 flex items-center">
                <Users className="mr-2 h-5 w-5" /> Join Our Community
              </button>
              <button className="bg-transparent hover:bg-[#118AB2]/10 rounded-full px-8 py-4 text-lg font-bold border-2 border-[#118AB2] text-[#118AB2] shadow-lg transform transition-transform hover:scale-105 flex items-center">
                <Heart className="mr-2 h-5 w-5" /> Support Our Mission
              </button>
            </div>
          </div>

          {/* Main Content Tabs */}
          <div className="max-w-7xl mx-auto px-4 py-12">
            {/* Custom Tabs */}
            <div className="grid w-full grid-cols-2 md:grid-cols-4 rounded-full p-1 bg-[#1f1f1f91] mb-8 max-w-3xl mx-auto">
              <button
                onClick={() => setActiveTab("mission")}
                className={`rounded-full py-2 px-4 flex items-center justify-center transition-colors ${activeTab === "mission" ? "bg-[#EF476F] text-white" : "hover:bg-gray-200 hover:text-gray-800"
                  }`}
              >
                <Target className="mr-2 h-4 w-4" /> Our Mission
              </button>
              <button
                onClick={() => setActiveTab("team")}
                className={`rounded-full py-2 px-4 flex items-center justify-center transition-colors ${activeTab === "team" ? "bg-[#EF476F] text-white" : "hover:bg-gray-200 hover:text-gray-800"
                  }`}
              >
                <Users className="mr-2 h-4 w-4" /> Our Team
              </button>
              <button
                onClick={() => setActiveTab("history")}
                className={`rounded-full py-2 px-4 flex items-center justify-center transition-colors ${activeTab === "history" ? "bg-[#EF476F] text-white" : "hover:bg-gray-200 hover:text-gray-800"
                  }`}
              >
                <Clock className="mr-2 h-4 w-4" /> Our History
              </button>
              <button
                onClick={() => setActiveTab("faq")}
                className={`rounded-full py-2 px-4 flex items-center justify-center transition-colors ${activeTab === "faq" ? "bg-[#EF476F] text-white" : "hover:bg-gray-200 hover:text-gray-800"
                  }`}
              >
                <MessageSquare className="mr-2 h-4 w-4" /> FAQ
              </button>
            </div>

            {/* Mission and Values Section */}
            {activeTab === "mission" && (
              <div className="space-y-12">
                {/* Mission Statement */}
                <div className="bg-slate-900 rounded-xl p-8 border-4 border-dashed border-[#118AB2] relative overflow-hidden">
                  <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-[#52d4ff] opacity-10"></div>
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-[#fd3c69] opacity-10"></div>

                  <div className="relative">
                    <h2 className="text-3xl font-bold mb-6 text-center">
                      <span className="relative inline-block ">
                        Our Mission
                        <div className="absolute -bottom-1 left-0 w-full h-2 bg-[#FFD166] -z-10 transform -rotate-1"></div>
                      </span>
                    </h2>

                    <div className="max-w-3xl mx-auto">
                      <p className="text-lg text-center mb-8 text-gray-300">
                        We are dedicated to creating a vibrant, inclusive, and supportive community where every student can
                        thrive, connect, and make the most of their college experience.
                      </p>

                      <div className="grid md:grid-cols-2 gap-8">
                        <div
                          className={`transform transition-all duration-500 ${animateItems ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                            }`}
                          style={{ transitionDelay: "100ms" }}
                        >
                          <div className="bg-slate-800 rounded-lg p-6 border-2 border-dashed border-[#EF476F]">
                            <div className="w-16 h-16 rounded-full bg-[#EF476F]/10 flex items-center justify-center mb-4">
                              <Heart className="h-8 w-8 text-[#EF476F]" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-gray-200">Support</h3>
                            <p className="text-gray-300">
                              Providing resources, mentorship, and a safe space for all students to grow and succeed
                              academically, professionally, and personally.
                            </p>
                          </div>
                        </div>

                        <div
                          className={`transform transition-all duration-500 ${animateItems ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                            }`}
                          style={{ transitionDelay: "200ms" }}
                        >
                          <div className="bg-slate-800 rounded-lg p-6 border-2 border-dashed border-[#118AB2]">
                            <div className="w-16 h-16 rounded-full bg-[#118AB2]/10 flex items-center justify-center mb-4">
                              <Users className="h-8 w-8 text-[#118AB2]" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-gray-200">Connection</h3>
                            <p className="text-gray-300">
                              Building meaningful relationships and fostering a sense of belonging among students from
                              diverse backgrounds and interests.
                            </p>
                          </div>
                        </div>

                        <div
                          className={`transform transition-all duration-500 ${animateItems ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                            }`}
                          style={{ transitionDelay: "300ms" }}
                        >
                          <div className="bg-slate-800 rounded-lg p-6 border-2 border-dashed border-[#06D6A0]">
                            <div className="w-16 h-16 rounded-full bg-[#06D6A0]/10 flex items-center justify-center mb-4">
                              <Lightbulb className="h-8 w-8 text-[#06D6A0]" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-gray-200">Growth</h3>
                            <p className="text-gray-300">
                              Creating opportunities for learning, leadership development, and personal growth beyond the
                              classroom.
                            </p>
                          </div>
                        </div>

                        <div
                          className={`transform transition-all duration-500 ${animateItems ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                            }`}
                          style={{ transitionDelay: "400ms" }}
                        >
                          <div className="bg-slate-800 rounded-lg p-6 border-2 border-dashed border-[#FFD166]">
                            <div className="w-16 h-16 rounded-full bg-[#FFD166]/10 flex items-center justify-center mb-4">
                              <Smile className="h-8 w-8 text-[#FFD166]" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-gray-200">Fun</h3>
                            <p className="text-gray-300">
                              Enhancing the college experience through engaging events, activities, and celebrations that
                              create lasting memories.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Impact Stats */}
                <div className="py-12">
                  <h2 className="text-3xl font-bold mb-10 text-center">
                    <span className="relative inline-block">
                      Our Impact
                      <div className="absolute -bottom-1 left-0 w-full h-2 bg-[#FFD166] -z-10 transform -rotate-1"></div>
                    </span>
                  </h2>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    <div
                      className={`bg-slate-900 rounded-xl p-6 border-4 border-dashed border-[#EF476F] text-center transform transition-all duration-500 ${animateItems ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                      style={{ transitionDelay: "100ms" }}
                    >
                      <div className="text-4xl font-bold text-[#EF476F] mb-2">5,000+</div>
                      <div className="text-gray-200">Students Served</div>
                    </div>

                    <div
                      className={`bg-slate-900 rounded-xl p-6 border-4 border-dashed border-[#118AB2] text-center transform transition-all duration-500 ${animateItems ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                      style={{ transitionDelay: "200ms" }}
                    >
                      <div className="text-4xl font-bold text-[#118AB2] mb-2">200+</div>
                      <div className="text-gray-200">Events Per Year</div>
                    </div>

                    <div
                      className={`bg-slate-900 rounded-xl p-6 border-4 border-dashed border-[#06D6A0] text-center transform transition-all duration-500 ${animateItems ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                      style={{ transitionDelay: "300ms" }}
                    >
                      <div className="text-4xl font-bold text-[#06D6A0] mb-2">50+</div>
                      <div className="text-gray-200">Student Societies</div>
                    </div>

                    <div
                      className={`bg-slate-900 rounded-xl p-6 border-4 border-dashed border-[#FFD166] text-center transform transition-all duration-500 ${animateItems ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                      style={{ transitionDelay: "400ms" }}
                    >
                      <div className="text-4xl font-bold text-[#FFD166] mb-2">$100K</div>
                      <div className="text-gray-200">Scholarships Awarded</div>
                    </div>
                  </div>
                </div>

                {/* Testimonials */}
                <div className="py-12 bg-slate-900++ rounded-xl border-4 border-dashed border-[#06D6A0]">
                  <h2 className="text-3xl font-bold mb-10 text-center">
                    <span className="relative inline-block">
                      Student Voices
                      <div className="absolute -bottom-1 left-0 w-full h-2 bg-[#FFD166] -z-10 transform -rotate-1"></div>
                    </span>
                  </h2>

                  <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto px-6">
                    <div
                      className={`bg-slate-900 rounded-xl p-6 relative transform transition-all duration-500 ${animateItems ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                      style={{ transitionDelay: "100ms" }}
                    >
                      <div className="absolute -top-4 -left-4 text-[#EF476F] opacity-20">
                        <Clock className="h-8 w-8 text-[#ffb300]" />
                      </div>
                      <p className="text-gray-200 mb-4 italic">
                        "This community has been my home away from home. I've made lifelong friends and developed skills I
                        never thought possible."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-[#EF476F] flex items-center justify-center text-white font-bold mr-3">
                          JS
                        </div>
                        <div>
                          <h4 className="font-bold">Jamie Smith</h4>
                          <p className="text-sm text-gray-400">Senior, Psychology</p>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`bg-slate-900 rounded-xl p-6 relative transform transition-all duration-500 ${animateItems ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                      style={{ transitionDelay: "200ms" }}
                    >
                      <div className="absolute -top-4 -left-4 text-[#118AB2] opacity-20">
                        <Clock className="h-8 w-8 text-[#00ff26]" />
                      </div>
                      <p className="text-gray-200 mb-4 italic">
                        "As an international student, finding this community was a game-changer. They helped me navigate
                        campus life and feel at home."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-[#118AB2] flex items-center justify-center text-white font-bold mr-3">
                          RL
                        </div>
                        <div>
                          <h4 className="font-bold">Raj Lakshmi</h4>
                          <p className="text-sm text-gray-400">Junior, Engineering</p>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`bg-slate-900 rounded-xl p-6 relative transform transition-all duration-500 ${animateItems ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                      style={{ transitionDelay: "300ms" }}
                    >
                      <div className="absolute -top-4 -left-4 text-[#06D6A0] opacity-20">
                        <Clock className="h-8 w-8 text-[#00e1ff]" />
                      </div>
                      <p className="text-gray-200 mb-4 italic">
                        "The leadership opportunities I've had through this community have prepared me for my career in ways
                        classes never could."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-[#06D6A0] flex items-center justify-center text-white font-bold mr-3">
                          TW
                        </div>
                        <div>
                          <h4 className="font-bold">Tyler Washington</h4>
                          <p className="text-sm text-gray-400">Senior, Business</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Team Section */}
            {activeTab === "team" && (
              <div className="space-y-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">
                    <span className="relative inline-block">
                      Meet Our Team
                      <div className="absolute -bottom-1 left-0 w-full h-2 bg-[#FFD166] -z-10 transform -rotate-1"></div>
                    </span>
                  </h2>
                  <p className="text-gray-200 max-w-2xl mx-auto">
                    Our dedicated team of student leaders works tirelessly to create a vibrant and supportive community for
                    all students.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {teamMembers.map((member, index) => (
                    <div
                      key={member.id}
                      className={`bg-slate-700 rounded-xl overflow-hidden border-3 border-dashed shadow-md transform transition-all duration-500 ${animateItems ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                      style={{ borderColor: member.color, transitionDelay: `${index * 100}ms` }}
                    >
                      <div className="relative h-64">
                        <img src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                        <div className="absolute inset-0 opacity-20" style={{ backgroundColor: member.color }}></div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-1" style={{ color: member.color }}>
                          {member.name}
                        </h3>
                        <p className="text-gray-100 font-medium mb-3">{member.role}</p>
                        <p className="text-gray-200">{member.bio}</p>
                        <div className="mt-4 flex gap-2">
                          <button
                            className="rounded-full p-2 transition-colors"
                            style={{ backgroundColor: `${member.color}20`, color: member.color }}
                          >
                            <LucideLinkedin className="h-[18px] w-[18px]" />
                          </button>
                          <button
                            className="rounded-full p-2 transition-colors"
                            style={{ backgroundColor: `${member.color}20`, color: member.color }}
                          >
                            <LucideTwitter className="h-[18px] w-[18px]" />
                          </button>
                          <button
                            className="rounded-full p-2 transition-colors"
                            style={{ backgroundColor: `${member.color}20`, color: member.color }}
                          >
                            <Mail className="h-[18px] w-[18px]" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-slate-900 rounded-xl p-8 border-4 border-dashed border-[#118AB2] mt-12">
                  <h3 className="text-2xl font-bold mb-6 text-center">
                    <span className="relative inline-block">
                      Join Our Leadership Team
                      <div className="absolute -bottom-1 left-0 w-full h-2 bg-[#FFD166] -z-10 transform -rotate-1"></div>
                    </span>
                  </h3>
                  <p className="text-center text-gray-200 mb-6 max-w-2xl mx-auto">
                    Interested in developing your leadership skills and making a difference in our community? Applications
                    for leadership positions open each semester.
                  </p>
                  <div className="flex justify-center">
                    <button className="bg-[#118AB2] hover:bg-[#118AB2]/90 text-white rounded-full px-8 py-3 text-lg font-bold shadow-md transform transition-transform hover:scale-105 flex items-center">
                      <Users className="mr-2 h-5 w-5" /> Apply for Leadership
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* History Section */}
            {activeTab === "history" && (
              <div className="space-y-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">
                    <span className="relative inline-block">
                      Our Journey
                      <div className="absolute -bottom-1 left-0 w-full h-2 bg-[#FFD166] -z-10 transform -rotate-1"></div>
                    </span>
                  </h2>
                  <p className="text-gray-200 max-w-2xl mx-auto">
                    From humble beginnings to a thriving community, explore the key milestones in our history.
                  </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                  {/* Vertical line */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 hidden md:block"></div>

                  <div className="space-y-12">
                    {timelineEvents.map((event, index) => (
                      <div
                        key={event.year}
                        className={`relative transform transition-all duration-500 ${animateItems ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                          }`}
                        style={{ transitionDelay: `${index * 150}ms` }}
                      >
                        <div
                          className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                            }`}
                        >
                          {/* Timeline dot */}
                          <div
                            className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border-4 z-10 hidden md:block"
                            style={{ backgroundColor: "white", borderColor: event.color }}
                          ></div>

                          {/* Content */}
                          <div className="md:w-1/2 p-4">
                            <div
                              className="bg-slate-900 rounded-xl p-6 border-4 border-dashed shadow-md relative"
                              style={{ borderColor: event.color }}
                            >
                              <div
                                className="absolute -top-4 -right-4 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                                style={{ backgroundColor: event.color }}
                              >
                                {event.year}
                              </div>
                              <h3 className="text-xl font-bold mb-2" style={{ color: event.color }}>
                                {event.title}
                              </h3>
                              <p className="text-gray-200">{event.description}</p>
                            </div>
                          </div>

                          {/* Empty space for alignment */}
                          <div className="md:w-1/2"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="bg-slate-900 rounded-xl p-8 border-4 border-dashed border-[#06D6A0] mt-12">
                  <h3 className="text-2xl font-bold mb-6 text-center">
                    <span className="relative inline-block">
                      Our Achievements
                      <div className="absolute -bottom-1 left-0 w-full h-2 bg-[#FFD166] -z-10 transform -rotate-1"></div>
                    </span>
                  </h3>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div
                      className={`bg-slate-800 rounded-lg p-6 transform transition-all duration-500 ${animateItems ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                      style={{ transitionDelay: "100ms" }}
                    >
                      <div className="w-12 h-12 rounded-full bg-[#EF476F]/10 flex items-center justify-center mb-4">
                        <Award className="h-6 w-6 text-[#EF476F]" />
                      </div>
                      <h4 className="font-bold mb-2 text-gray-200">Campus Impact Award</h4>
                      <p className="text-gray-300 text-sm">
                        Recognized for making a significant positive impact on campus life and student well-being.
                      </p>
                    </div>

                    <div
                      className={`bg-slate-800 rounded-lg p-6 transform transition-all duration-500 ${animateItems ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                      style={{ transitionDelay: "200ms" }}
                    >
                      <div className="w-12 h-12 rounded-full bg-[#118AB2]/10 flex items-center justify-center mb-4">
                        <Award className="h-6 w-6 text-[#118AB2]" />
                      </div>
                      <h4 className="font-bold mb-2 text-gray-200">Diversity & Inclusion Excellence</h4>
                      <p className="text-gray-200 text-sm">
                        Honored for creating an inclusive environment that celebrates diversity and promotes belonging.
                      </p>
                    </div>

                    <div
                      className={`bg-slate-800 rounded-lg p-6 transform transition-all duration-500 ${animateItems ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                      style={{ transitionDelay: "300ms" }}
                    >
                      <div className="w-12 h-12 rounded-full bg-[#06D6A0]/10 flex items-center justify-center mb-4">
                        <Award className="h-6 w-6 text-[#06D6A0]" />
                      </div>
                      <h4 className="font-bold mb-2 text-gray-200">Community Service Recognition</h4>
                      <p className="text-gray-200 text-sm">
                        Awarded for outstanding commitment to community service and volunteer initiatives.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* FAQ Section */}
            {activeTab === "faq" && (
              <div className="space-y-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">
                    <span className="relative inline-block">
                      Frequently Asked Questions
                      <div className="absolute -bottom-1 left-0 w-full h-2 bg-[#FFD166] -z-10 transform -rotate-1"></div>
                    </span>
                  </h2>
                  <p className="text-gray-200 max-w-2xl mx-auto">
                    Find answers to common questions about our student community.
                  </p>
                </div>

                <div className="max-w-3xl mx-auto">
                  {faqItems.map((item, index) => (
                    <div
                      key={index}
                      className={`mb-4 bg-slate-900 rounded-xl border-2 border-dashed overflow-hidden transform transition-all duration-500 ${animateItems ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                      style={{
                        borderColor: expandedFaq === index ? "#EF476F" : "#e5e7eb",
                        transitionDelay: `${index * 100}ms`,
                      }}
                    >
                      <button
                        className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                        onClick={() => toggleFaq(index)}
                      >
                        <h3 className="font-bold text-lg">{item.question}</h3>
                        {expandedFaq === index ? (
                          <ChevronUp className="h-5 w-5 text-gray-200" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-200" />
                        )}
                      </button>
                      <div
                        className={`px-6 pb-6 transition-all duration-300 ${expandedFaq === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                          }`}
                      >
                        <p className="text-gray-200">{item.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Contact Section */}
                <div className="bg-slate-900 rounded-xl p-8 border-4 border-dashed border-[#EF476F] mt-12">
                  <h3 className="text-2xl font-bold mb-6 text-center">
                    <span className="relative inline-block">
                      Still Have Questions?
                      <div className="absolute -bottom-1 left-0 w-full h-2 bg-[#FFD166] -z-10 transform -rotate-1"></div>
                    </span>
                  </h3>
                  <p className="text-center text-gray-300 mb-8 max-w-2xl mx-auto">
                    Can't find the answer you're looking for? Reach out to our team and we'll get back to you as soon as
                    possible.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    <div
                      className={`bg-slate-800 rounded-lg p-6 text-center transform transition-all duration-500 ${animateItems ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                      style={{ transitionDelay: "100ms" }}
                    >
                      <div className="w-12 h-12 rounded-full bg-[#EF476F]/10 flex items-center justify-center mx-auto mb-4">
                        <Mail className="h-6 w-6 text-[#EF476F]" />
                      </div>
                      <h4 className="font-bold mb-2">Email Us</h4>
                      <p className="text-gray-200">info@studentcommunity.org</p>
                    </div>

                    <div
                      className={`bg-slate-800 rounded-lg p-6 text-center transform transition-all duration-500 ${animateItems ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                      style={{ transitionDelay: "200ms" }}
                    >
                      <div className="w-12 h-12 rounded-full bg-[#118AB2]/10 flex items-center justify-center mx-auto mb-4">
                        <MapPin className="h-6 w-6 text-[#118AB2]" />
                      </div>
                      <h4 className="font-bold mb-2">Visit Us</h4>
                      <p className="text-gray-200">
                        Student Center, Room 123
                        <br />
                        123 Campus Drive
                      </p>
                    </div>

                    <div
                      className={`bg-slate-800 rounded-lg p-6 text-center transform transition-all duration-500 ${animateItems ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                      style={{ transitionDelay: "300ms" }}
                    >
                      <div className="w-12 h-12 rounded-full bg-[#06D6A0]/10 flex items-center justify-center mx-auto mb-4">
                        <Phone className="h-6 w-6 text-[#06D6A0]" />
                      </div>
                      <h4 className="font-bold mb-2">Call Us</h4>
                      <p className="text-gray-200">
                        +91 393023.....
                        <br />
                        Mon-Fri, 9am-5pm
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <NavLink 
                    to='/contact'>
                      <button className="bg-[#EF476F] hover:bg-[#EF476F]/90 text-white rounded-full px-8 py-3 text-lg font-bold shadow-md transform transition-transform hover:scale-105 flex items-center mx-auto">
                        <MessageSquare className="mr-2 h-5 w-5" /> Contact Us
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Partners Section */}
          <div className="bg-slate-900 border-t-4 border-dashed border-[#118AB2] py-16 px-4 mt-12">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-10 text-center">
                <span className="relative inline-block">
                  Our Partners
                  <div className="absolute -bottom-1 left-0 w-full h-2 bg-[#FFD166] -z-10 transform -rotate-1"></div>
                </span>
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
                <div className="w-32 h-32 bg-[#fffdf7] rounded-lg flex items-center justify-center p-4">
                  <img src="/placeholder.svg?height=100&width=100" alt="Partner Logo" width={100} height={100} />
                </div>
                <div className="w-32 h-32 bg-[#fffdf7] rounded-lg flex items-center justify-center p-4">
                  <img src="/placeholder.svg?height=100&width=100" alt="Partner Logo" width={100} height={100} />
                </div>
                <div className="w-32 h-32 bg-[#fffdf7] rounded-lg flex items-center justify-center p-4">
                  <img src="/placeholder.svg?height=100&width=100" alt="Partner Logo" width={100} height={100} />
                </div>
                <div className="w-32 h-32 bg-[#fffdf7] rounded-lg flex items-center justify-center p-4">
                  <img src="/placeholder.svg?height=100&width=100" alt="Partner Logo" width={100} height={100} />
                </div>
              </div>

              <div className="text-center mt-10">
                <p className="text-gray-200 max-w-2xl mx-auto mb-6">
                  Interested in partnering with our student community? We're always looking for organizations that share our
                  values and mission.
                </p>
                <button className="bg-transparent hover:bg-[#118AB2]/10 rounded-full px-8 py-3 text-lg font-bold border-2 border-[#118AB2] text-[#118AB2] shadow-md transform transition-transform hover:scale-105">
                  Become a Partner
                </button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <Footer />
        </div>

      </main>

    </div>
  )
}
