# ⚛️ React Hooks Master Guide (Beginner → Advanced)

## 📋 Overview

Hooks allow functional components to use state, lifecycle, and advanced React features without classes. They are the foundation of modern React and MERN development.

---

# 📌 All Important React Hooks (List)

* useState
* useEffect
* useRef
* useMemo
* useCallback
* useReducer
* useContext

---

# 1️⃣ useState (State Management)

## 📘 Definition

`useState` is used to store and update data in a component. When state changes, React re-renders the UI.

## 📌 Use Cases

* Input handling
* Counters
* Lists

## ⚠️ Rule

Never mutate state directly. Always create a new copy.

## 💻 Full App.jsx Example

```javascript
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState(["Learn React"]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, input]); // immutable update
    setInput("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>useState Example</h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

---

# 2️⃣ useEffect (Side Effects)

## 📘 Definition

Runs code after render. Used for API calls, LocalStorage, timers, etc.

## 📌 Dependency Array

* `[]` → run once
* `[data]` → run when data changes

## 💻 Full App.jsx Example

```javascript
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { text: input, completed: false }]);
    setInput("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>useEffect Example</h1>

      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

---

# 3️⃣ useRef (DOM Access)

## 📘 Definition

Provides a reference to DOM elements without re-rendering.

## 📌 Use Cases

* Focus input
* Scroll control

## 💻 Full App.jsx Example

```javascript
import { useRef, useEffect } from "react";

function App() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>useRef Example</h1>
      <input ref={inputRef} placeholder="Auto Focused Input" />
    </div>
  );
}

export default App;
```

---

# 4️⃣ useMemo (Performance Optimization)

## 📘 Definition

Caches calculated values to avoid unnecessary recalculations.

## 📌 Use Cases

* Expensive calculations
* Filtering large lists

## 💻 Full App.jsx Example

```javascript
import { useState, useMemo } from "react";

function App() {
  const [num, setNum] = useState(0);
  const [dark, setDark] = useState(false);

  const expensiveCalculation = (n) => {
    console.log("Calculating...");
    return n * 2;
  };

  const result = useMemo(() => {
    return expensiveCalculation(num);
  }, [num]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>useMemo Example</h1>

      <input
        type="number"
        value={num}
        onChange={(e) => setNum(Number(e.target.value))}
      />

      <button onClick={() => setDark(!dark)}>Toggle Theme</button>

      <p>Result: {result}</p>
    </div>
  );
}

export default App;
```

---

# 5️⃣ useCallback (Function Optimization)

## 📘 Definition

Caches functions to prevent unnecessary re-renders.

## 📌 Use Case

Passing functions to child components

## 💻 Full App.jsx Example

```javascript
import { useState, useCallback } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = useCallback(() => {
    setTasks((prev) => [...prev, "New Task"]);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>useCallback Example</h1>
      <button onClick={addTask}>Add Task</button>

      {tasks.map((t, i) => (
        <p key={i}>{t}</p>
      ))}
    </div>
  );
}

export default App;
```

---

# 6️⃣ useReducer (Advanced State Management)

## 📘 Definition

Used for complex state logic with multiple actions.

## 📌 Concept

Reducer = Function(state, action)

## 💻 Full App.jsx Example

```javascript
import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "DELETE":
      return state.filter((_, i) => i !== action.index);
    default:
      return state;
  }
};

function App() {
  const [tasks, dispatch] = useReducer(reducer, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>useReducer Example</h1>

      <button onClick={() => dispatch({ type: "ADD", payload: "Task" })}>
        Add
      </button>

      {tasks.map((task, index) => (
        <p key={index}>
          {task}
          <button onClick={() => dispatch({ type: "DELETE", index })}>
            Delete
          </button>
        </p>
      ))}
    </div>
  );
}

export default App;
```

---

# 7️⃣ useContext (Global State)

## 📘 Definition

Used to share data globally without prop drilling.

## 💻 Full App.jsx Example

```javascript
import { createContext, useContext } from "react";

const ThemeContext = createContext();

function Child() {
  const theme = useContext(ThemeContext);
  return <h2>Theme: {theme}</h2>;
}

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <div style={{ padding: "20px" }}>
        <h1>useContext Example</h1>
        <Child />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
```

---

# 🚀 Summary Table

| Hook        | Purpose            | Use Case           |
| ----------- | ------------------ | ------------------ |
| useState    | Store data         | Forms, counters    |
| useEffect   | Side effects       | API, storage       |
| useRef      | DOM access         | Focus, scroll      |
| useMemo     | Optimize values    | Heavy calculations |
| useCallback | Optimize functions | Prevent re-render  |
| useReducer  | Complex state      | Large apps         |
| useContext  | Global data        | Auth, theme        |

---

# 🧠 Final Note

* Start with **useState + useEffect**
* Then move to **useRef + useMemo**
* Finally learn **useReducer + useContext**

---

📌 Source Notes (Refined & Corrected):
Original draft content improved and structured from your notes → 
