import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import ContactForm from "./pages/contact";
import Login from "./pages/login-signup";
import Resources from "./pages/resources";
import Leaderboard from "./pages/leaderboard";
import Signup from "./pages/signup";
import Dashboard from "./pages/dashboard";
import Chats from "./pages/chat";
import Settings from "./pages/settings";
import Support from "./pages/support";
import Societies from "./pages/societies";
import About from "./pages/about";
import Sidebar_Contact from "./pages/sidebar_contact";
import LogOut from "./pages/logout";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactForm />} />
      <Route path="/login-signup" element={<Login />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/chat" element={<Chats />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/support" element={<Support />} />
      <Route path="/societies" element={< Societies />} />
      <Route path="/sidebar_contact" element={<Sidebar_Contact />} />
      <Route path="/about" element={< About />} />
      <Route path="/logout" element={< LogOut />} />
    </Routes>
  );
}

export default App;
