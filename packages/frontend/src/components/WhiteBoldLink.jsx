
import React, { useState } from 'react';
import './WhiteBoldLink.css';

const WhiteBoldLink = ({url, name}) => {
  
  const [hovered, setHovered] = useState(false);
  const onMouseEnter = () => {
    setHovered(true);
 };

 const onMouseLeave = () => {
    setHovered(false);
 };

  return (
    <a href={url} className="linkStyle" 
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    style={{
        color: hovered ? '#ffffff' : '#f1f1f1',
        textDecoration: hovered ? 'underline' : 'none',
      }}>
     {name}
    </a>
  );
};

export default WhiteBoldLink;
