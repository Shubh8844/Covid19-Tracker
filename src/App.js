import React, { useEffect, useState } from "react";
import "./styles.css";
import Cards from "./Cards.js";
import Chart from "./Chart.js";
import CountryPicker from "./CountryPicker.js";
import axios from "axios";

export default function App() {
  const url = "https://covid19.mathdro.id/api";

  const [confirmed, setConfirmed] = useState({});
  const [recovered, setRecovered] = useState({});
  const [deaths, setDeaths] = useState({});
  const [date, setDate] = useState("");
  const [dailyData, setDailyData] = useState([]);
  const [country, setCountry] = useState([]);
  const [singleCountry, setSingleCountry] = useState("");

  const fetchData = async (country) => {
    let changebleUrl = url;

    if (country) {
      changebleUrl = `${url}/countries/${country}`;
    }
    console.log(changebleUrl);
    const {
      data: { confirmed, recovered, deaths, lastUpdate }
    } = await axios.get(changebleUrl);
    setConfirmed(confirmed);
    setDeaths(deaths);
    setRecovered(recovered);
    setDate(lastUpdate);
  };

  useEffect(() => {
    const fetchCountry = async () => {
      const {
        data: { countries }
      } = await axios.get(`${url}/countries`);
      const modifiedCountry = countries.map((country) => country.name);
      setCountry(modifiedCountry);
    };
    fetchCountry();
  }, [setCountry]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const fetchDailyData = async () => {
      const { data: data } = await axios.get(`${url}/daily`);
      const modifiedData = data.map((dailyData) => ({
        confirmed: dailyData.confirmed.total,
        deaths: dailyData.deaths.total,
        date: dailyData.reportDate
      }));
      setDailyData(modifiedData);
    };
    fetchDailyData();
  }, [country]);

  const handleCountry = async (country) => {
    fetchData(country);
    setSingleCountry(country);
  };
  //console.log(singleCountry)
  return (
    <div className="App">
      <img
        className="image"
        src="https://i.ibb.co/7QpKsCX/image.png"
        alt="COVID-19"
      />
      <Cards
        confirmed={confirmed}
        recovered={recovered}
        date={date}
        deaths={deaths}
      />
      <CountryPicker countrylist={country} handleCountry={handleCountry} />
      <Chart
        dailyData={dailyData}
        confirmed={confirmed}
        recovered={recovered}
        date={date}
        deaths={deaths}
        country={singleCountry}
      />
    </div>
  );
}
