import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

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

const colors = [
  {
    title: "Red",
    value: "red",
  },
  {
    title: "Gold",
    value: "goldenrod",
  },
  {
    title: "Blue",
    value: "midnightblue",
  },
];

const App = () => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <div style={{ textAlign: "center", margin: "10px" }}>
      <Dropdown
        selected={selectedColor}
        onSelectedChange={setSelectedColor}
        options={colors}
        optionType="Color"
      />
    </div>
  );
};

export default App;
