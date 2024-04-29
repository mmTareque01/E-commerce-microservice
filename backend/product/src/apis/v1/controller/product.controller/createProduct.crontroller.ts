import { Request } from "express";
import { CONTROLLER } from "../interface.controller";
import { ResponseConfig } from "../../../../config/response.config";

export const createProduct = ({ req, res }: CONTROLLER) => {
    const data = new ResponseConfig("this is info message", { a: "htls", b: "ldfd" }, "this is message", res)

    try {

        return data.ER200({name:"tare", age:20})
    }
    catch (error) {
        console.log(error)
        res.send({ error: "this is error handler" })
    }
}