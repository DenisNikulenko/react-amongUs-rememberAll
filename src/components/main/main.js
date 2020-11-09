import React from 'react';
import "./main.scss"; 

const Main = ({peoples,btns, onToogleAction}) => {
    const ItemPeople = peoples.map(item => {
        const {id, killed, believe, dontBelive} = item;

        let classNemes = "item-people";

        const buttons = btns.map(btn => {
            const {key, alt, action, description} = btn;
            if (killed) {
                classNemes += " killed";
            };
    
            if (believe) {
                classNemes += " believe";
            };
    
            if (dontBelive) {
                classNemes += " dontBelive";
            };
            
            return(
                <div className="action-player" key={key}>
                    <btn.name alt={alt} className="icons-item" onClick={() => onToogleAction(id, action)} />
                    <span className="killed-palyer-title">{description}</span>
                </div>
            )
        })

        return(
            <div className={classNemes} key={id}>
                <img src={item.src} alt={item.alt} />
                <textarea type="text" placeholder="Заметка..." />
                {buttons}  
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

