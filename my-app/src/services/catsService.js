import axios from "axios";

const cats_get = async () => {
  try {
    const cats = await axios.get(
      "https://api.thecatapi.com/v1/images/search?limit=10"
    );
    return cats.data.map((c) => c.url);
  } catch (error) {
    console.log(error);
  }
};

export default cats_get;
