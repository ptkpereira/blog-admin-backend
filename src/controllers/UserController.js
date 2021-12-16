const User = require("../models/User");

module.exports = {
  async create(req, res) {
    const { name, email } = req.body;

    const user = await User.create({ name, email });

    return res.status(201).json(user);
  },

  async list(req, res) {
    const users = await User.findAll();

    return users.length > 0
      ? res.status(200).json(users)
      : res.status(204).send();
  },
};
