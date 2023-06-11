const { Schema, model } = require("mongoose");

const reactionSchema = new Schema(
  {
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String, 
        required: true, 
        maxLength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        // Add a getter function to format
    },
  },
  {
    toJSON: {
      virtual: true,
    },
    id: false,
  },
);

// reactionSchema
//   .virtual("createdAtFormatted")
//   .get(function () {
//   });

// Initialize our Reaction schema
const Reaction = model('reaction', reactionSchema);

module.exports = Reaction;
