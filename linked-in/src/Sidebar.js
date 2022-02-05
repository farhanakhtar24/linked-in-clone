import { Avatar } from '@mui/material';
import React from 'react';
import './Sidebar.css';

function Sidebar() {
    const recentItem = function (topic) {
        return <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{ topic }</p>
        </div>
    }

    return (
        <div className='sidebar'>
            <div className='sidebar__top'>
                <img src='https://images.unsplash.com/photo-1643499725469-58516adda340?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM4fHFQWXNEenZKT1ljfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt=''></img>
                <Avatar className='sidebar__avatar'></Avatar>
                <h2>Mohd Farhan Akhtar</h2>
                <h4>akhtar.farhan779@gmail.com</h4>
            </div>

            <div className='sidebar__stats'>
                <div className='sidebar__stat'>
                    <p>Who viewed you</p>
                    <p className='sidebar__statNumber'>2,543</p>
                </div>
                <div className='sidebar__stat'>
                    <p>View on posts</p>
                    <p className='sidebar__statNumber'>2,448</p>
                </div>
            </div>

            <div className='sidebar__bottom'>
                <p>Recent</p>
                { recentItem('ReactJS') }
                { recentItem('programming') }
                { recentItem('Redux') }
                { recentItem('Material UI') }
                { recentItem('Web Dev') }
            </div>
        </div>
    );
}

export default Sidebar;
