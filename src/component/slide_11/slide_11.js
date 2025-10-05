import { HeartOutlined, TeamOutlined } from "@ant-design/icons";
import { Card, Col, Row, Space, Typography } from "antd";
import "./slide_11.css";

const { Title, Paragraph, Text } = Typography;

export const Slide11 = ({ scrollToSection }) => {
  return (
    <section
      id="slide11"
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
            CQ9.2: ĐÍCH ĐẾN CỦA TÌNH YÊU & MỐI QUAN HỆ QUAN TRỌNG NHẤT
          </Title>
          <Text style={{ color: "white", fontSize: "1.25rem", opacity: 0.9 }}>
            Câu hỏi thảo luận 1: Tình yêu & Hôn nhân
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
              <HeartOutlined
                style={{
                  fontSize: "2rem",
                  color: "#d43731",
                  marginBottom: 16,
                }}
              />
              <Title level={3} style={{ color: "#d43731", marginBottom: 24 }}>
                1. Sẽ ra sao nếu đích đến của tình yêu không phải là hôn nhân?
              </Title>
              <Space
                direction="vertical"
                size="large"
                style={{ width: "100%" }}
              >
                <div>
                  <Text strong style={{ color: "#d43731" }}>
                    Lý luận Mác:
                  </Text>
                  <Paragraph style={{ marginTop: 8 }}>
                    Đạt mục tiêu giải phóng con người khỏi ràng buộc kinh tế (tư
                    hữu).
                  </Paragraph>
                </div>
                <div>
                  <Text strong style={{ color: "#d43731" }}>
                    Hệ quả:
                  </Text>
                  <Paragraph style={{ marginTop: 8 }}>
                    Quan hệ hoàn toàn dựa trên tự do, tự nguyện.
                  </Paragraph>
                </div>
                <Card style={{ background: "rgba(249, 243, 80, 0.1)" }}>
                  <Text strong style={{ color: "#d43731" }}>
                    Thách thức:
                  </Text>
                  <Paragraph style={{ marginTop: 8 }}>
                    Xã hội phải tìm giải pháp thay thế cho chức năng kinh tế,
                    nuôi dưỡng và giáo dục (Lê-nin: Con người mới).
                  </Paragraph>
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
              <TeamOutlined
                style={{
                  fontSize: "2rem",
                  color: "#d43731",
                  marginBottom: 16,
                }}
              />
              <Title level={3} style={{ color: "#d43731", marginBottom: 24 }}>
                2. Có phải tình yêu là mối quan hệ quan trọng nhất trong gia
                đình?
              </Title>
              <Space
                direction="vertical"
                size="large"
                style={{ width: "100%" }}
              >
                <div>
                  <Text strong style={{ color: "#d43731" }}>
                    Tình yêu:
                  </Text>
                  <Text style={{ marginLeft: 8 }}>
                    Nền tảng khởi đầu, nguồn gốc Hạnh phúc.
                  </Text>
                </div>
                <div>
                  <Text strong style={{ color: "#d43731" }}>
                    Trụ cột khác (Quan trọng không kém):
                  </Text>
                  <ul style={{ listStyle: "none", padding: 0, marginTop: 8 }}>
                    <li
                      style={{
                        padding: "4px 0",
                        paddingLeft: "16px",
                        position: "relative",
                      }}
                    >
                      <Text
                        style={{
                          color: "#d43731",
                          position: "absolute",
                          left: 0,
                        }}
                      >
                        ▸
                      </Text>
                      <strong>Trách nhiệm:</strong> Duy trì ổn định, nuôi dưỡng
                      con cái
                    </li>
                    <li
                      style={{
                        padding: "4px 0",
                        paddingLeft: "16px",
                        position: "relative",
                      }}
                    >
                      <Text
                        style={{
                          color: "#d43731",
                          position: "absolute",
                          left: 0,
                        }}
                      >
                        ▸
                      </Text>
                      <strong>Bình đẳng:</strong> Xóa bỏ định kiến, tạo không
                      khí dân chủ
                    </li>
                    <li
                      style={{
                        padding: "4px 0",
                        paddingLeft: "16px",
                        position: "relative",
                      }}
                    >
                      <Text
                        style={{
                          color: "#d43731",
                          position: "absolute",
                          left: 0,
                        }}
                      >
                        ▸
                      </Text>
                      <strong>Tôn trọng/Hiếu kính:</strong> Gắn kết giữa các thế
                      hệ
                    </li>
                  </ul>
                </div>
              </Space>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};
