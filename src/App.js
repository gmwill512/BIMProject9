
import './App.css';
import { useContext } from 'react';
import { Store } from './Context';
import { useState,useEffect } from 'react';
import SideButtons from './SideButton';
import ErrorBarChart from './ErrorBarChart';
import Footers from './Footer';
import BottomButtons from './BottomButtons';
import Arrows from './Arrows';




function App() {
  const { Button1, setButton1, Button2, setButton2, Button3, setButton3 } = useContext(Store)

  useEffect(()=>{

  },[Button1, setButton1, Button2, setButton2, Button3, setButton3])
  return (
    <div className="App">
      <div className='topTitleContainer'>
        <h2>{`Mean CECD in Study Eyes Treated With Bimatoprost`}</h2>
        <h2>{`Implant 10 µg and Timolol Twice Daily (BID)`}<sup>20,c</sup></h2>
      </div>
      <div className='dataContainer'>
        <ErrorBarChart/>
         <SideButtons/> 
      </div>
      <BottomButtons/>
      <Footers/>
      <div className='containerForArrows'>
      <Arrows/>
      </div>
    </div>
  );
}

export default App;


