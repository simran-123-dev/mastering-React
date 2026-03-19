🚀 MERN Learning: React Advanced Hooks & Optimization
Date: Day 1
Goal: Build a persistent, optimized Roadmap Tracker using all major React Hooks.
📂 Stage 1: The Foundation (State & CRUD)
Theory: We learn how to manage data that changes. In React, you never modify an array directly (no .push()). We use the Spread Operator to create a fresh copy of the data.
Key Hook: useState
Key Concept: Immutability & Array Methods (.map, .filter).
javascript
/* STAGE 1 CODE */
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState(["Learn React", "Study DSA"]);
  const [newInput, setNewInput] = useState("");

  const addTask = () => {
    if (newInput.trim() === "") return;
    setTasks([...tasks, newInput]); // Spread operator: creates NEW array
    setNewInput(""); 
  };

  const deleteTask = (indexToDelete) => {
    // Filter: keeps everything EXCEPT the one we want to delete
    setTasks(tasks.filter((_, i) => i !== indexToDelete));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Roadmap Tracker</h1>
      <input value={newInput} onChange={(e) => setNewInput(e.target.value)} />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((item, index) => (
          <li key={index}>
            {item} 
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
Use code with caution.

📂 Stage 2: Data Persistence & Objects
Theory: We move from simple strings to Objects {text, completed} to track status. We also use LocalStorage so the data stays even if you refresh the browser.
Key Hook: useEffect
Key Concept: Side Effects (Syncing state with the Browser's storage).
javascript
/* STAGE 2 CODE CHANGES */
// Loading data from storage on refresh
const [tasks, setTasks] = useState(() => {
  const saved = localStorage.getItem("mern-tasks");
  return saved ? JSON.parse(saved) : [];
});

// Saving data whenever 'tasks' changes
useEffect(() => {
  localStorage.setItem("mern-tasks", JSON.stringify(tasks));
}, [tasks]);

const toggleComplete = (index) => {
  const updated = tasks.map((item, i) => 
    i === index ? { ...item, completed: !item.completed } : item
  );
  setTasks(updated);
};
Use code with caution.

📂 Stage 3: Performance & Focus (useMemo & useRef)
Theory:
useMemo: Prevents "Heavy Calculations" (like percentage) from running every time you type a character. It "memoizes" (caches) the result.
useRef: Bypasses React's render cycle to grab a DOM element directly. We use it to auto-focus the input box.
javascript
/* STAGE 3 CODE CHANGES */
const inputRef = useRef(null);

// Only recalculate stats when [tasks] changes, NOT when typing in input
const stats = useMemo(() => {
  console.log("Calculating..."); 
  const total = tasks.length;
  const done = tasks.filter(t => t.completed).length;
  const percent = total === 0 ? 0 : Math.round((done / total) * 100);
  return { total, done, percent };
}, [tasks]);

useEffect(() => {
  inputRef.current.focus(); // Keeps cursor in the box
}, [tasks]);
Use code with caution.

📂 Stage 4: The Final Boss (Complete useReducer Version)
Theory: Instead of having many separate functions, we create a Reducer. It’s a "Central Brain" that handles all logic based on the "Action" you send it. This is how professional MERN developers manage complex states.
javascript
/* FINAL COMPLETE APP.JSX */
import { useState, useEffect, useMemo, useReducer, useRef } from "react";

// THE BRAIN: Handles all logic in one switch-case
const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD": return [...state, { text: action.payload, completed: false }];
    case "TOGGLE": return state.map((t, i) => i === action.index ? {...t, completed: !t.completed} : t);
    case "DELETE": return state.filter((_, i) => i !== action.index);
    case "CLEAR": return [];
    case "LOAD": return action.payload;
    default: return state;
  }
};

function App() {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const [newInput, setNewInput] = useState("");
  const inputRef = useRef(null);

  // Persistence logic
  useEffect(() => {
    const saved = localStorage.getItem("mern-tasks");
    if (saved) dispatch({ type: "LOAD", payload: JSON.parse(saved) });
  }, []);

  useEffect(() => {
    localStorage.setItem("mern-tasks", JSON.stringify(tasks));
    inputRef.current.focus();
  }, [tasks]);

  // Optimization logic
  const stats = useMemo(() => {
    const done = tasks.filter(t => t.completed).length;
    const total = tasks.length;
    return { done, total, percent: total === 0 ? 0 : Math.round((done/total)*100) };
  }, [tasks]);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif", maxWidth: "450px" }}>
      <h1>MERN Roadmap Tracker</h1>
      
      {/* Progress Bar UI */}
      <div style={{ background: "#eee", borderRadius: "5px", height: "10px" }}>
        <div style={{ width: `${stats.percent}%`, background: "#4caf50", height: "100%", transition: "0.4s" }} />
      </div>
      <p>Mastered: {stats.percent}%</p>

      {/* Input Section */}
      <input 
        ref={inputRef} 
        value={newInput} 
        onChange={(e) => setNewInput(e.target.value)} 
        onKeyDown={(e) => e.key === "Enter" && dispatch({type: "ADD", payload: newInput})} 
      />
      <button onClick={() => { dispatch({type: "ADD", payload: newInput}); setNewInput(""); }}>Add Skill</button>

      {/* List Section */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((item, index) => (
          <li key={index} style={{ borderBottom: "1px solid #ddd", padding: "10px" }}>
            <span 
              onClick={() => dispatch({type: "TOGGLE", index})} 
              style={{ textDecoration: item.completed ? "line-through" : "none", cursor: "pointer" }}
            >
              {item.text}
            </span>
            <button onClick={() => dispatch({type: "DELETE", index})} style={{ float: "right", color: "red" }}>Delete</button>
          </li>
        ))}
      </ul>
      
      {tasks.length > 0 && <button onClick={() => dispatch({type: "CLEAR"})}>Clear All</button>}
    </div>
  );
}

export default App;
