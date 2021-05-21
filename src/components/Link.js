import React from "react";

const Link = (props) => {
  const handleClick = (e) => {
    if (e.metaKey || e.ctrlKey) {
      return;
    }
    e.preventDefault();
    window.history.pushState({}, "", props.href);
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
    props.onClick();
  };

  return (
    <a className={props.className} href={props.href} onClick={handleClick}>
      {props.children}
    </a>
  );
};

export default Link;
