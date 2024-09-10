const express = require("express");
const auth = require("../middlewares/auth");
const {
  allBookmarks,
  addBookmark,
  removeBookmark,
} = require("../controllers/bookmarkController");
const methodNotAllowed = require("../utils/methodNotAllowed");

const router = express.Router();

// route for all bookmarks
router.route("/bookmark").get(auth, allBookmarks).all(methodNotAllowed);

// route to add bookmarks

router.route("/add/:id").get(auth, addBookmark).all(methodNotAllowed);

//route to remove bookmark

router.route("/remove/:id").get(auth, removeBookmark).all(methodNotAllowed);

module.exports = router;
