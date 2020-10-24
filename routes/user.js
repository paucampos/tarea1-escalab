const router = require("express").Router();
const { createUser, listUser, profileUser, addUpdateUser } = require("../controllers/user");

// Rutas
router.get("/user/list", listUser);
router.get("/user/profile", profileUser);
// router.post("/create", createUser);
router.put("/user", addUpdateUser);

module.exports = router;