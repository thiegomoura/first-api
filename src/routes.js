const express = require("express");
const routes = express.Router();

const DwellerController = require("./controllers/DwellerController");
const RoomController = require("./controllers/RoomController");
const DebitController = require("./controllers/DebitController");

routes.get("/dwellers", DwellerController.index);
routes.get("/dwellers/:id", DwellerController.show);
routes.post("/dwellers", DwellerController.store);
routes.put("/dwellers/:id", DwellerController.update);
routes.delete("/dwellers/:id", DwellerController.destroy);

routes.get("/rooms", RoomController.index);
routes.get("/rooms/:id", RoomController.show);
routes.post("/rooms", RoomController.store);
routes.put("/rooms/:id", RoomController.update);
routes.delete("/rooms/:id", RoomController.destroy);

routes.get("/debits", DebitController.index);
routes.get("/debits/:id", DebitController.show);
routes.post("/debits", DebitController.store);
routes.put("/debits/:id", DebitController.update);
routes.delete("/debits/:id", DebitController.destroy);

module.exports = routes;