import React from 'react';
import NavBar from "./Components/NavBar/NavBar";
import { action,originals,comedy,horror,romance,Adventure,Animation,Fantasy,Mystery,ScienceFiction } from './urls';
import './App.css';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
function App() {
  return (
    <div className="App">
    <NavBar/>
    <Banner  />
    <RowPost url={originals} title ='Netflix Originals' />
    <RowPost url={action} title ='Action' isSmall />
    <RowPost url={comedy} title ='Comedy Blockbusters' isSmall />
    <RowPost url={Adventure} title ='Adventure ' isSmall />
    <RowPost url={Animation} title ='Animation' isSmall />
    <RowPost url={Fantasy} title ='Fantasy' isSmall />
    <RowPost url={Mystery} title ='Mystery' isSmall />
    <RowPost url={ScienceFiction} title ='Science Fiction' isSmall />
    <RowPost url={romance} title ='Romance Movies' isSmall />
    <RowPost url={horror} title ='Horror Movies' isSmall />
  
    </div>
  );
}

export default App;
