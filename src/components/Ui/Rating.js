import React, { useEffect, useState } from 'react';

const Rating = ({ count,  inActiveColor, value, size, activeColor, onChangeStar }) => {
    const star = Array.from({ length: count }, () => "★");
    const onHandlerStarVal = (value)=>{
        onChangeStar(value + 1);
    }
    return (
        <><h5>Rating</h5>
            {star.map((star,index) => {
             let styleColor = inActiveColor
            if(value > index){
                styleColor = activeColor
            }
                return (<span onClick={()=>onHandlerStarVal(index)} style={{ color: styleColor, width: size, height: size, fontSize: size }}>{star}</span>)
            })}
        </>
    )
}

export default Rating