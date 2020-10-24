const router = require("express").Router();
const { uploadAvatar, uploadBanner, getAvatar, getBanner } = require("../controllers/file");

// Rutas
router.post("/file/avatar/upload", uploadAvatar);
router.post("/file/banner/upload", uploadBanner);
router.get("/file/avatar", getAvatar);
router.get("/file/banner", getBanner);

module.exports = router;