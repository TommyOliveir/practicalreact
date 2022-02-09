import React from "react";
import { FaJsSquare } from "react-icons/fa";
import { MdEco } from "react-icons/md";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

function reactIcons() {
  return (
    <div>
     
      <a href="https://react-icons.github.io/react-icons" target="_blank">
        React Icons
      </a>

      <IconContext.Provider value={{ className: "react-icons" }}>
        <FaJsSquare />
        <MdEco color="green" />
      </IconContext.Provider>
    </div>
  );
}

export default reactIcons;
