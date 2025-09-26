import React, { useState } from "react";
import './Chat.less';
import { observer } from "mobx-react-lite";
import Header from "../../../components/Header";
import { uiStore } from "../../../stores";
import { Button, IconButton, TextField } from "@mui/material";
import Send from '@mui/icons-material/Send';
import SoundButton from "../../../components/SoundButton";

function Chat() {

    const [message, setMessage] = useState("");

    const [chatLog, setChatLog] = useState<{ sender: 'me' | 'them', text: string }[]>([
        { sender: 'them', text: 'Hello! How can we assist you today?' },
    ]);

    const [loading, setLoading] = useState(false);

    const sendMessage = () => {
        if (message.trim() === "") return;
        setChatLog([...chatLog, { sender: 'me', text: message }]);
        setMessage("");
        setLoading(true);
        setTimeout(() => {
            setChatLog(prev => [...prev, { sender: 'them', text: 'Thank you for your message. We will get back to you shortly.' }]);
            setLoading(false);
        }, 2000);
    }

    return (
        <div className="Chat">
            <Header
                title='Chat with us'
                onClickBack={() => uiStore.setCurrentTab(0)}
                color='black'
            />
            <div className="content" >
                <div className="chat">
                    <div className="messages">
                        {chatLog.map((msg, index) => (
                            <div key={index} className={`message ${msg.sender}`}>
                                <div className="message-text">{msg.text}</div>
                            </div>
                        ))}
                        {loading && (
                            <div className="message them loading">
                                <div className="message-text">
                                    <span className="typing-dots" aria-hidden>
                                        <span />
                                        <span />
                                        <span />
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="input-area">
                        <TextField
                            className="message-input"
                            variant="outlined"
                            placeholder="Type your message..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <IconButton
                            onClick={sendMessage}
                            disabled={loading || message.trim() === ""}
                        >
                            <Send fontSize="large" />
                        </IconButton>
                    </div>
                </div>
            </div>
            <div className="footer">
                <SoundButton
                    variant="contained"
                    color="primary"
                    onClick={() => uiStore.setCurrentTab(0)}
                    sound="Back"
                >
                    Back to food menu
                </SoundButton>
            </div>
        </div>
    );
}

export default observer(Chat);