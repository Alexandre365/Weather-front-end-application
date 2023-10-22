// @flow
import * as React from 'react';
import { useEffect, useState } from 'react';
import {
  BsWind,
  BsGlobe,
  BsFillCloudPlusFill,
  BsFillCloudMinusFill,
  BsDropletFill,
  BsSpeedometer,
} from 'react-icons/bs';

const TodayOverview = ({ i }: any) => {
  return (
    <div className="TodayOverview">
      <h2>Today overview</h2>
      <div className="wrapper">
        <div className="Card_Wrapper box1">
          <div>
            <BsWind />
            <p>Speed</p>
          </div>
          <h3>
            {i.speed}
            <span>km/h</span>
          </h3>
        </div>
        <div className="Card_Wrapper_Mini ">
          <div>
            <BsFillCloudMinusFill />
            <p>minimum</p>
          </div>
          <h3>
            {i.min}
            <span className="°">°</span>
          </h3>
        </div>
        <div className="Card_Wrapper_Mini ">
          <div>
            <BsFillCloudPlusFill />
            <p>Maximum</p>
          </div>
          <h3>
            {i.max}
            <span className="°">°</span>
          </h3>
        </div>
        <div className="Card_Wrapper_Mini ">
          <div>
            <BsSpeedometer />
            <p>Pressure</p>
          </div>
          <h3>
            {i.pressure}
            <span>hPa</span>
          </h3>
        </div>
        <div className="Card_Wrapper_Mini ">
          <div>
            <BsDropletFill />
            <p>Humidity</p>
          </div>
          <h3>
            {i.humidity}
            <span>%</span>
          </h3>
        </div>
        <div className="Card_Wrapper_Mini ">
          <div>
            <BsGlobe />
            <p>Longitude</p>
          </div>
          <h3>
            {i.lon}
            <span></span>
          </h3>
        </div>
        <div className="Card_Wrapper_Mini ">
          <div>
            <BsGlobe />
            <p>Latitude</p>
          </div>
          <h3>
            {i.lat}
            <span></span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default TodayOverview;
