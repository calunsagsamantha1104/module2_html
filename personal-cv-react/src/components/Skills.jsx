import { useState } from 'react';

function Skills() {
  const [visible, setVisible] = useState(true);

  return (
    <section>
      <button
        className="skills-toggle-button"
        onClick={() => setVisible(!visible)}
      >
        Show/Hide Skills
      </button>
      {visible && (
        <section id="skillsSection">
          <h2>Skills</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </section>
      )}
    </section>
  );
}

export default Skills;

