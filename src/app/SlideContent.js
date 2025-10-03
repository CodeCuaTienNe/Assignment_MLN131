import {
  Alert,
  Card,
  Col,
  Divider,
  Row,
  Space,
  Statistic,
  Timeline,
  Typography,
} from "antd";

const { Title, Paragraph, Text } = Typography;

const SlideContent = () => {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        {/* Main Title */}
        <Card
          style={{
            borderRadius: 12,
            border: "3px solid #d43731",
            background:
              "linear-gradient(135deg, rgba(212, 55, 49, 0.08), white)",
            textAlign: "center",
          }}
        >
          <Title
            level={1}
            style={{ color: "#d43731", margin: 0, fontSize: "2.5rem" }}
          >
            GIA ĐÌNH TRONG THỜI KỲ QUÁ ĐỘ LÊN CHỦ NGHĨA XÃ HỘI
          </Title>
          <Text style={{ fontSize: "1.2rem", color: "#666" }}>
            Từ Lý Thuyết Kinh Điển Mác-Lênin Đến Thực Tiễn Việt Nam
          </Text>
        </Card>

        {/* Introduction */}
        <Card
          style={{
            borderRadius: 12,
            border: "2px solid #f9f350",
            background:
              "linear-gradient(135deg, rgba(249, 243, 80, 0.05), white)",
          }}
        >
          <Title
            level={2}
            style={{ color: "#d43731", textAlign: "center", marginBottom: 24 }}
          >
            Mở Đầu
          </Title>
          <Paragraph
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.8,
              textAlign: "justify",
            }}
          >
            Gia đình luôn là tế bào của xã hội, phản ánh sự phát triển kinh tế -
            xã hội. Trong thời kỳ quá độ lên chủ nghĩa xã hội tại Việt Nam, việc
            nghiên cứu gia đình từ góc độ lý luận và thực tiễn có ý nghĩa đặc
            biệt. Báo cáo phân tích quan điểm của Mác-Engels-Lenin về gia đình
            và liên hệ với quá trình biến đổi gia đình Việt Nam qua các giai
            đoạn lịch sử, đặc biệt trong thời kỳ Đổi mới và hội nhập quốc tế.
          </Paragraph>
        </Card>

        {/* Part 1: Theory */}
        <Card
          style={{
            borderRadius: 12,
            border: "2px solid #d43731",
            background: "white",
          }}
        >
          <Title
            level={2}
            style={{ color: "#d43731", textAlign: "center", marginBottom: 32 }}
          >
            PHẦN 1: PHÂN TÍCH LÝ THUYẾT VỀ GIA ĐÌNH THEO QUAN ĐIỂM MÁC-LÊNIN
          </Title>

          <Row gutter={[32, 32]}>
            <Col xs={24} md={12}>
              <Card
                title={
                  <Title level={4} style={{ color: "#d43731", margin: 0 }}>
                    1.1 Quan điểm của C. Mác và Ph. Ăngghen
                  </Title>
                }
                bordered={false}
                style={{ height: "100%" }}
              >
                <Space direction="vertical" size="middle">
                  <div>
                    <Text strong style={{ color: "#d43731" }}>
                      Nguồn gốc lịch sử:
                    </Text>
                    <Paragraph>
                      Gia đình không vĩnh cửu, là sản phẩm của phương thức sản
                      xuất. Xuất hiện chế độ tư hữu dẫn đến gia đình một vợ một
                      chồng để xác định người thừa kế.
                    </Paragraph>
                  </div>
                  <div>
                    <Text strong style={{ color: "#d43731" }}>
                      Trong xã hội tư bản:
                    </Text>
                    <Paragraph>
                      Hôn nhân thành "hợp đồng kinh tế", bất bình đẳng giới
                      tính. Kêu gọi giải phóng phụ nữ khỏi lao động gia đình
                      không được trả công.
                    </Paragraph>
                  </div>
                  <div>
                    <Text strong style={{ color: "#d43731" }}>
                      Triển vọng tương lai:
                    </Text>
                    <Paragraph>
                      Gia đình cộng sản dựa trên tình yêu tự nguyện, bình đẳng
                      thực sự. Giải phóng phụ nữ là điều kiện tiên quyết.
                    </Paragraph>
                  </div>
                </Space>
              </Card>
            </Col>

            <Col xs={24} md={12}>
              <Card
                title={
                  <Title level={4} style={{ color: "#d43731", margin: 0 }}>
                    1.2 Quan điểm của V.I. Lê-nin
                  </Title>
                }
                bordered={false}
                style={{ height: "100%" }}
              >
                <Space direction="vertical" size="middle">
                  <div>
                    <Text strong style={{ color: "#d43731" }}>
                      Gia đình trong quá độ:
                    </Text>
                    <Paragraph>
                      Gia đình là tế bào xã hội, môi trường chuyển tiếp từ cũ
                      sang mới. Cải tạo gia đình là phần của đấu tranh giai cấp.
                    </Paragraph>
                  </div>
                  <div>
                    <Text strong style={{ color: "#d43731" }}>
                      Xây dựng con người mới:
                    </Text>
                    <Paragraph>
                      Gia đình là "cái nôi" nuôi dưỡng nhân cách xã hội chủ
                      nghĩa. Giáo dục ý thức giai cấp, trung thành với lý tưởng
                      cộng sản.
                    </Paragraph>
                  </div>
                  <div>
                    <Text strong style={{ color: "#d43731" }}>
                      Chính sách cải tạo:
                    </Text>
                    <Paragraph>
                      Giải phóng phụ nữ, cấm chế độ đa thê, nâng tuổi kết hôn.
                      Phong trào Zhenotdely và hujum chống hủ tục.
                    </Paragraph>
                  </div>
                </Space>
              </Card>
            </Col>
          </Row>
        </Card>

        {/* Part 2: Vietnamese Practice */}
        <Card
          style={{
            borderRadius: 12,
            border: "2px solid #f9f350",
            background:
              "linear-gradient(135deg, rgba(249, 243, 80, 0.03), white)",
          }}
        >
          <Title
            level={2}
            style={{ color: "#d43731", textAlign: "center", marginBottom: 32 }}
          >
            PHẦN 2: LIÊN HỆ THỰC TIỄN VIỆT NAM
          </Title>

          <Row gutter={[24, 24]}>
            <Col xs={24} lg={8}>
              <Card
                title={
                  <Title level={4} style={{ color: "#d43731", margin: 0 }}>
                    2.1 Quá trình chuyển đổi
                  </Title>
                }
                bordered={false}
              >
                <Timeline
                  items={[
                    {
                      children:
                        "Từ gia đình truyền thống Nho giáo → gia đình xã hội chủ nghĩa",
                    },
                    {
                      children:
                        "Luật Hôn nhân và Gia đình (1945): Tự nguyện, bình đẳng, tiến bộ",
                    },
                    {
                      children:
                        'Xây dựng "gia đình văn hóa": No ấm, bình đẳng, hạnh phúc',
                    },
                  ]}
                />
              </Card>
            </Col>

            <Col xs={24} lg={8}>
              <Card
                title={
                  <Title level={4} style={{ color: "#d43731", margin: 0 }}>
                    2.2 Vai trò qua các giai đoạn
                  </Title>
                }
                bordered={false}
              >
                <Timeline
                  items={[
                    {
                      children:
                        '1945-1975: Gia đình thành "chiến tuyến" - Phong trào "Ba đảm đang"',
                    },
                    {
                      children:
                        "Trước Đổi mới: Xây dựng nếp sống mới, gia đình văn hóa",
                    },
                    {
                      children:
                        "Từ 1986: Gia đình hạt nhân, đô thị hóa, hội nhập",
                    },
                  ]}
                />
              </Card>
            </Col>

            <Col xs={24} lg={8}>
              <Card
                title={
                  <Title level={4} style={{ color: "#d43731", margin: 0 }}>
                    2.3 Thành tựu và hạn chế
                  </Title>
                }
                bordered={false}
              >
                <Space direction="vertical" size="middle">
                  <div>
                    <Text strong style={{ color: "#d43731" }}>
                      Thành tựu:
                    </Text>
                    <ul style={{ margin: 0, paddingLeft: 20 }}>
                      <li>Bình đẳng, dân chủ hơn</li>
                      <li>Đời sống vật chất tăng</li>
                      <li>Giữ gìn truyền thống tốt đẹp</li>
                    </ul>
                  </div>
                  <div>
                    <Text strong style={{ color: "#d43731" }}>
                      Thách thức:
                    </Text>
                    <ul style={{ margin: 0, paddingLeft: 20 }}>
                      <li>Mất cân bằng giới tính khi sinh (111.5/100)</li>
                      <li>Tệ nạn xã hội gia tăng</li>
                      <li>Xung đột thế hệ</li>
                    </ul>
                  </div>
                </Space>
              </Card>
            </Col>
          </Row>

          <Divider />

          <Row gutter={[24, 24]}>
            <Col xs={24} md={12}>
              <Card bordered={false}>
                <Statistic
                  title="Quy mô hộ gia đình trung bình (2019)"
                  value={3.6}
                  suffix="người/hộ"
                  valueStyle={{ color: "#d43731" }}
                />
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card bordered={false}>
                <Statistic
                  title="Tỷ số giới tính khi sinh (2019)"
                  value={111.5}
                  suffix="/100 bé gái"
                  valueStyle={{ color: "#d43731" }}
                />
                <Text type="secondary">Mức tự nhiên: 104-106</Text>
              </Card>
            </Col>
          </Row>
        </Card>

        {/* Part 3: Video Script */}
        <Card
          style={{
            borderRadius: 12,
            border: "2px solid #d43731",
            background: "white",
          }}
        >
          <Title
            level={2}
            style={{ color: "#d43731", textAlign: "center", marginBottom: 24 }}
          >
            PHẦN 3: KỊCH BẢN VIDEO/THUYẾT TRÌNH (5-7 phút)
          </Title>

          <Row gutter={[24, 24]}>
            <Col xs={24} md={8}>
              <Card title="Mở bài (30s)" bordered={false}>
                <ul style={{ paddingLeft: 20 }}>
                  <li>Hook: Hình ảnh gia đình qua thời gian</li>
                  <li>Giới thiệu chủ đề Mác-Lênin</li>
                  <li>Tone: Gần gũi, tò mò</li>
                </ul>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card title="Thân bài (4-5 phút)" bordered={false}>
                <ul style={{ paddingLeft: 20 }}>
                  <li>Ý 1: Gia đình - hiện tượng lịch sử</li>
                  <li>Ý 2: Từ lý thuyết đến thực tiễn Việt Nam</li>
                  <li>Ý 3: Thách thức và cơ hội hiện đại</li>
                </ul>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card title="Kết luận (30s)" bordered={false}>
                <ul style={{ paddingLeft: 20 }}>
                  <li>Tổng kết 3 ý chính</li>
                  <li>Thông điệp: Trách nhiệm gìn giữ giá trị</li>
                  <li>Câu hỏi tương tác</li>
                </ul>
              </Card>
            </Col>
          </Row>
        </Card>

        {/* Discussion Questions */}
        <Card
          style={{
            borderRadius: 12,
            border: "2px solid #f9f350",
            background:
              "linear-gradient(135deg, rgba(249, 243, 80, 0.05), white)",
          }}
        >
          <Title
            level={2}
            style={{ color: "#d43731", textAlign: "center", marginBottom: 24 }}
          >
            CÂU HỎI THẢO LUẬN
          </Title>

          <Row gutter={[24, 24]}>
            <Col xs={24} md={12}>
              <Card
                title="CQ9.2: Đích đến của tình yêu"
                bordered={false}
                style={{ borderLeft: "4px solid #d43731" }}
              >
                <Space direction="vertical" size="small">
                  <Text strong>Nếu đích đến tình yêu không phải hôn nhân:</Text>
                  <ul style={{ paddingLeft: 20 }}>
                    <li>Quan hệ tình cảm tự do, thuần túy</li>
                    <li>Thực hiện mục tiêu giải phóng con người</li>
                    <li>Cần giải pháp thay thế cho chức năng gia đình</li>
                  </ul>
                </Space>
              </Card>
            </Col>

            <Col xs={24} md={12}>
              <Card
                title="CQ10.3: Người trẻ không muốn kết hôn"
                bordered={false}
                style={{ borderLeft: "4px solid #f9f350" }}
              >
                <Space direction="vertical" size="small">
                  <Text strong>Quan điểm hợp lý:</Text>
                  <ul style={{ paddingLeft: 20 }}>
                    <li>Áp lực kinh tế, thời gian, xã hội</li>
                    <li>Độc lập hơn của phụ nữ hiện đại</li>
                    <li>Cần giảm áp lực, tôn trọng lựa chọn</li>
                  </ul>
                </Space>
              </Card>
            </Col>
          </Row>
        </Card>

        {/* Key Insights */}
        <Alert
          message="Những bài học chính"
          description={
            <ul style={{ margin: 0, paddingLeft: 20 }}>
              <li>
                Gia đình là sản phẩm lịch sử, thay đổi theo phương thức sản xuất
              </li>
              <li>Giải phóng phụ nữ là chìa khóa cho gia đình bình đẳng</li>
              <li>
                Việt Nam vận dụng sáng tạo lý luận Mác-Lênin vào thực tiễn
              </li>
              <li>Thời kỳ Đổi mới mang cơ hội và thách thức mới</li>
              <li>Cần gìn giữ giá trị truyền thống trong xã hội hiện đại</li>
            </ul>
          }
          type="info"
          showIcon
          style={{ borderRadius: 8 }}
        />
      </Space>
    </div>
  );
};

export default SlideContent;
