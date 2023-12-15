import express, { NextFunction, Request, Response } from "express";
import {
    getAllUsers,
    getAllVacations,
    addUser,
    checkUserEmail,
    checkLogin,
    addLike,
    removeLikeById,
    addVacation,
    deleteVacationById,
    updateVacation,
    getVacationById,
    getUserLikes,
    getAllLikes,
} from "../Logic/VacationLogic";
import dal_mysql from "../Utils/dal_mysql";
import Vacation from "../Models/vacation";

const vacationRouter = express.Router();

vacationRouter.get(
    "/getallvacations",
    async (request: Request, response: Response, next: NextFunction) => {
        console.log("in vacations route");
        return response.status(200).json(await getAllVacations());
    }
);

vacationRouter.get(
    "/getallusers",
    async (request: Request, response: Response, next: NextFunction) => {
        console.log("in users route");
        return response.status(200).json(await getAllUsers());
    }
);

vacationRouter.get(
    "/getallLikes",
    async (request: Request, response: Response, next: NextFunction) => {
        console.log("in users route");
        return response.status(200).json(await getAllLikes());
    }
);


vacationRouter.post(
    "/addUser",
    async (request: Request, response: Response, next: NextFunction) => {
        const newUser = request.body;
        const result = await addUser(newUser);
        return response.status(201).json(`${result}`);
    }
);
vacationRouter.post(
    "/addVacation",
    async (request: Request, response: Response, next: NextFunction) => {
        const newVacation = request.body;
        const result = await addVacation(newVacation);
        return response.status(201).json(`${result}`);
    }
);
vacationRouter.delete(
    "/deleteById/:id",
    async (request: Request, response: Response, next: NextFunction) => {
        const vacationID = +request.params.id;
        await deleteVacationById(vacationID);
        return response.status(200).json({});
    }
);
vacationRouter.put(
    "/updateVacation/:id",
    async (request: Request, response: Response, next: NextFunction) => {
        const vacationId = request.params.id;
        const vacation = request.body;
        vacation.id = vacationId; // Set the vacation ID from the URL parameter
        return response.status(201).json(await updateVacation(vacation));
        }
);

vacationRouter.get(
    "/vacationById/:id",
    async (request: Request, response: Response, next: NextFunction) => {
        const vacationID = +request.params.id;
        return response.status(200).json(await getVacationById(vacationID));
    }
);
    

vacationRouter.post("/checkUseremail", async (req, res) => {
    const { useremail } = req.body;

        try {
        const exists = await checkUserEmail(useremail);
    
        res.json({ exists });
        } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
        }    
    }   

);

vacationRouter.post("/login", async (req, res) => {
    console.log(req.body);
    const { user_email, password } = req.body;
    try {
        const loginSuccessful = await checkLogin({
            user_email, 
            password
        });
        console.log({loginSuccessful});
        if (loginSuccessful.userExists) {
            console.log("User already exists");
            res.json({ message: 'Login successful', loginSuccessful });
        } else {
            // Invalid credentials
            res.status(401).json({ error: 'Invalid credentials' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

vacationRouter.post(
    "/addLike",
    async (request: Request, response: Response, next: NextFunction) => {
        const newLike = request.body;
        const result = await addLike(newLike);
        return response.status(201).json(`${result}`);
    }
);

vacationRouter.delete(
    "/removeLikeById/:id",
    async (request: Request, response: Response, next: NextFunction) => {
        const likeID = +request.params.id;
        await removeLikeById(likeID);
        return response.status(200).json({});
    }
);


vacationRouter.get(
    "/getUserLikes/:user_id",
    async (request: Request, response: Response, next: NextFunction) => {
        const userID = +request.params.user_id;
        console.log(userID);
        return response.status(200).json(await getUserLikes(userID));
    }
)




export default vacationRouter