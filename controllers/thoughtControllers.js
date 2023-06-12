const { User, Thought } = require("../models");

module.exports = {
  // Get all thoughts
  async getAllThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  async getOneThought(req, res) {
    try {
      const singleThought = await Thought.findOne({
        _id: req.params.userId,
      }).select("-__v");
      3;
      if (!singleThought) {
        return res.status(404).json({ message: "No thought with that ID" });
      }

      res.json(singleThought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};
