import React from 'react';

export default function Field({type, name, value, handleOnChnage}){
        return(
            <>
            <h5>Field</h5>
            <input type={type} name={name} value={value} onChange={handleOnChnage}/>
            </>
        )
}