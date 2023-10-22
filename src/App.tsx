import { useState } from 'react';
import './App.css';
import Banner from '../components/Banner';
import TodayOverview from '../components/TodayOverview/index';

function App() {
  const [DataTodayOverview, setDataTodayOverview] = useState({
    speed: 0,
    min: 0,
    max: 0,
    pressure: 0,
    humidity: 0,
    lon: 0,
    lat: 0,
  });

  const GetData = (i: any) => {
    setDataTodayOverview({
      speed: i.wind.speed,
      min: i.main.temp_min,
      max: i.main.temp_max,
      pressure: i.main.pressure,
      humidity: i.main.humidity,
      lon: i.coord.lon,
      lat: i.coord.lat,
    });
  };

  return (
    <div className="Container">
      <div className="Box">
        <Banner GetData={GetData} />
        <TodayOverview i={DataTodayOverview} />
      </div>
    </div>
  );
}

export default App;
