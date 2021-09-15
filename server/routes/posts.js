const router = require("express").Router();
const { posts } = require("../controllers");

router.get("/",posts.index);

module.exports = router;