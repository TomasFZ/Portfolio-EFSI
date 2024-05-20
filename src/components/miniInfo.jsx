import React from 'react';

function MiniInfo(props) {
  return (
    <div className={props.className}>
      <p>{props.label}: {props.value}</p>
    </div>
  );
}

export default MiniInfo;
