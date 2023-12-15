import express, { NextFunction, Request, Response } from "express";
import {
    getAllTeams,
    getTeamById,
    addMeeting,
    getAllMeetings
} from "../Logic/test_logic";

const teamsRouter = express.Router();

teamsRouter.get(
    "/getallmeetings",
    async (request: Request, response: Response, next: NextFunction) => {
        console.log("in meetings route");
        return response.status(200).json(await getAllMeetings());
    }
);

teamsRouter.get(
    "/listTeams",
    async (request: Request, response: Response, next: NextFunction) => {
        console.log("in teams route");
        return response.status(200).json(await getAllTeams());
    }
);

teamsRouter.get(
    "/teamById/:id",
    async (request: Request, response: Response, next: NextFunction) => {
        const teamID = +request.params.id;
        return response.status(200).json(await getTeamById(teamID));
    }
);

teamsRouter.post(
    "/addMeeting",
    async (request: Request, response: Response, next: NextFunction) => {
        const newMeeting = request.body;
        const result = await addMeeting(newMeeting);
        return response.status(201).json(`${result}`);
    }
);

export default teamsRouter;