import React from "react";
import PaidRoundedIcon from '@mui/icons-material/PaidRounded';
import GroupsIcon from '@mui/icons-material/Groups';
import StarIcon from '@mui/icons-material/Star';

function Fcards(props){
  return(
    <div className= "fcards">
      <div className="card1 fcard">
        <div className="fcard-icon">
         <StarIcon sx={{ color: "#9900F0",fontSize: 50 }} />
        </div>
        <h2> Exposure </h2>
        <p> Get exposed to many reputed companies! </p>
      </div>
      <div className="card2 fcard">
        <div className="fcard-icon">
        <PaidRoundedIcon sx={{ color: "#9900F0",fontSize: 50 }} />
        </div>
        <h2> Funds </h2>
        <p> Interested ones might invest in your idea! </p>
      </div>
      <div className="card3 fcard">
        <div className="fcard-icon">
         <GroupsIcon  sx={{ color: "#9900F0",fontSize: 50 }}/>
        </div>
        <h2> Build </h2>
        <p> Get your company to higher level with others! </p>
      </div>
    </div>
  )
}

export default Fcards;
