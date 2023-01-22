import React from "react";
import { Container } from "@mui/system";
import { Avatar, Box, Grid } from "@mui/material";
import { Card } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const articleHeaderStyle = {
  color: "black",
  padding: "30px",
  fontSize: "36px",
  fontFamily: "Arial",
};

const BlogList: React.FC = () => {
  return (
    <div>
      <div style={articleHeaderStyle}>Artykuły</div>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt="first-article-card"
                height="200"
                image="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1258&q=80"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lorem
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempore nesciunt iste similique consequuntur numquam enim
                  sapiente velit provident deleniti cumque a nobis, dolore
                  veritatis repellendus expedita laboriosam sed ratione et!
                </Typography>
              </CardContent>
              <CardActions>
                <Avatar
                  alt="Remy Sharp"
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
                <Typography variant="subtitle2" component="p">
                  John Cena
                </Typography>
                <Typography variant="subtitle2" component="p">
                  12.01.2022
                </Typography>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt="second-article-card"
                height="200"
                image="https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lorem
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempore nesciunt iste similique consequuntur numquam enim
                  sapiente velit provident deleniti cumque a nobis, dolore
                  veritatis repellendus expedita laboriosam sed ratione et!
                </Typography>
              </CardContent>
              <CardActions>
                <Avatar
                  alt="Remy Sharp"
                  src="https://images.pexels.com/photos/2380795/pexels-photo-2380795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
                <Typography variant="subtitle2" component="p">
                  John Cena
                </Typography>
                <Typography variant="subtitle2" component="p">
                  12.01.2022
                </Typography>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt="third-article-card"
                height="200"
                image="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lorem
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempore nesciunt iste similique consequuntur numquam enim
                  sapiente velit provident deleniti cumque a nobis, dolore
                  veritatis repellendus expedita laboriosam sed ratione et!
                </Typography>
              </CardContent>
              <CardActions>
                <Avatar
                  alt="Remy Sharp"
                  src="https://images.pexels.com/photos/1804514/pexels-photo-1804514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
                <Typography variant="subtitle2" component="p">
                  John Cena
                </Typography>
                <Typography variant="subtitle2" component="p">
                  12.01.2022
                </Typography>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt="fourth-article-card"
                height="200"
                image="https://images.unsplash.com/photo-1618219944342-824e40a13285?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lorem
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempore nesciunt iste similique consequuntur numquam enim
                  sapiente velit provident deleniti cumque a nobis, dolore
                  veritatis repellendus expedita laboriosam sed ratione et!
                </Typography>
              </CardContent>
              <CardActions>
                <Avatar
                  alt="Remy Sharp"
                  src="https://images.pexels.com/photos/1006202/pexels-photo-1006202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
                <Typography variant="subtitle2" component="p">
                  John Cena
                </Typography>
                <Typography variant="subtitle2" component="p">
                  12.01.2022
                </Typography>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt="fifth-article-card"
                height="200"
                image="https://images.unsplash.com/photo-1615874694520-474822394e73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lorem
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempore nesciunt iste similique consequuntur numquam enim
                  sapiente velit provident deleniti cumque a nobis, dolore
                  veritatis repellendus expedita laboriosam sed ratione et!
                </Typography>
              </CardContent>
              <CardActions>
                <Avatar
                  alt="Remy Sharp"
                  src="https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
                <Typography variant="subtitle2" component="p">
                  John Cena
                </Typography>
                <Typography variant="subtitle2" component="p">
                  12.01.2022
                </Typography>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt="sixth-article-card"
                height="200"
                image="https://images.unsplash.com/photo-1615971677499-5467cbab01c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lorem
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempore nesciunt iste similique consequuntur numquam enim
                  sapiente velit provident deleniti cumque a nobis, dolore
                  veritatis repellendus expedita laboriosam sed ratione et!
                </Typography>
              </CardContent>
              <CardActions>
                <Avatar
                  alt="Remy Sharp"
                  src="https://images.pexels.com/photos/2156416/pexels-photo-2156416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
                <Typography variant="subtitle2" component="p">
                  John Cena
                </Typography>
                <Typography variant="subtitle2" component="p">
                  12.01.2022
                </Typography>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default BlogList;
