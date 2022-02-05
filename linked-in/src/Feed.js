import React, { useState } from 'react';
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InputOptions from './InputOptions';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EventNoteIcon from '@mui/icons-material/EventNote';
import Post from './Post';

function Feed() {
    const [posts, setPosts] = useState([]);

    const sendPost = function (event) {
        event.preventDefault();
    }

    return (
        <div className='feed'>
            <div className='feed__inputContainer'>
                <div className='feed__input'>
                    <CreateIcon></CreateIcon>
                    <form>
                        <input type='text'></input>
                        <button onClick={ sendPost } type='submit'>Send</button>
                    </form>
                </div>
                <div className='feed__inputOptions'>
                    <InputOptions Icon={ ImageIcon } title="Photo" color="#70B5F9"></InputOptions>
                    <InputOptions Icon={ SubscriptionsIcon } title="Video" color="#E7A33E"></InputOptions>
                    <InputOptions Icon={ EventNoteIcon } title="Event" color="#C0CBCD"></InputOptions>
                    <InputOptions Icon={ CalendarTodayIcon } title="Write Article" color="#7FC15E"></InputOptions>
                </div>
            </div>
            { posts.map((post => {
                <Post></Post>
            })) }
            <Post name='Farhan Akhtar' description='This is a Test' message='This Worked'></Post>
        </div>
    );
}

export default Feed;
