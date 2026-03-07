import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';

function App() {
  const skills = ["HTML", "CSS", "JavaScript", "React"];

  const education = [
    {
      year: "2028",
      program: "BS Information Technology",
      school: "USTP-CDO"
    },
    {
      year: "2023",
      program: "Senior High School",
      school: "Liceo de Cagayan University"
    },
    {
      year: "2020",
      program: "High School",
      school: "MOGCHS"
    },
    {
      year: "2019",
      program: "Elementary School",
      school: "City Central School"
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
