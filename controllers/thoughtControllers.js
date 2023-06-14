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

  async createReaction(req, res) {
    try {
      const newReaction = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      );

      if (!newReaction) {
        return res.status(404).json({ message: "No thought with that ID" });
      }

      res.status(200).json(newReaction);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
},

async createThought(req, res) {
    try {
        const newThought = await Thought.create(req.body);

        const updateUser = await User.findOneAndUpdate(
            { _id: req.body.userId },
            { $push: { thoughts: newThought._id } },
            { runValidators: true, new: true }
            );

            console.log(req.body.userId);

        res.status(200).json(updateUser);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
},

};
