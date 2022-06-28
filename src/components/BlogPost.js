import React from "react";
import "../App.css";
import { useParams } from "react-router-dom";
import { blogPosts } from "../utils/sampleBlogs";

const BlogPost = () => {
  let params = useParams();
  const blog = blogPosts.find((blog) => blog.id === Number(params.blogId));
  return (
    <div>
      <p className="blog-elements">Title: {blog.title}</p>
      <p className="blog-elements">Author: {blog.author}</p>
      <p className="blog-elements">Text: {blog.text}</p>
      <p className="blog-elements">CreatedAt: {blog.createdAt}</p>
      <p className="blog-elements">ID: {blog.id}</p>
    </div>
  );
};

export default BlogPost;
