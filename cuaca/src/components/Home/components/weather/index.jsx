import { Fragment } from "react";
import transs from "../Region-Weather/transs.png";
import transc from "../Region-Weather/transc.png";
import transr from "../Region-Weather/transr.png";
import trans from "../Region-Weather/trans.png";
const Weather = () => {
  return (
    <Fragment>
        <div className="w-full">

      <div className="flex items-center  ">
        <div className="p-4 items-center flex flex-col justify-center border-r-2">
          <h1 className=" font-bold">Thu 23 August</h1>
          <img className="w-1/2" src={transr} />
          <h1 className="  font-bold">Sunny</h1>
        </div>
        <div className="p-4 items-center flex flex-col justify-center border-r-2">
          <h1 className=" font-bold">Fri 24 August</h1>
          <img className="w-1/2" src={transs} />
          <h1 className=" font-bold">Clody</h1>
        </div>
        <div className="p-4 items-center flex flex-col justify-center border-r-2">
          <h1 className=" font-bold">Sat 25 August</h1>
          <img className="w-1/2" src={trans} />
          <h1 className=" font-bold">Rain</h1>
        </div>
        <div className="p-4 items-center flex flex-col justify-center border-r-2">
          <h1 className=" font-bold">Sun 26 August</h1>
          <img className="w-1/2" src={transc} />
          <h1 className=" font-bold">Heavy Rain</h1>
        </div>
      </div>
        </div>
    </Fragment>
  );
};

export default Weather;
