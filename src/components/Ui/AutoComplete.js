import React, { useEffect, useState, useRef } from 'react';

const AutoComplete = ({ data, onSelectedValue }) => {
    const [options, setOptions] = useState([]);
    const [display, setDisplay] = useState(false);
    const [serach, setSerach] = useState('');
    const wrapperRef = useRef(null);
    useEffect(() => {
        setOptions(data)
    }, [data])

    const onSerach = (e) => {
        setSerach(e.target.value);
    }

    useEffect(()=>{
        document.addEventListener('mousedown',onHandleOutsideClick);
        return ()=>{
            document.removeEventListener('mousedown',onHandleOutsideClick);
        }
    },[])

    const onHandleOutsideClick = (e)=>{
     const {current} = wrapperRef;
     if(current && !current.contains(e.target)){
         setDisplay(false)
     }
   
    }
    const  onClickListItem = (val)=>{
        setSerach(val.title);
        onSelectedValue(val)
        setDisplay(false)
    }
    return (
        <>
            <h5>AutoComplete</h5>
            <input type='text' placeholder='Type here' value={serach} onClick={(e) => setDisplay(true)} onChange={(e) => onSerach(e)} />
            {
                display && (<div className='list' ref={wrapperRef}>
                    {
                        options.filter(item => item.title.toLowerCase().indexOf(serach.toLowerCase()) > -1).map(option => <div onClick={(e) => onClickListItem(option)}>{option.title}</div>)
                    }
                </div>)
            }
            <div>
            </div>
        </>
    )
}

export default AutoComplete