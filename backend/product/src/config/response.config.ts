import { Response } from "express";

export class ResponseConfig<T> {
    private BASE_URL = ""
    constructor(
        public info: string,
        public links: Record<string, string>,
        public message: string,
        public res: Response
    ) { }

    private response(statusCode: number, data: any) {
        return this.res
            .status(statusCode)
            .json({ ...{ info: this.info, links: this.links, message: this.message }, ...data });
    }

    ER200(data = {}) {
        return this.response(200, { data })
    }

    ER200_Paginate(data = {}, totalData:number, pageNo:number) {
        return this.response(200, { data, paginate:{
            totalData,
            pageNo,
            totalPage: Math.ceil(totalData/pageNo),
            next:this.BASE_URL,
            previous:this.BASE_URL,
        } })
    }

    ER201() {
        console.log("this is console");
        return { info: this.info, links: this.links };
    }

    ER400() {
        console.log("this is console");
        return { info: this.info, links: this.links, error: "" };
    }

    ER404() {
        console.log("this is console");
        return { info: this.info, links: this.links, error: "" };
    }

    ER402() {
        console.log("this is console");
        return { info: this.info, links: this.links, error: "" };
    }

    ER401() {
        console.log("this is console");
        return { info: this.info, links: this.links, error: "" };
    }

    ER500() {
        console.log("this is console");
        return { info: this.info, links: this.links, error: "" };
    }
}
