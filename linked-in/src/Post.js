import { Avatar } from '@mui/material';
import React from 'react';
import InputOptions from './InputOptions';
import './Post.css';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

function Post({ name, description, message, photoUrl }) {
    return <div className='post'>
        <div className='post__header'>
            <Avatar></Avatar>
            <div className='post__info'>
                <h2>{ name }</h2>
                <p>{ description }</p>
            </div>
        </div>

        <div className='post__body'>
            <p>{ message }</p>
        </div>

        <div className='post__buttons'>
            <InputOptions Icon={ ThumbUpAltIcon } title="Like" color="gray"></InputOptions>
            <InputOptions Icon={ ChatOutlinedIcon } title="Comment" color="gray"></InputOptions>
            <InputOptions Icon={ ShareOutlinedIcon } title="Share" color="gray"></InputOptions>
            <InputOptions Icon={ SendOutlinedIcon } title="Send" color="gray"></InputOptions>
        </div>
    </div >;
}

export default Post;
