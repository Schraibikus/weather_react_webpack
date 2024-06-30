import { Button } from "./Button/Button";
import { useState } from "react";
import { CardWeatherWeek } from "./CardWeather/CardWeatherWeek";

export const UserGeoWeek = () => {
  const [city, setCity] = useState("Энск");
  const [data, setData] = useState([]);

  const error = () => {
    alert("Невозможно получить ваше местоположение");
  };

  const success = async (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?&appid=a7d9b4024c4d5af4afcf1a2f5bbfeb73&cnt=40&lat=${latitude}&lon=${longitude}&units=metric&lang=RU`
    );
    const result = await response.json();
    setCity(result.city.name);
    setData(result.list);
  };

  const getUserGeoWeek = () => {
    if (!navigator.geolocation) {
      alert("Geolocation не поддерживается вашим браузером");
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  };

  return (
    <>
      <Button onClick={getUserGeoWeek}>SearchGeoWeek</Button>
      <CardWeatherWeek city={city} data={data} />
    </>
  );
};
