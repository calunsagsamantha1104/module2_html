import profilePhoto from '../assets/photo.jpg';

function About() {
  return (
    <section>
      <h2>About Me</h2>
      <img
        src={profilePhoto}
        alt="Profile photo"
        className="profile-pic"
      />
      <p>
        I am an IT student with a growing interest in technology and
        problem-solving, currently learning the fundamentals of information
        technology, including programming, systems, and software tools.
      </p>
      <p>
        Email:{' '}
        <a href="mailto:calunsagsamantha1104@mail.com">
          calunsagsamantha1104@mail.com
        </a>
        <br />
        GitHub:{' '}
        <a href="https://github.com" target="_blank" rel="noreferrer">
          github.com
        </a>
      </p>
    </section>
  );
}

export default About;

