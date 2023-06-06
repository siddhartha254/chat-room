import React from "react";

const Leave = (props) => {

    const {setRoom}=props;
    const handleLeave = async() => {
        await setRoom("");
    }


    return(
        <div className="leave-room">
            <button onClick={handleLeave}>Leave Room</button>
        </div>

    )

}

export default Leave;