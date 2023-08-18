import React from 'react';
import styled from 'styled-components';

const ChatContainer = styled.div`
  border: 1px solid #ccc;
  height: 300px;
  overflow-y: scroll;
`;

const Message = styled.div`
  margin: 10px;
`;

const ChatWindow = ({ messages }) => {
  return (
    <ChatContainer>
      {messages.map((message, index) => (
        <Message key={index}>{message}</Message>
      ))}
    </ChatContainer>
  );
};

export default ChatWindow;