import React, { useState } from "react";

interface Message {
  id: number;
  sender: "student" | "business";
  content: string;
  timestamp: string;
}

const messagesData: Message[] = [
  { id: 1, sender: "business", content: "Hello! Welcome to our program.", timestamp: "10:00 AM" },
  { id: 2, sender: "student", content: "Hi! I wanted to ask about the schedule.", timestamp: "10:02 AM" },
  { id: 3, sender: "business", content: "We run sessions Monday to Friday from 9am to 5pm.", timestamp: "10:03 AM" },
  { id: 4, sender: "student", content: "Perfect, thanks!", timestamp: "10:05 AM" },
];

export default function TabMessages() {
  const [messages, setMessages] = useState<Message[]>(messagesData);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (!newMessage.trim()) return;
    const msg: Message = {
      id: messages.length + 1,
      sender: "student",
      content: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages([...messages, msg]);
    setNewMessage("");
  };

  return (
    <div className="max-w-2xl mx-auto flex flex-col h-[70vh] rounded-xl shadow-lg border overflow-hidden" style={{ fontFamily: "'Figtree', sans-serif", backgroundColor: "#F8F9F7" }}>
      {/* Chat header */}
      <div className="flex items-center justify-between p-4 border-b" style={{ backgroundColor: "#DBDCD9" }}>
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-[#0055FF] flex items-center justify-center text-white font-semibold">
            B
          </div>
          <div>
            <div className="font-[Space Grotesk] font-semibold text-black">Business Name</div>
            <div className="text-xs text-black/60">Online</div>
          </div>
        </div>
        <div className="text-black/70 text-sm font-[Space Grotesk]">Chat</div>
      </div>

      {/* Messages area */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === "student" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-2xl shadow-sm`}
              style={{
                backgroundColor: msg.sender === "student" ? "#0055FF" : "#DBDCD9",
                color: msg.sender === "student" ? "white" : "black",
                borderBottomRightRadius: msg.sender === "student" ? "0px" : "16px",
                borderBottomLeftRadius: msg.sender === "student" ? "16px" : "0px",
                fontFamily: "Regular, sans-serif",
              }}
            >
              <div>{msg.content}</div>
              <div className="text-xs text-black/50 mt-1 text-right">{msg.timestamp}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Input area */}
      <div className="border-t border-[#DBDCD9] p-3 flex gap-2">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 border rounded-full focus:outline-none"
          style={{
            borderColor: "#DBDCD9",
            fontFamily: "Regular, sans-serif",
            backgroundColor: "white",
          }}
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="px-4 py-2 rounded-full hover:brightness-90"
          style={{ backgroundColor: "#0055FF", color: "white", fontFamily: "Space Grotesk, sans-serif" }}
        >
          Send
        </button>
      </div>
    </div>
  );
}
