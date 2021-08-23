import React, {useState} from 'react';

const DataGrid = ({data})=>{
   
    const columns =  data[0] && Object.keys(data[0]);
    const hideColumns = ['id']
    return (
        <>
        <table cellPadding="0" cellSpacing='0'>
            <thead>
                <tr>{data[0] && columns.map(heading=> <th>{heading}</th>)}</tr>
            </thead>
            <tbody>
                {
                    data.map((row)=>(
                        <tr>
                        {columns.map(column=><td>{row[column]}</td>)}
                        </tr>
                    ))
                }
                <tr></tr>
            </tbody>
        </table>
        </>
    )
}

export default DataGrid