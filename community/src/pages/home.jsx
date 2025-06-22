import { Link } from "react-router-dom";
import '../App.css'
import Footer from '../components/footer';
import { useState, useEffect } from 'react';
import { FacebookIcon, LinkedinIcon, GithubIcon, InstagramIcon, Home, Menu, Code, LogIn, Computer, Phone, Smartphone, Zap, CodeIcon as ChartColumnIncreasing, Database, BookOpen, Users, School, Calendar, Award, MessageSquare, ArrowRight, MoveDown } from "lucide-react";


export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTextIndex, setActiveTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const alternatingTexts = [
    "Community",
    "Family",
    "Society",
    "Home"
  ];

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setActiveTextIndex((prevIndex) => (prevIndex + 1) % alternatingTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-gray-200">
      <nav className="sticky top-0 z-10 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 font-bold text-xl text-gray-900 dark:text-white">
              <span>
                <img src="src/assets/images/logo.svg" className='w-45' alt="Logo" />
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                <a
                  href="#home"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-200 hover:text-cyan-400 flex items-center gap-1 transition-transform duration-300 ease-in-out hover:scale-110"
                >
                  <Home className="h-4 w-4" />
                  Home
                </a>
                <a
                  href="contact"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-200 hover:text-cyan-400 flex items-center gap-1 transition-transform duration-300 ease-in-out hover:scale-110"
                >
                  <Phone className="h-4 w-4" />
                  ContactUs
                </a>
                <a
                  href="#services"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-200 hover:text-cyan-400 flex items-center gap-1 transition-transform duration-300 ease-in-out hover:scale-110"
                >
                  <Code className="h-4 w-4" />
                  Services
                </a>

                <Link
                  to={"/login-signup"}
                  className=" rounded-md text-sm font-bold flex items-center gap-1 "
                >
                  <button className='flex justify-center items-center h-10 px-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full transition-all duration-300'>
                    <LogIn className="h-4 w-4 mr-1" />
                    Login
                  </button>
                </Link>

              </div>
            </div>

            {/* Hamburger */}
            <div className="md:hidden flex items-center">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-cyan-400 focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded={mobileMenuOpen}
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">Open main menu</span>
                <Menu className="block h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800 rounded-b-lg">
            <a
              href="#home"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-cyan-400"
              onClick={toggleMobileMenu}
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-cyan-400"
              onClick={toggleMobileMenu}
            >
              About
            </a>
            <a
              href="#features"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-cyan-400"
              onClick={toggleMobileMenu}
            >
              Features
            </a>
            <a
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-cyan-400"
              onClick={toggleMobileMenu}
            >
              Contact Us
            </a>
            <a
              href="#services"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-cyan-400"
              onClick={toggleMobileMenu}
            >
              Services
            </a>
            <a
              href="/login-signup"
              className="block px-3 py-2 rounded-md text-base font-medium bg-cyan-500 text-white text-center"
              onClick={toggleMobileMenu}
            >
              Login
            </a>
          </div>
        </div>
      </nav>

      <main id="home" className="flex-1">
        {/* Hero Section with Characters in Front */}
        <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden py-8">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"></div>

          {/* Animated circles */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/3 -right-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-1/4 w-70 h-70 bg-blue-500/10 rounded-full blur-3xl"></div>
          </div>

          {/* Characters - Now prominently displayed at the top */}
          <div className="flex flex-row gap-6 md:gap-16 justify-center mb-6 md:mb-8">
            <img src="src/assets/doodles/boy-1.svg" className='w-20 md:w-28 animate-float-slow' alt="image-boy-1" />
            <img src="src/assets/doodles/boy-2.svg" className='w-16 md:w-24 animate-float' alt="image-boy-2" />
            <img src="src/assets/doodles/boy-3.svg" className='w-24 md:w-32 animate-float-slow' alt="image-boy-3" />
            <img src="src/assets/doodles/boy-4.svg" className='w-18 md:w-26 animate-float' alt="image-boy-4" />
          </div>

          {/* Content */}
          <div className="mx-auto px-4 z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Welcome to the
                <div className="relative h-20 md:h-24 overflow-hidden mt-2">
                  <div className="absolute w-full">
                    {alternatingTexts.map((text, index) => (
                      <div
                        key={index}
                        className={`text-cyan-400 transition-all duration-500 ${index === activeTextIndex
                          ? 'opacity-100 transform-none'
                          : 'opacity-0 translate-y-8'
                          }`}
                        style={{
                          position: index === activeTextIndex ? 'relative' : 'absolute',
                          top: 0,
                          left: 0,
                          right: 0
                        }}
                      >
                        {text}
                      </div>
                    ))}
                  </div>
                </div>
              </h1>

              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Join our vibrant platform where students connect, collaborate, and excel together.
                Access resources, join study groups, and be part of something special.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
                <Link to="/signup">
                  <button className="w-full sm:w-auto px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-full shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 text-lg">
                    GET STARTED
                  </button>
                </Link>
                <Link to="/dashboard">
                  <button className="w-full sm:w-auto px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-full shadow-lg transition-all duration-300 text-lg">
                    DASHBOARD
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce">
            <MoveDown className="w-4 h-4" />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white">About Us</h2>
              <div className="mt-4 h-1 w-24 bg-cyan-500 mx-auto"></div>
              <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
                We're building a community where students can thrive together
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="bg-slate-700 p-6 rounded-lg border-l-4 border-cyan-500 content-right">
                  <h3 className="text-xl font-semibold text-white mb-3">Our Mission</h3>
                  <p className="text-gray-300">
                    To create an inclusive platform that empowers students to connect, collaborate, and excel in their academic journey. We believe in the power of community learning and peer support.
                  </p>
                </div>

                <div className="bg-slate-700 p-6 rounded-lg border-l-4 border-purple-500 content-right">
                  <h3 className="text-xl font-semibold text-white mb-3">Our Vision</h3>
                  <p className="text-gray-300">
                    To revolutionize the way students interact and learn, breaking down barriers to education and fostering a global community of lifelong learners who support each other.
                  </p>
                </div>

                <div className="bg-slate-700 p-6 rounded-lg border-l-4 border-blue-500 content-right">
                  <h3 className="text-xl font-semibold text-white mb-3">Our Values</h3>
                  <p className="text-gray-300">
                    Collaboration, inclusivity, innovation, and integrity form the foundation of everything we do. We're committed to creating a safe, supportive environment for all students.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden bg-slate-700 p-8 relative content-left">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20"></div>
                  <div className="relative z-10 h-full flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-white mb-6">Our Story</h3>
                    <p className="text-gray-300 mb-4">
                      Founded by a group of passionate students who experienced firsthand the challenges of isolated learning, our platform was born from a simple idea: education is better together.
                    </p>
                    <p className="text-gray-300 mb-4">
                      What started as a small resource-sharing group has evolved into a comprehensive platform that connects thousands of students across the globe.
                    </p>
                    <p className="text-gray-300">
                      Today, we continue to grow and innovate, guided by our users' needs and our commitment to making education more accessible and collaborative.
                    </p>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-cyan-500 rounded-full opacity-70"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-purple-500 rounded-full opacity-70"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-slate-900">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Key Features</h2>
              <div className="mt-4 h-1 w-24 bg-cyan-500 mx-auto"></div>
              <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the tools and resources designed to enhance your academic journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group content-up">
                <div className="w-14 h-14 bg-cyan-500/20 text-cyan-500 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                  <BookOpen className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Resource Library</h3>
                <p className="text-gray-300 mb-4">
                  Access a vast collection of study materials, notes, past papers, and educational resources shared by peers and verified educators.
                </p>
                <a href="#" className="inline-flex items-center text-cyan-400 hover:text-cyan-300">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>

              {/* Feature 2 */}
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all duration-300 group content-up">
                <div className="w-14 h-14 bg-purple-500/20 text-purple-500 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                  <Users className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Study Groups</h3>
                <p className="text-gray-300 mb-4">
                  Form or join study groups with like-minded students, collaborate on projects, and prepare for exams together in virtual study rooms.
                </p>
                <a href="#" className="inline-flex items-center text-purple-400 hover:text-purple-300">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>

              {/* Feature 3 */}
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 group content-up">
                <div className="w-14 h-14 bg-blue-500/20 text-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                  <Calendar className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Event Calendar</h3>
                <p className="text-gray-300 mb-4">
                  Stay updated with academic events, workshops, webinars, and deadlines with our interactive calendar and notification system.
                </p>
                <a href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>

              {/* Feature 4 */}
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-green-500/50 transition-all duration-300 group content-up">
                <div className="w-14 h-14 bg-green-500/20 text-green-500 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                  <School className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Academic Tracking</h3>
                <p className="text-gray-300 mb-4">
                  Monitor your academic progress, set goals, track achievements, and visualize your improvement over time with intuitive analytics.
                </p>
                <a href="#" className="inline-flex items-center text-green-400 hover:text-green-300">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>

              {/* Feature 5 */}
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-amber-500/50 transition-all duration-300 group content-up">
                <div className="w-14 h-14 bg-amber-500/20 text-amber-500 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                  <Award className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Achievements & Rewards</h3>
                <p className="text-gray-300 mb-4">
                  Earn badges, certificates, and rewards for your contributions, academic milestones, and active participation in the community.
                </p>
                <a href="#" className="inline-flex items-center text-amber-400 hover:text-amber-300">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>

              {/* Feature 6 */}
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-pink-500/50 transition-all duration-300 group content-up">
                <div className="w-14 h-14 bg-pink-500/20 text-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
                  <MessageSquare className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Discussion Forums</h3>
                <p className="text-gray-300 mb-4">
                  Engage in academic discussions, ask questions, share insights, and connect with peers and mentors in subject-specific forums.
                </p>
                <a href="#" className="inline-flex items-center text-pink-400 hover:text-pink-300">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Our Services</h2>
              <div className="mt-4 h-1 w-24 bg-cyan-500 mx-auto"></div>
              <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive solutions designed to support your academic journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="bg-slate-900 p-8 rounded-lg shadow-lg text-center transition-transform hover:scale-105 border border-slate-700 content-up">
                <div className="w-16 h-16 bg-cyan-500/20 text-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Code className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Notes & Resources</h3>
                <p className="text-gray-300">
                  Access comprehensive study materials, lecture notes, and resources created by top students and educators to enhance your learning.
                </p>
              </div>

              {/* Service 2 */}
              <div className="bg-slate-900 p-8 rounded-lg shadow-lg text-center transition-transform hover:scale-105 border border-slate-700 content-up">
                <div className="w-16 h-16 bg-purple-500/20 text-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Computer className='h-8 w-8' />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Study Groups</h3>
                <p className="text-gray-300">
                  Join virtual study rooms, collaborate with peers, and participate in group discussions to enhance your understanding and retention.
                </p>
              </div>

              {/* Service 3 */}
              <div className="bg-slate-900 p-8 rounded-lg shadow-lg text-center transition-transform hover:scale-105 border border-slate-700 content-up">
                <div className="w-16 h-16 bg-blue-500/20 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Smartphone className='h-8 w-8' />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Clubs & Societies</h3>
                <p className="text-gray-300">
                  Connect with like-minded students through academic and interest-based clubs that foster community, learning, and personal growth.
                </p>
              </div>

              {/* Service 4 */}
              <div className="bg-slate-900 p-8 rounded-lg shadow-lg text-center transition-transform hover:scale-105 border border-slate-700 content-up">
                <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className='h-8 w-8' />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Performance Optimization</h3>
                <p className="text-gray-300">
                  Personalized study plans, productivity tools, and learning analytics to help you optimize your academic performance and efficiency.
                </p>
              </div>

              {/* Service 5 */}
              <div className="bg-slate-900 p-8 rounded-lg shadow-lg text-center transition-transform hover:scale-105 border border-slate-700 content-up">
                <div className="w-16 h-16 bg-amber-500/20 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ChartColumnIncreasing className='h-8 w-8' />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Academic Tracking</h3>
                <p className="text-gray-300">
                  Track your progress, set goals, and visualize your academic journey with our comprehensive analytics dashboard.
                </p>
              </div>

              {/* Service 6 */}
              <div className="bg-slate-900 p-8 rounded-lg shadow-lg text-center transition-transform hover:scale-105 border border-slate-700 content-up">
                <div className="w-16 h-16 bg-pink-500/20 text-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Database className='h-8 w-8' />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Resource Repository</h3>
                <p className="text-gray-300">
                  A vast, searchable database of academic resources, past papers, and study materials organized by subject, course, and institution.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Student Testimonials</h2>
              <div className="mt-4 h-1 w-24 bg-cyan-500 mx-auto"></div>
              <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
                Hear what our community members have to say
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 relative content-right">
                <div className="absolute -top-5 -left-5 text-cyan-500 opacity-20">
                </div>
                <p className="text-gray-300 mb-6 mt-4">
                  "This platform completely transformed my college experience. The study groups helped me connect with peers in my major, and the resources available saved me countless hours of research."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-500 font-bold mr-4">
                    JD
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Jessica Davis</h4>
                    <p className="text-gray-400 text-sm">Computer Science, Senior</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 relative content-up">
                <div className="absolute -top-5 -left-5 text-purple-500 opacity-20">
                </div>
                <p className="text-gray-300 mb-6 mt-4">
                  "As an international student, finding this community was a game-changer. I was able to connect with others facing similar challenges and access resources that helped me excel in my courses."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-500 font-bold mr-4">
                    MK
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Miguel Kim</h4>
                    <p className="text-gray-400 text-sm">Business Administration, Junior</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 relative content-left">
                <div className="absolute -top-5 -left-5 text-blue-500 opacity-20">
                </div>
                <p className="text-gray-300 mb-6 mt-4">
                  "The academic tracking features helped me identify areas where I needed improvement. Combined with the study resources and supportive community, I was able to raise my GPA significantly."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-500 font-bold mr-4">
                    AT
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Aisha Thomas</h4>
                    <p className="text-gray-400 text-sm">Engineering, Sophomore</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Join Our Community?</h2>
              <p className="text-xl text-gray-300 mb-10">
                Connect with fellow students, access valuable resources, and take your academic journey to the next level.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/signup">
                  <button className="w-full sm:w-auto px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-full shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 text-lg">
                    GET STARTED TODAY
                  </button>
                </Link>
                <Link to="/contact">
                  <button className="w-full sm:w-auto px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-full shadow-lg transition-all duration-300 text-lg">
                    CONTACT US
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
