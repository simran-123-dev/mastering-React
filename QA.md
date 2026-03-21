# React Hooks and Logic – Interview Preparation

---

## 1. What is the difference between useState and useReducer?

**Answer:**
`useState` is used for simple state management such as strings, numbers, or booleans.
`useReducer` is used for complex state logic where multiple actions can update the state in different ways. It centralizes logic using a reducer function.

---

## 2. What is Prop Drilling and how can it be solved?

**Answer:**
Prop Drilling occurs when data is passed through multiple intermediate components that do not use it.
It can be solved using the Context API, which allows direct access to data without passing props through every level.

---

## 3. Why do we use the dependency array in useEffect?

**Answer:**
The dependency array controls when the effect runs.

* `[]` → runs only once (on component mount)
* `[value]` → runs whenever the value changes
* no array → runs after every render

---

## 4. When should you use useMemo?

**Answer:**
`useMemo` is used to optimize performance by caching the result of expensive calculations.
It prevents unnecessary recalculations on every render.

---

## 5. What is the difference between Link and <a> tag in React?

**Answer:**
`<a>` tag reloads the entire page.
`Link` (from React Router) updates the UI without refreshing the page, making it faster and preserving state.

---

## 6. What is a Custom Hook and why is it used?

**Answer:**
A Custom Hook is a reusable function that uses React Hooks internally.
It is used to share logic across multiple components and avoid code duplication.

---

## 7. Why should we not update state directly?

**Answer:**
React detects changes using reference comparison.
Direct mutation (e.g., `array.push()`) does not create a new reference, so React may not re-render.
Instead, create a new copy using spread operator or other immutable methods.

---

## 8. What is the purpose of useRef?

**Answer:**
`useRef` is used to:

* Access DOM elements directly
* Store mutable values that persist across renders without triggering re-renders

---

## 9. How do you handle loading states in React?

**Answer:**
Use a loading state variable:

* Set loading = true before API call
* Set loading = false after data is received

This ensures proper UI feedback and prevents rendering errors.

---

## 10. What is Conditional Rendering?

**Answer:**
Conditional Rendering means displaying UI based on conditions.

Common methods:

* Ternary operator: `condition ? A : B`
* Logical AND: `condition && A`

---

# Additional Important Questions

---

## 11. What is the Virtual DOM?

**Answer:**
The Virtual DOM is a lightweight copy of the real DOM.
React updates the Virtual DOM first, compares changes (diffing), and then updates only the necessary parts of the real DOM.

---

## 12. What are keys in React and why are they important?

**Answer:**
Keys help React identify which items have changed in a list.
They improve performance and prevent UI bugs during re-rendering.

---

## 13. What is lifting state up?

**Answer:**
Lifting state up means moving state to a common parent component so multiple child components can share it.

---

## 14. What is the difference between controlled and uncontrolled components?

**Answer:**
Controlled components use React state to manage form inputs.
Uncontrolled components use the DOM directly via refs.

---

## 15. What is useCallback and why is it used?

**Answer:**
`useCallback` memoizes functions to prevent unnecessary re-renders, especially when passing functions to child components.

---

## 16. What is the difference between useMemo and useCallback?

**Answer:**
`useMemo` returns a memoized value.
`useCallback` returns a memoized function.

---

## 17. What is React Fragment?

**Answer:**
A Fragment allows grouping multiple elements without adding extra nodes to the DOM.

Example:

```javascript
<>
  <h1>Hello</h1>
  <p>World</p>
</>
```

---

## 18. What happens when state changes in React?

**Answer:**
When state changes:

1. React re-renders the component
2. Virtual DOM is updated
3. Differences are calculated
4. Only necessary DOM updates are applied

---

## 19. What is the difference between functional and class components?

**Answer:**
Functional components use hooks and are simpler.
Class components use lifecycle methods and are now mostly outdated.

---

## 20. What is a single-page application (SPA)?

**Answer:**
An SPA loads a single HTML page and dynamically updates content without reloading the page. React applications are typically SPAs.

---

## Conclusion

These questions cover:

* Core Hooks
* React Concepts
* Performance Optimization
* Architecture

Understanding these concepts ensures strong fundamentals and interview readiness.
