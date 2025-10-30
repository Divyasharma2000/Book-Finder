import React from 'react';

function ChatApp({userName}) {
  return (
    <div style={{ padding: '20px', border: '3px solid #007bff', borderRadius: '8px', margin: '15px', backgroundColor: '#f0f8ff' }}>
      <h3>🔵 Chat Micro-Frontend (Remote)</h3>
      <p>Hello, {userName}! This proves communication between apps.</p>
    </div>
  );
}

export default ChatApp;