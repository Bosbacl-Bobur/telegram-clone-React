import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <div className="p-4">
        {/* Oddiy navigation */}
        <nav className="mb-4 space-x-4">
          <Link to="/login" className="text-blue-600">Login</Link>
          <Link to="/register" className="text-green-600">Register</Link>
        </nav>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
