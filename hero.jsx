import React, { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
        <div>React Gallery</div>
        <div>
          <button onClick={toggleDarkMode}>
            {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </button>
        </div>
      </nav>
      <main style={{ padding: '2rem' }}>
        <h1>Welcome to React Gallery</h1>
        <p>This is a simple hero section with a theme toggle.</p>
      </main>
      <style>
        {`
          .light {
            background-color: white;
            color: black;
          }
          .dark {
            background-color: black;
            color: white;
          }
        `}
      </style>
    </div>
  );
}

export default App;
