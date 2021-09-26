import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {useDispatch} from "react-redux";
import { deletePost } from "../../actions/posts";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const TableData = ({ posts, setCurrentId }) => {

  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Paper className={classes.paper} elevation={3}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Full Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Contact Number</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {posts.map((post) => (
              <TableRow key={post._id}>
                <TableCell>{post.fullname}</TableCell>
                <TableCell>{post.email}</TableCell>
                <TableCell>{post.contact}</TableCell>
                <TableCell>{post.location}</TableCell>
                <TableCell>
                     <EditOutlinedIcon fontSize='small' onClick={() => setCurrentId(post._id)}/>
                     <DeleteOutlineOutlinedIcon fontSize='small' onClick={() => dispatch(deletePost(post._id))} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default TableData;
