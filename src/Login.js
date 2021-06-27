import React,{useState} from 'react'
import './Login.css'
import {auth} from './Firebase'
import { useDispatch } from 'react-redux';
import {login} from './features/counter/userSlice'
function Login() {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');
    const [profilePic,setProfilePic] = useState('');
    const dispatch = useDispatch();
    const register = () =>{
        if(!name){
            return alert('Please enter full name')
        }
        auth.createUserWithEmailAndPassword(email,password)
        .then((userAuth)=>{
            userAuth.user.updateProfile({
                displayName:name,
                photoURL:profilePic
            })
            .then(()=>{
                dispatch((login({
                    email:userAuth.user.email,
                    uid:userAuth.user.uid,
                    displayName:name,
                    photoUrl: profilePic
                })))
            })
        })
        .catch((err)=>alert(err.message))
    };
    const loginToApp = (e) =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password).then(
            ((userAuth)=>{
                dispatch(login({
                    email:userAuth.user.email,
                    uid:userAuth.user.uid,
                    displayName:userAuth.user.displayName,
                    profileUrl:userAuth.user.photoURL
                }))
            })
        ).catch(error=>alert(error));
    };
    return (
        <div className='login'>
            
            <img src="https://cdn1.iconfinder.com/data/icons/company-identity/100/LinkedIn-logo-vector-1024.png" alt=""/>
            <form>
                <input type="text" value = {name} onChange={(e)=>setName(e.target.value)} placeholder="Full Name(required if registering)"/>
                <input type="text" value = {profilePic} onChange={(e)=>setProfilePic(e.target.value)} placeholder="Profile Picture(optional)"/>
                <input type="email" value = {email} onChange={(e)=>setEmail(e.target.value)} placeholder="email"/>
                <input type="password" value = {password} onChange={(e)=>setPassword(e.target.value)} placeholder="password"/>
                <button type="submit" onClick={loginToApp}>Sign In</button>

            </form>
            <p>Not a member? 
                <span className="login_register" onClick={register}> Register Now</span>
            </p>
        </div>
    )
}

export default Login
