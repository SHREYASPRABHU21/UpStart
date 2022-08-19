import React from "react";
import MenuIcon from '@mui/icons-material/Menu';

function Header(){
  return (
    <div className= "header-col">
      <div className="menu-logo" >
      <MenuIcon sx={{fontSize : 35}}/>
      </div>
      <div className="header-text">
        <h1> UpStart </h1>
      </div>

      <button className="login-btn"> Login </button>
      <button className="signup-btn"> SignUp </button>

    </div>
  )
}

export default Header;
