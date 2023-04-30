import React from "react";
import "./Button.css";

const Button = (props) => {
  let { value, css, onClick } = props;
  return (
    <div>
      <button className="button" style={css} onClick={() => onClick()}>
        {value}
      </button>
    </div>
  );
};

export default Button;
