const express = require("express");
const routes = express.Router();

const DwellerController = require("./controllers/DwellerController");

routes.get("/dwellers", DwellerController.index);
routes.get("/dwellers/:id", DwellerController.show);
routes.post("/dwellers", DwellerController.store);
routes.put("/dwellers/:id", DwellerController.update);
routes.delete("/dwellers/:id", DwellerController.destroy);

module.exports = routes;