import { Button, Card, Space, Table, Typography } from "antd";
import "./slide_7.css";

const { Title, Paragraph, Text } = Typography;

export const Slide7 = ({ scrollToSection }) => {
  return (
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
            <Space direction="vertical" size="large" style={{ width: "100%" }}>
              <div>
                <Title level={4} style={{ color: "#d43731", marginBottom: 12 }}>
                  Bản chất chuyển đổi:
                </Title>
                <Text style={{ color: "#4a5568" }}>
                  Không chỉ là thay đổi kinh tế, mà là{" "}
                  <strong>Cách mạng văn hóa sâu rộng</strong>, đấu tranh giữa
                  cái cũ (gia trưởng, tập thể) và cái mới (bình đẳng, cá nhân).
                </Text>
              </div>

              <div>
                <Title level={4} style={{ color: "#d43731", marginBottom: 12 }}>
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

        {/* Navigation controls for slide 7 */}
        <div
          style={{
            position: "absolute",
            right: 24,
            bottom: 24,
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          {/* Previous slide button */}
          <Button
            type="primary"
            shape="circle"
            onClick={() => scrollToSection("slide6")}
            style={{
              background: "#d43731",
              borderColor: "#d43731",
              color: "white",
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px",
              boxShadow: "0 2px 8px rgba(212, 55, 49, 0.3)",
            }}
            title="Slide trước"
          >
            ←
          </Button>

          {/* Current slide indicator */}
          <div
            style={{
              background: "#f9f350",
              color: "#171717",
              borderRadius: "20px",
              padding: "4px 12px",
              fontSize: "12px",
              fontWeight: 600,
              textAlign: "center",
              minWidth: "40px",
              boxShadow: "0 2px 8px rgba(249, 243, 80, 0.3)",
            }}
          >
            7/13
          </div>

          {/* Next slide button */}
          <Button
            type="primary"
            shape="circle"
            onClick={() => scrollToSection("slide8")}
            style={{
              background: "#d43731",
              borderColor: "#d43731",
              color: "white",
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px",
              boxShadow: "0 2px 8px rgba(212, 55, 49, 0.3)",
            }}
            title="Slide tiếp theo"
          >
            →
          </Button>
        </div>
      </div>
    </section>
  );
};
