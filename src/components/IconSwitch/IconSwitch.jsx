import React from 'react';
import './IconSwitch.css';

export default function IconSwitch(props) {
  return (
    <div className="icon-switch material-icons" onClick={props.onSwitch}>
      {props.icon}
    </div>
  );
}