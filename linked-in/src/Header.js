import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import png from './linkedin.png';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

const Header = function () {
    return (
        <div className='header'>
            <div className='header__left'>
                <img src={ png } alt='logo' />

                <div className='header__search'>
                    <SearchIcon></SearchIcon>
                    <input type='text'></input>
                </div>

            </div>

            <div className='header__right'>
                <HeaderOption Icon={ HomeIcon } title='Home'></HeaderOption>
                <HeaderOption Icon={ PeopleAltIcon } title='My Network'></HeaderOption>
                <HeaderOption Icon={ BusinessCenterIcon } title='Jobs'></HeaderOption>
                <HeaderOption Icon={ ChatIcon } title='Messaging'></HeaderOption>
                <HeaderOption Icon={ NotificationsIcon } title='Notifications'></HeaderOption>
                <HeaderOption avatar='https://avatars.githubusercontent.com/u/80523701?s=400&u=1749604bec39274d5d1cd5b778e7eaba930abe36&v=4' title='me'></HeaderOption>
            </div>
        </div >
    );
}

export default Header;
