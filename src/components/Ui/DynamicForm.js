import React, { useState } from 'react';

const DynamicForm = () => {
    const [inputFields, setInputFields] = useState([
        { firstName: '', lastName: '', subject:'', id:Math.random() }
    ])
    const [subjects, setSubjects] = useState(['CSS','HTML'])
    const handleOnChange = (index, id,e)=>{
        const values = [...inputFields];
        console.log(index,e.target.name);
        values[index][e.target.name] = e.target.value;
        setInputFields(values);
    }
   
    const addMoreFields = ()=>{
        setInputFields([...inputFields, { firstName: '', lastName: '', subject:['CSS','HTML'], id:Math.random() }])
    }
    const deleteFields = (id)=>{
        const values = [...inputFields];
        setInputFields(values.filter(field=> field.id !== id));
    }
    const onSubmitHandler = ()=>{
        console.log(inputFields)
    }
    return (
        <>
            <h5>Dynamic Form</h5>
            {
                inputFields.map((field,index) => {
                    return (
                        <div className='field'>
                            <input type='text' placeholder='First Name' name='firstName' value={field.firstName} onChange={(e)=>handleOnChange(index,field.id,e)} />
                            <input type='text' placeholder='Last Name' name='lastName' value={field.lastName} onChange={(e)=>handleOnChange(index,field.id,e)} />
                           <select name='subject' onChange={(e)=>handleOnChange(index,field.id,e)}>
                               <option value=''>Select Subject</option>
                               {subjects.map(sub=> <option value={sub}>{sub}</option>)}
                           </select>
                            <button onClick={()=>deleteFields(field.id)}>Delete</button>
                            <button onClick={addMoreFields}>Add</button>
                        </div>
                    )
                })
            }
            <button onClick={onSubmitHandler}>Submit</button>

        </>
    )
}

export default DynamicForm