import { useState, useEffect } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("hello");
  const [submitted, setSubmitted] = useState(null);

  useEffect(() => {
    document.title = name.trim() ? `${greeting}, ${name.trim()}` : "welcome";
  }, [name, greeting]);

  const handleAddGreeting = () => {
    const cleanName = name.trim();
    const cleanGreeting = greeting.trim();
    if (!cleanName || !cleanGreeting) return;

    setSubmitted({ name: cleanName, greeting: cleanGreeting });
    setName("");
  };

  return (
    <div>
      <h2>Enter your name</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      required/>

      <h2>Choose the greeting</h2>
      <input
        type="text"
        value={greeting}
        onChange={(e) => setGreeting(e.target.value)}
      />

      <button onClick={handleAddGreeting}>Add greeting</button>

      {submitted && (
        <h1>{submitted.greeting}, {submitted.name}</h1>
      )}
    </div>
  );
};

export default App;