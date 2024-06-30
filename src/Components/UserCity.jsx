import { Button } from "./Button/Button";
import { Input } from "./Input";
import { useEffect, useState } from "react";
import { KEY } from "../App";
import { CardWeather } from "./CardWeather/CardWeather";

export const UserCity = () => {
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState("");
  const [description, setDescription] = useState("");
  const [srcIcon, setSrcIcon] = useState("");
  const [pressure, setPressure] = useState("");
  const [humidity, setHumidity] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");

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
    getWeather(latitude, longitude);
  };

  const getWeather = async (latitude, longitude) => {
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
    console.log(result);
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
