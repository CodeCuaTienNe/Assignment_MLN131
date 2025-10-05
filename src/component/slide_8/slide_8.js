import { Card, Col, Image, Row, Space, Typography } from "antd";
import "./slide_8.css";

const { Title, Paragraph, Text } = Typography;

export const Slide8 = ({ scrollToSection }) => {
  return (
    <section
      id="slide8"
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
            III.2. GIA ĐÌNH TRONG KHÁNG CHIẾN (1945-1975)
          </Title>
          <Text style={{ fontSize: "1.25rem", opacity: 0.9 }}>
            P2. Thực tiễn Việt Nam: Vai trò lịch sử
          </Text>
        </div>

        <Row gutter={[32, 32]}>
          <Col xs={24} lg={14}>
            <Card
              style={{
                height: "100%",
                borderRadius: 12,
                borderLeft: "4px solid #d43731",
              }}
            >
              <Title level={3} style={{ color: "#d43731", marginBottom: 24 }}>
                Biến đổi Vai trò:
              </Title>
              <Paragraph
                style={{
                  fontSize: "1.125rem",
                  marginBottom: 24,
                  color: "#2d3748",
                }}
              >
                Từ đơn vị kinh tế-xã hội thành{" "}
                <Text strong style={{ color: "#d43731" }}>
                  Đơn vị chính trị-cách mạng
                </Text>
                .
              </Paragraph>

              <Title level={4} style={{ color: "#d43731", marginBottom: 16 }}>
                Điển hình: Phong trào "Ba đảm đang" (1965):
              </Title>

              <Space
                direction="vertical"
                size="large"
                style={{ width: "100%" }}
              >
                <Card
                  style={{
                    background: "rgba(249, 243, 80, 0.1)",
                    border: "1px solid #f9f350",
                  }}
                >
                  <Row gutter={[16, 16]}>
                    <Col xs={24} sm={8}>
                      <div style={{ textAlign: "center" }}>
                        <Text style={{ fontSize: "2rem" }}>⚙️</Text>
                        <Title
                          level={5}
                          style={{ color: "#d43731", margin: "8px 0" }}
                        >
                          Đảm nhiệm Sản xuất/Công tác
                        </Title>
                        <Text style={{ fontSize: "0.9rem", color: "#4a5568" }}>
                          (thay nam giới ra tiền tuyến)
                        </Text>
                      </div>
                    </Col>
                    <Col xs={24} sm={8}>
                      <div style={{ textAlign: "center" }}>
                        <Text style={{ fontSize: "2rem" }}>🏠</Text>
                        <Title
                          level={5}
                          style={{ color: "#d43731", margin: "8px 0" }}
                        >
                          Đảm nhiệm Gia đình
                        </Title>
                        <Text style={{ fontSize: "0.9rem", color: "#4a5568" }}>
                          (để chồng yên tâm chiến đấu)
                        </Text>
                      </div>
                    </Col>
                    <Col xs={24} sm={8}>
                      <div style={{ textAlign: "center" }}>
                        <Text style={{ fontSize: "2rem" }}>⚔️</Text>
                        <Title
                          level={5}
                          style={{ color: "#d43731", margin: "8px 0" }}
                        >
                          Đảm nhiệm Phục vụ chiến đấu
                        </Title>
                        <Text style={{ fontSize: "0.9rem", color: "#4a5568" }}>
                          (hỗ trợ trực tiếp)
                        </Text>
                      </div>
                    </Col>
                  </Row>
                </Card>
              </Space>
            </Card>
          </Col>

          <Col xs={24} lg={10}>
            <Space direction="vertical" size="large" style={{ width: "100%" }}>
              <div style={{ borderRadius: 12, overflow: "hidden" }}>
                <Image
                  src="https://thinhvuongvietnam.com/Content/UploadFiles/EditorFiles/images/2023/Quy4/cthcm-cuoi-195321102023104648.jpg"
                  alt="Phụ nữ Việt Nam trong kháng chiến"
                  width="100%"
                  height={250}
                  style={{ objectFit: "cover" }}
                  preview={false}
                />
              </div>

              <Card
                style={{ borderRadius: 12, borderLeft: "4px solid #f9f350" }}
              >
                <Title level={4} style={{ color: "#d43731", marginBottom: 16 }}>
                  Ý nghĩa:
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
                    Phát huy vai trò Phụ nữ Việt Nam
                  </li>
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
                    Gia đình trở thành "chiến tuyến không chính thức"
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
                    Vận dụng sáng tạo lý luận Mác-Lênin
                  </li>
                </ul>
              </Card>
            </Space>
          </Col>
        </Row>
      </div>
    </section>
  );
};
