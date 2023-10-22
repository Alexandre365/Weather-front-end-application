import React from 'react';
import { useState } from 'react';
import CitySvg from '../../public/logo.png';
import Search from './Search/index';

const Banner = ({ GetData }: any) => {
  const [Data, setData] = useState({
    temp: 0,
    description: '',
  });

  const SetData = (i: any) => {
    setData({
      temp: i.main.temp,
      description: i.weather[0].description,
    });
  };
  return (
    <div className="Banner">
      <Search DataSearch={SetData} getData={GetData} />
      <div className="Img_temperature">
        <img src={CitySvg} alt="" />
        <div className="Card_temperature">
          <div className="temperature">
            <div>
              <h3>{Number(Data.temp).toFixed(0)}</h3>
              <span>°</span>
            </div>
            <p>{Data.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
