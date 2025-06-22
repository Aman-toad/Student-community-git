"use client"
import Sidebar from "../components/Sidebar"
import Bottombar from "../components/Bottombar"
import { useState, useEffect } from "react"
// import Image from 'next/image'
// import ToDoList from "../components/to-do-list"

import {
  User,
  Edit,
  Book,
  Trophy,
  Calendar,
  Bell,
  Bookmark,
  FileText,
  BarChart2,
  Upload,
  Download,
  Star,
  Heart,
  FileQuestion,
  Zap,
  PlusCircle,
  LucideGithub,
  LucideLinkedin,
  LucideTwitter,
  Trash,
  Save,
  X,
  CheckCircle,
} from "lucide-react"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [editingProfile, setEditingProfile] = useState(false)
  const [notifications, setNotifications] = useState([])
  const [showNotifications, setShowNotifications] = useState(false)
  const [animateItems, setAnimateItems] = useState(false)

  const [todos, setTodos] = useState(() => {
    // Try to get tasks from localStorage, but handle cases where it might not be available
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("todoTasks")
      return saved
        ? JSON.parse(saved)
        : [
            { id: 1, text: "Complete Database assignment", completed: false },
            { id: 2, text: "Review Calculus notes", completed: true },
            { id: 3, text: "Prepare for Algorithm quiz", completed: false },
            { id: 4, text: "Upload OS notes", completed: false },
          ]
    }
    return [
      { id: 1, text: "Complete Database assignment", completed: false },
      { id: 2, text: "Review Calculus notes", completed: true },
      { id: 3, text: "Prepare for Algorithm quiz", completed: false },
      { id: 4, text: "Upload OS notes", completed: false },
    ]
  })
  const [newTask, setNewTask] = useState("")
  const [editingId, setEditingId] = useState(null)
  const [editedText, setEditedText] = useState("")

  // User profile data (would come from API/database in a real app)
  const [userProfile, setUserProfile] = useState({
    name: "Aman Singh",
    username: "amanj2023",
    email: "aman.singh@university.edu",
    program: "Computer Science",
    year: "3rd Year",
    joinDate: "September 2021",
    bio: "Computer Science student passionate about web development and AI. Always looking to learn and share knowledge with fellow students.",
    avatar: "src/assets/images/jiraya_sq.jpg?height=200&width=200",
    coverPhoto: "src/assets/images/blossom.jpg?height=400&width=1200",
    socialLinks: {
      github: "github.com/amanj",
      linkedin: "linkedin.com/in/amanj",
      twitter: "twitter.com/aman",
    },
  })

  // Mock notifications
  useEffect(() => {
    setNotifications([
      {
        id: 1,
        type: "resource",
        message: "New Data Structures notes have been uploaded",
        time: "2 hours ago",
        read: false,
      },
      {
        id: 2,
        type: "leaderboard",
        message: "You've moved up 5 positions on the leaderboard!",
        time: "1 day ago",
        read: false,
      },
      {
        id: 3,
        type: "event",
        message: "Reminder: Workshop on Web Development tomorrow",
        time: "2 days ago",
        read: true,
      },
    ])
  }, [])

  // Trigger animation when component mounts
  useEffect(() => {
    setAnimateItems(true)
  }, [])

  // Save todos to localStorage when they change
  useEffect(() => {
    // Only update localStorage when running in the browser
    if (typeof window !== "undefined") {
      localStorage.setItem("todoTasks", JSON.stringify(todos))
    }
  }, [todos])

  // Stats data
  const stats = [
    { label: "Resources Uploaded", value: 12, icon: <Upload className="h-5 w-5" />, color: "#118AB2" },
    { label: "Resources Downloaded", value: 87, icon: <Download className="h-5 w-5" />, color: "#EF476F" },
    { label: "Bookmarks", value: 24, icon: <Bookmark className="h-5 w-5" />, color: "#06D6A0" },
    { label: "Contributions", value: 156, icon: <Star className="h-5 w-5" />, color: "#FFD166" },
  ]

  // Recent activity data
  const recentActivity = [
    {
      id: 1,
      type: "download",
      item: "Calculus II Notes",
      time: "2 hours ago",
      icon: <Download className="h-4 w-4" />,
      color: "#118AB2",
    },
    {
      id: 2,
      type: "upload",
      item: "Database Systems PYQ",
      time: "Yesterday",
      icon: <Upload className="h-4 w-4" />,
      color: "#EF476F",
    },
    {
      id: 3,
      type: "bookmark",
      item: "Algorithm Design Handbook",
      time: "3 days ago",
      icon: <Bookmark className="h-4 w-4" />,
      color: "#06D6A0",
    },
    {
      id: 4,
      type: "comment",
      item: "Web Development Resources",
      time: "1 week ago",
      icon: <MessageIcon className="h-4 w-4" />,
      color: "#FFD166",
    },
  ]

  // Upcoming events data
  const upcomingEvents = [
    {
      id: 1,
      title: "Web Development Workshop",
      date: "Tomorrow, 3:00 PM",
      location: "Tech Hub, Room 302",
      color: "#118AB2",
    },
    {
      id: 2,
      title: "Mid-Semester Exam: Data Structures",
      date: "Oct 15, 9:00 AM",
      location: "Main Hall",
      color: "#EF476F",
    },
    {
      id: 3,
      title: "Career Fair",
      date: "Oct 20, 10:00 AM - 4:00 PM",
      location: "University Center",
      color: "#06D6A0",
    },
  ]

  // Saved resources data
  const savedResources = [
    {
      id: 1,
      title: "Data Structures Complete Notes",
      type: "Notes",
      subject: "CS202",
      savedDate: "2 days ago",
      color: "#118AB2",
    },
    {
      id: 2,
      title: "Operating Systems PYQs (2018-2022)",
      type: "PYQ",
      subject: "CS305",
      savedDate: "1 week ago",
      color: "#EF476F",
    },
    {
      id: 3,
      title: "Database Management Systems",
      type: "Book",
      subject: "CS301",
      savedDate: "2 weeks ago",
      color: "#06D6A0",
    },
  ]

  // make a Todo list logic and also change it in the dashboard app Chitra
  // To-do list data
  // const [todos, setTodos] = useState([
  //   { id: 1, text: "Complete Database assignment", completed: false },
  //   { id: 2, text: "Review Calculus notes", completed: true },
  //   { id: 3, text: "Prepare for Algorithm quiz", completed: false },
  //   { id: 4, text: "Upload OS notes", completed: false },
  // ])

  // Toggle todo completion
  // const toggleTodo = (id) => {
  //   setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  // }

  // Handle profile update
  const handleProfileUpdate = (e) => {
    e.preventDefault()
    // In a real app, you would send this data to your backend
    setEditingProfile(false)
    // Show success message or notification
  }

  // Custom message icon component
  function MessageIcon(props) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    )
  }

  // Todo list functions
  const handleAddTask = () => {
    if (newTask.trim() === "") return
    const task = {
      id: Date.now(),
      text: newTask.trim(),
      completed: false,
    }
    setTodos((prev) => [task, ...prev])
    setNewTask("")
  }

  const handleToggleComplete = (id) => {
    setTodos((prev) => prev.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  const handleDeleteTask = (id) => {
    setTodos((prev) => prev.filter((task) => task.id !== id))
  }

  const handleEditTask = (id, text) => {
    setEditingId(id)
    setEditedText(text)
  }

  const handleSaveEdit = (id) => {
    if (editedText.trim() === "") return
    setTodos((prev) => prev.map((task) => (task.id === id ? { ...task, text: editedText.trim() } : task)))
    setEditingId(null)
    setEditedText("")
  }

  const handleCancelEdit = () => {
    setEditingId(null)
    setEditedText("")
  }

  const onKeyPressAdd = (e) => {
    if (e.key === "Enter") {
      handleAddTask()
    }
  }

  const onKeyPressEdit = (e, id) => {
    if (e.key === "Enter") {
      handleSaveEdit(id)
    }
    if (e.key === "Escape") {
      handleCancelEdit()
    }
  }

  return (
    <>
      <div
        className="flex text-black dark:text-white bg-slate-700"
        style={{
          backgroundImage: "url('src/assets/images/background.png')",
          backgroundSize: "300px",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="hidden md:block">
          <Sidebar />
        </div>
        <div className=" md:block">
          <Bottombar />
        </div>
        <main className="flex-1 pt-5">
          <div className="min-h-screen font-[system-ui]">
            <div className="flex flex-col md:flex-row">
              {/* Main Content */}
              <div className="flex-1">
                {/* Header */}
                <header className="bg-slate-800 border-b border-gray-200 sticky top-0 z-10">
                  <div className="flex justify-between items-center p-4">
                    <h1 className="text-2xl md:text-3xl font-bold">
                      {activeTab === "overview" && "Dashboard"}
                      {activeTab === "profile" && "My Profile"}
                    </h1>

                    <div className="flex items-center gap-4">
                      {/* Notifications */}
                      <div className="relative">
                        <button
                          className="relative p-2 rounded-full hover:bg-gray-100 transition-colors"
                          onClick={() => setShowNotifications(!showNotifications)}
                        >
                          <Bell className="h-5 w-5 text-gray-600" />
                          {notifications.some((n) => !n.read) && (
                            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                          )}
                        </button>

                        {/* Notifications dropdown */}
                        {showNotifications && (
                          <div className="absolute right-0 mt-2 w-80 bg-slate-900 rounded-lg shadow-lg border border-gray-200 z-20">
                            <div className="p-3 border-b border-gray-200 flex justify-between items-center">
                              <h3 className="font-bold">Notifications</h3>
                              <button className="text-xs text-[#118AB2]">Mark all as read</button>
                            </div>
                            <div className="max-h-80 overflow-y-auto">
                              {notifications.length > 0 ? (
                                notifications.map((notification) => (
                                  <div
                                    key={notification.id}
                                    className={`p-3 border-b border-gray-100 hover:bg-gray-50 ${
                                      !notification.read ? "bg-slate-700" : ""
                                    }`}
                                  >
                                    <div className="flex items-start gap-3">
                                      <div
                                        className={`p-2 rounded-full ${
                                          notification.type === "resource"
                                            ? "bg-[#118AB2]/10 text-[#118AB2]"
                                            : notification.type === "leaderboard"
                                              ? "bg-[#EF476F]/10 text-[#EF476F]"
                                              : "bg-[#06D6A0]/10 text-[#06D6A0]"
                                        }`}
                                      >
                                        {notification.type === "resource" ? (
                                          <FileText className="h-4 w-4" />
                                        ) : notification.type === "leaderboard" ? (
                                          <Trophy className="h-4 w-4" />
                                        ) : (
                                          <Calendar className="h-4 w-4" />
                                        )}
                                      </div>
                                      <div className="flex-1">
                                        <p className="text-sm">{notification.message}</p>
                                        <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                                      </div>
                                    </div>
                                  </div>
                                ))
                              ) : (
                                <div className="p-4 text-center text-gray-500">No notifications</div>
                              )}
                            </div>
                            <div className="p-2 text-center border-t border-gray-200">
                              <button className="text-sm text-[#118AB2]">View all notifications</button>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* User menu */}
                      <div className="flex items-center justify-center md:justify-start">
                        <div className="w-10 h-10 rounded-full bg-[#118AB2] flex items-center justify-center text-white font-bold text-lg mr-3">
                          {userProfile.name.charAt(0)}
                        </div>
                        <div className="hidden md:block">
                          <h3 className="font-bold">{userProfile.name}</h3>
                          <p className="text-xs text-gray-500">{userProfile.program}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-900 border-gray-200">
                    <nav className="p-4 flex justify-center text-center gap-10">
                      <button
                        onClick={() => setActiveTab("overview")}
                        className={`w-full flex items-center p-2 rounded-lg transition-colors ${
                          activeTab === "overview" ? "bg-[#118AB2] text-white" : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        <BarChart2 className="h-5 w-5 mr-3" />
                        <span className="inline ">Overview</span>
                      </button>

                      <button
                        onClick={() => setActiveTab("profile")}
                        className={`w-full flex items-center p-2 rounded-lg transition-colors ${
                          activeTab === "profile" ? "bg-[#118AB2] text-white" : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        <User className="h-5 w-5 mr-3" />
                        <span className="inline">Profile</span>
                      </button>
                    </nav>
                  </div>
                </header>

                {/* Dashboard Content */}
                <main className="p-4 md:p-6">
                  {/* Overview Tab */}
                  {activeTab === "overview" && (
                    <div className="space-y-6">
                      {/* Welcome Section */}
                      <div
                        className={`bg-slate-900 rounded-xl p-6 border border-gray-200 shadow-sm transform transition-all duration-500 ${
                          animateItems ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                      >
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div>
                            <h2 className="text-2xl font-bold mb-2">Welcome back, {userProfile.name.split(" ")[0]}!</h2>
                            <p className="text-gray-200">
                              Track your progress, access resources, and stay updated with your academic journey.
                            </p>
                          </div>
                          <button className="bg-[#118AB2] hover:bg-[#118AB2]/90 text-white rounded-lg px-4 py-2 text-sm font-medium flex items-center self-start">
                            <PlusCircle className="h-4 w-4 mr-2" /> Upload New Resource
                          </button>
                        </div>
                      </div>

                      {/* Stats Cards */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {stats.map((stat, index) => (
                          <div
                            key={stat.label}
                            className={`bg-slate-900 rounded-xl p-6 border border-gray-200 shadow-sm transform transition-all duration-500 ${
                              animateItems ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                            }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-gray-200 text-sm">{stat.label}</p>
                                <p className="text-2xl font-bold mt-1">{stat.value}</p>
                              </div>
                              <div
                                className="p-3 rounded-full"
                                style={{ backgroundColor: `${stat.color}20`, color: stat.color }}
                              >
                                {stat.icon}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Two Column Layout */}
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Recent Activity */}
                        <div
                          className={`bg-slate-900 rounded-xl border border-gray-200 shadow-sm lg:col-span-2 transform transition-all duration-500 ${
                            animateItems ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                          }`}
                          style={{ transitionDelay: "200ms" }}
                        >
                          <div className="p-6 border-b border-gray-200">
                            <h3 className="font-bold text-lg">Recent Activity</h3>
                          </div>
                          <div className="p-6">
                            <div className="space-y-4">
                              {recentActivity.map((activity) => (
                                <div key={activity.id} className="flex items-start gap-3">
                                  <div
                                    className="p-2 rounded-full"
                                    style={{ backgroundColor: `${activity.color}20`, color: activity.color }}
                                  >
                                    {activity.icon}
                                  </div>
                                  <div>
                                    <p className="font-medium">
                                      You{" "}
                                      {activity.type === "download"
                                        ? "downloaded"
                                        : activity.type === "upload"
                                          ? "uploaded"
                                          : activity.type === "bookmark"
                                            ? "bookmarked"
                                            : "commented on"}{" "}
                                      <span className="font-bold">{activity.item}</span>
                                    </p>
                                    <p className="text-sm text-gray-300">{activity.time}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                            <div className="mt-4 text-center">
                              <button className="text-[#118AB2] text-sm font-medium">View all activity</button>
                            </div>
                          </div>
                        </div>

                        {/* To-Do List */}
                        <div
                          className={`bg-slate-900 rounded-xl border border-gray-200 shadow-sm transform transition-all duration-500 ${
                            animateItems ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                          }`}
                          style={{ transitionDelay: "300ms" }}
                        >
                          <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                            <h3 className="font-bold text-lg">To-Do List</h3>
                          </div>
                          <div className="p-4">
                            <div className="w-full" aria-label="To Do List">
                              <div className="flex mb-4">
                                <input
                                  type="text"
                                  placeholder="Add a new task..."
                                  className="flex-grow px-3 py-2 text-sm bg-slate-800 border border-gray-700 rounded-l-md focus:outline-none focus:ring-1 focus:ring-[#118AB2] text-white"
                                  value={newTask}
                                  onChange={(e) => setNewTask(e.target.value)}
                                  onKeyPress={onKeyPressAdd}
                                  aria-label="New task input"
                                />
                                <button
                                  aria-label="Add task"
                                  className="px-4 py-2 text-sm font-medium text-white bg-[#118AB2] rounded-r-md hover:bg-[#118AB2]/90 focus:outline-none focus:ring-2 focus:ring-[#118AB2]"
                                  onClick={handleAddTask}
                                  disabled={newTask.trim() === ""}
                                >
                                  Add
                                </button>
                              </div>

                              <ul
                                className="space-y-2 max-h-[250px] overflow-y-auto pr-1"
                                aria-live="polite"
                                aria-relevant="additions removals"
                              >
                                {todos.length === 0 && <p className="text-center text-gray-400 py-2">No tasks yet!</p>}
                                {todos.map(({ id, text, completed }) => (
                                  <li
                                    key={id}
                                    className={`flex items-center p-2 rounded-md ${completed ? "bg-slate-800/50" : "bg-slate-800"}`}
                                  >
                                    <button
                                      onClick={() => handleToggleComplete(id)}
                                      className={`flex-shrink-0 w-5 h-5 rounded-full border mr-3 flex items-center justify-center ${
                                        completed ? "bg-[#06D6A0] border-[#06D6A0] text-white" : "border-gray-600"
                                      }`}
                                      aria-label={
                                        completed
                                          ? `Mark task "${text}" as incomplete`
                                          : `Mark task "${text}" as complete`
                                      }
                                    >
                                      {completed && <CheckCircle className="h-3 w-3" />}
                                    </button>

                                    {editingId === id ? (
                                      <input
                                        type="text"
                                        className="flex-grow px-2 py-1 text-sm bg-slate-700 border border-[#118AB2] rounded text-white"
                                        value={editedText}
                                        onChange={(e) => setEditedText(e.target.value)}
                                        onKeyDown={(e) => onKeyPressEdit(e, id)}
                                        autoFocus
                                        aria-label={`Edit task ${text}`}
                                      />
                                    ) : (
                                      <span
                                        className={`flex-grow text-sm ${completed ? "line-through text-gray-400" : "text-gray-200"}`}
                                        onDoubleClick={() => handleEditTask(id, text)}
                                        tabIndex="0"
                                        role="textbox"
                                        aria-readonly="true"
                                        onKeyDown={(e) => {
                                          if (e.key === "Enter") handleEditTask(id, text)
                                        }}
                                        title="Double click or Press Enter to edit task"
                                      >
                                        {text}
                                      </span>
                                    )}

                                    <div className="flex ml-2 gap-1">
                                      {editingId === id ? (
                                        <>
                                          <button
                                            className="p-1 text-[#118AB2] hover:bg-slate-700 rounded"
                                            onClick={() => handleSaveEdit(id)}
                                            aria-label="Save task edit"
                                          >
                                            <Save className="h-4 w-4" />
                                          </button>
                                          <button
                                            className="p-1 text-gray-400 hover:bg-slate-700 rounded"
                                            onClick={handleCancelEdit}
                                            aria-label="Cancel task edit"
                                          >
                                            <X className="h-4 w-4" />
                                          </button>
                                        </>
                                      ) : (
                                        <>
                                          <button
                                            className="p-1 text-[#118AB2] hover:bg-slate-700 rounded"
                                            onClick={() => handleEditTask(id, text)}
                                            aria-label={`Edit task ${text}`}
                                          >
                                            <Edit className="h-4 w-4" />
                                          </button>
                                          <button
                                            className="p-1 text-[#EF476F] hover:bg-slate-700 rounded"
                                            onClick={() => handleDeleteTask(id)}
                                            aria-label={`Delete task ${text}`}
                                          >
                                            <Trash className="h-4 w-4" />
                                          </button>
                                        </>
                                      )}
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Upcoming Events and Saved Resources */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Upcoming Events */}
                        <div
                          className={`bg-slate-900 rounded-xl border border-gray-200 shadow-sm transform transition-all duration-500 ${
                            animateItems ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                          }`}
                          style={{ transitionDelay: "400ms" }}
                        >
                          <div className="p-6 border-b border-gray-200">
                            <h3 className="font-bold text-lg">Upcoming Events</h3>
                          </div>
                          <div className="p-6">
                            <div className="space-y-4">
                              {upcomingEvents.map((event) => (
                                <div key={event.id} className="flex items-start gap-3">
                                  <div
                                    className="p-2 rounded-full"
                                    style={{ backgroundColor: `${event.color}20`, color: event.color }}
                                  >
                                    <Calendar className="h-4 w-4" />
                                  </div>
                                  <div>
                                    <p className="font-bold">{event.title}</p>
                                    <p className="text-sm text-gray-500">{event.date}</p>
                                    <p className="text-sm text-gray-500">{event.location}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                            <div className="mt-4 text-center">
                              <button className="text-[#118AB2] text-sm font-medium">View all events</button>
                            </div>
                          </div>
                        </div>

                        {/* Saved Resources */}
                        <div
                          className={`bg-slate-900 rounded-xl border border-gray-200 shadow-sm transform transition-all duration-500 ${
                            animateItems ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                          }`}
                          style={{ transitionDelay: "500ms" }}
                        >
                          <div className="p-6 border-b border-gray-200">
                            <h3 className="font-bold text-lg">Saved Resources</h3>
                          </div>
                          <div className="p-6">
                            <div className="space-y-4">
                              {savedResources.map((resource) => (
                                <div key={resource.id} className="flex items-start gap-3">
                                  <div
                                    className="p-2 rounded-full"
                                    style={{ backgroundColor: `${resource.color}20`, color: resource.color }}
                                  >
                                    {resource.type === "Notes" ? (
                                      <FileText className="h-4 w-4" />
                                    ) : resource.type === "PYQ" ? (
                                      <FileQuestion className="h-4 w-4" />
                                    ) : (
                                      <Book className="h-4 w-4" />
                                    )}
                                  </div>
                                  <div>
                                    <p className="font-bold">{resource.title}</p>
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                      <span className="bg-gray-100 px-2 py-0.5 rounded-full text-xs">
                                        {resource.type}
                                      </span>
                                      <span>{resource.subject}</span>
                                      <span>•</span>
                                      <span>Saved {resource.savedDate}</span>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                            <div className="mt-4 text-center">
                              <button className="text-[#118AB2] text-sm font-medium">View all saved resources</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Profile Tab */}
                  {activeTab === "profile" && (
                    <div className="space-y-6">
                      {/* Profile Header */}
                      <div className="relative">
                        <div className="h-48 rounded-xl overflow-hidden">
                          <img
                            src={userProfile.coverPhoto || "/placeholder.svg"}
                            alt="Cover"
                            width={1200}
                            height={300}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="absolute -bottom-16 left-6 w-32 h-32 rounded-full border-4 border-white overflow-hidden bg-gray-700">
                          <img
                            src={userProfile.avatar || "/placeholder.svg"}
                            alt={userProfile.name}
                            width={128}
                            height={128}
                            className="object-cover"
                          />
                        </div>
                        <button
                          onClick={() => setEditingProfile(true)}
                          className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm hover:bg-white text-gray-700 rounded-lg px-4 py-2 text-sm font-medium flex items-center"
                        >
                          <Edit className="h-4 w-4 mr-2" /> Edit Profile
                        </button>
                      </div>

                      {/* Profile Info */}
                      <div className="mt-16 bg-slate-900 rounded-xl border border-gray-200 shadow-sm">
                        {!editingProfile ? (
                          <div className="p-6">
                            <h2 className="text-2xl font-bold mb-1">{userProfile.name}</h2>
                            <p className="text-gray-400 mb-4">@{userProfile.username}</p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                              <div>
                                <h3 className="text-sm font-medium text-gray-400">Program</h3>
                                <p className="mt-1">{userProfile.program}</p>
                              </div>
                              <div>
                                <h3 className="text-sm font-medium text-gray-400">Year</h3>
                                <p className="mt-1">{userProfile.year}</p>
                              </div>
                              <div>
                                <h3 className="text-sm font-medium text-gray-400">Joined</h3>
                                <p className="mt-1">{userProfile.joinDate}</p>
                              </div>
                            </div>

                            <div className="mb-6">
                              <h3 className="text-sm font-medium text-gray-400 mb-2">About</h3>
                              <p className="text-gray-300">{userProfile.bio}</p>
                            </div>

                            <div>
                              <h3 className="text-sm font-medium text-gray-400 mb-2">Social Links</h3>
                              <div className="flex flex-wrap gap-3">
                                {Object.entries(userProfile.socialLinks).map(([platform, url]) => (
                                  <a
                                    key={platform}
                                    href={`https://${url}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-sm text-[#118AB2] hover:underline"
                                  >
                                    {platform === "github" ? (
                                      <LucideGithub className="h-4 w-4" />
                                    ) : platform === "linkedin" ? (
                                      <LucideLinkedin className="h-4 w-4" />
                                    ) : (
                                      <LucideTwitter className="h-4 w-4" />
                                    )}
                                    {url}
                                  </a>
                                ))}
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="p-6">
                            <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
                            <form onSubmit={handleProfileUpdate}>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                  <label className="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
                                  <input
                                    type="text"
                                    value={userProfile.name}
                                    onChange={(e) => setUserProfile({ ...userProfile, name: e.target.value })}
                                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#118AB2] focus:border-transparent"
                                  />
                                </div>
                                <div>
                                  <label className="block text-sm font-medium text-gray-400 mb-1">Username</label>
                                  <input
                                    type="text"
                                    value={userProfile.username}
                                    onChange={(e) => setUserProfile({ ...userProfile, username: e.target.value })}
                                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#118AB2] focus:border-transparent"
                                  />
                                </div>
                                <div>
                                  <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                                  <input
                                    type="email"
                                    value={userProfile.email}
                                    onChange={(e) => setUserProfile({ ...userProfile, email: e.target.value })}
                                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#118AB2] focus:border-transparent"
                                  />
                                </div>
                                <div>
                                  <label className="block text-sm font-medium text-gray-400 mb-1">Program</label>
                                  <input
                                    type="text"
                                    value={userProfile.program}
                                    onChange={(e) => setUserProfile({ ...userProfile, program: e.target.value })}
                                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#118AB2] focus:border-transparent"
                                  />
                                </div>
                                <div>
                                  <label className="block text-sm font-medium text-gray-400 mb-1">Year</label>
                                  <input
                                    type="text"
                                    value={userProfile.year}
                                    onChange={(e) => setUserProfile({ ...userProfile, year: e.target.value })}
                                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#118AB2] focus:border-transparent"
                                  />
                                </div>
                              </div>

                              <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-400 mb-1">Bio</label>
                                <textarea
                                  value={userProfile.bio}
                                  onChange={(e) => setUserProfile({ ...userProfile, bio: e.target.value })}
                                  rows="4"
                                  className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#118AB2] focus:border-transparent"
                                ></textarea>
                              </div>

                              <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-400 mb-1">Social Links</label>
                                <div className="space-y-2">
                                  {Object.entries(userProfile.socialLinks).map(([platform, url]) => (
                                    <div key={platform} className="flex items-center gap-2">
                                      <span className="w-20 text-sm">{platform}:</span>
                                      <input
                                        type="text"
                                        value={url}
                                        onChange={(e) =>
                                          setUserProfile({
                                            ...userProfile,
                                            socialLinks: {
                                              ...userProfile.socialLinks,
                                              [platform]: e.target.value,
                                            },
                                          })
                                        }
                                        className="flex-1 rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#118AB2] focus:border-transparent"
                                      />
                                    </div>
                                  ))}
                                </div>
                              </div>

                              <div className="flex justify-end gap-2">
                                <button
                                  type="button"
                                  onClick={() => setEditingProfile(false)}
                                  className="bg-gray-100 text-gray-700 rounded-lg px-4 py-2 text-sm font-medium"
                                >
                                  Cancel
                                </button>
                                <button
                                  type="submit"
                                  className="bg-[#118AB2] hover:bg-[#118AB2]/90 text-white rounded-lg px-4 py-2 text-sm font-medium"
                                >
                                  Save Changes
                                </button>
                              </div>
                            </form>
                          </div>
                        )}
                      </div>

                      {/* Profile Stats */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {stats.map((stat, index) => (
                          <div
                            key={stat.label}
                            className="bg-slate-900 rounded-xl p-6 border border-gray-200 shadow-sm"
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-gray-300 text-sm">{stat.label}</p>
                                <p className="text-2xl font-bold mt-1">{stat.value}</p>
                              </div>
                              <div
                                className="p-3 rounded-full"
                                style={{ backgroundColor: `${stat.color}20`, color: stat.color }}
                              >
                                {stat.icon}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Achievements */}
                      <div className="bg-slate-900 rounded-xl border border-gray-200 shadow-sm">
                        <div className="p-6 border-b border-gray-200">
                          <h3 className="font-bold text-lg">Achievements</h3>
                        </div>
                        <div className="p-6">
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="bg-slate-800 rounded-xl p-4 border border-dashed border-[#FFD166] text-center">
                              <div className="w-16 h-16 rounded-full bg-[#FFD166]/20 flex items-center justify-center mx-auto mb-3">
                                <Trophy className="h-8 w-8 text-[#FFD166]" />
                              </div>
                              <h4 className="font-bold">Top Contributor</h4>
                              <p className="text-xs text-gray-400 mt-1">Uploaded 10+ resources</p>
                            </div>
                            <div className="bg-slate-800 rounded-xl p-4 border border-dashed border-[#118AB2] text-center">
                              <div className="w-16 h-16 rounded-full bg-[#118AB2]/20 flex items-center justify-center mx-auto mb-3">
                                <Zap className="h-8 w-8 text-[#118AB2]" />
                              </div>
                              <h4 className="font-bold">Quick Learner</h4>
                              <p className="text-xs text-gray-400 mt-1">Downloaded 50+ resources</p>
                            </div>
                            <div className="bg-slate-800 rounded-xl p-4 border border-dashed border-[#EF476F] text-center">
                              <div className="w-16 h-16 rounded-full bg-[#EF476F]/20 flex items-center justify-center mx-auto mb-3">
                                <Heart className="h-8 w-8 text-[#EF476F]" />
                              </div>
                              <h4 className="font-bold">Helpful Peer</h4>
                              <p className="text-xs text-gray-400 mt-1">Received 20+ thanks</p>
                            </div>
                            <div className="bg-slate-800 rounded-xl p-4 border border-dashed border-[#06D6A0] text-center">
                              <div className="w-16 h-16 rounded-full bg-[#06D6A0]/20 flex items-center justify-center mx-auto mb-3">
                                <Star className="h-8 w-8 text-[#06D6A0]" />
                              </div>
                              <h4 className="font-bold">Rising Star</h4>
                              <p className="text-xs text-gray-400 mt-1">Top 10% in your program</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </main>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
