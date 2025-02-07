import Weather from "./Weather";

const TooManyMatches = () => <p>Too many matches</p>;

const CountryList = ({ countries, setValue }) => {
  const handleClick = (e) => {
    setValue(e.target.previousSibling.textContent);
  };
  return (
    <ul>
      {countries.map((c) => (
        <li key={c.name.common}>
          {c.name.common}
          <button onClick={handleClick}>show</button>
        </li>
      ))}
    </ul>
  );
};

const Country = ({ country }) => (
  <>
    <div>
      <h1>{country.name.common}</h1>
      <p>capital {country.capital}</p>
      <p>area {country.area}</p>
      <h2>Languages</h2>
      <ul>
        {Object.entries(country.languages).map(([key, value]) => (
          <li key={key}>{value}</li>
        ))}
      </ul>
    </div>
    <div>
      <img src={country.flags.png} alt={country.flags.alt} />
    </div>
  </>
);

const ResultData = ({ data, setValue, weather, capital }) => {
  return (
    <>
      <div>
        {data.length > 10 && <TooManyMatches />}
        {data.length === 1 && (
          <>
            <Country country={data[0]} />
            {weather.length === 1 && (
              <Weather weather={weather} capital={capital} />
            )}
          </>
        )}
        {data.length > 1 && data.length <= 10 && (
          <CountryList countries={data} setValue={setValue} />
        )}
      </div>
    </>
  );
};

export default ResultData;
