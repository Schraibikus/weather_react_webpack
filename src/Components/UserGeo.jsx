import { Button } from "./Button/Button";
import { KEY } from "../App";
import { useState } from "react";
import { CardWeather } from "./CardWeather/CardWeather";

export const UserGeo = () => {
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState("");
  const [description, setDescription] = useState("");
  const [srcIcon, setSrcIcon] = useState("");
  const [pressure, setPressure] = useState("");
  const [humidity, setHumidity] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");

  const error = () => {
    alert("Невозможно получить ваше местоположение");
  };

  const success = async (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${KEY}&units=metric&lang=RU`
    );
    const result = await response.json();
    setCity(result.name);
    setTemp(result.main.temp);
    setDescription(result.weather[0].description);
    setSrcIcon(result.weather[0].icon);
    setPressure(result.main.pressure);
    setHumidity(result.main.humidity);
    setWindSpeed(result.wind.speed);
    setSunrise(result.sys.sunrise);
    setSunset(result.sys.sunset);
  };

  const getUserGeo = () => {
    if (!navigator.geolocation) {
      alert("Geolocation не поддерживается вашим браузером");
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  };

  return (
    <>
      <Button onClick={getUserGeo}>SearchGeo</Button>
      <CardWeather
        city={city}
        temp={temp}
        description={description}
        srcIcon={srcIcon}
        pressure={pressure}
        humidity={humidity}
        windSpeed={windSpeed}
        sunset={sunset}
        sunrise={sunrise}
      />
    </>
  );
};
