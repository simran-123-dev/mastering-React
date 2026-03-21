.
🛣️ Topic 2: React Router (Navigation)
Theory: Usually, when you click a link, the whole page reloads. In React, we use React Router so only the middle part of the screen changes. The page never refreshes.
Code Practice:
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Simple Page Components
const Home = () => <h2>🏠 Home Page</h2>;
const About = () => <h2>ℹ️ About Page</h2>;

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        {/* 'Link' is like <a> but it doesn't refresh the page */}
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>

      <Routes>
        {/* Route tells React: "If URL is /, show Home component" */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

