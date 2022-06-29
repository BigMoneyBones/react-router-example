import React from "react";
import "../App.css";
// The {useParams} hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route /> path.
// In other words, in this case it allows access to the key/value pairs of the objects in the blogPosts array of objects.
import { useParams } from "react-router-dom";

// passing in {blogPosts} as props in <BlogPost /> in the App.js file gives us access to it here.
const BlogPost = ({ blogPosts }) => {
  let params = useParams();
  const blog = blogPosts.find((blog) => blog.id === Number(params.blogId));
  return (
    <div>
      <p>Title: {blog.title}</p>
      <p>Author: {blog.author}</p>
      <p>Text: {blog.text}</p>
      <p>CreatedAt: {blog.createdAt}</p>
      <p>ID: {blog.id}</p>
    </div>
  );
};

export default BlogPost;
