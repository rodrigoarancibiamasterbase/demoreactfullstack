import React from "react";
import "./HomeHeader.css";
import logo from "../../logo.svg";
import WhiteBoldLink from "../../components/WhiteBoldLink";

const HomeHeader = () => {
  const testStyle = {
    width: "100px",
  };
  return (
    <header className="header">
      <div className="container">
        <div>
          <img style={testStyle} alt="" src={logo} />
        </div>
        <div>
         <WhiteBoldLink url="/" name="Home"/>
         <WhiteBoldLink url="/content" name="Sign In"/>
     
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
