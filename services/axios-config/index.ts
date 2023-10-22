import axios from 'axios';

const Api = async (id: string): Promise<any> => {
  return await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${id}&units=metric&appid=1b9c16656ed9617c06cbc5f5c09d016e&`,
  );
};

export default Api;
