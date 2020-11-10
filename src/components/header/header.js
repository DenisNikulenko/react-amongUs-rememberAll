import React from 'react';
import './header.scss';

const Header = ({counterStats}) => {
    const {counterPlayers, counterKilled, counterBelieve, counterDontBellieve } = counterStats;
    
    return(
        <div className="header">
            <h1>Among Us Вычислить убийцу:</h1>
            <div className="info-counter">
                <span>Игроков: {counterPlayers} </span>
                <span>Убито: {counterKilled} </span>
                <span>Доверяю: {counterBelieve} </span>
                <span>Не доверяю: {counterDontBellieve} </span>
            </div>
        </div>
    );

}

export default Header;