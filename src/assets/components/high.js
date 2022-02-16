import React, { Fragment } from 'react';

function High(props) {
  return(
    <Fragment>
      <div className='highTitle'>
        {props.highTitle}
      </div>
      <div className='highCaution'>
      <p>{props.highTime}</p>
      <p>{props.highFullTime}</p>
      <p>{props.highNowtime}</p>
      </div>
    </Fragment>
  );
}

export default High