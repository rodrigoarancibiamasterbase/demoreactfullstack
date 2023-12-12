
import React, { useState } from 'react';
import './WhiteBoldLinkAction.css';

const WhiteBoldLinkAction = ({handleClick, name}) => {
  
  const [hovered, setHovered] = useState(false);
  const onMouseEnter = () => {
    setHovered(true);
 };

 const onMouseLeave = () => {
    setHovered(false);
 };

  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a href="#" className="linkStyle" 
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    style={{
        color: hovered ? '#ffffff' : '#f1f1f1',
        textDecoration: hovered ? 'underline' : 'none',
      }} 
      onClick={handleClick}>
     {name}
    </a>
  );
};

export default WhiteBoldLinkAction;
