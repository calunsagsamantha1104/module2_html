import { useState } from "react";

function Contact() {
  // Step 1: Add Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Step 3: Handle Form Submission
  function handleSubmit(e) {
    e.preventDefault();
    alert(`Thank you ${name}!`);
  }

  return (
    <section className="card">
      <h2>Contact</h2>
      {/* Step 2: Handle Inputs */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
