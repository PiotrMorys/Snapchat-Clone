import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router';
import { selectSelectedImage } from '../features/appSlice';
import './ChatView.css'
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

function ChatView() {
    const selectedImage = useSelector(selectSelectedImage);
    const navigate = useNavigate();

    useEffect(() => {
        if (!selectedImage) {
            exit();
        }
    }, [selectedImage]);

    const exit = () => {
        navigate('/chats');
    };

  return (
    <div className='chatView'>
      <img src={selectedImage} onClick={exit} alt='' />
      <div className="chatView__timer">
      <CountdownCircleTimer
        isPlaying
        duration={10}
        strokeWidth={6}
        size={50}
        colors={[ "#004777", '#F7B801', '#A30000', ]}
        colorsTime={[6.66, 3.33, 0]}
        onComplete={exit}
      >
        {({ remainingTime }) => {
          return remainingTime;
        }}
      </CountdownCircleTimer>
      </div>
    </div>
  );
}

export default ChatView
