import './App.css';
import { useEffect, useState } from 'react';
import SvgSelector from './SvgSelector';
import {GetTodatInfo} from './API';
import Today from './Today';


function App() {

  const [cloudDescription, setcloudDescription] =  useState('пусто')
  const [DailyTemp, setDailyTemp] =  useState('пусто')
  const [City, setCity] =  useState('пусто')
  const [cloudDescriptionIcon, setcloudDescriptionIcon] =  useState('02d')

  function FirstLetterUp(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  useEffect(() => {
    const fetchData = async () => {
    const recponse = await fetch(GetTodatInfo())
    if(recponse.ok){
      const json = await recponse.json()
      setCity(json.name)
      setcloudDescription(FirstLetterUp(json.weather[0].description))
      setDailyTemp(Math.round(json.main.temp)+'°')
      setcloudDescriptionIcon(json.weather[0].icon)
    }
    else{
      console.error('Ошибка')
    }
  }
  fetchData();
  }, [])

  return (
    <div className="App">
      <div className='City'>
        {City}
      </div>
      <div className="MainMidle">
        <SvgSelector cssClass="cloudDescriptionIcon" code = "01d"/>
        <div className="MainTemp">
        {DailyTemp}
        </div>
      </div>
      <div className="cloudDescription">
        {cloudDescription}
      </div>
    </div>
    
  );
}

export default App;
