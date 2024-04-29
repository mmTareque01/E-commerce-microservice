import proxy from "express-http-proxy"

export const Proxy = (base: string, uri: string) => {
    return proxy(base, {
        proxyReqPathResolver: function (req) {
            return uri + req.url;
        }
    })
}