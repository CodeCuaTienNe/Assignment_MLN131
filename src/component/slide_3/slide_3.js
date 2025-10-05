import { HistoryOutlined, RocketOutlined } from "@ant-design/icons";
import { Card, Col, Row, Space, Typography } from "antd";
import "./slide_3.css";

const { Title, Paragraph, Text } = Typography;

export const Slide3 = ({ scrollToSection }) => {
  return (
    <section
      id="slide3"
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
            II.1. NGUỒN GỐC VÀ BẢN CHẤT LỊCH SỬ
          </Title>
          <Text style={{ color: "white", fontSize: "1.25rem", opacity: 0.9 }}>
            P1. Lý luận C. Mác và Ph. Ăngghen (1/2)
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
                borderLeft: "4px solid #d43731",
              }}
            >
              <div style={{ textAlign: "center", marginBottom: 24 }}>
                <HistoryOutlined
                  style={{
                    fontSize: "2.5rem",
                    color: "#d43731",
                    marginBottom: 12,
                  }}
                />
                <Title level={3} style={{ color: "#d43731", marginBottom: 16 }}>
                  Gia đình là Phạm trù Lịch sử
                </Title>
              </div>
              <Space direction="vertical" size="medium">
                <Paragraph
                  style={{
                    fontSize: "1.125rem",
                    lineHeight: 1.7,
                    color: "#2d3748",
                  }}
                >
                  Không vĩnh cửu, tiến hóa{" "}
                  <Text
                    strong
                    style={{
                      color: "#d43731",
                    }}
                  >
                    "từ hình thức thấp lên hình thức cao hơn"
                  </Text>{" "}
                  (Ăngghen).
                </Paragraph>
                <Card
                  style={{
                    background: "rgba(249, 243, 80, 0.1)",
                    borderLeft: "4px solid #f9f350",
                  }}
                >
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
                      Phản ánh sự biến đổi của xã hội
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
                      Gắn với Phương thức sản xuất
                    </li>
                  </ul>
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
                borderLeft: "4px solid #d43731",
              }}
            >
              <div style={{ textAlign: "center", marginBottom: 24 }}>
                <RocketOutlined
                  style={{
                    fontSize: "2.5rem",
                    color: "#d43731",
                    marginBottom: 12,
                  }}
                />
                <Title level={3} style={{ color: "#d43731", marginBottom: 16 }}>
                  Bước ngoặt Quyết định
                </Title>
              </div>
              <Space direction="vertical" size="medium">
                <Paragraph
                  style={{
                    fontSize: "1.125rem",
                    lineHeight: 1.7,
                    color: "#2d3748",
                  }}
                >
                  Sự xuất hiện của chế độ tư hữu về tư liệu sản xuất là{" "}
                  <Text
                    strong
                    style={{
                      color: "#d43731",
                    }}
                  >
                    "bước ngoặt quyết định"
                  </Text>{" "}
                  trong lịch sử phát triển của gia đình.
                </Paragraph>
                <Text strong style={{ fontSize: "1.125rem", color: "#d43731" }}>
                  Chế độ Tư hữu:
                </Text>
                <Card
                  style={{
                    background: "rgba(249, 243, 80, 0.1)",
                    borderLeft: "4px solid #f9f350",
                  }}
                >
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
                      Trước: Hôn nhân quần hôn, công hữu
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
                      Nhu cầu xác định người thừa kế tài sản
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
                      Dẫn đến: Gia đình một vợ một chồng
                    </li>
                  </ul>
                </Card>
              </Space>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};
