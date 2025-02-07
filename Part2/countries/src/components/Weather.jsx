const icons = import.meta.glob("/src/assets/weather-icons/*.png", {
  eager: true,
});

const Weather = ({ weather, capital }) => {
  const iconurl =
    icons[`/src/assets/weather-icons/${weather[0].current.icon_num}.png`]
      ?.default || "";
  console.log("weather component", weather[0].current.temperature);
  return (
    <>
      <h1>Weather in {capital}</h1>
      <p> Temperature {weather[0].current.temperature} Celcius</p>
      <p>{weather[0].current.icon}</p>
      <img src={iconurl} alt="" />
      <p>Wind {weather[0].current.wind.speed}</p>
    </>
  );
};

export default Weather;
