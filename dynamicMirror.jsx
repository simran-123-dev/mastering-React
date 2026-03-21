import { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  // Logic: Color decide karlo pehle hi
  const textColor = input.length > 10 ? "text-red-500" : "text-green-500";

  return (
    <div className="h-screen bg-zinc-900 text-white flex flex-col items-center justify-center gap-6">
      
      {/* Input box with some padding and border */}
      <input 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        className="p-2 rounded text-black border-2 border-blue-400 outline-none"
        placeholder="Type something..."
      />

      {/* Dynamic Class yahan use ho rahi hai */}
      <h1 className={`text-4xl font-bold ${textColor}`}>
        {input || "Yahan dikhega!"} 
      </h1>

      <p>Characters: {input.length}</p>
      
    </div>
  );
}

export default App;
