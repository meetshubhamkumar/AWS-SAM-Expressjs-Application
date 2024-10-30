const express = require("express");
const { GetAllUser, SaveUser } = require("../controllers/UserController");

const UserRouterComponent = express.Router();

UserRouterComponent.get("/user", GetAllUser);
UserRouterComponent.post("/user", SaveUser);

module.exports = UserRouterComponent;
