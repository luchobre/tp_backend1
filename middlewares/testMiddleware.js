const testMiddleware = (req, res, next) => {
    console.log("este es el middleware");
    console.log(req.url);
    next();
}

module.exports = {
    testMiddleware
}