import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

const CardComponent = ({ img_file }) => {
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
      <CardActionArea>
        <CardMedia
          component="img"
          height="100%"
          width="100%"
          image={require(`../static/${img_file}.png`)}
          alt={img_file}
        />
      </CardActionArea>
    </Card>
  );
};

export default CardComponent;
