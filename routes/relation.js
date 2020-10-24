const router = require("express").Router();
const { getRelation, createRelation, deleteRelation, userRelationById } = require("../controllers/relation");

// Rutas
router.get("/relation", getRelation);
router.post("/relation/create/:userRelationId", createRelation);
router.delete("/relation/:userRelationId", deleteRelation);

// Params
router.param("userRelationId", userRelationById);

module.exports = router;