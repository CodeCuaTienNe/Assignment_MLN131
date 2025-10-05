"use client";

import { ArrowLeftOutlined, RobotOutlined } from "@ant-design/icons";
import { Button, Input, Layout, Spin, Typography } from "antd";
import { MessageCircle, Plus, SendHorizontal, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useAI } from "../../hooks/gemini-ai/use-ai";
import "./giaidap.css";

const { Header, Content } = Layout;
const { Title } = Typography;

const suggestedPrompts = [
  {
    title: "Lý luận Mác-Ăngghen về gia đình",
    text: "Giải thích quan điểm của C.Mác và Ph.Ăngghen về nguồn gốc lịch sử và bản chất của gia đình",
  },
  {
    title: "Quan điểm Lê-nin về gia đình",
    text: "Lý luận của V.I.Lê-nin về vai trò của gia đình trong thời kỳ quá độ lên chủ nghĩa xã hội",
  },
  {
    title: "Gia đình Việt Nam trong kháng chiến",
    text: "Phân tích sự chuyển đổi vai trò của gia đình Việt Nam trong cuộc kháng chiến chống Mỹ (1945-1975)",
  },
  {
    title: "Gia đình trong thời kỳ Đổi mới",
    text: "Đánh giá tác động của kinh tế thị trường và hội nhập đến cấu trúc gia đình Việt Nam từ 1986 đến nay",
  },
  {
    title: "Mất cân bằng giới tính khi sinh",
    text: "Phân tích nguyên nhân và hệ lụy của tình trạng mất cân bằng giới tính khi sinh ở Việt Nam",
  },
  {
    title: "Tình yêu và hôn nhân trong xã hội XHCN",
    text: "Thảo luận về mối quan hệ giữa tình yêu, hôn nhân và các giá trị gia đình trong chủ nghĩa xã hội",
  },
  {
    title: "Quan điểm Hồ Chí Minh về gia đình",
    text: "Phân tích quan điểm của Chủ tịch Hồ Chí Minh về vai trò của gia đình trong xã hội Việt Nam",
  },
  {
    title: "Gia đình trong xã hội XHCN",
    text: "Thảo luận về đặc điểm và vai trò của gia đình trong xã hội xã hội chủ nghĩa",
  },
];

const suggestionTags = [
  "Gia đình trong thời kỳ quá độ",
  "Quan điểm Mác-Ăngghen về gia đình",
  "Lý luận Lê-nin về hôn nhân",
  "Thực tiễn gia đình Việt Nam",
  "Chính sách gia đình XHCN",
  "Tình trạng mất cân bằng giới tính",
  "Vai trò phụ nữ trong kháng chiến",
  "Gia đình hạt nhân hiện đại",
  "Giải phóng phụ nữ theo Mác",
  "Thách thức gia đình Việt Nam",
];

export default function TestAI() {
  const router = useRouter();
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
      if (loading || !input.trim()) return;
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
    <Layout style={{ minHeight: "100vh" }}>
      {/* Header với thiết kế giống trang chính */}
      <Header
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1000,
          background: "#a84334",
          padding: "0 16px",
          height: "56px",
          lineHeight: "56px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            {/* Nút quay về */}
            <Button
              type="text"
              icon={<ArrowLeftOutlined />}
              onClick={() => router.push("/Assignment_MLN131")}
              style={{
                color: "white",
                display: "flex",
                alignItems: "center",
                fontSize: "16px",
                height: "40px",
                padding: "0 8px",
              }}
              title="Quay về trang chính"
            />

            {/* Lá cờ Việt Nam */}
            <div
              style={{
                width: 40,
                height: 26,
                background: "#d43731",
                position: "relative",
                borderRadius: 3,
                border: "1px solid #b91c1c",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="#f9f350"
                style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.3))" }}
              >
                <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
              </svg>
            </div>

            <Title
              level={5}
              style={{
                color: "white",
                margin: 0,
                fontSize: "16px",
                fontWeight: 600,
              }}
            >
              <RobotOutlined style={{ marginRight: 8 }} />
              Trợ lý AI - Gia đình trong thời kỳ quá độ
            </Title>
          </div>
        </div>
      </Header>

      <Content style={{ marginTop: 56 }}>
        <div className="app-container">
          {/* Mobile Menu Toggle - Only show when sidebar is closed */}
          {/* {!sidebarOpen && (
            <Button
              className="mobile-menu-toggle"
              icon={<Menu size={20} />}
              onClick={() => setSidebarOpen(true)}
              style={{
                position: "fixed",
                top: "70px",
                left: "1rem",
                zIndex: 1001,
                background: "#a84334",
                borderColor: "#f9f350",
                color: "white",
                borderRadius: "12px",
                width: "48px",
                height: "48px",
                border: "2px solid #f9f350",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            />
          )} */}

          {/* Sidebar Overlay - Only show when sidebar is open */}
          {sidebarOpen && (
            <div
              className="sidebar-overlay open"
              onClick={() => setSidebarOpen(false)}
            />
          )}

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
                    Trợ lý AI tùy chỉnh cho nhu cầu học tập. Hãy bắt đầu cuộc
                    trò chuyện bằng cách chọn một chủ đề dưới đây hoặc đặt câu
                    hỏi của riêng bạn.
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
                        {message.isUser ? "ME" : <RobotOutlined />}
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
                                    color: "#d43731",
                                    fontWeight: "700",
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
                                    color: "#d43731",
                                    fontSize: "1.5rem",
                                    fontWeight: "800",
                                    marginBottom: "1rem",
                                    borderBottom: "2px solid #f9f350",
                                    paddingBottom: "0.5rem",
                                  }}
                                >
                                  {children}
                                </h1>
                              ),
                              h2: ({ children }) => (
                                <h2
                                  style={{
                                    color: "#d43731",
                                    fontSize: "1.25rem",
                                    fontWeight: "700",
                                    marginBottom: "0.75rem",
                                  }}
                                >
                                  {children}
                                </h2>
                              ),
                              h3: ({ children }) => (
                                <h3
                                  style={{
                                    color: "#d43731",
                                    fontSize: "1.1rem",
                                    fontWeight: "700",
                                    marginBottom: "0.5rem",
                                  }}
                                >
                                  {children}
                                </h3>
                              ),
                              code: ({ children }) => (
                                <code
                                  style={{
                                    background: "#f3f4f6",
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
                                    borderLeft: "4px solid #d43731",
                                    paddingLeft: "1rem",
                                    margin: "1rem 0",
                                    fontStyle: "italic",
                                    background: "rgba(212, 55, 49, 0.05)",
                                    borderRadius: "0 8px 8px 0",
                                    padding: "0.75rem 0 0.75rem 1rem",
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

              {/* Suggestion Tags - Only show after conversation started */}
              {messages.length > 0 && (
                <div className="suggestion-tags">
                  <div className="suggestion-tags-title">
                    💡 Gợi ý câu hỏi tiếp theo:
                  </div>
                  <div className="suggestion-tags-list">
                    {suggestionTags.map((tag, index) => (
                      <button
                        key={index}
                        className="suggestion-tag"
                        onClick={() => handleSend(tag)}
                        disabled={loading}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input Container */}
              <div className="input-container">
                <div className="input-wrapper">
                  <Input.TextArea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Nhập câu hỏi ở đây nhé 😍..."
                    autoSize={{ minRows: 1, maxRows: 4 }}
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "#333333",
                      fontSize: "1rem",
                    }}
                  />
                </div>
                <Button
                  type="primary"
                  icon={<SendHorizontal size={20} />}
                  onClick={() => handleSend()}
                  disabled={loading || !input.trim()}
                  className="send-button"
                  style={{
                    background: "var(--yellow-500)",
                    borderColor: "var(--yellow-500)",
                    color: "var(--red-800)",
                    fontWeight: "600",
                    width: "40px",
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  );
}
