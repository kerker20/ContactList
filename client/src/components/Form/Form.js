import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Avatar,
  Paper,
} from "@material-ui/core";
import useStyles from "./styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useDispatch, useSelector } from "react-redux";

import { createPost, updatePost } from "../../actions/posts";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    fullname: "",
    email: "",
    contact: "",
    location: "",
  });
  const post = useSelector((state) =>
    currentId ? state.posts.find((message) => message._id === currentId) : null
  );
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (post){
        setPostData(post);
    }else{
        setPostData({
            fullname: "",
            email: "",
            contact: "",
            location: "",
        });
    }
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ fullname: "", email: "", contact: "", location: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost( postData ));
      setCurrentId(0);
      window.location.reload();
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      setCurrentId(0);
      window.location.reload();
      clear();
    }
  };
  return (
    <>
      <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5">Create Contacts</Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="fullname"
                  variant="outlined"
                  value={postData.fullname}
                  onChange={(e) =>
                    setPostData({ ...postData, fullname: e.target.value })
                  }
                  required
                  fullWidth
                  label="Full Name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="email"
                  variant="outlined"
                  value={postData.email}
                  onChange={(e) =>
                    setPostData({ ...postData, email: e.target.value })
                  }
                  required
                  fullWidth
                  label="Email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="contact"
                  variant="outlined"
                  value={postData.contact}
                  onChange={(e) =>
                    setPostData({ ...postData, contact: e.target.value })
                  }
                  required
                  fullWidth
                  label="Contact"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="location"
                  variant="outlined"
                  value={postData.location}
                  onChange={(e) =>
                    setPostData({ ...postData, location: e.target.value })
                  }
                  required
                  fullWidth
                  label="Location"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Submit
            </Button>
          </form>
        </Paper>
      </Container>
    </>
  );
};

export default Form;
