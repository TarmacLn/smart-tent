import React, { useMemo } from "react";
import './Chat.less';
import { observer } from "mobx-react-lite";
import Header from "../../../components/Header";
import { uiStore } from "../../../stores";
import { Button, IconButton, TextField } from "@mui/material";
import Send from '@mui/icons-material/Send';

function Chat() {

    const [message, setMessage] = React.useState("");

    const [chatLog, setChatLog] = React.useState<{ sender: 'me' | 'them', text: string }[]>([
        { sender: 'them', text: 'Hello! How can we assist you today?' },
    ]);

    const sendMessage = () => {
        if (message.trim() === "") return;
        setChatLog([...chatLog, { sender: 'me', text: message }]);
        setMessage("");
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
                        >
                            <Send fontSize="large" />
                        </IconButton>
                    </div>
                </div>
            </div>
            <div className="footer">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => uiStore.setCurrentTab(0)}
                >
                    Back to food menu
                </Button>
            </div>
        </div>
    );
}

export default observer(Chat);