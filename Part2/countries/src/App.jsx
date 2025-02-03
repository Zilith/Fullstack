import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Search from "./components/Search";
import ResultData from "./components/ResultData";

function App() {
  const [value, setValue] = useState("");
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState([]);
  const [data, setData] = useState([]);

  // Request all the countries from the API
  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => {
        setCountries(response.data);
      });
  }, []);

  useEffect(() => {
    if (value) {
      console.log("useEffect", country);
      const result = countries.filter((c) =>
        c.name.common.toLowerCase().includes(value.toLowerCase())
      );
      console.log("result", result);
      if (result.length > 10) {
        console.log("Too many matches, specify another filter", result);
        setData(result);
      } else if (result.length === 1) {
        axios
          .get(
            `https://studies.cs.helsinki.fi/restcountries/api/name/${result[0].name.common}`
          )
          .then((response) => {
            console.log("response", response.data);
            setData([response.data]);
          });
        setCountry("");
      } else {
        setData(result);
      }
    }
  }, [value]);



  return (
    <>
      <Search value={value} setValue={setValue} />
      <ResultData data={data} />
    </>
  );
}

export default App;
