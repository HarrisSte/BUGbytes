const jwt = require("jsonwebtoken");

const { secret, expiration } = require("./constants");

module.exports = {
  signToken({ email, firstName, lastName, _id, profileImageUrl }) {
    const payload = { email, firstName, lastName, _id, profileImageUrl };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
