import { Router } from "express";
import { PRODUCT_BASE, productRegistry_V1 } from "../../registry/product.registry";
import { Proxy } from "../../utilis/proxy";

const router = Router()

router.use("/create", Proxy(PRODUCT_BASE, productRegistry_V1.add))

router.use('/list', Proxy(PRODUCT_BASE, productRegistry_V1.list));

router.use("/info/:id", Proxy(PRODUCT_BASE, productRegistry_V1.info))

router.use("/update/:id", Proxy(PRODUCT_BASE, productRegistry_V1.update))

router.use("/delete/:id", Proxy(PRODUCT_BASE, productRegistry_V1.delete))

export default router