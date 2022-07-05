import './App.css';
import { useEffect, useState } from 'react';
import SvgSelector from './SvgSelector';



const lat = '54.22698';
const lon = '49.56846';


const API_key = "688f3cfe6eb6211b3e466e410b5a1c4a";
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric&lang=ru`
function App() {

  const [cloudDescription, setcloudDescription] =  useState('пусто')
  const [DailyTemp, setDailyTemp] =  useState('пусто')
  const [City, setCity] =  useState('пусто')
  const [cloudDescriptionIcon, setcloudDescriptionIcon] =  useState('02d')

  useEffect(() => {
    const fetchData = async () => {
    const recponse = await fetch(url)
    if(recponse.ok){
      const json = await recponse.json()
      setCity(json.name)
      setcloudDescription(json.weather[0].description)
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
        <div className="cloudDescriptionIcon">
        <SvgSelector cssClass="cloudDescriptionIcon" code = "11d"/>
        </div>
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
