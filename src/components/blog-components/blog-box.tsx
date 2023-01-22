import { Box } from "@mui/material";
import React from "react";

const blogSpan = {
  color: "white",
  fontSize: "36px",
};

const BlogBox: React.FC = () => {
  return (
    <div>
      <Box
        component="img"
        sx={{
          width: "100%",
          maxWidth: "100%",
          height: "25%",
          maxHeight: "25%",
        }}
        alt="Blog image stock"
        src="https://images.unsplash.com/photo-1619844455609-1c3894de07b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2960&q=80"
      ></Box>
    </div>
  );
};

export default BlogBox;
