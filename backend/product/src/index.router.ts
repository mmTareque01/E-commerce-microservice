import { Router } from "express";
import productRouter from "./apis/v1/router/product.router"

const router = Router()

router.use("/v1", productRouter)

export default router