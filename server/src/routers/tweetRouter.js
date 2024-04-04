import express from "express";
import { createTweet,getTweets } from "../controllers/tweetController";

const tweetRouter = express.Router();

tweetRouter.get("",getTweets)
tweetRouter.post("/create", createTweet);

export default tweetRouter;
