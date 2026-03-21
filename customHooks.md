# 🔁 Custom Hooks in React

---

## 📑 Topic: Custom Hooks

---

## 📘 Definition

A **Custom Hook** is a reusable JavaScript function that uses React Hooks (`useState`, `useEffect`, etc.) internally.

---

## ⚙️ Naming Rule

* Must always start with **`use`**
* Examples:

  * `useFetch`
  * `useLocalStorage`
  * `useAuth`

---

## 🎯 Why Use Custom Hooks?

* ♻️ **Reusability** → Write logic once, use anywhere
* 🧹 **Clean Code** → Keeps components small & readable
* 🧠 **Separation of Concerns** → Logic separate from UI

---

## 📌 When to Use?

* Repeating `useEffect` logic
* API fetching in multiple components
* LocalStorage handling
* Authentication logic

---

# 🧩 Example: useLocalStorage Hook

---

## 📂 Step 1: Create Custom Hook (`useLocalStorage.js`)

```javascript
import { useState, useEffect } from "react";

// Custom Hook
export function useLocalStorage(key, initialValue) {
  
  // Load data from localStorage
  const [state, setState] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : initialValue;
    } catch (error) {
      console.error("Error loading data:", error);
      return initialValue;
    }
  });

  // Save data to localStorage whenever state changes
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      console.error("Error saving data:", error);
    }
  }, [key, state]);

  return [state, setState];
}
```

---

## 📂 Step 2: Use Hook in `App.jsx`

```javascript
import { useLocalStorage } from "./useLocalStorage";

function App() {
  const [name, setName] = useLocalStorage("username", "Guest");
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const addTask = () => {
    setTasks([...tasks, "New Task"]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Custom Hook Demo</h1>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />

      <h3>Hello, {name} 👋</h3>

      <button onClick={addTask}>
        Add Task ({tasks.length})
      </button>
    </div>
  );
}

export default App;
```

---

# 📊 Before vs After Custom Hook

| Without Custom Hook ❌ | With Custom Hook ✅ |
| --------------------- | ------------------ |
| Repeated useEffect    | Reusable function  |
| Messy components      | Clean components   |
| Hard to maintain      | Easy to scale      |

---

# 🧠 Key Takeaways

* Custom Hooks = **Reusable Logic**
* They make your app **clean, scalable, and professional**
* Always follow naming rule → `useSomething`

---

# 🚀 Common Custom Hooks (You Should Know)

* `useFetch` → API calls
* `useLocalStorage` → Persist data
* `useAuth` → Authentication
* `useDebounce` → Optimize input search
* `useWindowSize` → Responsive UI

---

