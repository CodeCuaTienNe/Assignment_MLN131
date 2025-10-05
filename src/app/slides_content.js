import {
  BookOutlined,
  GlobalOutlined,
  HeartOutlined,
  RocketOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Card, Col, Row, Space, Typography } from "antd";
import { Slide1 } from "../component/slide_1/slide_1";
import { Slide10 } from "../component/slide_10/slide_10";
import { Slide2 } from "../component/slide_2/slide_2";
import { Slide3 } from "../component/slide_3/slide_3";
import { Slide4 } from "../component/slide_4/slide_4";
import { Slide5 } from "../component/slide_5/slide_5";
import { Slide6 } from "../component/slide_6/slide_6";
import { Slide7 } from "../component/slide_7/slide_7";
import { Slide8 } from "../component/slide_8/slide_8";
import { Slide9 } from "../component/slide_9/slide_9";

const { Title, Paragraph, Text } = Typography;

export const SlidesContent = ({ scrollToSection }) => {
  return (
    <>
      <Slide1 scrollToSection={scrollToSection} />

      <Slide2 scrollToSection={scrollToSection} />

      <Slide3 scrollToSection={scrollToSection} />

      <Slide4 scrollToSection={scrollToSection} />

      <Slide5 scrollToSection={scrollToSection} />

      <Slide6 scrollToSection={scrollToSection} />

      <Slide7 scrollToSection={scrollToSection} />

      <Slide8 scrollToSection={scrollToSection} />

      <Slide9 scrollToSection={scrollToSection} />

      <Slide10 scrollToSection={scrollToSection} />

      {/* SLIDE 11: CÂU HỎI THẢO LUẬN 1 */}
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
                      Đạt mục tiêu giải phóng con người khỏi ràng buộc kinh tế
                      (tư hữu).
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
                        <strong>Trách nhiệm:</strong> Duy trì ổn định, nuôi
                        dưỡng con cái
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
                        <strong>Tôn trọng/Hiếu kính:</strong> Gắn kết giữa các
                        thế hệ
                      </li>
                    </ul>
                  </div>
                </Space>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      {/* SLIDE 12: CÂU HỎI THẢO LUẬN 2 */}
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
                      Thể hiện tự do cá nhân, đòi hỏi hình thức hôn nhân bình
                      đẳng hơn.
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
                      Tôn trọng lựa chọn và công nhận các mô hình gia đình đa
                      dạng
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
                      Thúc đẩy Bình đẳng Thực chất (chia sẻ trách nhiệm chăm
                      sóc)
                    </li>
                  </ul>
                </Space>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      {/* SLIDE 13: KẾT LUẬN & HƯỚNG MỞ */}
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
                  Gia đình Việt Nam đã trải qua quá trình chuyển đổi sâu sắc,
                  đạt được các thành tựu về bình đẳng và tiến bộ trên cơ sở vận
                  dụng lý luận Mác-Lênin.
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
    </>
  );
};
