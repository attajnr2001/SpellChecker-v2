const router = require("express").Router();
const controller = require("../server/controller");

router.get("", controller.welcome)
router.get("/register", controller.register)
router.get("/dashboard/:id", controller.dashboard)
router.get("/progress/:id", controller.progress)

module.exports =  router;