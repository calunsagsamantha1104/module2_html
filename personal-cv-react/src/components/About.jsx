import Card from "./Card"; 

function About() {
  return (
    <Card title="About Me">
       import profile from "../assets/profile.jpg";

<img src={profile} alt="Profile photo" width="150" />

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
