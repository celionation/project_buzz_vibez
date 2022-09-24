const express = require("express")
const router = express.Router()
const { requestTrade, newTrade } = require("../controllers/tradeController")

router.get("/:id", requestTrade)
router.post("/", newTrade)

module.exports = router