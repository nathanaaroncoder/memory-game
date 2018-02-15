import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className={props.shake == true ? "shake card" : "card"}>
    <div onClick={() => props.followClicks(props.id)} id={props.id}
          className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default FriendCard;
