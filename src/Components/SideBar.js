import React, { Component } from "react";

class SideBar extends Component {
  render() {
    return(
      <div className='sidebar'>
        <button className='sideBarBtn'>here's button</button>
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
    );
  }
}

export default SideBar;