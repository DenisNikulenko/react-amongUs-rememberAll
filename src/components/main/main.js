import React from 'react';
import ItemsPeople from "./itemPeople";
import StatsCounter  from "./statsCounter/statsCounter";
import "./main.scss"; 

const Main = ({peoples, btns, onToogleAction, counterStats}) => {
    return(
        <div className="main">
            <div className="container-peoples">
                <StatsCounter counterStats={counterStats} />
               <ItemsPeople peoples={peoples} btns={btns} onToogleAction={onToogleAction}  /> 
            </div>
        </div>
    );
}

export default Main;

