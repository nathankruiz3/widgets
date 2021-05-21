import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  {
    title: "French",
    value: "fr",
  },
  {
    title: "Japanese",
    value: "ja",
  },
  {
    title: "Spanish",
    value: "es",
  },
  {
    title: "Ukrainian",
    value: "uk",
  },
];

const Translate = () => {
  const [lang, setLang] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <div style={{ width: "100%", marginTop: "10px" }}>
      <div className="ui form">
        <div className="field">
          <label style={{ color: "white" }}>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        options={options}
        selected={lang}
        onSelectedChange={setLang}
        optionType="Language"
      />
      <hr />
      <h1 style={{ color: "white" }} className="ui header">
        Output
      </h1>
      <Convert text={text} language={lang} />
    </div>
  );
};

export default Translate;
