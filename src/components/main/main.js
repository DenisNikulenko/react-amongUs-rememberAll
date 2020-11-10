import React from 'react';
import ItemsPeople from "./itemPeople"
import "./main.scss"; 

const Main = ({peoples, btns, onToogleAction}) => {

    return(
        <div className="main">
            <div className="container-peoples">
               <ItemsPeople peoples={peoples} btns={btns} onToogleAction={onToogleAction}  /> 
            </div>
        </div>
    );
}

export default Main;

