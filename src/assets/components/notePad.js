import React, { Fragment } from 'react';

function NotePad(props) {
  return(
    <Fragment>
      <div className='notePadTitle'>
        {props.notePadTitle}
      </div>
    </Fragment>
  );
}

export default NotePad