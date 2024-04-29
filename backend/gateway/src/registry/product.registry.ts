import { APIS_INTERFACE } from "./interface.registry";

export const PRODUCT_BASE: string = process.env.PRODUCT_BASE || "";


export const productRegistry_V1: APIS_INTERFACE = {
    add: `/api/v1/product/create`,
    list: `/api/v1/product/list`,
    info: `/api/v1/product/info/:id`,
    update: `/api/v1/product/update/:id`,
    delete: `/api/v1/product/delete/:id`,
}