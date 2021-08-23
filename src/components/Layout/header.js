import React,{useState} from 'react';
import { NavLink  } from 'react-router-dom';
import { SearchContext } from '../../Context/SearchContext';

export default function AppHeader({onSearch}){
    const [serachQuery,setSearchQuery] = useState();


    return(
        <header>
            <div className='d-flex'>
                Entertainment
                <div>
                    <ul className='menu'>
                        <li><NavLink exact  to='/' activeClassName="active" >Tranding</NavLink ></li>
                        <li><NavLink  to='/movies' activeClassName="active" >Movies</NavLink ></li>
                        <li><NavLink  to='/tv' activeClassName="active">TV Series</NavLink></li>
                        <li><a>Discover</a></li>
                    </ul>
                </div>
            </div>
            <div style={{flex:0.5}}>
                <input type='serach' onChange={(e)=> setSearchQuery(e.target.value)} onKeyUp={(e)=>onSearch(e.target.value)} placeholder="Search your favorite"/>
            </div>
        </header>
    )
}