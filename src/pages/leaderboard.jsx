"use client"
import Sidebar from "../components/Sidebar.jsx";
import Bottombar from '../components/Bottombar'
import { useState, useEffect } from "react";
import Footer from '../components/footer'
// import Image from "next/image"

import {
  Search,
  FacebookIcon,
  Linkedin,
  Trophy,
  Medal,
  Star,
  Award,
  Crown,
  Users,
  FlameIcon as Fire,
  Zap,
  ArrowUp,
  ArrowDown,
  Sparkles,
} from "lucide-react";

export default function Leaderboard() {
  const [activeTab, setActiveTab] = useState("societies")
  const [timeFrame, setTimeFrame] = useState("semester")
  const [animateItems, setAnimateItems] = useState(false)

  // Trigger animation when component mounts
  useEffect(() => {
    setAnimateItems(true)
  }, [])

  // Trigger animation when tab changes
  useEffect(() => {
    setAnimateItems(false)
    const timer = setTimeout(() => {
      setAnimateItems(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [activeTab, timeFrame])

  // Leaderboard data
  const leaderboardData = {
    societies: [
      {
        id: 1,
        name: "Coding Wizards",
        points: 1250,
        members: 56,
        change: "up",
        achievements: 8,
        image: "/placeholder.svg?height=100&width=100",
        color: "#118AB2",
      },
      {
        id: 2,
        name: "Music Society",
        points: 1120,
        members: 64,
        change: "up",
        achievements: 7,
        image: "/placeholder.svg?height=100&width=100",
        color: "#FFD166",
      },
      {
        id: 3,
        name: "Photography Club",
        points: 980,
        members: 42,
        change: "down",
        achievements: 6,
        image: "/placeholder.svg?height=100&width=100",
        color: "#EF476F",
      },
      {
        id: 4,
        name: "Art Collective",
        points: 870,
        members: 38,
        change: "up",
        achievements: 5,
        image: "/placeholder.svg?height=100&width=100",
        color: "#06D6A0",
      },
      {
        id: 5,
        name: "Debate Society",
        points: 760,
        members: 35,
        change: "same",
        achievements: 4,
        image: "/placeholder.svg?height=100&width=100",
        color: "#073B4C",
      },
      {
        id: 6,
        name: "Cultural Exchange",
        points: 720,
        members: 47,
        change: "up",
        achievements: 5,
        image: "/placeholder.svg?height=100&width=100",
        color: "#EF476F",
      },
      {
        id: 7,
        name: "Book Club",
        points: 650,
        members: 29,
        change: "down",
        achievements: 3,
        image: "/placeholder.svg?height=100&width=100",
        color: "#118AB2",
      },
      {
        id: 8,
        name: "Event Planning Committee",
        points: 580,
        members: 32,
        change: "up",
        achievements: 4,
        image: "/placeholder.svg?height=100&width=100",
        color: "#06D6A0",
      },
    ],
    students: [
      {
        id: 1,
        name: "Alex Johnson",
        points: 850,
        year: "Senior",
        change: "up",
        achievements: 12,
        image: "/placeholder.svg?height=100&width=100",
        color: "#EF476F",
      },
      {
        id: 2,
        name: "Maya Patel",
        points: 820,
        year: "Junior",
        change: "up",
        achievements: 10,
        image: "/placeholder.svg?height=100&width=100",
        color: "#118AB2",
      },
      {
        id: 3,
        name: "Jamal Williams",
        points: 780,
        year: "Senior",
        change: "same",
        achievements: 9,
        image: "/placeholder.svg?height=100&width=100",
        color: "#06D6A0",
      },
      {
        id: 4,
        name: "Sofia Rodriguez",
        points: 750,
        year: "Sophomore",
        change: "up",
        achievements: 8,
        image: "/placeholder.svg?height=100&width=100",
        color: "#FFD166",
      },
      {
        id: 5,
        name: "Liam Chen",
        points: 720,
        year: "Junior",
        change: "down",
        achievements: 7,
        image: "/placeholder.svg?height=100&width=100",
        color: "#073B4C",
      },
      {
        id: 6,
        name: "Emma Davis",
        points: 690,
        year: "Freshman",
        change: "up",
        achievements: 6,
        image: "/placeholder.svg?height=100&width=100",
        color: "#EF476F",
      },
      {
        id: 7,
        name: "Noah Kim",
        points: 650,
        year: "Senior",
        change: "down",
        achievements: 8,
        image: "/placeholder.svg?height=100&width=100",
        color: "#118AB2",
      },
      {
        id: 8,
        name: "Olivia Thompson",
        points: 620,
        year: "Sophomore",
        change: "up",
        achievements: 5,
        image: "/placeholder.svg?height=100&width=100",
        color: "#06D6A0",
      },
    ],
    events: [
      {
        id: 1,
        name: "Annual Hackathon",
        points: 950,
        participants: 120,
        change: "up",
        organizer: "Coding Wizards",
        image: "/placeholder.svg?height=100&width=100",
        color: "#118AB2",
      },
      {
        id: 2,
        name: "Spring Concert",
        points: 920,
        participants: 350,
        change: "up",
        organizer: "Music Society",
        image: "/placeholder.svg?height=100&width=100",
        color: "#FFD166",
      },
      {
        id: 3,
        name: "Photography Exhibition",
        points: 880,
        participants: 200,
        change: "same",
        organizer: "Photography Club",
        image: "/placeholder.svg?height=100&width=100",
        color: "#EF476F",
      },
      {
        id: 4,
        name: "Cultural Festival",
        points: 850,
        participants: 500,
        change: "up",
        organizer: "Cultural Exchange",
        image: "/placeholder.svg?height=100&width=100",
        color: "#06D6A0",
      },
      {
        id: 5,
        name: "Debate Tournament",
        points: 820,
        participants: 80,
        change: "down",
        organizer: "Debate Society",
        image: "/placeholder.svg?height=100&width=100",
        color: "#073B4C",
      },
      {
        id: 6,
        name: "Art Exhibition",
        points: 790,
        participants: 150,
        change: "up",
        organizer: "Art Collective",
        image: "/placeholder.svg?height=100&width=100",
        color: "#EF476F",
      },
      {
        id: 7,
        name: "Book Fair",
        points: 760,
        participants: 180,
        change: "down",
        organizer: "Book Club",
        image: "/placeholder.svg?height=100&width=100",
        color: "#118AB2",
      },
      {
        id: 8,
        name: "Campus Olympics",
        points: 730,
        participants: 300,
        change: "up",
        organizer: "Event Planning Committee",
        image: "/placeholder.svg?height=100&width=100",
        color: "#06D6A0",
      },
    ],
  }

  // Get current leaderboard data based on active tab
  const currentLeaderboard = leaderboardData[activeTab]

  // Get medal for top 3 positions
  const getMedal = (position) => {
    switch (position) {
      case 0:
        return (
          <div className="absolute -top-3 -right-3 bg-[#FFD700] text-white p-2 rounded-full shadow-lg">
            <Trophy className="h-6 w-6" />
          </div>
        )
      case 1:
        return (
          <div className="absolute -top-3 -right-3 bg-[#C0C0C0] text-white p-2 rounded-full shadow-lg">
            <Medal className="h-6 w-6" />
          </div>
        )
      case 2:
        return (
          <div className="absolute -top-3 -right-3 bg-[#CD7F32] text-white p-2 rounded-full shadow-lg">
            <Medal className="h-6 w-6" />
          </div>
        )
      default:
        return null
    }
  }

  // Get change indicator
  const getChangeIndicator = (change) => {
    switch (change) {
      case "up":
        return <ArrowUp className="h-5 w-5 text-green-500" />
      case "down":
        return <ArrowDown className="h-5 w-5 text-red-500" />
      default:
        return <span className="h-5 w-5 inline-block">-</span>
    }
  }

  return (
    <>
      <div className="flex text-white bg-slate-900 "
      style={{
      backgroundImage: "url('src/assets/images/back3.svg')",
      backgroundSize: "700px",
      backgroundBlendMode: "overlay"
    }}>
        <div className="hidden md:block">
          <Sidebar />
        </div>
        <div className=" md:block">
          <Bottombar />
        </div>
        <main className="flex-1 pt-5">
          <div className="min-h-screen font-[system-ui]">
            {/* Header */}
            <div className="relative py-16 px-4 text-center">
              <div className="absolute inset-0 -z-10 opacity-10">
                <img src="/placeholder.svg?height=400&width=1200" alt="Doodle background" className="object-cover" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 relative">
                <span className="relative inline-block">
                  Community Leaderboard
                  <div className="absolute -bottom-2 left-0 w-full h-3 bg-[#FFD166] -z-10 transform -rotate-1"></div>
                </span>
              </h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-200">
                Celebrating achievements and recognizing the outstanding contributions of our campus community!
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <button className="bg-[#06D6A0] hover:bg-[#06D6A0]/90 text-white rounded-full px-8 py-4 text-lg font-bold shadow-lg transform transition-transform hover:scale-105 flex items-center">
                  <Trophy className="mr-2 h-5 w-5" /> View Your Ranking
                </button>
                <button className="bg-transparent hover:bg-[#118AB2]/10 rounded-full px-8 py-4 text-lg font-bold border-2 border-[#118AB2] text-[#118AB2] shadow-lg transform transition-transform hover:scale-105 flex items-center">
                  <Star className="mr-2 h-5 w-5" /> Earn Achievement Points
                </button>
              </div>
            </div>

            {/* Main Leaderboard Section */}
            <div className="max-w-7xl mx-auto px-4 py-12">
              <div className="bg-slate-900 rounded-xl shadow-lg border-4 border-dashed border-[#118AB2] overflow-hidden">
                {/* Leaderboard Header */}
                <div className="p-6 border-b border-dashed border-gray-200">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => setActiveTab("societies")}
                        className={`px-4 py-2 rounded-full font-bold text-sm ${activeTab === "societies"
                          ? "bg-[#118AB2] text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                      >
                        <Users className="inline-block mr-1 h-4 w-4" /> Societies
                      </button>
                      <button
                        onClick={() => setActiveTab("students")}
                        className={`px-4 py-2 rounded-full font-bold text-sm ${activeTab === "students" ? "bg-[#EF476F] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                      >
                        <Crown className="inline-block mr-1 h-4 w-4" /> Students
                      </button>
                      <button
                        onClick={() => setActiveTab("events")}
                        className={`px-4 py-2 rounded-full font-bold text-sm ${activeTab === "events" ? "bg-[#06D6A0] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                      >
                        <Award className="inline-block mr-1 h-4 w-4" /> Events
                      </button>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setTimeFrame("month")}
                        className={`px-4 py-2 rounded-full font-bold text-sm ${timeFrame === "month" ? "bg-[#FFD166] text-black" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                      >
                        This Month
                      </button>
                      <button
                        onClick={() => setTimeFrame("semester")}
                        className={`px-4 py-2 rounded-full font-bold text-sm ${timeFrame === "semester" ? "bg-[#FFD166] text-black" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                      >
                        This Semester
                      </button>
                      <button
                        onClick={() => setTimeFrame("year")}
                        className={`px-4 py-2 rounded-full font-bold text-sm ${timeFrame === "year" ? "bg-[#FFD166] text-black" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                      >
                        This Year
                      </button>
                    </div>
                  </div>
                </div>

                {/* Top 3 Podium */}
                <div className="p-6 bg-gradient-to-b from-[#2b2b2b] to-[#c4c4c4]">
                  <h2 className="text-2xl font-bold mb-8 text-center relative">
                    <span className="relative inline-block">
                      Top Performers
                      <div className="absolute -bottom-1 left-0 w-full h-2 bg-[#FFD166] -z-10 transform -rotate-1"></div>
                    </span>
                  </h2>

                  <div className="flex flex-col md:flex-row justify-center items-end gap-4 mb-12">
                    {/* 2nd Place */}
                    <div
                      className={`relative w-full md:w-1/4 bg-slate-800 rounded-t-lg border-4 border-dashed border-[#C0C0C0] pt-6 pb-4 px-4 text-center transform transition-all duration-500 ${animateItems ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                      style={{ transitionDelay: "200ms", height: "220px" }}
                    >
                      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#C0C0C0] text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold shadow-lg">
                        2
                      </div>
                      <div className="mt-6">
                        <div className="w-16 h-16 rounded-full overflow-hidden mx-auto border-4 border-[#C0C0C0]">
                          <img
                            src={currentLeaderboard[1].image || "/placeholder.svg"}
                            alt={currentLeaderboard[1].name}
                            width={64}
                            height={64}
                            className="object-cover"
                          />
                        </div>
                        <h3 className="font-bold mt-2 text-lg">{currentLeaderboard[1].name}</h3>
                        <div className="flex items-center justify-center gap-1 text-gray-200 text-sm">
                          {getChangeIndicator(currentLeaderboard[1].change)}
                          <span>{currentLeaderboard[1].points} points</span>
                        </div>
                        <div className="mt-2 flex justify-center">
                          <span className="bg-[#C0C0C0]/20 text-gray-200 text-xs px-2 py-1 rounded-full">
                            {activeTab === "societies"
                              ? `${currentLeaderboard[1].members} members`
                              : activeTab === "students"
                                ? currentLeaderboard[1].year
                                : `${currentLeaderboard[1].participants} participants`}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* 1st Place */}
                    <div
                      className={`relative w-full md:w-1/3 bg-slate-900 rounded-t-lg border-4 border-dashed border-[#FFD700] pt-6 pb-4 px-4 text-center transform transition-all duration-500 ${animateItems ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                      style={{ transitionDelay: "0ms", height: "250px" }}
                    >
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-[#FFD700] text-white rounded-full w-24 h-24 flex items-center justify-center text-4xl font-bold shadow-lg">
                        1
                      </div>
                      <div className="absolute -top-4 -right-4 animate-pulse">
                        <Sparkles className="h-8 w-8 text-[#FFD700]" />
                      </div>
                      <div className="absolute -top-4 -left-4 animate-pulse" style={{ animationDelay: "500ms" }}>
                        <Sparkles className="h-8 w-8 text-[#FFD700]" />
                      </div>
                      <div className="mt-8">
                        <div className="w-20 h-20 rounded-full overflow-hidden mx-auto border-4 border-[#FFD700]">
                          <img
                            src={currentLeaderboard[0].image || "/placeholder.svg"}
                            alt={currentLeaderboard[0].name}
                            width={80}
                            height={80}
                            className="object-cover"
                          />
                        </div>
                        <h3 className="font-bold mt-2 text-xl">{currentLeaderboard[0].name}</h3>
                        <div className="flex items-center justify-center gap-1 text-gray-200">
                          {getChangeIndicator(currentLeaderboard[0].change)}
                          <span>{currentLeaderboard[0].points} points</span>
                        </div>
                        <div className="mt-2 flex justify-center">
                          <span className="bg-[#FFD700]/20 text-gray-200 px-2 py-1 rounded-full text-sm">
                            {activeTab === "societies"
                              ? `${currentLeaderboard[0].members} members`
                              : activeTab === "students"
                                ? currentLeaderboard[0].year
                                : `${currentLeaderboard[0].participants} participants`}
                          </span>
                        </div>
                        <div className="mt-2">
                          <span className="inline-flex items-center bg-[#FFD700]/10 text-[#FFD700] px-3 py-1 rounded-full text-sm font-bold">
                            <Crown className="mr-1 h-4 w-4" /> Champion
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* 3rd Place */}
                    <div
                      className={`relative w-full md:w-1/4 bg-slate-700 rounded-t-lg border-4 border-dashed border-[#CD7F32] pt-6 pb-4 px-4 text-center transform transition-all duration-500 ${animateItems ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                      style={{ transitionDelay: "400ms", height: "200px" }}
                    >
                      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#CD7F32] text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold shadow-lg">
                        3
                      </div>
                      <div className="mt-6">
                        <div className="w-16 h-16 rounded-full overflow-hidden mx-auto border-4 border-[#CD7F32]">
                          <img
                            src={currentLeaderboard[2].image || "/placeholder.svg"}
                            alt={currentLeaderboard[2].name}
                            width={64}
                            height={64}
                            className="object-cover"
                          />
                        </div>
                        <h3 className="font-bold mt-2 text-lg">{currentLeaderboard[2].name}</h3>
                        <div className="flex items-center justify-center gap-1 text-gray-200 text-sm">
                          {getChangeIndicator(currentLeaderboard[2].change)}
                          <span>{currentLeaderboard[2].points} points</span>
                        </div>
                        <div className="mt-2 flex justify-center">
                          <span className="bg-[#CD7F32]/20 text-gray-200 text-xs px-2 py-1 rounded-full">
                            {activeTab === "societies"
                              ? `${currentLeaderboard[2].members} members`
                              : activeTab === "students"
                                ? currentLeaderboard[2].year
                                : `${currentLeaderboard[2].participants} participants`}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Podium Base */}
                  <div className="flex flex-col md:flex-row justify-center items-stretch gap-4 mb-8">
                    <div className="w-full md:w-1/4 h-4 bg-[#C0C0C0] rounded-b-lg"></div>
                    <div className="w-full md:w-1/3 h-8 bg-[#FFD700] rounded-b-lg"></div>
                    <div className="w-full md:w-1/4 h-2 bg-[#CD7F32] rounded-b-lg"></div>
                  </div>
                </div>

                {/* Leaderboard Table */}
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-6 text-center relative">
                    <span className="relative inline-block">
                      Full Leaderboard
                      <div className="absolute -bottom-1 left-0 w-full h-2 bg-[#FFD166] -z-10 transform -rotate-1"></div>
                    </span>
                  </h2>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b-2 border-dashed border-gray-200">
                          <th className="px-4 py-3 text-left">Rank</th>
                          <th className="px-4 py-3 text-left">{activeTab === "events" ? "Event" : "Name"}</th>
                          <th className="px-4 py-3 text-right">Points</th>
                          <th className="px-4 py-3 text-right">
                            {activeTab === "societies" ? "Members" : activeTab === "students" ? "Year" : "Participants"}
                          </th>
                          <th className="px-4 py-3 text-center">Change</th>
                          <th className="px-4 py-3 text-center">Achievements</th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentLeaderboard.map((item, index) => (
                          <tr
                            key={item.id}
                            className={`border-b border-dashed border-gray-200 hover:bg-gray-50 transform transition-all duration-300 ${animateItems ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
                              }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                          >
                            <td className="px-4 py-4">
                              <div className="flex items-center">
                                <span
                                  className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-2 ${index < 3
                                    ? index === 0
                                      ? "bg-[#FFD700]"
                                      : index === 1
                                        ? "bg-[#C0C0C0]"
                                        : "bg-[#CD7F32]"
                                    : "bg-gray-200 text-gray-700"
                                    }`}
                                >
                                  {index + 1}
                                </span>
                              </div>
                            </td>
                            <td className="px-4 py-4">
                              <div className="flex items-center">
                                <div
                                  className="w-10 h-10 rounded-full overflow-hidden mr-3 border-2"
                                  style={{ borderColor: item.color }}
                                >
                                  <img
                                    src={item.image || "/placeholder.svg"}
                                    alt={item.name}
                                    width={40}
                                    height={40}
                                    className="object-cover"
                                  />
                                </div>
                                <div>
                                  <div className="font-bold" style={{ color: item.color }}>
                                    {item.name}
                                  </div>
                                  {activeTab === "events" && <div className="text-xs text-gray-500">{item.organizer}</div>}
                                </div>
                              </div>
                            </td>
                            <td className="px-4 py-4 text-right font-bold">{item.points}</td>
                            <td className="px-4 py-4 text-right">
                              {activeTab === "societies"
                                ? item.members
                                : activeTab === "students"
                                  ? item.year
                                  : item.participants}
                            </td>
                            <td className="px-4 py-4 text-center">{getChangeIndicator(item.change)}</td>
                            <td className="px-4 py-4 text-center">
                              <div className="flex items-center justify-center">
                                <div
                                  className="px-3 py-1 rounded-full text-sm font-medium flex items-center"
                                  style={{ backgroundColor: `${item.color}20`, color: item.color }}
                                >
                                  <Award className="mr-1 h-4 w-4" />
                                  {activeTab === "events" ? "Top Event" : `${item.achievements} badges`}
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievement Badges Section */}
            <div className="max-w-7xl mx-auto px-4 py-12">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-4 relative inline-block">
                  <span className="relative inline-block">
                    Achievement Badges
                    <div className="absolute -bottom-1 left-0 w-full h-2 bg-[#FFD166] -z-10 transform -rotate-1"></div>
                  </span>
                </h2>
                <p className="text-gray-200 max-w-2xl mx-auto">
                  Earn these special badges by participating in campus activities and contributing to our community!
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-slate-900 rounded-xl p-6 border-4 border-dashed border-[#EF476F] text-center hover:shadow-lg transition-shadow">
                  <div className="w-20 h-20 rounded-full bg-[#EF476F]/10 flex items-center justify-center mx-auto mb-4">
                    <Fire className="h-10 w-10 text-[#EF476F]" />
                  </div>
                  <h3 className="font-bold text-lg mb-1">Community Champion</h3>
                  <p className="text-gray-200 text-sm">Awarded for outstanding community service and leadership</p>
                </div>

                <div className="bg-slate-900 rounded-xl p-6 border-4 border-dashed border-[#118AB2] text-center hover:shadow-lg transition-shadow">
                  <div className="w-20 h-20 rounded-full bg-[#118AB2]/10 flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-10 w-10 text-[#118AB2]" />
                  </div>
                  <h3 className="font-bold text-lg mb-1">Innovation Star</h3>
                  <p className="text-gray-200 text-sm">Awarded for creative ideas and innovative solutions</p>
                </div>

                <div className="bg-slate-900 rounded-xl p-6 border-4 border-dashed border-[#06D6A0] text-center hover:shadow-lg transition-shadow">
                  <div className="w-20 h-20 rounded-full bg-[#06D6A0]/10 flex items-center justify-center mx-auto mb-4">
                    <Award className="h-10 w-10 text-[#06D6A0]" />
                  </div>
                  <h3 className="font-bold text-lg mb-1">Academic Excellence</h3>
                  <p className="text-gray-200 text-sm">Awarded for outstanding academic achievements</p>
                </div>

                <div className="bg-slate-900 rounded-xl p-6 border-4 border-dashed border-[#FFD166] text-center hover:shadow-lg transition-shadow">
                  <div className="w-20 h-20 rounded-full bg-[#FFD166]/10 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10 text-[#FFD166]" />
                  </div>
                  <h3 className="font-bold text-lg mb-1">Team Player</h3>
                  <p className="text-gray-200 text-sm">Awarded for exceptional collaboration and teamwork</p>
                </div>
              </div>

              <div className="text-center mt-8">
                <button className="bg-[#118AB2] hover:bg-[#118AB2]/90 text-white rounded-full px-6 py-3 font-bold inline-flex items-center">
                  <Star className="mr-2 h-5 w-5" /> View All Badges
                </button>
              </div>
            </div>

            {/* How Points Are Earned Section */}
            <div className="bg-slate-900 border-t-4 border-dashed border-[#118AB2] py-16 px-4 mt-12">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-bold mb-4">
                    <span className="relative inline-block">
                      How Points Are Earned
                      <div className="absolute -bottom-1 left-0 w-full h-2 bg-[#FFD166] -z-10 transform -rotate-1"></div>
                    </span>
                  </h2>
                  <p className="text-gray-200 max-w-2xl mx-auto">
                    Learn how you can climb the leaderboard and earn recognition for your contributions!
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-[#181818] rounded-xl p-6 border-4 border-dashed border-[#EF476F]">
                    <h3 className="text-xl font-bold mb-4 text-[#EF476F]">For Students</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="bg-[#EF476F] rounded-full p-1 mt-1 text-white flex items-center justify-center min-w-[24px] h-6">
                          <Star className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-bold">Event Participation</h4>
                          <p className="text-gray-300">10-50 points for attending campus events</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-[#EF476F] rounded-full p-1 mt-1 text-white flex items-center justify-center min-w-[24px] h-6">
                          <Star className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-bold">Volunteer Work</h4>
                          <p className="text-gray-300">25-100 points for volunteering at campus activities</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-[#EF476F] rounded-full p-1 mt-1 text-white flex items-center justify-center min-w-[24px] h-6">
                          <Star className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-bold">Leadership Roles</h4>
                          <p className="text-gray-300">50-200 points for taking on leadership positions</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-[#EF476F] rounded-full p-1 mt-1 text-white flex items-center justify-center min-w-[24px] h-6">
                          <Star className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-bold">Academic Achievements</h4>
                          <p className="text-gray-300">20-100 points for academic excellence</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#181818] rounded-xl p-6 border-4 border-dashed border-[#06D6A0]">
                    <h3 className="text-xl font-bold mb-4 text-[#06D6A0]">For Societies</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="bg-[#06D6A0] rounded-full p-1 mt-1 text-white flex items-center justify-center min-w-[24px] h-6">
                          <Star className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-bold">Hosting Events</h4>
                          <p className="text-gray-300">50-300 points for organizing campus events</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-[#06D6A0] rounded-full p-1 mt-1 text-white flex items-center justify-center min-w-[24px] h-6">
                          <Star className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-bold">Community Service</h4>
                          <p className="text-gray-300">100-250 points for community service projects</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-[#06D6A0] rounded-full p-1 mt-1 text-white flex items-center justify-center min-w-[24px] h-6">
                          <Star className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-bold">Collaborations</h4>
                          <p className="text-gray-300">75-150 points for collaborating with other societies</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-[#06D6A0] rounded-full p-1 mt-1 text-white flex items-center justify-center min-w-[24px] h-6">
                          <Star className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-bold">Member Growth</h4>
                          <p className="text-gray-300">5 points per new member who joins your society</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <button className="bg-[#FFD166] hover:bg-[#FFD166]/90 text-black rounded-full px-6 py-3 font-bold inline-flex items-center">
                    <Award className="mr-2 h-5 w-5" /> View Complete Point System
                  </button>
                </div>
              </div>
            </div>

            {/* Footer */}
            <Footer />
          </div>
        </main>

      </div>
    </>
  )


}