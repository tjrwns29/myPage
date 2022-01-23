import React, { Component } from "react";

class SideBar extends Component {
  render() {
    return(
      <div className='sidebar'>
        <button className='sideBarBtn'>here's button</button>
        <div className="Sidecontainer">
          <ul className='sideBarContent'>
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
}

export default SideBar;