import React, { Component, useState } from 'react';
import Clock from 'react-live-clock';


function Time() {
  return(
    <div className='Time'>
        <Clock format={"YYYY년 MM월 DD일 HH : mm : ss"} ticking={true}></Clock>
      </div>
  );
}

export default Time;