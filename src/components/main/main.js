import React from 'react';
import "./main.scss"; 
import {AiFillDelete} from "react-icons/ai";
import {GiOverkill} from "react-icons/gi";


const Main = ({peoples, onDelete}) => {
    const ItemPeople = peoples.map(item => {
        const {id} = item
        return(
            <div className="item-people" key={id}>
                <img src={item.src} alt={item.alt} />
                <textarea type="text" />  
                <AiFillDelete alt="удалить" className="icons-item" onClick={ () => onDelete(id)}/>
                <GiOverkill alt="убит" className="icons-item"/>
            </div>
        );
    })

    return(
        <div className="main">
            <div className="container-peoples">
                {ItemPeople} 
            </div>
        </div>
    );
}

export default Main;

