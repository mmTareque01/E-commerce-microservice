import { Router } from "express";

import productRoutes from './routes/v1/product.routes'

const router = Router()


router.use("/v1/product", productRoutes)

export default router