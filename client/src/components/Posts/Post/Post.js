import React, { useState } from 'react';
import { Button, Typography, Dialog, DialogContent } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { likePost, deletePost } from '../../../actions/posts';
import { Overlay, Overlay2, StyledCard, StyledCardMedia, CardActionsContainer } from './styles';

const Post = ({ post, setCurrentId }) => {
  const [open, setOpen] = useState(false); // State to handle modal open/close
  const dispatch = useDispatch();

  // Handle opening and closing the modal
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <StyledCard>
        <StyledCardMedia
          image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'}
          title={post.title}
          onClick={handleClickOpen} // Open modal on image click
          style={{ cursor: 'pointer' }} // Change cursor to pointer when hovering over the image
        />
        <Overlay>
          <Typography variant="h6">{post.creator}</Typography>
          <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
        </Overlay>
        
        <Overlay2>
          <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}>
            <MoreHorizIcon fontSize="default" />
          </Button>
        </Overlay2>

        <div>
          <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
        </div>

        <Typography gutterBottom variant="h5" component="h2">{post.title}</Typography>

        <CardActionsContainer>
          <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}>
            <ThumbUpAltIcon fontSize="small" /> Like {post.likeCount}
          </Button>
          <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
            <DeleteIcon fontSize="small" /> Delete
          </Button>
        </CardActionsContainer>
      </StyledCard>

      {/* Dialog for displaying the larger image */}
      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <DialogContent>
          <img
            src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'}
            alt={post.title}
            style={{ width: '100%', height: 'auto' }} // Make the image responsive
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Post;
