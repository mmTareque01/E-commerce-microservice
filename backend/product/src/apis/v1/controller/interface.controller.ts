import { Request, Response, NextFunction } from "express";


export interface CONTROLLER {
    req: Request
    res: Response
    next?: NextFunction
}