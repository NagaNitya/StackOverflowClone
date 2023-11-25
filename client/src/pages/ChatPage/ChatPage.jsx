import React, {useState} from "react";
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import ChatBot from "./ChatBot";
import "./ChatPage.css";
import { useSelector } from "react-redux";
import Verification from "./Verification";

const ChatPage = () => {
    
    const [verify, setVerify] = useState(false); // showOtp = show OTP input field [for OTP
    var User = useSelector((state) => (state.currentUserReducer))
    console.log(User)

    return (
        <div className="home-container-1">
            <LeftSidebar/>
            <div className="home-container-2"style={{display: "block"}}>
                <h1 className="title">StackOverflow Assistant</h1>
                <p className="info">An AI-operated chat assistant, to help you quickly find the solution to any problem you may have.</p>
                {
                    User === null ? 
                        <p className="info"> <br /><br />You must be logged in to use the chatbot feature.</p> :
                        verify ? <ChatBot/> : <Verification verify = {verify} setVerify = {setVerify}/>
                }
            </div>
            <RightSidebar/>
        </div>
    );
};

export default ChatPage;
