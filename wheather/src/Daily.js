
import './App.css';
import Day from './Day';

function Daily({dailyWeather}) {
    var nameTime = new Date(0); // var устаревшая конструкция. И ты не используешь эту переменную
     if (!dailyWeather.length){
         return null  
     }

    return(
        <div>
            <div className="daily-Title">
                По дням
            </div>
            <div className='daily-list'>
                {dailyWeather.map((day) => {
                    return<Day
                    // key необходимый элемент при маппинге в реакт
                    dt={day.dt}
                    codeIcon={day.weather[0].icon}
                    temp = {day.feels_like.day}
                    tempNight = {day.feels_like.night}
                    />
                })}
            </div>
            
        </div>
    );
}

  
  export default Daily;