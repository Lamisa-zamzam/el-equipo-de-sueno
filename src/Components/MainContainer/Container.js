import React, { useState, useEffect } from "react";
import Players from "../Players/Players";
import Team from "../Team/Team";
import "./Container.css";
import playersData from "../../playersData/playersData.json";

const MyContainer = () => {
    // Fetching Data from JSON
    const [playersInfo, setPlayersInfo] = useState([]);

    useEffect(() => {
        setPlayersInfo(playersData);
    }, []);

    // Declaring arrays for added players and their IDs
    const [team, setTeam] = useState([]);
    const [playersId, setPlayersId] = useState([]);

    // Handling player increase
    const handleTeam = (newPlayer) => {
        if (
            playersId.find(function (element) {
                return element === newPlayer.id;
            }) === undefined
        ) {
            const newTeam = [...team, newPlayer];
            setTeam(newTeam);
            const currentPlayerId = [...playersId, newPlayer.id];
            setPlayersId(currentPlayerId);
        } else
            alert(
                "You have already had this player on your team !!! Press the 'Remove' button if you want to remove him."
            );
    };

    // Handling player removing
    const removePlayer = (player) => {
        if (
            playersId.find(function (element) {
                return element === player.id;
            }) !== undefined
        ) {
            const newTeam = team.filter((teamPlayer) => {
                return teamPlayer.id !== player.id;
            });
            setTeam(newTeam);
            const currentPlayerId = playersId.filter((id) => {
                return id !== player.id;
            });
            setPlayersId(currentPlayerId);
        } else
            alert(
                "You don't have this player on your team. Press the 'Add' button if to add him."
            );
    };

    return (
        <div className="container-div">
            <Team team={team}></Team>
            <Players
                players={playersInfo}
                handleTeam={handleTeam}
                removePlayer={removePlayer}
            ></Players>
        </div>
    );
};

export default MyContainer;
