import React, { useState } from 'react';
import { Container, Grid, TextField, Button, Typography, Avatar, Paper } from '@material-ui/core';
import useStyles from './styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


import { createPost } from '../../actions/posts';

const Form = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const classes = useStyles();
    const [formData, setFormData] = useState({ fullname: '', email: '', contact: '', location: '' });
    
    const clear = () => {
        setFormData({ fullname: '', email: '', contact: '', location: '' });
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch(createPost(formData))
        history.push('/tableData');
        
    }
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
                     <TextField name="fullname" variant="outlined" onChange={(e) => setFormData({ ...formData, fullname: e.target.value })} required fullWidth label="Full Name" />
                </Grid>
                <Grid item xs={12}>
                     <TextField name="email" variant="outlined" onChange={(e) => setFormData({ ...formData, email: e.target.value })} required fullWidth label="Email" />
                </Grid>
                <Grid item xs={12}>
                     <TextField name="contact" variant="outlined" onChange={(e) => setFormData({ ...formData, contact: e.target.value })} required fullWidth label="Contact" />
                </Grid>
                <Grid item xs={12}>
                     <TextField name="location" variant="outlined" onChange={(e) => setFormData({ ...formData, location: e.target.value })} required fullWidth label="Location" />
                </Grid>
                </Grid>
                <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                    Submit
                </Button>
            </form>
           </Paper>
       </Container>
        </>
    )
}

export default Form
