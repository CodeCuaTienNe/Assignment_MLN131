import { Card, Col, Row, Space, Typography } from "antd";
import "./slide_12.css";

const { Title, Paragraph, Text } = Typography;

export const Slide12 = ({ scrollToSection }) => {
  return (
    <section
      id="slide12"
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
            CQ10.3: QUAN ĐIỂM "HÔN NHÂN LÀ ÁP LỰC CHO NGƯỜI TRẺ"
          </Title>
          <Text style={{ fontSize: "1.25rem", opacity: 0.9 }}>
            Câu hỏi thảo luận 2: Người trẻ không muốn kết hôn
          </Text>
        </div>

        <Row gutter={[32, 32]}>
          <Col xs={24} lg={8}>
            <Card
              style={{
                height: "100%",
                borderRadius: 12,
                borderLeft: "4px solid #d43731",
              }}
            >
              <Title level={3} style={{ color: "#d43731", marginBottom: 24 }}>
                Tính Hợp lý:
              </Title>
              <Space
                direction="vertical"
                size="large"
                style={{ width: "100%" }}
              >
                <div>
                  <Text strong style={{ color: "#d43731" }}>
                    Phản ánh áp lực hiện đại:
                  </Text>
                  <Paragraph style={{ marginTop: 8 }}>
                    Chi phí kinh tế (nhà ở, sinh hoạt) đắt đỏ và áp lực thời
                    gian (cân bằng công việc/gia đình).
                  </Paragraph>
                </div>
                <div>
                  <Text strong style={{ color: "#d43731" }}>
                    Thực hiện mục tiêu Giải phóng Phụ nữ:
                  </Text>
                  <Paragraph style={{ marginTop: 8 }}>
                    Giúp cá nhân độc lập hơn, có quyền từ chối hệ thống áp lực
                    truyền thống.
                  </Paragraph>
                </div>
              </Space>
            </Card>
          </Col>

          <Col xs={24} lg={8}>
            <Card
              style={{
                height: "100%",
                borderRadius: 12,
                borderLeft: "4px solid #f9f350",
              }}
            >
              <Title level={3} style={{ color: "#d43731", marginBottom: 24 }}>
                Nhìn nhận từ góc độ Phát triển:
              </Title>
              <Space
                direction="vertical"
                size="large"
                style={{ width: "100%" }}
              >
                <Card
                  style={{
                    background: "#e6ffe6",
                    border: "1px solid #52c41a",
                  }}
                >
                  <Text strong style={{ color: "#389e0d" }}>
                    Tích cực (Sự giải phóng):
                  </Text>
                  <Paragraph style={{ marginTop: 8, fontSize: "0.9rem" }}>
                    Thể hiện tự do cá nhân, đòi hỏi hình thức hôn nhân bình đẳng
                    hơn.
                  </Paragraph>
                </Card>
                <Card
                  style={{
                    background: "#ffe6e6",
                    border: "1px solid #ff4d4f",
                  }}
                >
                  <Text strong style={{ color: "#d43731" }}>
                    Tiêu cực (Thách thức Xã hội):
                  </Text>
                  <Paragraph style={{ marginTop: 8, fontSize: "0.9rem" }}>
                    Ảnh hưởng đến cơ cấu dân số (già hóa) và chức năng tái sản
                    xuất xã hội.
                  </Paragraph>
                </Card>
              </Space>
            </Card>
          </Col>

          <Col xs={24} lg={8}>
            <Card
              style={{
                height: "100%",
                borderRadius: 12,
                borderLeft: "4px solid #52c41a",
              }}
            >
              <Title level={3} style={{ color: "#d43731", marginBottom: 24 }}>
                Giải pháp Đề xuất:
              </Title>
              <Space
                direction="vertical"
                size="medium"
                style={{ width: "100%" }}
              >
                <ul style={{ listStyle: "none", padding: 0 }}>
                  <li
                    style={{
                      padding: "6px 0",
                      paddingLeft: "16px",
                      position: "relative",
                      borderBottom: "1px solid rgba(82, 196, 26, 0.3)",
                    }}
                  >
                    <Text
                      style={{
                        color: "#52c41a",
                        position: "absolute",
                        left: 0,
                      }}
                    >
                      ▸
                    </Text>
                    Hỗ trợ kinh tế (nhà ở, giáo dục)
                  </li>
                  <li
                    style={{
                      padding: "6px 0",
                      paddingLeft: "16px",
                      position: "relative",
                      borderBottom: "1px solid rgba(82, 196, 26, 0.3)",
                    }}
                  >
                    <Text
                      style={{
                        color: "#52c41a",
                        position: "absolute",
                        left: 0,
                      }}
                    >
                      ▸
                    </Text>
                    Tôn trọng lựa chọn và công nhận các mô hình gia đình đa dạng
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
                        color: "#52c41a",
                        position: "absolute",
                        left: 0,
                      }}
                    >
                      ▸
                    </Text>
                    Thúc đẩy Bình đẳng Thực chất (chia sẻ trách nhiệm chăm sóc)
                  </li>
                </ul>
              </Space>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};
