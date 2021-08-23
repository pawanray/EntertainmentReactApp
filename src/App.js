import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import DataGrid from './components/Ui/DataGrid';
import InputTags from './components/Ui/InputTags';
import AutoComplete from './components/Ui/AutoComplete';
import CheckList from './components/Ui/CheckList';
import DynamicForm from './components/Ui/DynamicForm';
import Rating from './components/Ui/Rating';
import Tabs from './components/Ui/Tabs';
import Field from './components/Ui/Field';
import Movies from './pages/movie/movies';
import Tranding from './pages/tranding/tranding';
import TvSeries from './pages/tv/tvSeries';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AppHeader from './components/Layout/header';
import { SearchContext } from './Context/SearchContext';

function App() {
  const [serachQ, setSearchQ] = useState()
  const onSearch = (serach)=>{
    setSearchQ(serach)
    console.log(serach,'ssss')
}
  return (
    <>
      <Router>
        <AppHeader onSearch={onSearch}/>
        <SearchContext.Provider value={serachQ}>
        <Switch>
          <Route exact path="/">
            <Tranding />
          </Route>
          <Route exact path="/movies">
            <Movies />
          </Route>
          <Route path="/tv">
            <TvSeries />
          </Route>
        </Switch>
        </SearchContext.Provider>
      </Router>
    </>
  );
}

export default App;
