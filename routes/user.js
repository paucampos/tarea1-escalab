const router = require("express").Router();
const { createUser, listUser } = require("../controllers/user");

// Rutas
router.post("/create", createUser);
router.get("/list", listUser);

module.exports = router;