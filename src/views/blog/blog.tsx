import { ClassNames } from "@emotion/react";
import { Box } from "@mui/system";
import React from "react";
import BlogBox from "../../components/blog-components/blog-box";
import BlogList from "../../components/blog-components/blog-lists";
import SearchBar from "../../components/blog-components/search-bar-blog";

const Blog: React.FC = () => {
  return (
    <>
      <BlogBox />
      <BlogList />
      <SearchBar />
    </>
  );
};

export default Blog;
