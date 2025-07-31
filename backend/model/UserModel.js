const { model } = require("mongoose");

const { UserSchemas } = require("../schemas/UserSchemas");

const User = model("user", UserSchemas);

module.exports = { User };
