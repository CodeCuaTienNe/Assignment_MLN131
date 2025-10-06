"use client";

import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Layout, Progress, Typography } from "antd";
import { useRouter } from "next/navigation";
import { useQuiz } from "../../hooks/quiz/use-quiz";
import "./quiz.css";

const { Header, Content } = Layout;
const { Title, Text } = Typography;

export default function QuizPage() {
  const router = useRouter();
  const {
    questions,
    currentQuestion,
    currentQuestionIndex,
    selectedAnswer,
    showAnswer,
    score,
    quizCompleted,
    totalQuestions,
    handleAnswerSelect,
    nextQuestion,
    resetQuiz,
  } = useQuiz();

  if (questions.length === 0) {
    return (
      <Layout style={{ minHeight: "100vh" }}>
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
                level={4}
                style={{
                  color: "white",
                  margin: 0,
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                Quiz: Gia đình trong thời kỳ quá độ
              </Title>
            </div>
          </div>
        </Header>
        <Content
          style={{ paddingTop: "56px", minHeight: "calc(100vh - 56px)" }}
        >
          <div className="quiz-container">
            <div style={{ textAlign: "center", padding: "50px" }}>
              <Text>Đang tải câu hỏi...</Text>
            </div>
          </div>
        </Content>
      </Layout>
    );
  }

  if (quizCompleted) {
    return (
      <Layout style={{ minHeight: "100vh" }}>
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
                level={4}
                style={{
                  color: "white",
                  margin: 0,
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                Quiz Hoàn thành
              </Title>
            </div>
          </div>
        </Header>
        <Content
          style={{ paddingTop: "56px", minHeight: "calc(100vh - 56px)" }}
        >
          <div className="quiz-container">
            <div className="quiz-completed">
              <Title
                level={2}
                style={{ textAlign: "center", color: "#a84334" }}
              >
                Chúc mừng! Bạn đã hoàn thành quiz
              </Title>
              <div className="score-display">
                <Text style={{ fontSize: "24px", fontWeight: "bold" }}>
                  Điểm số: {score}/{totalQuestions}
                </Text>
                <Text style={{ fontSize: "18px", marginTop: "10px" }}>
                  Tỷ lệ đúng: {Math.round((score / totalQuestions) * 100)}%
                </Text>
              </div>
              <Button
                type="primary"
                size="large"
                onClick={resetQuiz}
                style={{
                  background: "#a84334",
                  borderColor: "#a84334",
                  marginTop: "20px",
                }}
              >
                Làm lại quiz
              </Button>
            </div>
          </div>
        </Content>
      </Layout>
    );
  }

  return (
    <Layout style={{ minHeight: "100vh" }}>
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
              level={4}
              style={{
                color: "white",
                margin: 0,
                fontSize: "18px",
                fontWeight: "600",
              }}
            >
              Quiz: Gia đình trong thời kỳ quá độ
            </Title>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <Text style={{ color: "white", fontSize: "16px" }}>
              Câu {currentQuestionIndex + 1}/{totalQuestions}
            </Text>
            <Progress
              percent={((currentQuestionIndex + 1) / totalQuestions) * 100}
              showInfo={false}
              strokeColor="#ffffff"
              trailColor="rgba(255,255,255,0.3)"
              style={{ width: "200px" }}
            />
          </div>
        </div>
      </Header>
      <Content style={{ paddingTop: "56px", minHeight: "calc(100vh - 56px)" }}>
        <div className="quiz-container">
          <div className="quiz-question">
            <Title level={4} style={{ marginBottom: "20px", color: "#0f1f3d" }}>
              Câu {currentQuestionIndex + 1}: {currentQuestion?.question}
            </Title>
            <div className="quiz-options">
              {currentQuestion?.options.map((option, index) => (
                <Button
                  key={index}
                  className={`quiz-option ${
                    showAnswer
                      ? index === currentQuestion.correctAnswer
                        ? "correct"
                        : index === selectedAnswer
                        ? "incorrect"
                        : ""
                      : selectedAnswer === index
                      ? "selected"
                      : ""
                  }`}
                  onClick={() => !showAnswer && handleAnswerSelect(index)}
                  disabled={showAnswer}
                  block
                  style={{
                    marginBottom: "10px",
                    height: "auto",
                    padding: "12px 16px",
                    textAlign: "left",
                    whiteSpace: "normal",
                    fontSize: "16px",
                  }}
                >
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>
                    {String.fromCharCode(65 + index)}.
                  </span>
                  {option}
                </Button>
              ))}
            </div>
            {showAnswer && (
              <div className="answer-feedback">
                <Text
                  style={{
                    fontSize: "16px",
                    color:
                      selectedAnswer === currentQuestion.correctAnswer
                        ? "#52c41a"
                        : "#ff4d4f",
                    fontWeight: "bold",
                  }}
                >
                  {selectedAnswer === currentQuestion.correctAnswer
                    ? "✓ Đúng! "
                    : "✗ Sai. "}
                  Đáp án đúng:{" "}
                  {String.fromCharCode(65 + currentQuestion.correctAnswer)}.{" "}
                  {currentQuestion.options[currentQuestion.correctAnswer]}
                </Text>
                <Button
                  type="primary"
                  onClick={nextQuestion}
                  style={{
                    marginTop: "20px",
                    background: "#a84334",
                    borderColor: "#a84334",
                  }}
                >
                  {currentQuestionIndex < totalQuestions - 1
                    ? "Câu tiếp theo"
                    : "Xem kết quả"}
                </Button>
              </div>
            )}
          </div>
        </div>
      </Content>
    </Layout>
  );
}
