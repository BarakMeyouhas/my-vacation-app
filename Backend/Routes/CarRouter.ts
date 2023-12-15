import express, { NextFunction, Request, Response } from "express";
import { carInfo } from "../Logic/CarFinder";
const carRouter = express.Router();

carRouter.get(
    "/find/:carNumber",
    async (request: Request, response: Response, next: NextFunction) => {
        const carNumber = request.params.carNumber;
        // let carInfoResult = await carInfo(carNumber);

        carInfo(carNumber).then(function(carInfoResult){
            console.log(carInfoResult);
            response.status(200).json(carInfoResult)
        })
        // console.log(carInfoResult)
        // response.status(200).json(carInfoResult);
    }
);

export default carRouter;