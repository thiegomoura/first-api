const express = require("express");
const routes = express.Router();

const DwellerController = require("./controllers/DwellerController");
const RoomController = require("./controllers/RoomController");
const DebitController = require("./controllers/DebitController");
const DebitDwellerController = require("./controllers/DebitDwellerController");
const MessageController = require("./controllers/MessageController");
const CategoryController = require("./controllers/CategoryController");

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

routes.get("/debitsDwellers", DebitDwellerController.index);
routes.get("/debitsDwellers/:id", DebitDwellerController.show);
routes.post("/debitsDwellers", DebitDwellerController.store);
routes.put("/debitsDwellers/:id", DebitDwellerController.update);
routes.delete("/debitsDwellers/:id", DebitDwellerController.destroy);

routes.get("/messages", MessageController.index);
routes.get("/messages/:id", MessageController.show);
routes.post("/messages", MessageController.store);
routes.put("/messages/:id", MessageController.update);
routes.delete("/messages/:id", MessageController.destroy);

routes.get("/categories", CategoryController.index);
routes.get("/categories/:id", CategoryController.show);
routes.post("/categories", CategoryController.store);
routes.put("/categories/:id", CategoryController.update);
routes.delete("/categories/:id", CategoryController.destroy);

module.exports = routes;