import classes from "./CardWeather.module.css";

export const CardWeatherWeek = ({ city, data }) => {
  const filteredData = data.filter((day, index) => index % 8 === 0);

  return (
    <div>
      {filteredData.length > 0 && (
        <div className={classes.container}>
          <h1 className={classes.card__cityName}>{city}</h1>
          {filteredData.map((dayData, index) => {
            const dateValue = new Date(dayData.dt * 1000);
            const dayOfWeek = dateValue.toLocaleString("ru", {
              weekday: "long",
            });
            const dayOfMonth = dateValue.getDate();
            const month = dateValue.toLocaleString("ru", { month: "long" });

            return (
              <ul className={classes.card__list} key={index}>
                <li
                  className={classes.card__item}
                >{`${dayOfWeek} ${dayOfMonth} ${month}`}</li>
                <img
                  src={`https://openweathermap.org/img/w/${dayData.weather[0].icon}.png`}
                  alt="иконка погоды"
                />
                <li className={classes.card__item}>
                  <span>{Math.round(dayData.main.temp) + " C°"}</span>
                </li>
                <li className={classes.card__item}>
                  {dayData.weather[0].description}
                </li>
                <li className={classes.card__item}>
                  {"Атм.давление: "}
                  <span> {dayData.main.pressure} </span>
                  {"гПа"}
                </li>
                <li className={classes.card__item}>
                  {"Влажность: "}
                  <span> {dayData.main.humidity} </span>
                  {"%"}
                </li>
                <li className={classes.card__item}>
                  {"Скорость ветра: "}
                  <span> {dayData.wind.speed} </span>
                  {"м/с"}
                </li>
              </ul>
            );
          })}
        </div>
      )}
    </div>
  );
};
