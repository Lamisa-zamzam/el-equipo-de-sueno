import React from "react";
import "./Players.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

const Players = (props) => {
    const players = props.players;
    const handleTeam = props.handleTeam;
    const removePlayer = props.removePlayer;
    return (
        <div className="player-container">
            {players.map((player) => {
                // destructuring the object "player"
                const {
                    id,
                    img,
                    name,
                    club,
                    salary,
                    country,
                    age,
                    height,
                    jerseyNumber,
                    position,
                    contractExpairy,
                    trophies,
                    matches,
                } = player;
                return (
                    <div key={id} className="player">
                        {/* Players Information */}
                        <div>
                            <img src={img} alt="" />
                        </div>
                        <div>
                            <h1>{name}</h1>
                            <div>
                                <button
                                    variant="primary"
                                    onClick={() => {
                                        handleTeam(player);
                                    }}
                                >
                                    {/* Font Awesome Icon: 2 of 3 */}
                                    <FontAwesomeIcon icon={faPlus} /> Add
                                </button>
                                <button
                                    variant="primary"
                                    onClick={() => {
                                        removePlayer(player);
                                    }}
                                >
                                    {/* Font Awesome Icon: 2 of 3*/}
                                    <FontAwesomeIcon icon={faTimes} /> Remove
                                </button>
                            </div>
                            <h4>Current Club: {club}</h4>
                            <h4>Salary per Year: {salary} USD</h4>
                            <h4>Country: {country}</h4>
                            <h4>Age: {age}</h4>
                            <h4>Height: {height} meters</h4>
                            <h4>Jersey Number: {jerseyNumber}</h4>
                            <h4>Position: {position}</h4>
                            <h4>Contract Expires: {contractExpairy}</h4>
                            <h4>
                                Trophies: {trophies}, Matches: {matches}
                            </h4>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Players;
