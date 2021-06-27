import React,{useState,useRef,useEffect} from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption'
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import {db} from './Firebase';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/counter/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {
    const [posts,setPosts] = useState([]);
    const postRef = useRef();
    const user = useSelector(selectUser);
    useEffect(() => {
        db.collection('posts').orderBy('timestamp','desc').onSnapshot((snapshot)=>(
           setPosts(snapshot.docs.map(doc=>(
               {
                   id:doc.id,
                   data:doc.data()
               }
           )))
        ))
        
    }, [])
    const sendPost = e =>{
        e.preventDefault();
        db.collection('posts').add({
            name:user.displayName,
            description:user.email,
            message:postRef.current.value,
            photoUrl:user.photoUrl || '',
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
        })
        postRef.current.value='';
    }
    return (
        <div className="feed">
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <CreateIcon/>
                    <form>
                        <input ref={postRef} type="text" placeholder="Start a Post"/>
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed_inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9"/>
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#7fc15e"/>
                    <InputOption Icon={EventNoteIcon} title="Event" color="#e7a33e"/>
                    <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#f5987e"/>
                </div>
            </div>
           <FlipMove>
                {posts.map(({id,data:{name,description,message,photoUrl}})=>(
                    <Post 
                    key={id}
                    name={name}
                    description={description}
                    message={message} 
                    photoUrl={photoUrl}/>
                ))}
            </FlipMove>
        </div>
    )
}

export default Feed
