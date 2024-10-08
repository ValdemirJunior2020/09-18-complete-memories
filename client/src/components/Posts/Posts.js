import React from 'react';
import { Grid, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';
import Post from './Post/Post';
import { styled } from '@mui/material/styles';

// Define the custom styles using styled
const StyledGridContainer = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);

  return (
    !posts.length ? <CircularProgress /> : (
      <StyledGridContainer container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </StyledGridContainer>
    )
  );
};

export default Posts;
