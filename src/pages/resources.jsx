"use client"
import { useState, useEffect, use } from "react";
import Sidebar from "../components/Sidebar";
import Bottombar from '../components/Bottombar'
import { ToastContainer, toast } from 'react-toastify'
// import image from 'next/image'
import {
  Book,
  FileText,
  Download,
  Search,
  Filter,
  ChevronRight,
  ChevronLeft,
  Star,
  Upload,
  BookOpen,
  FileQuestion,
  FilePlus,
  Eye,
  Calendar,
  Bookmark,
  Share2,
} from "lucide-react"
import Footer from "../components/footer";

export default function Resources() {
  const [activeView, setActiveView] = useState("courses")
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [selectedSemester, setSelectedSemester] = useState(null)
  const [selectedSubject, setSelectedSubject] = useState(null)
  const [resourceType, setResourceType] = useState("notes")
  const [searchQuery, setSearchQuery] = useState("")
  const [animateItems, setAnimateItems] = useState(false)

  // Trigger animation when component mounts
  useEffect(() => {
    setAnimateItems(true)
  }, [])

  // Reset animation when view changes
  useEffect(() => {
    setAnimateItems(false)
    const timer = setTimeout(() => {
      setAnimateItems(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [activeView, selectedCourse, selectedSemester, selectedSubject, resourceType])

  // Course data
  const courses = [
    {
      id: 1,
      name: "Computer Science",
      code: "CS",
      description: "Bachelor of Technology in Computer Science and Engineering",
      color: "#118AB2",
      icon: "💻",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      name: "Electrical Engineering",
      code: "EE",
      description: "Bachelor of Technology in Electrical Engineering",
      color: "#EF476F",
      icon: "⚡",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      name: "Mechanical Engineering",
      code: "ME",
      description: "Bachelor of Technology in Mechanical Engineering",
      color: "#06D6A0",
      icon: "⚙️",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      name: "Civil Engineering",
      code: "CE",
      description: "Bachelor of Technology in Civil Engineering",
      color: "#FFD166",
      icon: "🏗️",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 5,
      name: "Business Administration",
      code: "BA",
      description: "Bachelor of Business Administration",
      color: "#073B4C",
      icon: "📊",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 6,
      name: "Psychology",
      code: "PSY",
      description: "Bachelor of Arts in Psychology",
      color: "#EF476F",
      icon: "🧠",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  // Semester data
  const semesters = [
    { id: 1, name: "Semester 1", color: "#118AB2" },
    { id: 2, name: "Semester 2", color: "#EF476F" },
    { id: 3, name: "Semester 3", color: "#06D6A0" },
    { id: 4, name: "Semester 4", color: "#FFD166" },
    { id: 5, name: "Semester 5", color: "#073B4C" },
    { id: 6, name: "Semester 6", color: "#EF476F" },
    { id: 7, name: "Semester 7", color: "#118AB2" },
    { id: 8, name: "Semester 8", color: "#06D6A0" },
  ]

  // Subject data (based on course and semester)
  const getSubjects = (courseId, semesterId) => {
    // This would typically come from an API based on the selected course and semester
    const subjectsByCourseSemester = {
      "1-1": [
        { id: 1, name: "Introduction to Programming", code: "CS101", color: "#118AB2" },
        { id: 2, name: "Mathematics I", code: "MA101", color: "#EF476F" },
        { id: 3, name: "Physics", code: "PH101", color: "#06D6A0" },
        { id: 4, name: "Communication Skills", code: "HS101", color: "#FFD166" },
      ],
      "1-2": [
        { id: 5, name: "Data Structures", code: "CS102", color: "#118AB2" },
        { id: 6, name: "Mathematics II", code: "MA102", color: "#EF476F" },
        { id: 7, name: "Digital Logic Design", code: "CS103", color: "#06D6A0" },
        { id: 8, name: "Environmental Studies", code: "ES101", color: "#FFD166" },
      ],
      "2-1": [
        { id: 9, name: "Circuit Theory", code: "EE101", color: "#118AB2" },
        { id: 10, name: "Electromagnetic Fields", code: "EE102", color: "#EF476F" },
        { id: 11, name: "Mathematics III", code: "MA201", color: "#06D6A0" },
        { id: 12, name: "Economics", code: "HS201", color: "#FFD166" },
      ],
      // Add more subjects for other course-semester combinations
    }

    const key = `${courseId}-${semesterId}`
    return subjectsByCourseSemester[key] || []
  }

  // Resource data (based on subject)
  const getResources = (subjectId, type) => {
    // This would typically come from an API based on the selected subject and resource type
    const resourcesBySubjectType = {
      "1-notes": [
        {
          id: 1,
          title: "Introduction to C Programming",
          description: "Comprehensive notes covering C syntax, data types, and basic programming concepts",
          uploadedBy: "Prof. Johnson",
          uploadDate: "2023-09-15",
          fileSize: "2.4 MB",
          downloads: 1245,
          rating: 4.8,
          fileType: "PDF",
        },
        {
          id: 2,
          title: "Object-Oriented Programming Concepts",
          description: "Detailed explanation of classes, objects, inheritance, polymorphism, and encapsulation",
          uploadedBy: "Dr. Smith",
          uploadDate: "2023-08-22",
          fileSize: "3.1 MB",
          downloads: 987,
          rating: 4.5,
          fileType: "PDF",
        },
        {
          id: 3,
          title: "Algorithms and Flowcharts",
          description: "Visual guide to algorithm design and flowchart creation for problem-solving",
          uploadedBy: "TA Michael",
          uploadDate: "2023-10-05",
          fileSize: "1.8 MB",
          downloads: 756,
          rating: 4.2,
          fileType: "PDF",
        },
      ],
      "1-pyq": [
        {
          id: 4,
          title: "Mid-Semester Exam 2022",
          description: "Previous year questions from mid-semester examination with solutions",
          uploadedBy: "Admin",
          uploadDate: "2023-01-10",
          fileSize: "1.2 MB",
          downloads: 2145,
          rating: 4.9,
          fileType: "PDF",
        },
        {
          id: 5,
          title: "End-Semester Exam 2022",
          description: "Previous year questions from end-semester examination with detailed solutions",
          uploadedBy: "Prof. Johnson",
          uploadDate: "2023-01-15",
          fileSize: "2.5 MB",
          downloads: 1876,
          rating: 4.7,
          fileType: "PDF",
        },
        {
          id: 6,
          title: "End-Semester Exam 2021",
          description: "Previous year questions from end-semester examination with answer key",
          uploadedBy: "Admin",
          uploadDate: "2022-01-20",
          fileSize: "2.3 MB",
          downloads: 1543,
          rating: 4.4,
          fileType: "PDF",
        },
      ],
      "1-assignments": [
        {
          id: 7,
          title: "Programming Assignment 1",
          description: "Practice problems on variables, operators, and control structures",
          uploadedBy: "Prof. Johnson",
          uploadDate: "2023-09-20",
          fileSize: "0.8 MB",
          downloads: 987,
          rating: 4.3,
          fileType: "PDF",
        },
        {
          id: 8,
          title: "Programming Assignment 2",
          description: "Practice problems on arrays, functions, and pointers",
          uploadedBy: "Prof. Johnson",
          uploadDate: "2023-10-10",
          fileSize: "1.1 MB",
          downloads: 876,
          rating: 4.5,
          fileType: "PDF",
        },
      ],
      // Add more resources for other subject-type combinations
    }

    const key = `${subjectId}-${type}`
    return resourcesBySubjectType[key] || []
  }

  // Handle course selection
  const handleCourseSelect = (course) => {
    setSelectedCourse(course)
    setSelectedSemester(null)
    setSelectedSubject(null)
    setActiveView("semesters")
  }

  // Handle semester selection
  const handleSemesterSelect = (semester) => {
    setSelectedSemester(semester)
    setSelectedSubject(null)
    setActiveView("subjects")
  }

  // Handle subject selection
  const handleSubjectSelect = (subject) => {
    setSelectedSubject(subject)
    setResourceType("notes")
    setActiveView("resources")
  }

  // Handle back navigation
  const handleBack = () => {
    if (activeView === "semesters") {
      setSelectedCourse(null)
      setActiveView("courses")
    } else if (activeView === "subjects") {
      setSelectedSemester(null)
      setActiveView("semesters")
    } else if (activeView === "resources") {
      setSelectedSubject(null)
      setActiveView("subjects")
    }
  }

  // Filter courses based on search query
  const filteredCourses = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Get subjects for the selected course and semester
  const subjects = selectedCourse && selectedSemester ? getSubjects(selectedCourse.id, selectedSemester.id) : []

  // Get resources for the selected subject and type
  const resources = selectedSubject ? getResources(selectedSubject.id, resourceType) : []

  // Form validation
  const [title, setTitle] = useState('');
  const [type, setType] = useState('notes');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!file || !title.trim() || !description.trim()) {
      toast.error('Please fill all fields and select a file.');
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      toast.warning("File size should be less than 10MB");
      return;
    }

    toast.success('File Uploaded Successfully')
    // Proceed to upload
    console.log({ title, type, description, file });
    setTitle('');
    setType('notes');
    setDescription('');
    setFile(null);
  }


  return (
    <div className="flex text-white bg-slate-900 " 

    // yaha pe image dal dal ke check karna 
    style={{
      backgroundImage: "url('src/assets/images/bg.svg')",
      backgroundSize: "800px",
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
          {/* Header with doodle style */}
          <div className="relative py-16 px-4 text-center">
            <div className="absolute inset-0 -z-10 opacity-10">
              <img src="/placeholder.svg?height=400&width=1200" alt="Doodle background" className="object-cover" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 relative">
              <span className="relative inline-block">
                Notes & Resources
                <div className="absolute -bottom-2 left-0 w-full h-3 bg-[#FFD166] -z-10 transform -rotate-1"></div>
              </span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-200">
              Access study materials, previous year questions, and resources to ace your courses!
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <div className="relative max-w-md w-full">
                <input
                  type="text"
                  placeholder="Search courses, subjects, or resources..."
                  className="w-full rounded-full border-2 border-gray-300 pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#118AB2] focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
              <button className="bg-transparent hover:bg-[#118AB2]/10 rounded-full px-4 py-3 font-bold border-2 border-[#118AB2] text-[#118AB2] flex items-center">
                <Filter className="mr-2 h-5 w-5" /> Filter
              </button>
            </div>
          </div>

          {/* Breadcrumb Navigation */}
          <div className="max-w-7xl mx-auto px-4 mb-6 border-t-2 border-b-2 p-3 font-bold ">
            <div className="flex items-center text-xl text-gray-200 flex-wrap">
              <button
                onClick={() => {
                  setSelectedCourse(null)
                  setSelectedSemester(null)
                  setSelectedSubject(null)
                  setActiveView("courses")
                }}
                className="hover:text-[#118AB2] transition-colors"
              >
                Home
              </button>
              {selectedCourse && (
                <>
                  <ChevronRight className="h-4 w-4 mx-1" />
                  <button
                    onClick={() => {
                      setSelectedSemester(null)
                      setSelectedSubject(null)
                      setActiveView("semesters")
                    }}
                    className="hover:text-[#118AB2] transition-colors"
                  >
                    {selectedCourse.name}
                  </button>
                </>
              )}
              {selectedSemester && (
                <>
                  <ChevronRight className="h-4 w-4 mx-1" />
                  <button
                    onClick={() => {
                      setSelectedSubject(null)
                      setActiveView("subjects")
                    }}
                    className="hover:text-[#118AB2] transition-colors"
                  >
                    {selectedSemester.name}
                  </button>
                </>
              )}
              {selectedSubject && (
                <>
                  <ChevronRight className="h-4 w-4 mx-1" />
                  <span className="font-medium">{selectedSubject.name}</span>
                </>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-7xl mx-auto px-4 py-8 font-bold">
            {/* Back Button (when not on courses view) */}
            {activeView !== "courses" && (
              <button
                onClick={handleBack}
                className="mb-6 flex items-center text-gray-200 hover:text-[#118AB2] transition-colors text-xl"
              >
                <ChevronLeft className="h-6 w-6 mr-1" /> Back
              </button>
            )}

            {/* Courses View */}
            {activeView === "courses" && (
              <div className="space-y-8">
                <h2 className="text-2xl font-bold mb-6 text-center">
                  <span className="relative inline-block">
                    Select Your Course
                    <div className="absolute -bottom-1 left-0 w-full h-2 bg-[#FFD166] -z-10 transform -rotate-1"></div>
                  </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCourses.map((course, index) => (
                    <div
                      key={course.id}
                      className={`bg-slate-900 rounded-xl overflow-hidden border-4 border-dashed shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer transform ${animateItems ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                      style={{ borderColor: course.color, transitionDelay: `${index * 100}ms` }}
                      onClick={() => handleCourseSelect(course)}
                    >
                      <div className="relative h-40">
                        <img src={course.image || "/placeholder.svg"} alt={course.name} className="object-cover" />
                        <div className="absolute inset-0 opacity-20" style={{ backgroundColor: course.color }}></div>
                        <div
                          className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                          style={{ backgroundColor: course.color + "30" }}
                        >
                          {course.icon}
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold" style={{ color: course.color }}>
                            {course.name}
                          </h3>
                          <span className="text-sm font-bold bg-gray-100 px-2 py-1 rounded-full">{course.code}</span>
                        </div>
                        <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-500 text-sm flex items-center">
                            <Book className="h-4 w-4 mr-1" /> 8 Semesters
                          </span>
                          <button
                            className="text-sm rounded-full px-3 py-1 flex items-center"
                            style={{ backgroundColor: course.color + "20", color: course.color }}
                          >
                            View Resources <ChevronRight className="h-4 w-4 ml-1" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {filteredCourses.length === 0 && (
                  <div className="text-center py-12">
                    <div className="text-gray-400 mb-4">
                      <Search className="h-12 w-12 mx-auto" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">No courses found</h3>
                    <p className="text-gray-600">Try adjusting your search query</p>
                  </div>
                )}
              </div>
            )}

            {/* Semesters View */}
            {activeView === "semesters" && selectedCourse && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold mb-2">
                    <span className="relative inline-block">
                      {selectedCourse.name}
                      <div className="absolute -bottom-1 left-0 w-full h-2 bg-[#FFD166] -z-10 transform -rotate-1"></div>
                    </span>
                  </h2>
                  <p className="text-gray-300">Select a semester to view subjects and resources</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {semesters.map((semester, index) => (
                    <div
                      key={semester.id}
                      className={`bg-slate-800 rounded-xl p-6 border-4 border-dashed shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer transform ${animateItems ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                      style={{ borderColor: semester.color, transitionDelay: `${index * 100}ms` }}
                      onClick={() => handleSemesterSelect(semester)}
                    >
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4"
                        style={{ backgroundColor: semester.color }}
                      >
                        {semester.id}
                      </div>
                      <h3 className="text-center font-bold" style={{ color: semester.color }}>
                        {semester.name}
                      </h3>
                      <div className="text-center mt-2">
                        <span className="text-sm text-gray-500">4-6 Subjects</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Subjects View */}
            {activeView === "subjects" && selectedCourse && selectedSemester && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold mb-2">
                    <span className="relative inline-block">
                      {selectedSemester.name} Subjects
                      <div className="absolute -bottom-1 left-0 w-full h-2 bg-[#FFD166] -z-10 transform -rotate-1"></div>
                    </span>
                  </h2>
                  <p className="text-gray-200">Select a subject to access study materials and resources</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {subjects.map((subject, index) => (
                    <div
                      key={subject.id}
                      className={`bg-salte-800 rounded-xl p-6 border-4 border-dashed shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer transform ${animateItems ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                      style={{ borderColor: subject.color, transitionDelay: `${index * 100}ms` }}
                      onClick={() => handleSubjectSelect(subject)}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className="px-3 py-1 rounded-full text-sm font-bold"
                          style={{ backgroundColor: subject.color + "20", color: subject.color }}
                        >
                          {subject.code}
                        </span>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-[#FFD166] fill-current" />
                          <span className="text-sm ml-1">4.5</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2" style={{ color: subject.color }}>
                        {subject.name}
                      </h3>
                      <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <FileText className="h-4 w-4 mr-1" /> 12 Notes
                        </span>
                        <span className="flex items-center">
                          <FileQuestion className="h-4 w-4 mr-1" /> 8 PYQs
                        </span>
                        <span className="flex items-center">
                          <Book className="h-4 w-4 mr-1" /> 5 Books
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {subjects.length === 0 && (
                  <div className="text-center py-12 bg-slate-800 rounded-xl border-4 border-dashed border-gray-200">
                    <div className="text-gray-400 mb-4">
                      <Book className="h-12 w-12 mx-auto" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">No subjects found</h3>
                    <p className="text-gray-300 mb-4">We couldn't find any subjects for this semester</p>
                    <button
                      className="bg-[#118AB2] hover:bg-[#118AB2]/90 text-white rounded-full px-6 py-2 font-bold"
                      onClick={handleBack}
                    >
                      Go Back
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Resources View */}
            {activeView === "resources" && selectedSubject && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold mb-2">
                    <span className="relative inline-block">
                      {selectedSubject.name} ({selectedSubject.code})
                      <div className="absolute -bottom-1 left-0 w-full h-2 bg-[#FFD166] -z-10 transform -rotate-1"></div>
                    </span>
                  </h2>
                  <p className="text-gray-300">Access study materials, previous year questions, and more</p>
                </div>

                {/* Resource Type Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  <button
                    onClick={() => setResourceType("notes")}
                    className={`rounded-full px-4 py-2 flex items-center transition-colors ${resourceType === "notes" ? "bg-[#118AB2] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                  >
                    <FileText className="h-4 w-4 mr-2" /> Notes
                  </button>
                  <button
                    onClick={() => setResourceType("pyq")}
                    className={`rounded-full px-4 py-2 flex items-center transition-colors ${resourceType === "pyq" ? "bg-[#EF476F] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                  >
                    <FileQuestion className="h-4 w-4 mr-2" /> Previous Year Questions
                  </button>
                  <button
                    onClick={() => setResourceType("assignments")}
                    className={`rounded-full px-4 py-2 flex items-center transition-colors ${resourceType === "assignments"
                      ? "bg-[#06D6A0] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                  >
                    <Book className="h-4 w-4 mr-2" /> Assignments
                  </button>
                  <button
                    onClick={() => setResourceType("books")}
                    className={`rounded-full px-4 py-2 flex items-center transition-colors ${resourceType === "books" ? "bg-[#FFD166] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                  >
                    <BookOpen className="h-4 w-4 mr-2" /> Books
                  </button>
                </div>

                {/* Resource List */}
                <div className="space-y-4">
                  {resources.map((resource, index) => (
                    <div
                      key={resource.id}
                      className={`bg-slate-800 rounded-xl p-6 border-2 border-dashed border-gray-200 hover:border-[#118AB2] hover:shadow-md transition-all duration-300 transform ${animateItems ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div
                              className={`p-3 rounded-lg ${resourceType === "notes"
                                ? "bg-[#118AB2]/10 text-[#118AB2]"
                                : resourceType === "pyq"
                                  ? "bg-[#EF476F]/10 text-[#EF476F]"
                                  : resourceType === "assignments"
                                    ? "bg-[#06D6A0]/10 text-[#06D6A0]"
                                    : "bg-[#FFD166]/10 text-[#FFD166]"
                                }`}
                            >
                              {resourceType === "notes" ? (
                                <FileText className="h-6 w-6" />
                              ) : resourceType === "pyq" ? (
                                <FileQuestion className="h-6 w-6" />
                              ) : resourceType === "assignments" ? (
                                <FilePlus className="h-6 w-6" />
                              ) : (
                                <BookOpen className="h-6 w-6" />
                              )}
                            </div>
                            <div>
                              <h3 className="font-bold text-lg">{resource.title}</h3>
                              <div className="flex items-center text-sm text-gray-300">
                                <span className="flex items-center mr-3">
                                  <Calendar className="h-3 w-3 mr-1" /> {resource.uploadDate}
                                </span>
                                <span className="flex items-center mr-3">
                                  <Eye className="h-3 w-3 mr-1" /> {resource.downloads} downloads
                                </span>
                                <span className="flex items-center">
                                  <Star className="h-3 w-3 mr-1 text-[#FFD166] fill-current" /> {resource.rating}
                                </span>
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-300 text-sm mb-3">{resource.description}</p>
                          <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
                            <span className="bg-gray-100 px-2 py-1 rounded-full">{resource.fileType}</span>
                            <span className="bg-gray-100 px-2 py-1 rounded-full">{resource.fileSize}</span>
                            <span className="bg-gray-100 px-2 py-1 rounded-full">Uploaded by: {resource.uploadedBy}</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <button className="bg-[#118AB2] hover:bg-[#118AB2]/90 text-white rounded-full px-4 py-2 text-sm font-bold flex items-center">
                            <Download className="h-4 w-4 mr-1" /> Download
                          </button>
                          <button className="bg-transparent hover:bg-gray-100 text-gray-400 rounded-full px-4 py-2 text-sm font-bold flex items-center border border-gray-200">
                            <Bookmark className="h-4 w-4 mr-1" /> Save
                          </button>
                          <button className="bg-transparent hover:bg-gray-100 text-gray-400 rounded-full px-4 py-2 text-sm font-bold flex items-center border border-gray-200">
                            <Share2 className="h-4 w-4 mr-1" /> Share
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}

                  {resources.length === 0 && (
                    <div className="text-center py-12 bg-slate-800 rounded-xl border-4 border-dashed border-gray-200">
                      <div className="text-gray-400 mb-4">
                        <FileText className="h-12 w-12 mx-auto" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">No resources found</h3>
                      <p className="text-gray-4600 mb-4">We couldn't find any {resourceType} for this subject</p>
                      <button
                        className="bg-[#118AB2] hover:bg-[#118AB2]/90 text-white rounded-full px-6 py-2 font-bold"
                        onClick={() => setResourceType("notes")}
                      >
                        View Other Resources
                      </button>
                    </div>
                  )}
                </div>

                {/* Upload Resources Section */}
                <div className="bg-slate-900 rounded-xl p-8 border-4 border-dashed border-[#06D6A0] mt-12">
                  <h3 className="text-2xl font-bold mb-6 text-center">
                    <span className="relative inline-block">
                      Contribute Resources
                      <div className="absolute -bottom-1 left-0 w-full h-2 bg-[#FFD166] -z-10 transform -rotate-1"></div>
                    </span>
                  </h3>
                  <p className="text-center text-gray-300 mb-6 max-w-2xl mx-auto">
                    Help your fellow students by sharing your notes, assignments, or other study materials for this subject.
                  </p>

                  <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
                    <div className="max-w-2xl mx-auto">
                      <div className="bg-slate-800 rounded-xl p-6 border-2 border-dashed border-gray-300 text-center cursor-pointer hover:border-[#06D6A0] transition-colors">
                        <Upload className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                        <h4 className="font-bold mb-2">Drag and drop files here</h4>
                        <p className="text-sm text-gray-500 mb-4">or click to browse your files</p>
                        <input
                          type="file"
                          accept=".pdf,.docx,.pptx,.jpg,.png"
                          onChange={(e) => setFile(e.target.value)}
                          hidden
                          id="fileInput"
                        />

                        {file && (
                          <p className="text-sm text-gray-600 mt-2 mb-4">Selected file: {file.name}</p>
                        )}
                          
                        
                        <label className="bg-[#06D6A0] hover:bg-[#06D6A0]/90 text-white rounded-full px-6 py-2 text-sm font-bold" htmlFor="fileInput">
                          Select Files
                        </label>
                        <p className="text-xs text-gray-500 mt-4">
                          Supported formats: PDF, DOCX, PPTX, JPG, PNG (Max size: 10MB)
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 mt-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-100 mb-1">Resource Title</label>
                          <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full rounded-lg border-2 border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-[#06D6A0] focus:border-transparent"
                            placeholder="Enter a descriptive title"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-100 mb-1">Resource Type</label>
                          <select
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            className="w-full rounded-lg border-2 border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-[#06D6A0] focus:border-transparent">
                            <option className="text-black" value="notes">Notes</option>
                            <option className="text-black" value="pyq">Previous Year Questions</option>
                            <option className="text-black" value="assignments">Assignments</option>
                            <option className="text-black" value="books">Books</option>
                          </select>
                        </div>
                      </div>

                      <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-100 mb-1">Description</label>
                        <textarea
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          className="w-full rounded-lg border-2 border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-[#06D6A0] focus:border-transparent"
                          rows="3"
                          placeholder="Provide a brief description of the resource"
                        ></textarea>
                      </div>

                      <div className="mt-6 text-center">
                        <button type="submit" className="bg-[#06D6A0] hover:bg-[#06D6A0]/90 text-white rounded-full px-8 py-3 font-bold flex items-center mx-auto">
                          <Upload className="mr-2 h-5 w-5" /> Upload Resource
                        </button>
                      </div>
                    </div>
                  </form>
                  <ToastContainer closeOnClick position="bottom-right" autoClose={3000} />
                </div>
              </div>
            )}
          </div>

          {/* Popular Resources Section */}
          {activeView === "courses" && (
            <div className=" border-t-4 border-dashed border-[#118AB2] py-16 px-4 mt-12">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-10 text-center">
                  <span className="relative inline-block">
                    Popular Resources
                    <div className="absolute -bottom-1 left-0 w-full h-2 bg-[#FFD166] -z-10 transform -rotate-1"></div>
                  </span>
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-slate-900 rounded-xl p-6 border-4 border-dashed border-[#118AB2] hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-lg bg-[#118AB2]/10 text-[#118AB2]">
                        <FileText className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold">Data Structures Notes</h3>
                        <p className="text-sm text-gray-500">CS102 • Semester 2</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="flex items-center text-gray-500">
                        <Download className="h-4 w-4 mr-1" /> 2.4k downloads
                      </span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-[#FFD166] fill-current" />
                        <Star className="h-4 w-4 text-[#FFD166] fill-current" />
                        <Star className="h-4 w-4 text-[#FFD166] fill-current" />
                        <Star className="h-4 w-4 text-[#FFD166] fill-current" />
                        <Star className="h-4 w-4 text-[#FFD166] fill-current" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-900 rounded-xl p-6 border-4 border-dashed border-[#EF476F] hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-lg bg-[#EF476F]/10 text-[#EF476F]">
                        <FileQuestion className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold">Circuit Theory PYQs</h3>
                        <p className="text-sm text-gray-500">EE101 • Semester 3</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="flex items-center text-gray-500">
                        <Download className="h-4 w-4 mr-1" /> 1.8k downloads
                      </span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-[#FFD166] fill-current" />
                        <Star className="h-4 w-4 text-[#FFD166] fill-current" />
                        <Star className="h-4 w-4 text-[#FFD166] fill-current" />
                        <Star className="h-4 w-4 text-[#FFD166] fill-current" />
                        <Star className="h-4 w-4 text-gray-300" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-900 rounded-xl p-6 border-4 border-dashed border-[#06D6A0] hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-lg bg-[#06D6A0]/10 text-[#06D6A0]">
                        <BookOpen className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold">Calculus Handbook</h3>
                        <p className="text-sm text-gray-500">MA101 • Semester 1</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="flex items-center text-gray-500">
                        <Download className="h-4 w-4 mr-1" /> 3.2k downloads
                      </span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-[#FFD166] fill-current" />
                        <Star className="h-4 w-4 text-[#FFD166] fill-current" />
                        <Star className="h-4 w-4 text-[#FFD166] fill-current" />
                        <Star className="h-4 w-4 text-[#FFD166] fill-current" />
                        <Star className="h-4 w-4 text-[#FFD166] fill-current" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <button className="bg-[#118AB2] hover:bg-[#118AB2]/90 text-white rounded-full px-6 py-3 font-bold inline-flex items-center">
                    <Book className="mr-2 h-5 w-5" /> View All Popular Resources
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Study Tips Section */}
          {activeView === "courses" && (
            <div className="max-w-7xl mx-auto px-4 py-16">
              <h2 className="text-3xl font-bold mb-10 text-center">
                <span className="relative inline-block">
                  Study Tips & Strategies
                  <div className="absolute -bottom-1 left-0 w-full h-2 bg-[#FFD166] -z-10 transform -rotate-1"></div>
                </span>
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-slate-800 rounded-xl p-6 border-4 border-dashed border-[#118AB2] relative overflow-hidden">
                  <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-[#118AB2] opacity-10"></div>
                  <h3 className="text-xl font-bold mb-4 text-[#118AB2]">Effective Note-Taking</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#118AB2]/20 flex items-center justify-center text-[#118AB2] mt-0.5">
                        1
                      </div>
                      <div>
                        <p className="text-gray-200">
                          <span className="font-bold">Cornell Method:</span> Divide your page into sections for notes,
                          questions, and summaries.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#118AB2]/20 flex items-center justify-center text-[#118AB2] mt-0.5">
                        2
                      </div>
                      <div>
                        <p className="text-gray-200">
                          <span className="font-bold">Mind Mapping:</span> Create visual connections between concepts for
                          better recall.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#118AB2]/20 flex items-center justify-center text-[#118AB2] mt-0.5">
                        3
                      </div>
                      <div>
                        <p className="text-gray-200">
                          <span className="font-bold">Outline Method:</span> Organize information hierarchically with main
                          points and supporting details.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-800 rounded-xl p-6 border-4 border-dashed border-[#EF476F] relative overflow-hidden">
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-[#EF476F] opacity-10"></div>
                  <h3 className="text-xl font-bold mb-4 text-[#EF476F]">Exam Preparation</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#EF476F]/20 flex items-center justify-center text-[#EF476F] mt-0.5">
                        1
                      </div>
                      <div>
                        <p className="text-gray-200">
                          <span className="font-bold">Spaced Repetition:</span> Review material at increasing intervals for
                          better long-term retention.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#EF476F]/20 flex items-center justify-center text-[#EF476F] mt-0.5">
                        2
                      </div>
                      <div>
                        <p className="text-gray-200">
                          <span className="font-bold">Practice Tests:</span> Solve previous year questions to familiarize
                          yourself with the format.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#EF476F]/20 flex items-center justify-center text-[#EF476F] mt-0.5">
                        3
                      </div>
                      <div>
                        <p className="text-gray-200">
                          <span className="font-bold">Study Groups:</span> Collaborate with peers to discuss complex topics
                          and share insights.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center mt-8">
                <button className="bg-transparent hover:bg-[#118AB2]/10 rounded-full px-8 py-3 text-lg font-bold border-2 border-[#118AB2] text-[#118AB2] shadow-md transform transition-transform hover:scale-105">
                  View More Study Tips
                </button>
              </div>
            </div>
          )}

          {/* Footer */}
          <Footer />
        </div>

      </main>
    </div>


  )
}