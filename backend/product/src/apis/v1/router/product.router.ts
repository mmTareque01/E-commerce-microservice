import { Router } from "express";
import { createProduct } from "../controller/product.controller/createProduct.crontroller";

const router = Router();

router.post("/product/create", createProduct)

export default router;