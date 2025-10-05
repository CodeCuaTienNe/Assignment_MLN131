import {
  BookOutlined,
  GlobalOutlined,
  HeartOutlined,
  RocketOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import {
  Card,
  Col,
  Image,
  Row,
  Space,
  Statistic,
  Table,
  Typography,
} from "antd";
import { Slide1 } from "../component/slide_1/slide_1";
import { Slide2 } from "../component/slide_2/slide_2";
import { Slide3 } from "../component/slide_3/slide_3";

const { Title, Paragraph, Text } = Typography;

export const SlidesContent = ({ scrollToSection }) => {
  return (
    <>
      <Slide1 scrollToSection={scrollToSection} />

      <Slide2 scrollToSection={scrollToSection} />

      <Slide3 scrollToSection={scrollToSection} />

      {/* SLIDE 4: P1. LÝ LUẬN C. MÁC VÀ PH. ĂNGGHEN (2/2) */}
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

      {/* SLIDE 5: P1. QUAN ĐIỂM V.I. LÊ-NIN VỀ THỜI KỲ QUÁ ĐỘ */}
      <section
        id="slide5"
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
              II.3. GIA ĐÌNH VÀ XÂY DỰNG CON NGƯỜI MỚI
            </Title>
            <Text style={{ color: "white", fontSize: "1.25rem", opacity: 0.9 }}>
              P1. Quan điểm V.I. Lê-nin về thời kỳ quá độ
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
                  Vai trò trong Thời kỳ Quá độ:
                </Title>
                <Space direction="vertical" size="large">
                  <Paragraph
                    style={{
                      fontSize: "1.125rem",
                      lineHeight: 1.7,
                      color: "#2d3748",
                    }}
                  >
                    Gia đình là môi trường chuyển tiếp loại bỏ quan hệ cũ và
                    hình thành quan hệ XHCN mới.
                  </Paragraph>
                  <Card
                    style={{
                      background: "rgba(249, 243, 80, 0.1)",
                      borderLeft: "4px solid #f9f350",
                    }}
                  >
                    <Text style={{ color: "#4a5568", fontStyle: "italic" }}>
                      Cải tạo gia đình là một phần của cuộc đấu tranh giai cấp.
                    </Text>
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
                  Gia đình & Xây dựng Con người mới:
                </Title>
                <Space direction="vertical" size="large">
                  <Card
                    style={{
                      background: "rgba(249, 243, 80, 0.1)",
                      borderLeft: "4px solid #f9f350",
                    }}
                  >
                    <Text
                      style={{
                        color: "#4a5568",
                        fontSize: "1.125rem",
                        fontStyle: "italic",
                      }}
                    >
                      Gia đình là{" "}
                      <strong>
                        "cái nôi thân yêu nuôi dưỡng cả đời người"
                      </strong>
                      .
                    </Text>
                  </Card>
                  <div>
                    <Text strong style={{ color: "#d43731" }}>
                      Nhiệm vụ:
                    </Text>
                    <Paragraph style={{ marginTop: 8, color: "#2d3748" }}>
                      Nuôi dưỡng{" "}
                      <strong>"con người mới xã hội chủ nghĩa"</strong> (ý thức
                      giai cấp, ưu tiên lợi ích tập thể).
                    </Paragraph>
                  </div>
                </Space>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      {/* SLIDE 6: P1. THÁCH THỨC CẢI TẠO XÔ VIẾT (LÊ-NIN) */}
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
                      <Text style={{ color: "#d43731", marginRight: 8 }}>
                        ▸
                      </Text>
                      Phụ nữ phải gánh <strong>"Gánh nặng kép"</strong> (công
                      việc xã hội + gia đình)
                    </li>
                    <li
                      style={{
                        padding: "8px 0",
                        borderBottom: "1px solid rgba(249, 243, 80, 0.3)",
                      }}
                    >
                      <Text style={{ color: "#d43731", marginRight: 8 }}>
                        ▸
                      </Text>
                      Phản kháng xã hội: Phụ nữ bị bạo hành, ly hôn, giết hại
                      khi đấu tranh cho quyền lợi
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

      {/* SLIDE 7: P2. THỰC TIỄN VIỆT NAM: QUÁ TRÌNH CHUYỂN ĐỔI */}
      <section
        id="slide7"
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
              III.1. CHUYỂN ĐỔI TỪ GIA ĐÌNH TRUYỀN THỐNG SANG XHCN
            </Title>
            <Text style={{ color: "white", fontSize: "1.25rem", opacity: 0.9 }}>
              P2. Thực tiễn Việt Nam: Quá trình chuyển đổi
            </Text>
          </div>

          <Card
            style={{
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(10px)",
              borderRadius: 12,
              padding: "24px",
            }}
          >
            <Table
              dataSource={[
                {
                  key: "1",
                  tieuchi: "Cơ sở Hôn nhân",
                  truyen: "Cha mẹ sắp đặt, Phụ thuộc Gia đạo/Gia phong",
                  xhcn: "Tự nguyện, Bình đẳng, Tình yêu",
                },
                {
                  key: "2",
                  tieuchi: "Cấu trúc",
                  truyen: "Đa thế hệ, Gia trưởng, Phụ quyền",
                  xhcn: "Hạt nhân, Bình đẳng nam nữ",
                },
              ]}
              columns={[
                {
                  title: "Tiêu chí",
                  dataIndex: "tieuchi",
                  key: "tieuchi",
                  width: "25%",
                  render: (text) => (
                    <Text strong style={{ color: "#d43731" }}>
                      {text}
                    </Text>
                  ),
                },
                {
                  title: "Gia đình Truyền thống",
                  dataIndex: "truyen",
                  key: "truyen",
                  width: "37.5%",
                },
                {
                  title: "Gia đình XHCN",
                  dataIndex: "xhcn",
                  key: "xhcn",
                  width: "37.5%",
                },
              ]}
              pagination={false}
              bordered
            />

            <div style={{ marginTop: 24 }}>
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
                    Bản chất chuyển đổi:
                  </Title>
                  <Text style={{ color: "#4a5568" }}>
                    Không chỉ là thay đổi kinh tế, mà là{" "}
                    <strong>Cách mạng văn hóa sâu rộng</strong>, đấu tranh giữa
                    cái cũ (gia trưởng, tập thể) và cái mới (bình đẳng, cá
                    nhân).
                  </Text>
                </div>

                <div>
                  <Title
                    level={4}
                    style={{ color: "#d43731", marginBottom: 12 }}
                  >
                    Chính sách Nhà nước:
                  </Title>
                  <Text style={{ color: "#4a5568" }}>
                    Ban hành Luật Hôn nhân và Gia đình, xây dựng mô hình{" "}
                    <strong>"Gia đình văn hóa"</strong> (No ấm, Bình đẳng, Tiến
                    bộ, Hạnh phúc).
                  </Text>
                </div>
              </Space>
            </div>
          </Card>
        </div>
      </section>

      {/* SLIDE 8: P2. THỰC TIỄN VIỆT NAM: VAI TRÒ LỊCH SỬ */}
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
                          <Text
                            style={{ fontSize: "0.9rem", color: "#4a5568" }}
                          >
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
                          <Text
                            style={{ fontSize: "0.9rem", color: "#4a5568" }}
                          >
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
                          <Text
                            style={{ fontSize: "0.9rem", color: "#4a5568" }}
                          >
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
              <Space
                direction="vertical"
                size="large"
                style={{ width: "100%" }}
              >
                <div style={{ borderRadius: 12, overflow: "hidden" }}>
                  <Image
                    src="https://cdn-media.sforum.vn/storage/app/media/anh-vinh-ha-long-28.jpg"
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
                  <Title
                    level={4}
                    style={{ color: "#d43731", marginBottom: 16 }}
                  >
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

      {/* SLIDE 9: P2. THỰC TIỄN VIỆT NAM: THỜI KỲ ĐỔI MỚI */}
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
                      <Text style={{ color: "#d43731", marginRight: 8 }}>
                        ✓
                      </Text>
                      Đời sống vật chất được nâng cao
                    </li>
                    <li
                      style={{
                        padding: "8px 0",
                        borderBottom: "1px solid rgba(212, 55, 49, 0.1)",
                      }}
                    >
                      <Text style={{ color: "#d43731", marginRight: 8 }}>
                        ✓
                      </Text>
                      Quan hệ vợ chồng ngày càng dựa trên tình yêu chân chính và
                      bình đẳng
                    </li>
                  </ul>

                  <Title
                    level={4}
                    style={{ color: "#d43731", marginBottom: 12 }}
                  >
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
                      <Text style={{ color: "#d43731", marginRight: 8 }}>
                        ▸
                      </Text>
                      Ly tán nơi ở làm giảm sự gắn bó giữa các thế hệ
                    </li>
                    <li
                      style={{
                        padding: "8px 0",
                        borderBottom: "1px solid rgba(249, 243, 80, 0.3)",
                      }}
                    >
                      <Text style={{ color: "#d43731", marginRight: 8 }}>
                        ▸
                      </Text>
                      Xung đột thế hệ gia tăng do khác biệt lối sống
                    </li>
                    <li style={{ padding: "8px 0" }}>
                      <Text style={{ color: "#d43731", marginRight: 8 }}>
                        ▸
                      </Text>
                      Con cái kết hôn có xu hướng ở riêng
                    </li>
                  </ul>
                </Space>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      {/* SLIDE 10: P2. HẠN CHẾ VÀ THÁCH THỨC NGHIÊM TRỌNG */}
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
                      <Text style={{ color: "#d43731", marginRight: 8 }}>
                        ⚠️
                      </Text>
                      Sự xuống cấp của một số giá trị văn hóa gia đình
                    </li>
                    <li style={{ padding: "8px 0" }}>
                      <Text style={{ color: "#d43731", marginRight: 8 }}>
                        ⚠️
                      </Text>
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
                      Dự báo dư thừa 1,5 – 2,5 triệu nam giới trong độ tuổi LĐ
                      vào giữa TK 21.
                    </Paragraph>
                  </Card>
                </Space>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

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
