const { model } = require("mongoose");

const { PositionsSchemas } = require("../schemas/PostionsSchemas");

const PositionsModel = new model("position", PositionsSchemas);

module.exports = { PositionsModel };
