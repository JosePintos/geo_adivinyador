import "./App.css";
import ContentContainer from "./components/ContentContainer";
import CardComponent from "./components/CardComponent";
import GuessComponent from "./components/GuessComponent";
import { useEffect, useState } from "react";
import cats_get from "./services/catsService";
import geolocation_formatted from "./services/geolocationService";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function App() {
  const [geolocation, setGeo] = useState("");
  const [isCorrect, setIsCorrect] = useState(true);
  const [isPicked, setIsPicked] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [imgUrls, setImgUrls] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchInitInfo = async () => {
      const geoloc = await geolocation_formatted();
      const cats_imgs = await cats_get();
      setGeo(geoloc);
      setImgUrls(cats_imgs);
      setIsLoading(false);
    };
    fetchInitInfo();
  }, []);

  useEffect(() => {
    if (isPicked) {
      setImgUrls(imgUrls.slice(2, imgUrls.length));
    }
  }, [isPicked]);

  return (
    <div className="App">
      <ContentContainer isFinished={isFinished}>
        {isLoading ? (
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        ) : isFinished ? (
          <>
            <h3>Eso fue facíl!😸.</h3>
          </>
        ) : !isCorrect ? (
          <h3>Se hizo lo que se pudo 😿.</h3>
        ) : !isPicked ? (
          <>
            <CardComponent img_file={imgUrls[0]} setIsPicked={setIsPicked} />
            <CardComponent img_file={imgUrls[1]} setIsPicked={setIsPicked} />
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
