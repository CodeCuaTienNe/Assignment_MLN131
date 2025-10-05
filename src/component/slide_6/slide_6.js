import { Card, Col, Row, Space, Typography } from "antd";
import "./slide_6.css";

const { Title, Paragraph, Text } = Typography;

export const Slide6 = ({ scrollToSection }) => {
  return (
    <section
      id="slide6"
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
            II.4. CHÍNH SÁCH VÀ THỰC TIỄN
          </Title>
          <Text style={{ fontSize: "1.25rem", opacity: 0.9 }}>
            P1. Thách thức cải tạo Xô viết (Lê-nin)
          </Text>
        </div>

        <Row gutter={[32, 32]}>
          <Col xs={24} lg={12}>
            <Card
              style={{
                height: "100%",
                borderRadius: 12,
                borderLeft: "4px solid #d43731",
              }}
            >
              <Title level={3} style={{ color: "#d43731", marginBottom: 24 }}>
                Chiến lược Cấp tiến:
              </Title>
              <Space
                direction="vertical"
                size="large"
                style={{ width: "100%" }}
              >
                <div>
                  <Title
                    level={4}
                    style={{ color: "#d43731", marginBottom: 12 }}
                  >
                    Pháp lý:
                  </Title>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    <li
                      style={{
                        padding: "6px 0",
                        paddingLeft: "16px",
                        position: "relative",
                        borderBottom: "1px solid rgba(212, 55, 49, 0.1)",
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
                      Xóa bỏ đa thê, quy định tuổi kết hôn tối thiểu
                    </li>
                    <li
                      style={{
                        padding: "6px 0",
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
                      Bảo vệ quyền phụ nữ
                    </li>
                  </ul>
                </div>
                <div>
                  <Title
                    level={4}
                    style={{ color: "#d43731", marginBottom: 12 }}
                  >
                    Xã hội:
                  </Title>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    <li
                      style={{
                        padding: "6px 0",
                        paddingLeft: "16px",
                        position: "relative",
                        borderBottom: "1px solid rgba(212, 55, 49, 0.1)",
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
                      Thành lập "ban phụ nữ" (Zhenotdely)
                    </li>
                    <li
                      style={{
                        padding: "6px 0",
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
                      Chiến dịch chống hủ tục (ví dụ: hujum)
                    </li>
                  </ul>
                </div>
              </Space>
            </Card>
          </Col>

          <Col xs={24} lg={12}>
            <Card
              style={{
                height: "100%",
                borderRadius: 12,
                borderLeft: "4px solid #f9f350",
              }}
            >
              <Title level={3} style={{ color: "#d43731", marginBottom: 24 }}>
                Mâu thuẫn và Thách thức:
              </Title>
              <Space
                direction="vertical"
                size="large"
                style={{ width: "100%" }}
              >
                <ul style={{ listStyle: "none", padding: 0 }}>
                  <li
                    style={{
                      padding: "8px 0",
                      borderBottom: "1px solid rgba(249, 243, 80, 0.3)",
                    }}
                  >
                    <Text style={{ color: "#d43731", marginRight: 8 }}>▸</Text>
                    Phụ nữ phải gánh <strong>"Gánh nặng kép"</strong> (công việc
                    xã hội + gia đình)
                  </li>
                  <li
                    style={{
                      padding: "8px 0",
                      borderBottom: "1px solid rgba(249, 243, 80, 0.3)",
                    }}
                  >
                    <Text style={{ color: "#d43731", marginRight: 8 }}>▸</Text>
                    Phản kháng xã hội: Phụ nữ bị bạo hành, ly hôn, giết hại khi
                    đấu tranh cho quyền lợi
                  </li>
                </ul>

                <Card
                  style={{
                    background: "rgba(249, 243, 80, 0.1)",
                    padding: "16px",
                  }}
                >
                  <Title
                    level={4}
                    style={{ color: "#d43731", marginBottom: 8 }}
                  >
                    Kết luận:
                  </Title>
                  <Text style={{ color: "#4a5568", fontStyle: "italic" }}>
                    Lý thuyết/Chính sách thay đổi nhanh, nhưng cấu trúc văn
                    hóa/tư tưởng thay đổi chậm hơn.
                  </Text>
                </Card>
              </Space>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};
