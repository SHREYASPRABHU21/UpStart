import React from "react";
import frontImg from "../../Images/techy.jpg";

function FrontIntro(){
  const imgSrc = "./techy.jpg";
  return(
    <div className="front-intro">
      <div className= "front-text">
        <p className="front-first"> wanna get exposure for your idea?? </p>
        <h1> Start Up your Progress From here </h1>
        <p className="front-second"> Contact investors on the go.. & get your self a chance to grow!! </p>
      </div>
      <button className="front-btn1"> SignUp </button>
      <button className="front-btn2"> Login </button>
      <img className="front-img" src={frontImg} />
    </div>
  )
}

export default FrontIntro;
