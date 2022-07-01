import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const lat = '54.22698';
const lon = '49.56846';


const API_key = "688f3cfe6eb6211b3e466e410b5a1c4a";
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric&lang=ru`
function App() {

  const [cloudDescription, setcloudDescription] =  useState('пусто')

  useEffect(() => {
    const fetchData = async () => {
    const recponse = await fetch(url)
    if(recponse.ok){
      const json = await recponse.json()
      setcloudDescription(json.weather[0].description)
    }
    else{
      console.error('Ошибка')
    }
  }
  fetchData();
  }, [])

  return (
    <div className="App">
      {cloudDescription}
    </div>
  );
}

export default App;
