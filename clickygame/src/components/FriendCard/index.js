import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} onClick={() => props.shuffleFriend(props.friends, props.id)} className="shuffle"></img> 
      </div>
    </div>
  );
}

export default FriendCard;
