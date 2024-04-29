import { Request } from "express";
import { CONTROLLER } from "../interface.controller";

export const createProduct = ({ req, res }: CONTROLLER) => {
    try {
        res.send({ data: "this is my data" })
    }
    catch (error) {
        console.log(error)
        res.send({ error: "this is error handler" })
    }
}