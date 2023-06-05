import './App.css';
import Auth from './components/Auth';
import Chat from './components/Chat';
import React, {useState, useRef} from "react";

import Cookies from "universal-cookie";

import {signOut} from 'firebase/auth';
import {auth} from './firebase';

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
      <div className="App">
        <Auth setIsAuth={setIsAuth}/>
      </div>
    );
  }

  //authenticated
  return(
    <>
    {room?<Chat room={room}/> 
    : <div className="room" label="Enter Room Name">
        <input ref={roomInputRef}/>
        <button onClick={()=>setRoom(roomInputRef.current.value)}>
          Enter Room</button>
      </div>}

      <div className="sign-out">
        <button onClick={signOutUser}>Sign Out</button>
      </div>
    </>
  )

}

export default App;
