import React from "react";
import "./card.styles.css";

export const Card = props => (
  <div className="card-container">
    <img
      alt={props.hero.localized_name}
      src={`https://api.opendota.com/apps/dota2/images/heroes/${props.hero.localized_name.toLowerCase().replace('-','').replace(' ','_')}_full.png`}
    />
    <h1>{props.hero.localized_name}</h1>
    <p>
      <b>{props.hero.attack_type}</b>
    </p>
  </div>
);
