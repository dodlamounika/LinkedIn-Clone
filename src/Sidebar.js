import React from 'react'
import './Sidebar.css'

import {Avatar} from '@material-ui/core'
import { useSelector } from 'react-redux'
import { selectUser } from './features/counter/userSlice';
function Sidebar() {

    const user = useSelector(selectUser);
    const recentItem = (topic)=>(
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <img src="https://wallpapercave.com/wp/wp6313318.jpg" alt=""/>
                <Avatar className="sidebar_avatar" src={user.photoUrl}>
                    {user.email[0]}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>who viewed your profile</p>
                    <p className="sidebar_statNumber">2345</p>
                </div>
                <div className="sidebar_stat">
                    <p>Views of your post</p>
                    <p className="sidebar_statNumber">2300</p>
                </div>               
            </div>
            <div className="sidebar_bottom">
                    <p>Recent</p>
                    {recentItem('reactJs')}
                    {recentItem('programming')}
                    {recentItem('design')}
                    {recentItem('developer')}
                    {recentItem('softwareEngineering')}
                    {recentItem('javascript')}
            </div>
        </div>
    )
}

export default Sidebar
