import React from 'react';
import blockBlack from "../../image/block-black.png";
import blockGreen from "../../image/block-green.png";
import blockRed from "../../image/block-red.png";
import blockWhite from "../../image/block-white.png";

const StatsCounter = ({counterStats}) => {
    const {counterPlayers, counterKilled, counterBelieve, counterDontBellieve } = counterStats;
    return (
        <div className="info-counter">
            <span> | <img src={blockWhite} alt="block-white" /> Игроков: {counterPlayers} | </span>
            <span> | <img src={blockBlack} alt="block-black" /> Убито: {counterKilled} |  </span>
            <span> | <img src={blockGreen} alt="block-green" /> Доверяю: {counterBelieve} | </span>
            <span> | <img src={blockRed} alt="black-block-red" /> Не доверяю: {counterDontBellieve} | </span>
        </div>
    );
}

export default StatsCounter;