📦 What are Props?
Think of App.jsx as the "Parent" and any other function as the "Child."
Props are like a parcel the Parent sends to the Child.
Data only flows one way: Downwards (Parent 
 Child).
Step 1: Let's Split your Code (The "Props" Way)
Instead of one giant block, let's create a separate Heading component and a TaskCard component.
javascript
// 1. CHILD COMPONENT (Receives the parcel)
// We put 'props' in the brackets to catch the data
function TaskCard(props) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", margin: "5px" }}>
      <h3>Skill: {props.name}</h3> 
      <p>Status: {props.status}</p>
    </div>
  );
}

// 2. PARENT COMPONENT (Sends the parcel)
function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>MERN Roadmap</h1>

      {/* Sending 'name' and 'status' as PROPS */}
      <TaskCard name="React Props" status="Learning Now" />
      <TaskCard name="Node.js" status="Coming Soon" />
      
      {/* You can send anything: strings, numbers, or even functions! */}
    </div>
  );
}
Use code with caution.

💡 Why do we need Props?
Reusability: You wrote the TaskCard code once, but used it twice with different data.
Organization: It keeps your App.jsx clean.
Step 2: Passing Functions as Props (Advanced)
This is how a Child tells a Parent: "Hey, the user clicked my delete button!"
javascript
// CHILD
function DeleteButton(props) {
  return <button onClick={props.onBtnClick}>Delete Me</button>;
}

// PARENT
function App() {
  const showAlert = () => alert("Button clicked in Child!");

  return (
    <DeleteButton onBtnClick={showAlert} /> 
  );
}
Use code with caution.

🚨 The "Problem" with Props (Prop Drilling)
If you have a Grandparent 
 Parent 
 Child 
 Grandchild, you have to pass the data through every single person even if the Parent doesn't need it. That is why we use Context API (The Cloud)—to skip the middleman.
Does the concept of "Sending a parcel" (Props) make sense now? If yes, we can see how to use them to build your Routing pages!
