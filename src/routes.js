const express = require("express");
const routes = express.Router();

const UserController = require("./controllers/UserController");
const PostController = require("./controllers/PostController");

routes.get("/users", UserController.list);
routes.post("/users", UserController.create);

routes.get("/posts/:id", PostController.view);
routes.get("/posts", PostController.list);
routes.post("/posts", PostController.create);
routes.put("/posts/:id", PostController.update);
routes.delete("/posts/:id", PostController.delete);

module.exports = routes;
