const [darkMode, setDarkMode] = useState(false);

// Tailwind mein dynamic classes aise lagengi:
<div className={`h-screen flex flex-col items-center justify-center transition-all duration-500 ${darkMode ? 'bg-zinc-900 text-white' : 'bg-white text-black'}`}>
  
  <h1 className="text-4xl font-bold mb-4">
    {darkMode ? "Dark Mode ON" : "Light Mode ON"}
  </h1>

  <button 
    onClick={() => setDarkMode(!darkMode)}
    className={`px-6 py-2 rounded-full font-semibold border-2 ${darkMode ? 'border-white hover:bg-white hover:text-black' : 'border-black hover:bg-black hover:text-white'}`}
  >
    Switch Theme
  </button>

</div>
