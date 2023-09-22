import { Fragment, useEffect } from "react";
import { useState } from "react";
import Weather from "../weather/index";
import trans from "./trans.png";
import Select from "react-select";
import bdg from "../Nav/bdg.jpg";
import jkt from "../Nav/jkt.jpg";
import pbg from "../Nav/pbg.jpg";
import API from "../API/API.js";
import Nav from "../Nav/Nav";

const Region = () => {
  // const [city, setcity] = useState("Bandung");
  // const [currentWeather, setcurrentWeather] = useState("");

  // const DUMMY_DATA = [
  //   {
  //     city: "Bandung",
  //     suhu: "27°C",
  //     angin: "10km",
  //     humadity: "30%",
  //     gambar: bdg,
  //   },
  //   {
  //     city: "Jakarta ",
  //     suhu: "31°C",
  //     angin: "6km",
  //     humadity: "69%",
  //     gambar: jkt,
  //   },
  //   {
  //     city: "Palembang ",
  //     suhu: "28°C",
  //     angin: "8km",
  //     humadity: "54%",
  //     gambar: pbg,
  //   },
  // ];

  // label: "Bandung", suhu: "27", angin: "10km", humadity: "30%", gambar: "gedung sate" };
  const [search, setsearch] = useState("");

  const [currentWeather, setcurrentWeather] = useState({
    suhu: 37,
    kota: "bandung",
    feels_like: 35,
    cuaca: "berawan",
    desc: "sebagian berawan",
    icon: "03d",
    angin: 2,
    humidity: 34,
    negara: "ID",
    lat: -6.9039,
    l0n: 107.6186,
  });
  const [forecast, setforecast] = useState({});

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${currentWeather.lan}&lon=${currentWeather.lan}&appid=15b2a3909985cc3136879bdf5c35b9c7`
    )
      .then((res) => res.json())
      .then((result) => {
        setforecast(result);
      });
    console.log(forecast);
  }, [currentWeather]);
  const searchHandler = (e) => {
    e.preventDefault();
    if (search !== "") {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=15b2a3909985cc3136879bdf5c35b9c7&&units=metric`
      )
        .then((res) => res.json())
        .then((result) => {
          setcurrentWeather({
            ...currentWeather,
            suhu: result.main.temp,
            kota: result.name,
            feels_like: result.main.feels_like,
            cuaca: result.weather[0].main,
            desc: result.weather[0].description,
            icon: result.weather[0].icon,
            angin: result.wind.speed,
            humidity: result.main.humidity,
            negara: result.sys.country,
            lan: result.coord.lon,
            lan: result.coord.lat,
          });
          console.log(currentWeather);
        });
    }
  };

  // console.log(city);
  // useEffect(() => {
  //   DUMMY_DATA.map((isi) => {
  //     if (isi.city === city) {
  //       setcurrentWeather(isi);

  //     }
  //   });
  // }, [city]); //jika city di hapus maka akan sekali render||data ini akan di eksekusi (city) berdasarkan perubahan data dalam city di atas

  // // console.log(data);
  // const options = [
  //   { value: "Bandung", label: "Bandung" },
  //   { value: "Jakarta ", label: "Jakarta" },
  //   { value: "Palembang ", label: "Palembang" },
  // ];
  // //  const handlerOptions = (e) =>{
  // //     setKota (e.target.value)
  // //     console.log(e);
  //  }

  return (
    <Fragment>
      <Nav />
      <div className=" w-full">
        <div className="flex  justify-center items-center  ">
          <div className="flex flex-col  shadow-lg  rounded-lg w-11/12 my-2 overflow-hidden">
            <div className=" w-full  flex bg-sky-700 justify-between items-center px-1 py-1  ">
              <h1 className="text-4xl mb-1 pt-1 text-white ml-1 pb-1">
                Peramal
              </h1>

              <div className="items-center justify-center rounded-tr-lg w-2/5">
                <div className="py-2 px-2">
                  <div>
                    {/* <Select
                      options={options}
                      onChange={(y) => {
                        setcity(y.value);
                        console.log("ini y", y);
                      }}
                    /> */}

                    <input
                      type="text"
                      onChange={(e) => setsearch(e.target.value)}
                    ></input>
                    <button onClick={searchHandler}>search</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row     bg-sky-500">
              <div className="flex-col   gap-5 w-3/5  px-5  lg:px-10 pt-3">
                <div className=" text-white  border-b py-2">
                  <div className="border-b">
                    <h1 className="text-xl  text-white font-bold ">
                      {currentWeather.kota}
                    </h1>
                    <h1 className="text-sm  py-3">Today</h1>

                    <h2 className="text-1xl py-3">Wed 22 August</h2>
                  </div>

                  <div className="border-b">
                    <h1 className=" text-lg  lg:text-6xl ">
                      {currentWeather.suhu}°C
                    </h1>

                    <div className="flex my-2 mb">
                      <h3 className="text-sm lg:text-2xl flex items-center">
                        <span>
                          <img
                            className="w-14 h-14"
                            src={`http://openweathermap.org/img/w/${currentWeather.icon}.png`}
                            alt=""
                          />
                        </span>
                        {currentWeather.cuaca} or {currentWeather.desc}
                      </h3>
                    </div>
                  </div>

                  <h3 className="text-sm lg:text-xl pt-3">
                    {" "}
                    wind {currentWeather.angin} Kmh
                  </h3>

                  <h3 className="text-lg pt-2">
                    Humidlity:{currentWeather.humadity}
                  </h3>
                </div>
              </div>

              <div className="flex items-center justify-center w-2/5 bg-sky-700">
                <div className="text-center">
                  <div className="flex items-center justify-center">
                    <img
                      className=" w-full lg:w-40  "
                      src={`https://www.countryflagicons.com/FLAT/64/${currentWeather.negara}.png`}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Weather></Weather> */}
      {/* <API></API> */}
    </Fragment>
  );
};

export default Region;
