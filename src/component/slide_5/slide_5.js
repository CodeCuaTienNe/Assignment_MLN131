import { Card, Col, Row, Space, Typography } from "antd";
import "./slide_5.css";

const { Title, Paragraph, Text } = Typography;

export const Slide5 = ({ scrollToSection }) => {
  return (
    <section
      id="slide5"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "linear-gradient(135deg, #d43731, #b91c1c)",
        position: "relative",
        overflow: "hidden",
        padding: "80px 24px",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            "url('https://cdn-media.sforum.vn/storage/app/media/anh-vinh-ha-long-28.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15,
          zIndex: 0,
        }}
      />
      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <Title
            level={2}
            style={{
              color: "white",
              fontSize: "2.5rem",
              fontWeight: 700,
              marginBottom: 16,
              fontFamily: "var(--font-fraunces)",
            }}
          >
            II.3. GIA ĐÌNH VÀ XÂY DỰNG CON NGƯỜI MỚI
          </Title>
          <Text style={{ color: "white", fontSize: "1.25rem", opacity: 0.9 }}>
            P1. Quan điểm V.I. Lê-nin về thời kỳ quá độ
          </Text>
        </div>

        <Row gutter={[32, 32]}>
          <Col xs={24} lg={12}>
            <Card
              style={{
                height: "100%",
                borderRadius: 12,
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(10px)",
              }}
            >
              <Title level={3} style={{ color: "#d43731", marginBottom: 24 }}>
                Vai trò trong Thời kỳ Quá độ:
              </Title>
              <Space direction="vertical" size="large">
                <Paragraph
                  style={{
                    fontSize: "1.125rem",
                    lineHeight: 1.7,
                    color: "#2d3748",
                  }}
                >
                  Gia đình là môi trường chuyển tiếp loại bỏ quan hệ cũ và hình
                  thành quan hệ XHCN mới.
                </Paragraph>
                <Card
                  style={{
                    background: "rgba(249, 243, 80, 0.1)",
                    borderLeft: "4px solid #f9f350",
                  }}
                >
                  <Text style={{ color: "#4a5568", fontStyle: "italic" }}>
                    Cải tạo gia đình là một phần của cuộc đấu tranh giai cấp.
                  </Text>
                </Card>
              </Space>
            </Card>
          </Col>

          <Col xs={24} lg={12}>
            <Card
              style={{
                height: "100%",
                borderRadius: 12,
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(10px)",
              }}
            >
              <Title level={3} style={{ color: "#d43731", marginBottom: 24 }}>
                Gia đình & Xây dựng Con người mới:
              </Title>
              <Space direction="vertical" size="large">
                <Card
                  style={{
                    background: "rgba(249, 243, 80, 0.1)",
                    borderLeft: "4px solid #f9f350",
                  }}
                >
                  <Text
                    style={{
                      color: "#4a5568",
                      fontSize: "1.125rem",
                      fontStyle: "italic",
                    }}
                  >
                    Gia đình là{" "}
                    <strong>"cái nôi thân yêu nuôi dưỡng cả đời người"</strong>.
                  </Text>
                </Card>
                <div>
                  <Text strong style={{ color: "#d43731" }}>
                    Nhiệm vụ:
                  </Text>
                  <Paragraph style={{ marginTop: 8, color: "#2d3748" }}>
                    Nuôi dưỡng <strong>"con người mới xã hội chủ nghĩa"</strong>{" "}
                    (ý thức giai cấp, ưu tiên lợi ích tập thể).
                  </Paragraph>
                </div>
              </Space>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};
