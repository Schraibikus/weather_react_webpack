import classes from "./CardWeather.module.css";

export const CardWeather = ({
  city,
  temp,
  description,
  srcIcon,
  pressure,
  humidity,
  windSpeed,
  sunrise,
  sunset,
}) => {
  const convertTime = (timeData) => {
    const timeUtc = new Date(timeData * 1000);
    timeUtc.setHours(timeUtc.getHours() + 3);
    const hours = timeUtc.getHours();
    const minutes = timeUtc.getMinutes();
    const time = `${hours}:${minutes < 10 ? "0" : ""}${minutes}`;
    return time;
  };
  if (city) {
    return (
      <>
        <ul className={classes.card__list}>
          <h1 className={classes.card__cityName}>{city}</h1>
          <li className={classes.card__item}>
            {"Температура воздуха: "}
            <span>{`${Math.round(temp) + " C°"}`}</span>
          </li>
          <li className={classes.card__item}>
            {"Погодные условия: "}
            <img
              src={`https://openweathermap.org/img/w/${srcIcon}.png`}
              alt="иконка погоды"
            />
            <span>{description}</span>
          </li>
          <li className={classes.card__item}>
            {"Атмосферное давление: "}
            <span> {pressure} </span>
            {"гПа"}
          </li>
          <li className={classes.card__item}>
            {"Влажность: "}
            <span> {humidity} </span>
            {"%"}
          </li>
          <li className={classes.card__item}>
            {"Скорость ветра: "}
            <span> {windSpeed} </span>
            {"м/с"}
          </li>
          <li className={classes.card__item}>
            {"Восход:"}
            <span> {convertTime(sunrise)} </span>
          </li>
          <li className={classes.card__item}>
            {"Закат:"}
            <span> {convertTime(sunset)} </span>
          </li>
        </ul>
      </>
    );
  }
};
