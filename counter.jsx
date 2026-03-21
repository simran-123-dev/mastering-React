import { useState } from "react";

function App() {
  const [count, setCount] = useState(0); // Counter ke liye 'count' naam zyada suit karta hai

  const add = () => {
    setCount(count + 1); // setCount use karke update karo
  };

  const sub = () => {
    setCount(count - 1);
  };

  return (
    <div className="h-screen bg-zinc-800 text-white flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">Counter: {count}</h1>
      
      <div className="flex gap-4">
        <button 
          className="px-6 py-2 bg-green-500 rounded-lg font-bold"
          onClick={add}
        > + </button> 
        
        <button 
          className="px-6 py-2 bg-red-500 rounded-lg font-bold"
          onClick={sub}
        > - </button>
      </div>

      <input 
        type="number"
        className="text-black p-2 rounded"
        value={count} 
        onChange={(e) => setCount(Number(e.target.value))} 
      />
    </div>
  );
}

export default App;
