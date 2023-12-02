module.exports = function (app) {
    const API_ENDPOINT = "/api";
    const API_VERSION = "v1";

    app.use(`${API_ENDPOINT}/${API_VERSION}/todos`, require('./todos'))

    console.log(`API ENDPOINT: ${API_ENDPOINT}/${API_VERSION}/todos`)

    app.all("*", (req, res) => {
        res.sendStatus(404)
    });
};

