import React, { useState } from "react";
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';

const ChatBot = () =>{
    const API_KEY = "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";
    const [typing, setTyping] = useState(false);
    const [messages, setMessages] = useState([
        {
            message: "Hello, I am StackOverflow assistant. How can I help you today?",
            sender: "Stackbot"
        }
    ])

    const handleSend = async (message) => {
        const newMessage = {
            message : message,
            sender : "user",
            direction: "outgoing"
        }

        const newMessages = [...messages, newMessage];
        setMessages(newMessages);
        setTyping(true);
        await processMessagetoChatGPT(newMessages);
    }

    async function processMessagetoChatGPT(chatMessages){

        let apiMessages = chatMessages.map((messageObject) => {
            let role = "";
            if (messageObject.sender === "Stackbot") {
                role = "assistant";
            } else {
                role = "user";
            }
            return { role: role, content: messageObject.message };
        });

        const systemMessage = { role: "system", content: "explain clearly and concisely." };

        const apiRequestBody = { "model": "gpt-3.5-turbo", "messages": [systemMessage, ...apiMessages] };

        await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": "Bearer " + API_KEY,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(apiRequestBody)
        }).then((data) => {
            return data.json();
        }).then((data) => {
            console.log(data);
            console.log(data.choices[0].message.content);
            setMessages(
                [...chatMessages, {
                    message: data.choices[0].message.content,
                    sender: "Stackbot",
                }]
            )
            setTyping(false);
        });
    }

    return(
        <div className="chat-container">
            <MainContainer>
                <ChatContainer>
                    <MessageList typingIndicator={typing ? <TypingIndicator content="StackOverflow is responding..." /> : null} scrollBehavior="smooth" >
                        {
                            messages.map((message, i) => {
                                return <Message key={i} model={message} />
                            })
                        }
                    </MessageList>
                    <MessageInput placeholder="Type question here..." onSend={handleSend}/>
                </ChatContainer>
            </MainContainer>
        </div>
    )
}

export default ChatBot;