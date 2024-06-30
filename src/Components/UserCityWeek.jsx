import { Button } from "./Button/Button";
import { Input } from "./Input";
import { useEffect, useState } from "react";
import { KEY } from "../App";
import { CardWeatherWeek } from "./CardWeather/CardWeatherWeek";

export const UserCityWeek = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const changeCity = (e) => {
    setValue(e.target.value);
    setValueError("");
  };
  const [valueError, setValueError] = useState(
    "Поле поиска не может быть пустым"
  );
  const [formValid, setFormValid] = useState(false);
  useEffect(() => {
    if (valueError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [valueError]);

  const getUserCity = async () => {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=1&appid=${KEY}`
    );
    const coords = await response.json();
    const latitude = coords[0].lat;
    const longitude = coords[0].lon;
    getWeather(latitude, longitude, 40);
  };

  const getWeather = async (latitude, longitude, count) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?&appid=a7d9b4024c4d5af4afcf1a2f5bbfeb73&cnt=${count}&lat=${latitude}&lon=${longitude}&units=metric&lang=RU`
    );
    const result = await response.json();
    setCity(result.city.name);
    setData(result.list);
  };

  return (
    <>
      <form>
        {valueError && <div className="error">{valueError}</div>}
        <Input value={value} onChange={changeCity} />
        <Button disabled={!formValid} onClick={getUserCity}>
          Найти
        </Button>
      </form>
      <CardWeatherWeek city={city} data={data} />
    </>
  );
};
