import React from 'react';

export const Formscreen = ({ title, Time, Image, Instructions, Ingerdients }) => {
    return (
        <div style={{margin : "25px"}}>
            <h1  style={{color : "#EC255A"}}>{title}</h1>
            <p>{Time} min</p>
            <img src={Image} alt="dish" style={{width: '250px', height: '250px'}}/>
            <p>Ingridients : {Ingerdients}</p>
            <p>Instructions : {Instructions}</p>
        </div>
    )
}