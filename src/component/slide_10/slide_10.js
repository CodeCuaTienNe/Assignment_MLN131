import { Card, Col, Row, Space, Statistic, Typography } from "antd";
import "./slide_10.css";

const { Title, Paragraph, Text } = Typography;

export const Slide10 = ({ scrollToSection }) => {
  return (
    <section
      id="slide10"
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
            III.4. NHỮNG MẶT TRÁI CỦA THỜI KỲ QUÁ ĐỘ
          </Title>
          <Text style={{ fontSize: "1.25rem", opacity: 0.9 }}>
            P2. Hạn chế và thách thức nghiêm trọng
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
                Hạn chế chung:
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
                      borderBottom: "1px solid rgba(212, 55, 49, 0.1)",
                    }}
                  >
                    <Text style={{ color: "#d43731", marginRight: 8 }}>⚠️</Text>
                    Sự xuống cấp của một số giá trị văn hóa gia đình
                  </li>
                  <li style={{ padding: "8px 0" }}>
                    <Text style={{ color: "#d43731", marginRight: 8 }}>⚠️</Text>
                    Gia tăng các tệ nạn xã hội (Ly hôn, Bạo lực gia đình)
                  </li>
                </ul>
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
                Thách thức Nghiêm trọng (Nút thắt):
              </Title>
              <Title level={4} style={{ color: "#d43731", marginBottom: 16 }}>
                Mất Cân bằng Giới tính khi Sinh (TSGTKS)
              </Title>

              <Space
                direction="vertical"
                size="medium"
                style={{ width: "100%" }}
              >
                <Card style={{ background: "rgba(249, 243, 80, 0.1)" }}>
                  <Statistic
                    title="Thực trạng (TĐT 2019)"
                    value={111.5}
                    suffix="bé trai / 100 bé gái"
                    precision={1}
                    valueStyle={{ color: "#d43731", fontSize: "1.5rem" }}
                  />
                  <Text style={{ fontSize: "0.875rem", color: "#4a5568" }}>
                    (cao hơn mức sinh học tự nhiên 104-106)
                  </Text>
                </Card>

                <div>
                  <Text strong style={{ color: "#d43731" }}>
                    Nguyên nhân:
                  </Text>
                  <Paragraph style={{ marginTop: 8 }}>
                    Kết hợp giữa tâm lý "Trọng nam khinh nữ" truyền thống và
                    Công nghệ hiện đại (siêu âm lựa chọn giới tính).
                  </Paragraph>
                </div>

                <Card
                  style={{
                    background: "#ffe6e6",
                    border: "1px solid #ff4d4f",
                  }}
                >
                  <Text strong style={{ color: "#d43731" }}>
                    Hệ lụy:
                  </Text>
                  <Paragraph style={{ marginTop: 8, color: "#4a5568" }}>
                    Dự báo dư thừa 1,5 – 2,5 triệu nam giới trong độ tuổi LĐ vào
                    giữa TK 21.
                  </Paragraph>
                </Card>
              </Space>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};
