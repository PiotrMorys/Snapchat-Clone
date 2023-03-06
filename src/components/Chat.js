import { Avatar } from '@mui/material'
import React from 'react'
import './Chat.css'
import StopRoundedIcon from '@mui/icons-material/StopRounded';
import ReactTimeago from 'react-timeago';
import { selectImage } from '../features/appSlice';
import { useDispatch } from 'react-redux';
import { db } from '../firebase';
import { useNavigate } from 'react-router';

function Chat({ id, username, timestamp, read, imageUrl, profilePic }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const open = () => {
    if (!read) {
      dispatch(selectImage(imageUrl));
      db.collection('posts').doc(id).set(
        {
          read: true,
        }, 
        { merge: true }
        );

      navigate('/chats/view');
    }
  };

  return (
   <div onClick={open} className='chat'>
      <Avatar className='chat__avatar' src={profilePic} />
    <div className="chat__info">
      <h4>{username}</h4>
      <p>
        {!read && 'Tap to view -'}{" "}
      <ReactTimeago date={new Date(timestamp?.toDate()).toUTCString()} /></p> 
    </div>

    {!read && <StopRoundedIcon className="chat__readIcon" />}
   </div>
  )
}


export default Chat
