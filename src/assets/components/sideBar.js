import React, { Fragment, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faCaretDown } from '@fortawesome/free-solid-svg-icons';

function SideBar(props) {
  // 사이드바
  const [openStyle, setOpenStyle] = useState("beforeSideBarWindow");
  const sideBarOpen = () => {
    setOpenStyle("afterSideBarWindow")
  }
  const sideBarClose = () => {
    setOpenStyle("beforeSideBarWindow")
  }
  // 드롭다운

  return(
    <Fragment>
      <div className='sideBar'>
        {/* open button */}
        <button onClick={sideBarOpen} className="sideBarOpenBtn">
        <FontAwesomeIcon icon={faBars}/>
        </button>
        <div className={openStyle}>
          {/* close button */}
          <button onClick={sideBarClose} className='sideBarCloseBtn'>
          <FontAwesomeIcon icon={faXmark}/>
          </button>
          <div className='sideBarContents'>
            <button className='dropDownName'>{props.dropDownName} <FontAwesomeIcon icon={faCaretDown}/></button>
              <ul className="dropDownContents">
                <a href='#'><li>s</li></a>
                <a href='#'><li>s</li></a>
                <a href='#'><li>s</li></a>
              </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default SideBar