const { User, Thought } = require("../models");

module.exports = {
  // Get all users
  async getAllUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // Get a user by it's Id
  async getOneUser(req, res) {
    try {
      const singleUser = await User.findOne({ _id: req.params.userId }).select(
        "-__v"
      );

      if (!singleUser) {
        return res.status(404).json({ message: "No user with that ID" });
      }

      res.json(singleUser);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // Create a new user
  async createUser(req, res) {
    try {
      const newUser = await User.create(req.body);
      res.json(newUser);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // Update a user by it's Id
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }

      res.json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // Delete a user by it's Id
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId });

      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }

      // Remove user's associated thoughts when deleted
      //   await Thought.deleteMany({ _id: { $in: user.thoughts } });

      res.json({ message: "User and thoughts deleted!" });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  async addNewFriend(req, res) {
    try {
      console.log("Adding a new friend");
      console.log(req.body);
      const friend = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.body } },
        { runValidators: true, new: true }
      );

      if (!friend) {
        return res.status(404).json({ message: "No friend with that ID" });
      }

      res.json(friend);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};
