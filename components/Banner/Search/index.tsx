// @flow
import * as React from 'react';
import { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa';
import Api from '../../../services/axios-config';

const date: Date = new Date();

const Search = ({ DataSearch, getData }: any) => {
  const [City, setCity] = useState({
    name: 'City',
  });
  const [Search, setSearch] = useState('');
  const [Date, setDate] = useState('');

  useEffect(() => {
    let month = '';

    switch (date.getMonth()) {
      case 0:
        month = 'january';
        break;
      case 1:
        month = 'february';
        break;
      case 2:
        month = 'march';
        break;
      case 3:
        month = 'april';
        break;
      case 4:
        month = 'may';
        break;
      case 5:
        month = 'june';
        break;
      case 6:
        month = 'july';
        break;
      case 7:
        month = 'August';
        break;
      case 8:
        month = 'September';
        break;
      case 9:
        month = 'October';
        break;
      case 10:
        month = 'November';
        break;
      case 11:
        month = 'December';
        break;

      default:
        break;
    }
    setDate(`Today, ${month} ${date.getDate()}, ${date.getFullYear()}`);
  });

  return (
    <div className="Search">
      <div className="Title">
        <FaMapMarkerAlt />
        <div>
          <h2>{City.name}</h2>
          <p className="Date">{Date}</p>
        </div>
      </div>
      <div
        className="Input"
        onKeyUp={e => {
          if (e.key === 'Enter') {
            Api(Search).then(i => {
              setCity(i.data);
              DataSearch(i.data);
              getData(i.data);
            });
          }
        }}
      >
        <div className="Input_Main">
          <input
            type="text"
            placeholder="Search..."
            onChange={e => {
              setSearch(e.target.value);
            }}
          />
          <div
            className="Btn_icon"
            onClick={() => {
              Api(Search).then(i => {
                setCity(i.data);
                DataSearch(i.data);
                getData(i.data);
              });
            }}
          >
            <FaSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
