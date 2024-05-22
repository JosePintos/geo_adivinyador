import axios from "axios";

const geolocation_formatted = async () => {
  try {
    const geo_from_ip = await axios.get(
      "https://geo-adivinyador.onrender.com/api/get_ip"
    );
    const continent_api = await axios.get(
      `https://restcountries.com/v3.1/alpha/${geo_from_ip.data.country}`
    );
    const geo = geo_from_ip.data;
    geo["continent"] = continent_api.data[0].subregion;
    geo["country"] = continent_api.data[0].name.common;
    return [geo.city, geo.region, geo.country, geo.continent];
  } catch (error) {
    console.log(error);
  }
};

export default geolocation_formatted;
