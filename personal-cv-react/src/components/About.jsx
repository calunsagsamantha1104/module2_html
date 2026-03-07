import Card from "./card";

function About() {
  return (
    <Card title="About Me">
      <img
        src="./module2_html/images/photo.jpg"
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
    </Card>
  );
}

export default About;
