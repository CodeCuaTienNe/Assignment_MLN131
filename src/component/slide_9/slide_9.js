import { Card, Col, Row, Space, Statistic, Typography } from "antd";
import "./slide_9.css";

const { Title, Paragraph, Text } = Typography;

export const Slide9 = ({ scrollToSection }) => {
  return (
    <section
      id="slide9"
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
            III.3. TÁC ĐỘNG CỦA KINH TẾ THỊ TRƯỜNG & HỘI NHẬP
          </Title>
          <Text style={{ color: "white", fontSize: "1.25rem", opacity: 0.9 }}>
            P2. Thực tiễn Việt Nam: Thời kỳ Đổi mới (từ 1986)
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
                Thành tựu:
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
                    <Text style={{ color: "#d43731", marginRight: 8 }}>✓</Text>
                    Đời sống vật chất được nâng cao
                  </li>
                  <li
                    style={{
                      padding: "8px 0",
                      borderBottom: "1px solid rgba(212, 55, 49, 0.1)",
                    }}
                  >
                    <Text style={{ color: "#d43731", marginRight: 8 }}>✓</Text>
                    Quan hệ vợ chồng ngày càng dựa trên tình yêu chân chính và
                    bình đẳng
                  </li>
                </ul>

                <Title level={4} style={{ color: "#d43731", marginBottom: 12 }}>
                  Biến đổi Cấu trúc:
                </Title>
                <Card style={{ background: "rgba(249, 243, 80, 0.1)" }}>
                  <Text style={{ color: "#4a5568" }}>
                    Xu hướng Gia đình Hạt nhân thay thế đa thế hệ
                  </Text>
                  <div style={{ marginTop: 8 }}>
                    <Statistic
                      title="Quy mô trung bình"
                      value={3.6}
                      suffix="người/hộ"
                      precision={1}
                      valueStyle={{ color: "#d43731", fontSize: "1.5rem" }}
                    />
                    <Text style={{ fontSize: "0.875rem", color: "#4a5568" }}>
                      (TĐT 2019)
                    </Text>
                  </div>
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
                Thách thức:
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
                    Ly tán nơi ở làm giảm sự gắn bó giữa các thế hệ
                  </li>
                  <li
                    style={{
                      padding: "8px 0",
                      borderBottom: "1px solid rgba(249, 243, 80, 0.3)",
                    }}
                  >
                    <Text style={{ color: "#d43731", marginRight: 8 }}>▸</Text>
                    Xung đột thế hệ gia tăng do khác biệt lối sống
                  </li>
                  <li style={{ padding: "8px 0" }}>
                    <Text style={{ color: "#d43731", marginRight: 8 }}>▸</Text>
                    Con cái kết hôn có xu hướng ở riêng
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
