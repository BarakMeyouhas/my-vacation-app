import express, { NextFunction, Request, Response } from "express";
import {
    addCat,
    addSong,
    deleteCatById,
    deleteSongById,
    getAllSongs,
    getCat,
    getSongById,
    updateSong,
} from "../Logic/SongsLogic";

const songRouter = express.Router();

songRouter.get(
    "/listSongs",
    async (request: Request, response: Response, next: NextFunction) => {
        console.log("in song route");
        return response.status(200).json(await getAllSongs());
    }
);

songRouter.get(
    "/songById/:id",
    async (request: Request, response: Response, next: NextFunction) => {
        const songID = +request.params.id;
        return response.status(200).json(await getSongById(songID));
    }
);

songRouter.delete(
    "/deleteById/:id",
    async (request: Request, response: Response, next: NextFunction) => {
        const songID = +request.params.id;
        await deleteSongById(songID);
        return response.status(200).json({});
    }
);

songRouter.post(
    "/addSong",
    async (request: Request, response: Response, next: NextFunction) => {
        const newSong = request.body;
        const result = await addSong(newSong);
        return response.status(201).json(`${result}`);
    }
);

songRouter.put(
    "/updateSong",
    async (request: Request, response: Response, next: NextFunction) => {
        const song = request.body;
        return response.status(201).json(await updateSong(song));
    }
);

songRouter.get(
    "/getCat",
    async (request: Request, response: Response, next: NextFunction) => {
        console.log("in category list");
        return response.status(200).json(await getCat());
    }
);

songRouter.post(
    "/addCat",
    async (request: Request, response: Response, next: NextFunction) => {
        const newCat = request.body;
        const result = await addCat(newCat);
        console.log("adding to category list");
        return response.status(201).json(`${result}`);
    }
);


songRouter.delete(
    "/deleteCatById/:id",
    async (request: Request, response: Response, next: NextFunction) => {
        const catID = +request.params.id;
        console.log(catID);
        await deleteCatById(catID);
        return response.status(200).json({});
    }
);

// songRouter.put(
//     "/updateCat",
//     async (request: Request, response: Response, next: NextFunction) => {
//         const category = request.body;
//         return response.status(201).json(await updateSong(category));
//     }
// );
export default songRouter;