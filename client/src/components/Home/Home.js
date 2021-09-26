import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import Form from '../Form/Form';
import TableData from '../TableData/TableData';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../actions/posts'

const Home = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts); 
    const [currentId, setCurrentId] = useState(0);
    useEffect(() => {
        dispatch(getPosts());
    }, [currentId]);
    return (
       <Container>
           <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                    <Form setCurrentId={setCurrentId} currentId={currentId}/>
                </Grid>
                <Grid item xs={12} sm={7}>
                    <TableData posts={posts} setCurrentId={setCurrentId}/>
                </Grid>
           </Grid>
       </Container>
    )
}

export default Home
