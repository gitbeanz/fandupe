import React from "react";

function generateTodaysGames() {
  fetch(
    "http://api.sportradar.us/nba/trial/v7/en/games/2023/01/23/schedule.json?api_key=pgh7vkkm4s2u2fdyfgzc6x9f"
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}

export default function NBAToday() {
  //generateTodaysGames();
  return (
    <div className="today-body-div">
      <div className="today-main-div">
        <h1 className="today-h1">Today's Games</h1>
      </div>
    </div>
  );
}
