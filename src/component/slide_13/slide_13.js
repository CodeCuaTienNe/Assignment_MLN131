import {
  BookOutlined,
  GlobalOutlined,
  RocketOutlined,
} from "@ant-design/icons";
import { Card, Col, Row, Typography } from "antd";
import "./slide_13.css";

const { Title, Paragraph } = Typography;

export const Slide13 = ({ scrollToSection }) => {
  return (
    <section
      id="slide13"
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
          textAlign: "center",
        }}
      >
        <Title
          level={2}
          style={{
            color: "white",
            fontSize: "2.5rem",
            fontWeight: 700,
            marginBottom: 48,
            fontFamily: "var(--font-fraunces)",
          }}
        >
          KẾT LUẬN VÀ THẢO LUẬN
        </Title>

        <Row gutter={[32, 32]} style={{ marginBottom: 48 }}>
          <Col xs={24} md={8}>
            <Card
              style={{
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(10px)",
                borderRadius: 12,
                padding: "24px",
                height: "100%",
              }}
            >
              <BookOutlined
                style={{
                  fontSize: "2.5rem",
                  color: "#d43731",
                  marginBottom: 16,
                }}
              />
              <Title level={3} style={{ color: "#d43731", marginBottom: 16 }}>
                Tóm tắt:
              </Title>
              <Paragraph style={{ color: "#2d3748", lineHeight: 1.6 }}>
                Gia đình Việt Nam đã trải qua quá trình chuyển đổi sâu sắc, đạt
                được các thành tựu về bình đẳng và tiến bộ trên cơ sở vận dụng
                lý luận Mác-Lênin.
              </Paragraph>
            </Card>
          </Col>

          <Col xs={24} md={8}>
            <Card
              style={{
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(10px)",
                borderRadius: 12,
                padding: "24px",
                height: "100%",
              }}
            >
              <RocketOutlined
                style={{
                  fontSize: "2.5rem",
                  color: "#d43731",
                  marginBottom: 16,
                }}
              />
              <Title level={3} style={{ color: "#d43731", marginBottom: 16 }}>
                Thách thức Lớn nhất:
              </Title>
              <Paragraph style={{ color: "#2d3748", lineHeight: 1.6 }}>
                Cuộc đấu tranh tư tưởng lâu dài chống lại tàn dư truyền thống
                (như TSGTKS), đòi hỏi sự can thiệp đồng bộ về kinh tế, pháp lý
                và văn hóa.
              </Paragraph>
            </Card>
          </Col>

          <Col xs={24} md={8}>
            <Card
              style={{
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(10px)",
                borderRadius: 12,
                padding: "24px",
                height: "100%",
              }}
            >
              <GlobalOutlined
                style={{
                  fontSize: "2.5rem",
                  color: "#d43731",
                  marginBottom: 16,
                }}
              />
              <Title level={3} style={{ color: "#d43731", marginBottom: 16 }}>
                Hướng mở:
              </Title>
              <Paragraph style={{ color: "#2d3748", lineHeight: 1.6 }}>
                Làm thế nào để cân bằng giữa Giá trị truyền thống (Gắn kết) và
                Giá trị hiện đại (Tự do cá nhân) trong bối cảnh hội nhập?
              </Paragraph>
            </Card>
          </Col>
        </Row>

        <Card
          style={{
            background: "rgba(249, 243, 80, 0.9)",
            borderRadius: 12,
            padding: "32px",
            maxWidth: 800,
            margin: "0 auto",
          }}
        >
          <Title level={3} style={{ color: "#d43731", marginBottom: 24 }}>
            CẢM ƠN THẦY VÀ CÁC BẠN ĐÃ THEO DÕI ❤️
          </Title>
        </Card>
      </div>
    </section>
  );
};
