import React from 'react';
import './header.scss';

const Header = ({allPlayers}) => {
    
    return(
        <div className="header">
            <h1>Among Us Вычислить убийцу:</h1>
            <div className="states">
                <span>Игроков: {allPlayers} </span>
            </div>
        </div>
    );

}

export default Header;