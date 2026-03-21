# 📦 React Props (Properties)

### 📘 The Theory
Props are like **parcels** sent from a Parent component to a Child component. 
* **One-Way Street:** Data only flows down (Parent -> Child).
* **Read-Only:** A child cannot change the props it receives; it can only use them.
* **Reusability:** You can use the same component with different data.

---

### 💻 The Code
```javascript
// CHILD: Receives the data
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// PARENT: Sends the data
function App() {
  return (
    <div>
      <Greeting name="Software Engineer" />
      <Greeting name="React Developer" />
    </div>
  );
}
