export const config = {
    "client" : "farm front",
    "version" : "1.0",
    "HTTP_HEADER" : {
        "Content-Type" : "application/json",
    },
    "gateway" : "http://127.0.0.1:7001",
}
if (process.env.NODE_ENV === "production") {
    // config.gateway = "https://api.uotc.com/";
}
export default config;
