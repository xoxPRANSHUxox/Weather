import React, { useEffect, useState, useCallback } from "react";
import background from "../../src/components/images/background.jpg"

export default function TempApp() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Delhi");

  const fetchApi = useCallback(async () => {
    try {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/weather?city=${search}`,
        {
          method: "GET",
          headers: {
            "X-Api-Key": "PzhrpC7hz4bC3rNx3q1cVA==K3rIbOKvqaDymNMY",
          },
        }
      );
      const data = await response.json();
      setCity(data);
      return data;
    } catch (error) {
      console.error("Error:", error);
      setCity(null); // Reset city state in case of an error
      return null; // Return null in case of an error
    }
  }, [search]);

  useEffect(() => {
    fetchApi().then((data) => {
      if (!data) {
        console.log("Failed to fetch data.");
      }
    });
  }, [fetchApi]);

  return (
    <div>
      <img src={background} alt="background"/>
      <section className="main">
        <h1 className="heading">Your Weather App</h1>
        <div className="input">
          <input
            type="search"
            placeholder="Search for your city"
            className="inputData"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>

        {!city ? (
          <p>No Data found</p>
        ) : (
          <div className="info container">
            <div className="first">
              <h1 className="min_temp">
                {" "}
                <i className="fa-solid fa-temperature-arrow-down"></i> Minimum
                Temperature :- {city.min_temp}
              </h1>
              <h1 className="temp">Temperature :- {city.temp}</h1>
              <h1 className="max_temp">
                <i className="fa-solid fa-temperature-arrow-up"></i>
                Maximum Temperature :- {city.max_temp}
              </h1>
            </div>
            <div className="second">
              <h1 className="sunRise">
                <i className="fa-solid fa-sun sunAnimation"></i> Sunrise :-{" "}
                {city.sunrise}
              </h1>
              <h1 className="location">{search}</h1>
              <h1 className="sunSet">
                <i className="fa-solid fa-sun sunAnimation"></i> SunSet :-{" "}
                {city.sunset}
              </h1>
            </div>

            <div className="third">
              <h1 className="windDegree">
                <i className="fa-solid fa-wind"></i> Wind Degree :-{" "}
                {city.wind_degrees}
              </h1>
              <h1 className="windSpeed">
                <i className="fa-solid fa-wind"></i> Wind Speed :-{" "}
                {city.wind_speed}
              </h1>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
