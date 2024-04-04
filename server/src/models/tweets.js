import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  photo: String,
  writer: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  createdAt: Date,
  updatedAt: Date,
});

const Tweet = mongoose.model("Tweet", tweetSchema);
export default Tweet;
