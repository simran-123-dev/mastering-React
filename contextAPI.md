☁️ React Context API: The Global Cloud Storage
📘 What is Context API?
In React, data usually flows from Parent to Child using Props. However, if you have a deeply nested component (a "Great-Grandchild"), passing data through every level is messy and difficult. This is called Prop Drilling.
Context API solves this by creating a "Global Cloud." Any component, no matter how deep it is, can connect to this cloud and grab the data directly.
🛠️ The 3-Step Process
To use Context, we always follow these three steps:
createContext(): Create the "Radio Station" (The Cloud).
Provider: Wrap your app in a "Broadcaster" to send data to all children.
useContext(): Use this Hook in any child to "Tune In" and listen to the data.
💻 The Code (Detailed Explanation)
Copy this code into your App.jsx. I have added comments to explain exactly why we write each line.
javascript
import React, { useState, createContext, useContext } from "react";

// STEP 1: CREATE THE CONTEXT
// We do this outside the function. Think of this as creating 
// a "Container" or "Cloud" where our data will live.
const ThemeContext = createContext();

export default function App() {
  // We create a state for the theme (light or dark)
  const [theme, setTheme] = useState("light");

  // A function to flip the theme back and forth
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    /* 
       STEP 2: THE PROVIDER
       We wrap our entire application in 'ThemeContext.Provider'.
       The 'value' prop is the "Parcel" we are putting into the cloud.
       Here, we are sending both the 'theme' (data) and 'toggleTheme' (function).
    */
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={{ 
        background: theme === "light" ? "#ffffff" : "#2c3e50", 
        color: theme === "light" ? "#000" : "#fff",
        height: "100vh",
        padding: "40px",
        textAlign: "center"
      }}>
        <h1>MERN Learning: Day 2</h1>
        <p>This Heading is inside the Parent (App.jsx)</p>
        
        {/* Notice: We are NOT passing any props to Navbar! */}
        <Navbar /> 
      </div>
    </ThemeContext.Provider>
  );
}

// A Middleman Component (Navbar)
function Navbar() {
  return (
    <div style={{ border: "2px solid #3498db", padding: "20px", marginTop: "20px" }}>
      <h3>I am the Navbar (Middleman)</h3>
      <p>I don't receive props, but my child will grab data from the cloud!</p>
      <ThemeButton />
    </div>
  );
}

// STEP 3: THE CONSUMER (ThemeButton)
function ThemeButton() {
  /* 
     Instead of receiving props, we use the 'useContext' hook.
     We tell React: "Go up to the ThemeContext cloud and grab the value."
  */
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ marginTop: "10px" }}>
      <p>The Cloud says current theme is: <b>{theme}</b></p>
      <button 
        onClick={toggleTheme}
        style={{ 
          padding: "10px 20px", 
          cursor: "pointer", 
          borderRadius: "5px",
          border: "none",
          backgroundColor: theme === "light" ? "#2c3e50" : "#ecf0f1",
          color: theme === "light" ? "#fff" : "#000"
        }}
      >
        Change Theme from Child
      </button>
    </div>
  );
}
