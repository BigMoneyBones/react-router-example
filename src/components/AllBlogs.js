import React from "react";

// the useSearchParams hook of React Router returns an array with two elements:
// the first is the current location’s search params and the latter is a
// function that can be used to update them.
import { useSearchParams, Outlet } from "react-router-dom";

// {blogPosts} is accessible because in App.js it is passed into the <Allblogs /> component as props.
const AllBlogs = ({ allBlogs }) => {
  // Search params allows access to .get => sortOrder, sortField, limit, page ... in order to modify search in the URL.
  const [searchParams, setSearchParams] = useSearchParams();

  // Set the sort order => ascending, descending by the sort field
  const sortOrder = searchParams.get("sortOrder") || "asc";

  // Choose what parameter to sort by => id, title, author ...etc
  const sortField = searchParams.get("sortField") || "id";

  // Limit sets how many items to display on the page.
  const limit = searchParams.get("limit") || allBlogs.length;

  // Page displays what individual page you want.
  const page = searchParams.get("page") || 0;

  // A copy of 'allBlogs' to be manipulated and rendered to the viewer, so the original is not modified.
  const copyOfBlogPosts = allBlogs;

  // a & b in this instance are blogs from 'allBlogs'
  // the .sort method takes this function as an argument and compares each new index to the previous indices as it iterates through the sorting process.
  const compare = (a, b) => {
    if (sortOrder.toLowerCase() === "asc") {
      if (a[sortField] < b[sortField]) {
        return -1;
      }
      if (a[sortField] > b[sortField]) {
        return 1;
      }
      return 0;
    }
    if (sortOrder.toLowerCase() === "desc") {
      if (a[sortField] < b[sortField]) {
        return 1;
      }
      if (a[sortField] > b[sortField]) {
        return -1;
      }
      return 0;
    }
  };

  const limitPage = (blogs) => {
    //
    let blogIndex = limit * page;
    let returnBlogs = [];
    for (let i = 0; i < limit; i++) {
      if (blogs[blogIndex]) {
        returnBlogs.push(blogs[blogIndex]);
      }
      blogIndex++;
    }
    return returnBlogs;
  };

  const sortedBlogPosts = copyOfBlogPosts.sort(compare);
  const limitPageBlogs = limitPage(sortedBlogPosts);

  return (
    <>
      <br />
      All Blogs
      <ul>
        {limitPageBlogs.map((blog, index) => {
          return (
            <li key={index}>
              <p className="text">Title: {blog.title}</p>
              <p className="text">Author: {blog.author}</p>
              <p className="text">Text: {blog.text}</p>
              <p className="text">Date Created: {blog.createdAt}</p>
              <p className="text">ID: {blog.id}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default AllBlogs;
