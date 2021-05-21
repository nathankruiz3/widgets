import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Navbar from "./components/Navbar";
import Route from "./components/Route";

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
    title: "Grey",
    value: "grey",
  },
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
    <div
      style={{
        textAlign: "center",
        padding: "0px 10px",
        backgroundColor: `${selectedColor.value}`,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100vw",
      }}
    >
      <Navbar />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          options={colors}
          optionType="Color"
          selected={selectedColor}
          onSelectedChange={setSelectedColor}
        />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
