import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';

function App() {
  const skills = ["HTML", "CSS", "JavaScript", "React"];

  const education = [
    {
      year: "2023",
      program: "BS Information Technology",
      school: "Your University"
    },
    {
      year: "2019",
      program: "Senior High School",
      school: "Your School"
    }
  ];

  return (
    <div>
      <Header />
      <About />
      <Skills skills={skills} />
      <Education education={education} />
      <Contact />
    </div>
  );
}

export default App;
