import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch } from 'react-redux';
import { auth } from './Firebase';
import { logout } from './features/counter/userSlice';
function Header() {
    const dispatch = useDispatch();
    const logOutOfApp = () =>{
        dispatch(logout());
        auth.signOut();
    }
    return (
        <div className="header">
            
            <div className="header_left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt=""/>
            
            <div className="header_search">
                <SearchIcon/>
                <input type="text" placeholder="Search"/>
            </div> 
            </div> 
            <div className="header_right">
                
                <HeaderOption title="Home" Icon={HomeIcon}/>
                <HeaderOption title="MyNetwork" Icon={SupervisorAccountIcon}/>
                <HeaderOption title="Jobs" Icon={BusinessCenterIcon}/>
                <HeaderOption title="Messaging" Icon={ChatIcon}/>
                <HeaderOption title="Notifications" Icon={NotificationsIcon}/>
                <HeaderOption avatar = "true" title="me" onClick={logOutOfApp}/>
            </div> 
        </div>
    )
}

export default Header
