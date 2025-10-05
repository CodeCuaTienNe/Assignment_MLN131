import { BookOutlined, GlobalOutlined, TeamOutlined } from "@ant-design/icons";
import { Card, Col, Row, Space, Typography } from "antd";
import "./slide_2.css";

const { Title, Paragraph, Text } = Typography;

export const Slide2 = ({ scrollToSection }) => {
  return (
    <section
      id="slide2"
      style={{
        minHeight: "100vh",
        background: "white",
        padding: "80px 0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <Title
            level={2}
            style={{
              fontSize: "2.5rem",
              fontWeight: 700,
              marginBottom: 16,
              fontFamily: "var(--font-fraunces)",
              color: "#d43731",
            }}
          >
            I. KHÁI QUÁT CHUNG
          </Title>
          <Text style={{ fontSize: "1.25rem", opacity: 0.9 }}>
            Mở đầu & Phạm vi nghiên cứu
          </Text>
        </div>

        <Row gutter={[32, 32]} align="middle">
          <Col xs={24} lg={12}>
            <Card
              style={{
                borderRadius: 12,
                border: "1px solid rgba(212, 55, 49, 0.1)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                borderLeft: "4px solid #d43731",
                height: "100%",
              }}
            >
              <Space
                direction="vertical"
                size="large"
                style={{ width: "100%" }}
              >
                <div>
                  <TeamOutlined
                    style={{
                      fontSize: "2rem",
                      color: "#d43731",
                      marginBottom: 16,
                    }}
                  />
                  <Title
                    level={4}
                    style={{ color: "#d43731", marginBottom: 16 }}
                  >
                    Vị trí của Gia đình
                  </Title>
                  <Paragraph
                    style={{
                      fontSize: "1.125rem",
                      lineHeight: 1.7,
                      color: "#2d3748",
                    }}
                  >
                    Gia đình là{" "}
                    <Text strong style={{ color: "#d43731" }}>
                      "tế bào của cơ thể xã hội"
                    </Text>
                    .
                  </Paragraph>
                </div>

                <Card
                  style={{
                    background: "rgba(249, 243, 80, 0.1)",
                    borderLeft: "4px solid #f9f350",
                  }}
                >
                  <Title
                    level={5}
                    style={{ color: "#d43731", marginBottom: 8 }}
                  >
                    Bản chất:
                  </Title>
                  <Text style={{ color: "#4a5568" }}>
                    Sự tồn tại và biến đổi của gia đình gắn liền với{" "}
                    <strong>Hình thái kinh tế - xã hội</strong>.
                  </Text>
                </Card>
              </Space>
            </Card>
          </Col>

          <Col xs={24} lg={12}>
            <Space direction="vertical" size="large" style={{ width: "100%" }}>
              <Card style={{ borderRadius: 12, textAlign: "center" }}>
                <BookOutlined
                  style={{
                    fontSize: "2rem",
                    color: "#d43731",
                    marginBottom: 12,
                  }}
                />
                <Title level={4} style={{ color: "#d43731", marginBottom: 16 }}>
                  Mục tiêu Báo cáo
                </Title>
                <ul
                  style={{ textAlign: "left", listStyle: "none", padding: 0 }}
                >
                  <li
                    style={{
                      padding: "8px 0",
                      borderBottom: "1px solid rgba(212, 55, 49, 0.1)",
                    }}
                  >
                    <Text style={{ color: "#d43731", marginRight: 8 }}>▸</Text>
                    Phân tích hệ thống quan điểm của Mác-Ăngghen & Lê-nin về gia
                    đình
                  </li>
                  <li style={{ padding: "8px 0" }}>
                    <Text style={{ color: "#d43731", marginRight: 8 }}>▸</Text>
                    Đánh giá quá trình biến đổi của Gia đình Việt Nam trong Thời
                    kỳ quá độ và Đổi mới
                  </li>
                </ul>
              </Card>

              <Card style={{ borderRadius: 12, textAlign: "center" }}>
                <GlobalOutlined
                  style={{
                    fontSize: "2rem",
                    color: "#d43731",
                    marginBottom: 12,
                  }}
                />
                <Title level={4} style={{ color: "#d43731", marginBottom: 16 }}>
                  Phương pháp luận
                </Title>
                <Text style={{ color: "#4a5568", lineHeight: 1.6 }}>
                  Chủ nghĩa duy vật biện chứng & lịch sử; Phân tích Định tính
                  (Lý luận) và Định lượng (Số liệu thực tế)
                </Text>
              </Card>
            </Space>
          </Col>
        </Row>
      </div>
    </section>
  );
};
