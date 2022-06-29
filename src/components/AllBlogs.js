import React from "react";

// the useSearchParams hook of React Router returns an array with two elements: the first is the current location’s search params and the latter is a function
// that can be used to update them.
import { useSearchParams } from "react-router-dom";

// {blogPosts} is accessible because in App.js it is passed into the <Allblogs /> component as props.
const AllBlogs = ({ blogPosts }) => {
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      AllBlogs
      <ul>
        {blogPosts.map((blog, index) => {
          return (
            <li key={index}>
              <p className="blog-elements">Title: {blog.title}</p>
              <p className="blog-elements">Author: {blog.author}</p>
              <p className="blog-elements">Text: {blog.text}</p>
              <p className="blog-elements">CreatedAt: {blog.createdAt}</p>
              <p className="blog-elements">ID: {blog.id}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default AllBlogs;
