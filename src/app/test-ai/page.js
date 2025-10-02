"use client";

import { Button, Input, Spin } from "antd";
import { SendHorizontal } from "lucide-react";
import { useState } from "react";
import { useAI } from "../hooks/gemini-ai/use-ai";
import "./test-ai.css";

export default function TestAI() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const { generateResponse, loading, error } = useAI();

  const handleSend = async () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage = { text: input, isUser: true };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Get AI response
    const response = await generateResponse(input);
    if (response) {
      const aiMessage = { text: response, isUser: false };
      setMessages((prev) => [...prev, aiMessage]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${
              message.isUser ? "user-message" : "ai-message"
            }`}
          >
            {message.text}
          </div>
        ))}
        {loading && (
          <div className="loading-container">
            <Spin size="large" />
          </div>
        )}
        {error && <div className="error-message">Error: {error}</div>}
      </div>
      <div className="input-container">
        <Input.TextArea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Nhập câu hỏi của bạn..."
          autoSize={{ minRows: 1, maxRows: 4 }}
          style={{ flex: 1 }}
        />
        <Button
          type="primary"
          icon={<SendHorizontal size={18} />}
          onClick={handleSend}
          disabled={loading || !input.trim()}
        />
      </div>
    </div>
  );
}
