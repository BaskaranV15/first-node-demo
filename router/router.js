// const router = require('express').Router();

// router.get("/getAllBlogPosts", (req, res) => {
//     res.send("Get all blog posts");
// });
// router.get("/getSpecificBlogPosts", (req, res) => {
//     res.send("Get specific blog posts");
// });
// router.post("/createBlogPost", (req, res) => {
//     res.send("Create new blog post");
// });
// router.put("/updateBlogPost", (req, res) => {
//     res.send("Update blog post");
// });
// router.delete("/deleteBlogPost/:id", (req, res) => {
//     res.send("Delete blog post");
// });

// module.exports = router;


const router = require('express').Router();
const controller=require('../controllers/blogcontrolls')
router.get("/getblogPost", controller.getblogpost);

router.post("/createblogPost",controller.createblogPost);

module.exports = router;