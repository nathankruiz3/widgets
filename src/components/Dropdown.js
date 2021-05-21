import React, { useState, useEffect, useRef } from "react";

const Dropdown = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      } else {
        setDropdownOpen(false);
      }
    };

    document.body.addEventListener("click", onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const renderedOptions = props.options.map((option) => {
    if (option.value === props.selected.value) {
      return null;
    } else {
      return (
        <div
          key={option.value}
          className="item"
          onClick={() => props.onSelectedChange(option)}
        >
          {option.title}
        </div>
      );
    }
  });

  return (
    <div
      style={{ marginTop: "10px", width: "100%" }}
      ref={ref}
      className="ui form"
    >
      <div className="field">
        <label style={{ color: "white" }} className="label">
          Select a {props.optionType}
        </label>
        <div
          style={{ width: "100%" }}
          className={
            dropdownOpen
              ? "ui selection dropdown visible active"
              : "ui selection dropdown"
          }
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <i className="dropdown icon"></i>
          <div className="text">{props.selected.title}</div>
          <div className={dropdownOpen ? "menu visible transition" : "menu"}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
