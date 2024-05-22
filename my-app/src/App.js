import "./App.css";
import ContentContainer from "./components/ContentContainer";
import CardComponent from "./components/CardComponent";
import GuessComponent from "./components/GuessComponent";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const img_file = ["cat1", "cat2"];
  const [geolocation, setGeo] = useState("");
  const [isCorrect, setIsCorrect] = useState(true);
  const [isPicked, setIsPicked] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const fetchIp = async () => {
      try {
        const res = await axios.get(
          "https://geo-adivinyador.onrender.com/api/get_ip"
        );
        const continent_api = await axios.get(
          `https://restcountries.com/v3.1/alpha/${res.data.country}`
        );
        const geo = res.data;
        geo["continent"] = continent_api.data[0].subregion;
        geo["country"] = continent_api.data[0].name.common;
        setGeo([geo.city, geo.region, geo.country, geo.continent]);
      } catch (error) {
        console.log("Error fetching ip address: ", error);
      }
    };
    fetchIp();
  }, []);

  return (
    <div className="App">
      <ContentContainer isFinished={isFinished}>
        {isFinished ? (
          <>
            <h3>Eso fue facíl!😸.</h3>
          </>
        ) : !isCorrect ? (
          <h3>Se hizo lo que se pudo 😿.</h3>
        ) : !isPicked ? (
          <>
            <CardComponent img_file={img_file[0]} setIsPicked={setIsPicked} />
            <CardComponent img_file={img_file[1]} setIsPicked={setIsPicked} />
          </>
        ) : (
          <GuessComponent
            geo_guess={geolocation}
            setGeo={setGeo}
            setIsCorrect={setIsCorrect}
            setIsPicked={setIsPicked}
            setIsFinished={setIsFinished}
          />
        )}
      </ContentContainer>
    </div>
  );
}

export default App;
