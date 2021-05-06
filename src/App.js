import React from "react";
import Accordion from "./components/Accordion";

const items = [
  {
    title: "What is React?",
    content:
      "React is an open-source, front-end, JS library for building UI and UI components. It can be used as a base in the development of single-page applications.",
  },
  {
    title: "Why use React?",
    content:
      "React is a favorite among engineers. It's simple, lightweight, and has a large support community.",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating reuseable components.",
  },
];

const App = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Accordion items={items} />
    </div>
  );
};

export default App;
