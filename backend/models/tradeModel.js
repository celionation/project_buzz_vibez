const mongoose = require('mongoose');

const tradeSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Please enter email address"],
    },
    phone: {
      type: String,
      required: [true, "Please enter phone number"],
    },
    wallet: {
      type: String,
      required: [true, "Please enter wallet Id"],
    },
    coin: {
      type: String,
      required: [true, "Please enter Trade type"],
    },
    method: {
      type: String,
      required: [true, "Please enter method of transaction"],
    },
    code: {
      type: String,
      required: [true, "Please enter confirmation code"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Trade', tradeSchema);