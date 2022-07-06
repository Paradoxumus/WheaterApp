import { useEffect, useState } from 'react';
const lat = '54.22698';
const lon = '49.56846';


const API_key = "688f3cfe6eb6211b3e466e410b5a1c4a";
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric&lang=ru`
const url1 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric&lang=ru`

async function GetTodatInfo() {
    const recponse = await fetch(url)
    return recponse
    }


export  {GetTodatInfo};