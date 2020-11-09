import React from 'react';
import "./main.scss"; 
import {AiFillDelete} from "react-icons/ai";
import {GiOverkill} from "react-icons/gi";


const Main = ({peoples, onDelete, onKilled}) => {
    const ItemPeople = peoples.map(item => {
        const {id, killed} = item;
        let classNemes = "item-people"

        if(killed) {
            classNemes +=" killed"
        }

        return(
            <div className={classNemes} key={id}>
                <img src={item.src} alt={item.alt} />
                <textarea type="text" placeholder="Заметка..." />  
                <div className="action-player">
                    <AiFillDelete alt="удалить" className="icons-item" onClick={ () => onDelete(id)}/>
                    <span className="delete-palyer-title">Удалить</span>
                </div>
                <div className="action-player">
                    <GiOverkill alt="убит" className="icons-item" onClick={()=> onKilled(id)}/>
                    <span className="killed-palyer-title">Убит</span>
                </div>
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

