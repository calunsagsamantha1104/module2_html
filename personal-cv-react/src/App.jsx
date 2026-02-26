import { useState } from 'react';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <header>
        <Header />
        <button onClick={() => setDarkMode(!darkMode)}>
          Toggle Dark Mode
        </button>
      </header>
      <main>
        <About />
        <Education />
        <Skills />
        <Contact />
      </main>
      <footer>
        <p>&copy; 2026 Samantha S. Calunsag. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
