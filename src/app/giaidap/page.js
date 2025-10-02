"use client";

import { Button, Input, Spin } from "antd";
import { Menu, MessageCircle, Plus, SendHorizontal, X } from "lucide-react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useAI } from "../hooks/gemini-ai/use-ai";
import "./giaidap.css";

const suggestedPrompts = [
  {
    title: "Chính sách Đổi mới",
    text: "Giải thích về chính sách Đổi mới của Việt Nam và tác động của nó đến sự phát triển đất nước",
  },
  {
    title: "Chủ nghĩa xã hội Việt Nam",
    text: "Đặc điểm nổi bật của mô hình chủ nghĩa xã hội định hướng thị trường ở Việt Nam",
  },
  {
    title: "Đối ngoại đa phương",
    text: "Chính sách đối ngoại đa phương hóa, đa dạng hóa của Việt Nam trong thời kỳ hội nhập",
  },
  {
    title: "Phát triển bền vững",
    text: "Chiến lược phát triển bền vững của Việt Nam đến năm 2030, tầm nhìn 2045",
  },
];

export default function TestAI() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sessions, setSessions] = useState([
    { id: 1, title: "Cuộc trò chuyện mới", active: true },
  ]);
  const { generateResponse, loading, error } = useAI();

  // Function to clean and format AI response
  const formatResponse = (text) => {
    if (!text) return text;

    // Clean up the response format
    return (
      text
        // Fix bold formatting from ** to proper markdown
        .replace(/\*\*(.*?)\*\*/g, "**$1**")
        // Fix list items
        .replace(/^\* /gm, "- ")
        // Add proper line breaks before headers
        .replace(/([.!?])\s*(\*\*[^*]+\*\*)/g, "$1\n\n$2")
        // Fix line breaks
        .replace(/\n\s*\n/g, "\n\n")
        .trim()
    );
  };

  const handleSend = async (text = input) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage = { text: text, isUser: true };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Get AI response
    const response = await generateResponse(text);
    if (response) {
      const formattedResponse = formatResponse(response);
      const aiMessage = { text: formattedResponse, isUser: false };
      setMessages((prev) => [...prev, aiMessage]);
    }
  };

  const handlePromptClick = (prompt) => {
    handleSend(prompt.text);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const createNewSession = () => {
    const newSession = {
      id: sessions.length + 1,
      title: `Cuộc trò chuyện ${sessions.length + 1}`,
      active: false,
    };
    setSessions((prev) => [
      newSession,
      ...prev.map((s) => ({ ...s, active: false })),
    ]);
    setMessages([]);
    setSidebarOpen(false);
  };

  const switchSession = (sessionId) => {
    setSessions((prev) =>
      prev.map((s) => ({ ...s, active: s.id === sessionId }))
    );
    // In a real app, you'd load messages for this session
    setMessages([]);
    setSidebarOpen(false);
  };

  return (
    <div className="app-container">
      {/* Menu Toggle Button - Hide when sidebar is open */}
      {!sidebarOpen && (
        <Button
          className="menu-toggle"
          icon={<Menu size={20} />}
          onClick={() => setSidebarOpen(true)}
        />
      )}
      {/* Sidebar Overlay - Only show when sidebar is open */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay open"
          onClick={() => setSidebarOpen(false)}
        />
      )}{" "}
      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h3>Lịch sử trò chuyện</h3>
          <Button
            className="sidebar-close-btn"
            icon={<X size={16} />}
            type="text"
            onClick={() => setSidebarOpen(false)}
          />
        </div>

        <Button
          className="new-session-btn"
          icon={<Plus size={16} />}
          onClick={createNewSession}
        >
          Cuộc trò chuyện mới
        </Button>

        <div className="session-list">
          {sessions.map((session) => (
            <div
              key={session.id}
              className={`session-item ${session.active ? "active" : ""}`}
              onClick={() => switchSession(session.id)}
            >
              <MessageCircle size={16} style={{ marginRight: "8px" }} />
              {session.title}
            </div>
          ))}
        </div>
      </div>
      {/* Main Content */}
      <div className={`main-content ${sidebarOpen ? "with-sidebar" : ""}`}>
        <div className="chat-container">
          {messages.length === 0 ? (
            // Welcome Screen
            <div className="welcome-screen">
              <div className="welcome-title">
                Học tập Mác Lênin - Chủ nghĩa xã hội khoa học
              </div>
              <div className="welcome-subtitle">
                Trợ lý AI chuyên về lý luận chính trị Việt Nam. Hãy bắt đầu cuộc
                trò chuyện bằng cách chọn một chủ đề dưới đây hoặc đặt câu hỏi
                của riêng bạn.
              </div>

              <div className="suggested-prompts">
                {suggestedPrompts.map((prompt, index) => (
                  <div
                    key={index}
                    className="prompt-card"
                    onClick={() => handlePromptClick(prompt)}
                  >
                    <div className="prompt-card-title">{prompt.title}</div>
                    <div className="prompt-card-text">{prompt.text}</div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            // Chat Messages
            <div className="chat-messages">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`message ${
                    message.isUser ? "user-message" : "ai-message"
                  }`}
                >
                  <div className="message-avatar">
                    {message.isUser ? "B" : "AI"}
                  </div>
                  <div className="message-content">
                    {message.isUser ? (
                      message.text
                    ) : (
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                          p: ({ children }) => (
                            <p
                              style={{
                                marginBottom: "0.5rem",
                                lineHeight: "1.6",
                              }}
                            >
                              {children}
                            </p>
                          ),
                          strong: ({ children }) => (
                            <strong
                              style={{
                                color: "var(--yellow-400)",
                                fontWeight: "600",
                              }}
                            >
                              {children}
                            </strong>
                          ),
                          ul: ({ children }) => (
                            <ul
                              style={{
                                paddingLeft: "1.5rem",
                                marginBottom: "0.5rem",
                              }}
                            >
                              {children}
                            </ul>
                          ),
                          ol: ({ children }) => (
                            <ol
                              style={{
                                paddingLeft: "1.5rem",
                                marginBottom: "0.5rem",
                              }}
                            >
                              {children}
                            </ol>
                          ),
                          li: ({ children }) => (
                            <li
                              style={{
                                marginBottom: "0.25rem",
                                listStyleType: "disc",
                              }}
                            >
                              {children}
                            </li>
                          ),
                          h1: ({ children }) => (
                            <h1
                              style={{
                                color: "var(--yellow-400)",
                                fontSize: "1.5rem",
                                fontWeight: "700",
                                marginBottom: "1rem",
                              }}
                            >
                              {children}
                            </h1>
                          ),
                          h2: ({ children }) => (
                            <h2
                              style={{
                                color: "var(--yellow-400)",
                                fontSize: "1.25rem",
                                fontWeight: "600",
                                marginBottom: "0.75rem",
                              }}
                            >
                              {children}
                            </h2>
                          ),
                          h3: ({ children }) => (
                            <h3
                              style={{
                                color: "var(--yellow-400)",
                                fontSize: "1.1rem",
                                fontWeight: "600",
                                marginBottom: "0.5rem",
                              }}
                            >
                              {children}
                            </h3>
                          ),
                          code: ({ children }) => (
                            <code
                              style={{
                                background: "rgba(0,0,0,0.2)",
                                padding: "0.2rem 0.4rem",
                                borderRadius: "4px",
                                fontSize: "0.9rem",
                              }}
                            >
                              {children}
                            </code>
                          ),
                          blockquote: ({ children }) => (
                            <blockquote
                              style={{
                                borderLeft: "3px solid var(--yellow-400)",
                                paddingLeft: "1rem",
                                margin: "1rem 0",
                                fontStyle: "italic",
                              }}
                            >
                              {children}
                            </blockquote>
                          ),
                        }}
                      >
                        {message.text}
                      </ReactMarkdown>
                    )}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="loading-container">
                  <Spin size="large" />
                </div>
              )}
              {error && <div className="error-message">Lỗi: {error}</div>}
            </div>
          )}

          {/* Input Container */}
          <div className="input-container">
            <div className="input-wrapper">
              <Input.TextArea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Nhập câu hỏi về chính trị Việt Nam..."
                autoSize={{ minRows: 1, maxRows: 4 }}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "var(--cream-100)",
                  fontSize: "1rem",
                }}
              />
            </div>
            <Button
              type="primary"
              icon={<SendHorizontal size={18} />}
              onClick={() => handleSend()}
              disabled={loading || !input.trim()}
              style={{
                background: "var(--yellow-500)",
                borderColor: "var(--yellow-500)",
                color: "var(--red-800)",
                fontWeight: "600",
                height: "auto",
                minHeight: "40px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
