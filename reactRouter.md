# 🛣️ React Router (Navigation)

### 📘 The Theory
React is a **Single Page Application (SPA)**. Usually, browsers refresh to change pages. React Router allows us to swap "Pages" (Components) instantly without a refresh.

* **BrowserRouter:** Enables navigation.
* **Link:** Replaces `<a>` tags to prevent page refresh.
* **Routes & Route:** The map that tells React which URL shows which page.

---

### 💻 The Code
```javascript
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Home = () => <h2>🏠 Home Page</h2>;
const About = () => <h2>ℹ️ About Page</h2>;

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
