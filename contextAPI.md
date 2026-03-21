# ☁️ React Context API (Global State)

### 📘 The Theory
**Prop Drilling** is when you pass data through many layers of components just to reach one deep child. **Context API** solves this by creating a **"Global Cloud."**

1. **createContext:** Creates the cloud storage.
2. **Provider:** Broadcasts the data to all children.
3. **useContext:** Any child can "tune in" and grab the data directly.

---

### 💻 The Code
```javascript
import React, { createContext, useContext, useState } from "react";

// 1. Create the Cloud
const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  return (
    // 2. Broadcast Data
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Navbar />
    </ThemeContext.Provider>
  );
}

function Navbar() {
  // 3. Tune In / Grab Data
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div style={{ background: theme === "light" ? "#fff" : "#333" }}>
      <button onClick={() => setTheme("dark")}>Go Dark</button>
    </div>
  );
}
