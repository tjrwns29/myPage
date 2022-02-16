import React, { Fragment } from 'react';

function LoadPage(props) {
  return(
    <Fragment>
      <div className='loadPageTitle'>
        {props.loadPageTitle}
      </div>
    </Fragment>
  );
}

export default LoadPage