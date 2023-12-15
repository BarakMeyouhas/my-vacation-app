import express, { NextFunction, Request, Response } from "express";
import { allGames } from "../Logic/AllGames";
const gameRouter = express.Router();

gameRouter.get(
    "/allGames",
    async (request: Request, response: Response, next: NextFunction) => {
        const data = await allGames();
        console.log(data);
        response.status(200).json(data)
        // allGames().then(function(gameResults){
        //     console.log(gameResults)
        //     response.status(200).json(gameResults)
        // })
    }
);

export default gameRouter;