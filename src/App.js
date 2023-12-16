// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="toggle-btn" onClick={toggleSidebar}>
          Toggle Sidebar
        </button>
        {/* Sidebar content goes here */}
      </div>

      {/* Main Content */}
      <div className="box">One</div>
      <div className="box">Two</div>
      <div className="box">Three</div>
      <div className="box">Four</div>
      <div className="box">Five</div>
      <div className="box">Six</div>
      <div className="box">Seven</div>
      <div className="box">Eight</div>
      <div className="box">Nine</div>
      <div className="box">Ten</div>
      <div className="box">Eleven</div>
      <div className="box">Twelve</div>
    </div>
  );
}

export default App;
