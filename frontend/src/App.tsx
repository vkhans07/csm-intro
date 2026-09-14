import axios from "axios";
  import { useEffect, useState } from "react";
  import "./App.scss";

// Skeleton for the Navbar
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">CSM Scheduler</div>
      <div className="navbar-links">
        <span>Logged in as: <strong>Student</strong></span>
      </div>
    </nav>
  );
}

// This component should fetch and display courses.
// Clicking a course should select it.
function CourseCatalog() {
  return (
    <div className="catalog">
      <div className="placeholder-icon">📚</div>
      <h2>Course Catalog</h2>
      <p>Fetch and display courses here.</p>
    </div>
  );
}

// This component should display sections for the selected course.
// It should allow enrolling in a section.
function SectionBrowser() {
  return (
    <div className="sections">
      <div className="placeholder-icon">🗓️</div>
      <h2>Sections</h2>
      <p>Select a course to view sections.</p>
    </div>
  );
}

// Finished frontend for testing the counter backend
function Counter() {
  const [count, setCount] = useState(0);

  // Get the count when the page loads
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/increment/get")
      .then((response) => setCount(response.data.count));
  }, []);

  // Increment the count when the button is clicked
  const increment = () => {
    axios
      .post("http://localhost:8000/api/increment/post")
      .then((response) => setCount(response.data.count));
  };

  return (
    <div className="counter">
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <h1 className="title">Welcome back!</h1>
        <p className="description">
          Select a course from the catalog to find an open section.
        </p>
        
        {/* Layout: Sidebar for Courses, Main Area for Sections */}
        <div className="content-grid">
           <div className="sidebar">
              <CourseCatalog />
           </div>
           <div className="section-area">
              <SectionBrowser />
           </div>
        </div>

        <Counter />
        
        <div className="footer-text">
            For Developers: Check <code>src/App.tsx</code> to start implementing components!
        </div>
      </div>
    </div>
  )
}

export default App
