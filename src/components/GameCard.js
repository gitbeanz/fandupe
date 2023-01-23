import React from "react";
import Lakers from "../assets/lakers.png";
import Celtics from "../assets/celtics.png";

export default function GameCard() {
  return (
    <div class="gamecard-main-div">
      <div class="logo-div">
        <div class="home-div">
          <img class="team-logo" src={Lakers} />
        </div>
        <div class="away-div">
          <img class="team-logo" src={Celtics} />
        </div>
      </div>
      <div class="name-div">
        <div class="home-name-div">Lakers</div>
        <div class="away-name-div">Celtics</div>
      </div>
      <div class="info-div">
        <div class="home-score-div">169</div>
        <div class="away-score-div">113</div>
      </div>
    </div>
  );
}
