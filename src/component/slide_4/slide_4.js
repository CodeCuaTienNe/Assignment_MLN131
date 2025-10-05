import { Card, Col, Image, Row, Typography } from "antd";
import "./slide_4.css";

const { Title, Paragraph, Text } = Typography;

export const Slide4 = ({ scrollToSection }) => {
  return (
    <section
      id="slide4"
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
            II.2. GIA ĐÌNH TRONG XÃ HỘI TƯ BẢN VÀ TRIỂN VỌNG CỘNG SẢN
          </Title>
          <Text style={{ fontSize: "1.25rem", opacity: 0.9 }}>
            P1. Lý luận C. Mác và Ph. Ăngghen (2/2)
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
                Gia đình TBCN:
              </Title>
              <div style={{ marginBottom: 16 }}>
                <Image
                  src="https://cdn-media.sforum.vn/storage/app/media/anh-vinh-ha-long-28.jpg"
                  alt="Gia đình thời tư bản"
                  width="100%"
                  height={200}
                  style={{ objectFit: "cover", borderRadius: 8 }}
                  preview={false}
                />
              </div>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li
                  style={{
                    padding: "8px 0",
                    borderBottom: "1px solid rgba(212, 55, 49, 0.1)",
                  }}
                >
                  <Text style={{ color: "#d43731", marginRight: 8 }}>▸</Text>
                  Hôn nhân bị biến chất thành{" "}
                  <strong>"Hợp đồng kinh tế"</strong>
                </li>
                <li
                  style={{
                    padding: "8px 0",
                    borderBottom: "1px solid rgba(212, 55, 49, 0.1)",
                  }}
                >
                  <Text style={{ color: "#d43731", marginRight: 8 }}>▸</Text>
                  Bất bình đẳng giới: Chế độ gia trưởng
                </li>
                <li style={{ padding: "8px 0" }}>
                  <Text style={{ color: "#d43731", marginRight: 8 }}>▸</Text>
                  Phụ nữ bị ràng buộc bởi đạo đức khắt khe
                </li>
              </ul>
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
                Triển vọng Gia đình Xã hội Cộng sản:
              </Title>
              <div style={{ marginBottom: 16 }}>
                <Image
                  src="https://cdn-media.sforum.vn/storage/app/media/anh-vinh-ha-long-28.jpg"
                  alt="Gia đình xã hội chủ nghĩa"
                  width="100%"
                  height={200}
                  style={{ objectFit: "cover", borderRadius: 8 }}
                  preview={false}
                />
              </div>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li
                  style={{
                    padding: "8px 0",
                    borderBottom: "1px solid rgba(249, 243, 80, 0.3)",
                  }}
                >
                  <Text style={{ color: "#d43731", marginRight: 8 }}>▸</Text>
                  Xây dựng trên cơ sở <strong>Tình yêu tự nguyện</strong>
                </li>
                <li
                  style={{
                    padding: "8px 0",
                    borderBottom: "1px solid rgba(249, 243, 80, 0.3)",
                  }}
                >
                  <Text style={{ color: "#d43731", marginRight: 8 }}>▸</Text>
                  <strong>Bình đẳng thực sự</strong>
                </li>
                <li style={{ padding: "8px 0" }}>
                  <Text style={{ color: "#d43731", marginRight: 8 }}>▸</Text>
                  Điều kiện: Giải phóng phụ nữ khỏi lao động gia đình (
                  <strong>Độc lập kinh tế</strong>)
                </li>
              </ul>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};
