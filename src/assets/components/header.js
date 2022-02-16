import React, { Fragment } from 'react';
import Clock from "react-live-clock";

function Header(props) {
  return(
    <Fragment>
      {/* <!-- 현재 시간을 알려줌 --> */}
      <div className="nowTime">
        <Clock format={'YYYY년 MM월 DD일 HH:mm:ss'} ticking={true}/>
      </div>
      {/* <!-- 제목 및 부제목 --> */}
      <div className="pageTitle">
        <h1 className="pageMainTitle">
          <a href="./index.html">
            {props.title}
          </a>
        </h1>
        <div className="pageSubTitle">
          {props.mainTitle}
        </div>
        <div className="pageSubTitle">
          {props.subTitle}
        </div>
      </div>
    </Fragment>
  );
}

export default Header;