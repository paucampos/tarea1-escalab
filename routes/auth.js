const router = require("express").Router();
const { signup, login } = require("../controllers/auth");

// Rutas
router.post("/auth/sign-up", signup);
router.post("/auth/log-in", login);

module.exports = router;