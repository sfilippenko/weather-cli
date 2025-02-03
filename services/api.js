import {getStorageValues} from "./storage.js";
import axios from "axios";

export const getWeather = async () => {
  const params = await getStorageValues();
  if (params.city && params.token) {
    const geoResponse = await axios.get(`http://api.openweathermap.org/geo/1.0/direct`, {
      params: {
        q: params.city,
        limit: 1,
        appid: params.token
      },
    })
    const lat = geoResponse.data?.[0]?.lat;
    const lon = geoResponse.data?.[0]?.lon;

    if (lat !== undefined && lon !== undefined) {
      const weatherResponse = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
          lat,
          lon,
          appid: params.token,
          units: 'metric',
          lang: 'ru',
        }
      });
      return weatherResponse.data;
    } else {
      throw new Error('Город невалиден');
    }
  }
}