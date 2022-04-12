const server = require("express")();
server.listen(8080, async () => { });
server.get("/yay-docker", async (_, response) => {
    console.log('Request Received for yay-docker');
    response.json({ "yay": "docker" });
});