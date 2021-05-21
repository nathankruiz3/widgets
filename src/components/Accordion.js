import React, { useState } from "react";

const Accordion = (props) => {
  const [activeTitle, setActiveTitle] = useState(null);

  const onTitleClick = (index) => {
    activeTitle === index ? setActiveTitle(null) : setActiveTitle(index);
  };

  return (
    <div style={{ marginTop: "10px" }} className="ui styled accordion">
      {props.items &&
        props.items.map((item, index) => {
          return (
            <React.Fragment key={item.title}>
              <div
                className={activeTitle === index ? "title active" : "title"}
                onClick={() => onTitleClick(index)}
              >
                <i className="dropdown icon"></i>
                {item.title}
              </div>
              <div
                className={activeTitle === index ? "content active" : "content"}
              >
                {item.content}
              </div>
            </React.Fragment>
          );
        })}
    </div>
  );
};

export default Accordion;
