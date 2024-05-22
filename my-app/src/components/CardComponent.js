import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

const CardComponent = ({ img_file, setIsPicked }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        width: 250,
        height: 250,
        m: 2.5,
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
      }}
    >
      <CardActionArea
        onClick={() => {
          setIsPicked(true);
        }}
      >
        <CardMedia
          component="img"
          width="250"
          height="250"
          image={img_file}
          alt={img_file}
        />
      </CardActionArea>
    </Card>
  );
};

export default CardComponent;
