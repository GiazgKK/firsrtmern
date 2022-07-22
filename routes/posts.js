import express from "express";
// feafafesfeaaefs
import auth from "../middleware/auth.js";
import {
  getPost,
  getPosts,
  commentPost,
  getPostsBySearch,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from "../controllers/posts.js";

const router = express.Router();
router.get("/search", getPostsBySearch);
router.get("/", getPosts);
router.get("/:id", getPost);

router.post("/", createPost);
router.patch("/:id/likepost", auth, likePost);
router.post("/:id/commentpost", auth, commentPost);
//localhost:5000/posts/62da219d1e37a9267c32e0ea/commentpost
http: router.patch("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);

export default router;
