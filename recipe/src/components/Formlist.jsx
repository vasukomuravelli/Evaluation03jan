import React from 'react';

export const Formlist = ({ title, Time, Image, id, getdata }) => {
    const handleClick = (id) => {
        getdata(id);
    }
    return (
        <div style={{display: 'flex',height : "max-content" ,justifyContent : "space-between", cursor: "pointer", padding: "7px", width: "350px", Color:"#faedf0", backgroundColor : "#292C6D"}} onClick={()=>handleClick(id)}>
            <div>
                <h3 style={{color : "#faedf0"}}>{title}</h3>
                <p style={{textAlign : "left"}}>{Time} min</p>
            </div>
            <img src = {Image} alt="items" style={{width: '60px', height: '60px'}}/>
        </div>
    )
}