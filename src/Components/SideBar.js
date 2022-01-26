import React, { Component, useState } from "react";

function Sidebar() {
  const [isOpen, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(isOpen => !isOpen);
  }
  return(
    <div className='sidebar'>
      <button className='sideBarBtn' onClick={() => toggleMenu()}>here's button</button>
      <div className="Sidecontainer">
        <ul className={isOpen ? 'sideBarContent' : 'hideContents' }>
          <a href='#'><li> : here's sidebar</li></a>
          <a href='#'><li> : here's sidebar</li></a>
          <a href='#'><li> : here's sidebar</li></a>
          <a href='#'><li> : here's sidebar</li></a>
          <a href='#'><li> : here's sidebar</li></a>
          <a href='#'><li> : here's sidebar</li></a>
          <a href='#'><li> : here's sidebar</li></a>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;