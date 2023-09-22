import { Fragment } from "react";
import Region from "../Region-Weather";
import Weather from "../weather";
import API from "../API/API";

const Home = () => {
  return (
    <Fragment>
      <Region />
      <Weather />
      <API />
    </Fragment>
  );
};

export default Home;
