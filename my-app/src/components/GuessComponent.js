import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const GuessComponent = ({ geo_guess, setGeo, setIsCorrect, setIsPicked }) => {
  const handleAnswerQuestion = () => {
    setIsCorrect(true);
    setIsPicked(false);
    setGeo(geo_guess.slice(0, -1));
  };

  return (
    <div style={{ paddingTop: "4rem" }}>
      <h3>
        Hmm 🤔... Tu elección sugiere que vives en
        <strong> {geo_guess[geo_guess.length - 1]}</strong>. Es correcto?
      </h3>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <Button variant="contained" onClick={handleAnswerQuestion}>
          Si
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            setIsCorrect(false);
          }}
        >
          No
        </Button>
      </Stack>
    </div>
  );
};

export default GuessComponent;
