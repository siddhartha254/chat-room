import './App.css';
import Auth from './components/Auth';
import Chat from './components/Chat';
import React, {useState, useRef} from "react";

import Cookies from "universal-cookie";

import {signOut} from 'firebase/auth';
import {auth} from './firebase';
import Header from './components/Header';
import Header2 from './components/Header2';

const cookies = new Cookies();


function App() {
  
  //default value is auth-token,
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  
  const [room, setRoom] = useState("");
  const roomInputRef = useRef(null);

  const signOutUser = async() =>{
    await signOut(auth)
    setIsAuth(false)
    setRoom(null)
    cookies.remove("auth-token")
    console.log("doing");
  };

  //not authenticated
  if(!isAuth){
    return (
      <>
      <div className="App">
        <Header />
        <Auth setIsAuth={setIsAuth}/>
      </div>
      </>
    );
  }

  //authenticated
  return(
    <>
    <Header2 />
    {room?<Chat room={room}/> 
    : <div className="room" >
        <input ref={roomInputRef} placeholder="Enter Room Name"/>
        <button  onClick={()=>setRoom(roomInputRef.current.value)}>
          Enter Room</button>
      </div>}

      <div className="sign-out">
        <button onClick={signOutUser}>Sign Out</button>
      </div>
    </>
  )

}

export default App;
