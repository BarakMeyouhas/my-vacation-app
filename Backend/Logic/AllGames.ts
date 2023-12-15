import axios from "axios";

const gamesURL = "http://www.freetogame.com/api/games";

const allGames = async () => {
  try {
    const response = await axios.get(gamesURL);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export { allGames };
