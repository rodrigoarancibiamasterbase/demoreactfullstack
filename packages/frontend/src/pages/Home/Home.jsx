// components/Home.js

import React from 'react';
import "./Home.css";
import HomeHeader from './HomeHeader';
import HomeFooter from './HomeFooter';
import HomeContent from './HomeContent';
const centerStyle = {
  display:'block',
  margin: 'auto',       // Vertically center the element
  marginTop: '50px',    // Adjust the top margin as needed
  // Additional styles can be added based on your requirements
};
const Home = () => {
  
  return (
    <div style={centerStyle}>
      <HomeHeader/>
    <HomeContent/>
    <HomeFooter/>
    </div>

   
  );
};

export default Home;
