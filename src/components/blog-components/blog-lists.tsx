import React from "react";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
const BlogList: React.FC = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <Grid container spacing={4}></Grid>
        <Grid item sm={6} md={4} xs={12}></Grid>
      </Container>
    </div>
  );
};

export default BlogList;
