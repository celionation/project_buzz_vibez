//@description      Create Blog Post
//router            POST /api/blogs
//@access           Public
const createBlog = (req, res) => {
  res.json({ message: "Create a Blog Post" });
};

module.exports = {
  createBlog,
};
