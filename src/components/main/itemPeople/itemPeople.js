import React from 'react';

const ItemsPeople = ({peoples, btns, onToogleAction}) => {
    
    const people = peoples.map(item => {
        
        const {id, killed, believe, dontBelive} = item;
    
        let classNemes = "item-people";

        if (killed) {
            classNemes = "item-people killed";
            console.log(classNemes.length)
        };

        if (believe) {
            classNemes = "item-people believe";
        };

        if (dontBelive) {
            classNemes = "item-people dontBelive";
        };

        const buttons = btns.map(btn => {
            const {key, alt, action, description} = btn;  
            
            return(
                <div className="action-player" key={key}>
                    <btn.name
                        alt={alt}
                        className="icons-item"
                        onClick={() => onToogleAction(id, action)} 
                        />
                    <span className="killed-palyer-title">{description}</span>
                </div>
            )
        })
    
        return (
            <div className={classNemes} key={id}>
                <img src={item.src} alt={item.alt} />
                <textarea type="text" placeholder="Заметка..." />
                {buttons}  
            </div>
        );     
    });

    return(
        <>
            {people}
        </>
    );
}

export default ItemsPeople;