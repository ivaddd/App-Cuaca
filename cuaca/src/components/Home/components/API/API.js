import { useState, useEffect, Fragment } from "react";
import Select from "react-select";

const API = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [pilihBenua, setPilihBenua] = useState("");

  const options = [
    { value: "asia", label: "asia" },
    { value: "americas", label: "americas" },
    { value: "europe", label: "europe" },
    { value: "oceania", label: "oceania" },
    { value: "africa", label: "africa" },
  ];

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, []);

  useEffect(() => {
    const filterRegion = pilihBenua
      ? countries.filter(
          (country) =>
            country.region.toLowerCase() === pilihBenua.toLocaleLowerCase()
        )
      : countries;
    setFilteredCountries(filterRegion);
  }, [pilihBenua, countries]);

  useEffect(() => {
    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCountries(filtered);
  }, [searchTerm, countries]);

  return (
    <Fragment>
      <div className="p-4 h-screen overflow-hidden">
        <h1 className="text-2xl font-bold mb-4 text-center">Country</h1>
        <div className="flex justify-between">
          <input
            type="text"
            className="p-2 p1-5 rounded mb-4 w-2/5"
            placeholder="Searchcountry "
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Select
            className="p-2  rounded mb-4 w-2/5"
            options={options}
            placeholder="Region"
            value={pilihBenua}
            onChange={(y) => setPilihBenua(y.value)}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredCountries.length === 0 ? (
            <p className="text center w-full">not found</p>
          ) : (
            filteredCountries.map((country, index) => (
              <div key={index} className="border p-4 flex flex-col">
                <div>
                  <img
                    src={country.flags.png}
                    alt={`Flag of ${country.name.common}`}
                    className="w-full h-32"
                  />
                </div>
                <div className="text-left text-sm">
                  <p className="font-semibold pb-2 pt-1">
                    <strong>Country: </strong>
                    {country.name.common}
                  </p>
                  <p>
                    <strong>Region: </strong>
                    {country.region}
                  </p>
                  <p>
                    <strong>Population: </strong>
                    {country.population}
                  </p>
                  <p>
                    <strong>Capital: </strong>
                    {country.capital}
                  </p>
                </div>
              </div>
            ))
          )}
              
        </div>
              
      </div>
    </Fragment>
  );
};

export default API;
