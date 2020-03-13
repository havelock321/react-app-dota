import React from "react";
import "./card.styles.css";

export const Card = props => (
  <div className="card-container">
    <div className="card-image">
      <img
        alt={props.hero.localized_name}
        src={`https://api.opendota.com/apps/dota2/images/heroes/${props.hero.localized_name
          .toLowerCase()
          .replace("-", "")
          .replace(" ", "_")}_full.png`}
      />
    </div>
    <div className="card-info">
      <h1>
        {props.hero.localized_name}
      </h1>
    </div>
  </div>
);
