import React from "react";
import "./Team.css";

const Team = (props) => {
    const imgStyle = {
        width: "50px",
    };

    const team = props.team;
    // Counting total salary
    const totalSalary = team.reduce(
        (sum, player) => sum + parseInt(player.salary),
        0
    );

    return (
        <div className="team">
            <h1>Your Team</h1>
            <hr />
            <h3>Total Players: {team.length}</h3>
            <hr />
            <h3>Total salary: {totalSalary} USD</h3>
            <hr />
            <h4>Players Chosen</h4>
            <hr />
            {team.map((player) => {
                // Destructuring the object "player"
                const { id, img, name, position } = player;
                return (
                    <div className="selected-players">
                        <img src={img} alt="" style={imgStyle} />
                        <div>
                            <h6 key={id}>{name}</h6>
                            <p key={id}>{position}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Team;
