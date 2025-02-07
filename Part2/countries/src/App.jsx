import { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/Search";
import ResultData from "./components/ResultData";

function App() {
  const [value, setValue] = useState("");
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState([]);
  const [data, setData] = useState([]);
  const [weather, setWeather] = useState([]);
  const APIKEY = import.meta.env.VITE_API_KEY;
  const [capital, setCapital] = useState("");

  // Request all the countries from the API
  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => {
        setCountries(response.data);
      });
  }, []);

  // Request the country data from the API
  useEffect(() => {
    if (value) {
      const result = countries.filter((c) =>
        c.name.common.toLowerCase().includes(value.toLowerCase())
      );
      if (result.length > 10) {
        setData(result);
      } else if (result.length === 1) {
        axios
          .get(
            `https://studies.cs.helsinki.fi/restcountries/api/name/${result[0].name.common}`
          )
          .then((response) => {
            setData([response.data]);
            console.log("response", response.data.capital[0]);
            setCapital(response.data.capital[0]);
            console.log("capital", capital);
          });
        setCountry("");
      } else {
        setData(result);
      }
    }
  }, [value]);

  // Request the weather data from the API
  useEffect(() => {
    if (capital) {
      axios
        .get(
          `https://www.meteosource.com/api/v1/free/point?place_id=${capital
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(
              /\s+/g,
              "-"
            )}&sections=current&timezone=UTC&language=en&units=metric&key=${APIKEY}`
        )
        .then((response) => {
          console.log("weather", response.data);
          setWeather([response.data]);
        });
    }
  }, [capital]);

  return (
    <>
      <Search value={value} setValue={setValue} />
      <ResultData
        data={data}
        setValue={setValue}
        weather={weather}
        capital={capital}
      />
    </>
  );
}

export default App;
