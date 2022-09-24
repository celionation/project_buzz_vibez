const asyncHandler = require("express-async-handler");
const Trade = require("../models/tradeModel");


//@description      Get Trade Requests.
//router            GET /api/trade/:id
//@access           Public
const requestTrade = asyncHandler(async (req, res) => {
  res.json("Trade Request - Viewing a trade request.")
})

//@description      Post new Trade Request.
//router            POST /api/trade
//@access           Public
const newTrade = asyncHandler(async (req, res) => {
  res.json("New Trade Request - Requesting for new trade.")
})

module.exports = {
    requestTrade,
    newTrade
}