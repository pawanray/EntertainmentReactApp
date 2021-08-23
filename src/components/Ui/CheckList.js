import React, { useState } from 'react';

const CheckList = () => {
    const [users, setUsers] = useState([
        { name: 'Amit'},
        { name: 'Vijay' },
        { name: 'Vikas' }
    ])
    const checkboxHandler = (e) => {
        const { name, checked } = e.target;
        if (name === "All") {
            setUsers(users.map(user => {
                return { ...user, checked: checked }
            }))
        }
        else {
            setUsers(users.map(user => user.name === name ? { ...user, checked: checked } : user))
        }
    }
    return (
        <>
            <h5>Checklist</h5>
            <input type='checkbox' name='All' checked={users.every(user=>user.checked) ? true : false} onChange={checkboxHandler} /> All
            {users && users.map(user => <div> <input type='checkbox' checked={user?.checked ? true : false} onChange={checkboxHandler} name={user.name} />{user.name}</div>)}
        </>
    )
}

export default CheckList