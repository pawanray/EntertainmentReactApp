import React, { useEffect, useState } from 'react';

const InputTags = ({onSelectedTags}) =>{
    const [tags, setTags] = useState([])
    const addTags = (e)=>{
        console.log('tags')
      if(e.target.value !== ""){
          setTags([...tags,e.target.value]);
          e.target.value = '';
      }
    }
    useEffect(()=>{
        onSelectedTags(tags)
    },[tags])
        return(
            <>
             <h5>Tags</h5>
             <div className='input-tags'>
                 <ul>
                     {
                         tags && tags.length > 0 && tags.map((tag,i)=> <li key={i}>{tag} <span onClick={(e)=>  setTags(tags.filter((item,index)=> index !== i))}>X</span></li>)
                     }
                     
                 </ul>
                 <input type='text' placeholder='Enter your tags' onKeyUp={(e) => e.key === "Enter" && addTags(e)}/>
             </div>
            </>
        )
}
export default InputTags