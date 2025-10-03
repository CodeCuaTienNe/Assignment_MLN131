"use client";

import {
  ArrowRightOutlined,
  ArrowUpOutlined,
  BookOutlined,
  BulbOutlined,
  CameraOutlined,
  CheckCircleOutlined,
  CodeOutlined,
  ExclamationCircleOutlined,
  FileTextOutlined,
  GlobalOutlined,
  HeartOutlined,
  HistoryOutlined,
  HomeOutlined,
  MessageOutlined,
  PictureOutlined,
  QuestionCircleOutlined,
  RobotOutlined,
  StarOutlined,
  TeamOutlined,
  TrophyOutlined,
  UserOutlined,
  WarningOutlined,
} from "@ant-design/icons";
import {
  Alert,
  Anchor,
  Badge,
  Button,
  Col,
  FloatButton,
  Layout,
  List,
  Menu,
  Row,
  Statistic,
  Steps,
  Tabs,
  Timeline,
  Typography,
} from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;
const { Link } = Anchor;

export default function Home() {
  const [activeSection, setActiveSection] = useState("intro");

  const menuItems = [
    {
      key: "intro",
      icon: <HomeOutlined />,
      label: "Mở đầu",
    },
    {
      key: "theory",
      icon: <BookOutlined />,
      label: "Lý thuyết Mác-Lênin",
    },
    {
      key: "vietnam",
      icon: <TeamOutlined />,
      label: "Thực tiễn Việt Nam",
    },
    {
      key: "cq-questions",
      icon: <QuestionCircleOutlined />,
      label: "Câu hỏi CQ",
    },
    {
      key: "ai-usage",
      icon: <RobotOutlined />,
      label: "AI Usage",
    },
  ];

  const handleMenuClick = (e) => {
    setActiveSection(e.key);
    document.getElementById(e.key)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const sections = ["intro", "theory", "vietnam", "cq-questions", "ai-usage"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-100px 0px -100px 0px",
      }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const VietnamFlag = () => (
    <div className="inline-flex items-center justify-center w-12 h-8 bg-vn-red-600 rounded-sm relative">
      <span className="text-vn-yellow-500 text-lg font-bold">★</span>
    </div>
  );

  return (
    <Layout className="min-h-screen">
      {/* Header with Navigation */}
      <Header className="!bg-vn-red-600 !p-0 shadow-lg sticky top-0 z-50">
        <div className="flex items-center justify-between px-6 h-full">
          <div className="flex items-center gap-4">
            <VietnamFlag />
            <Title
              level={4}
              className="!text-vn-yellow-500 !mb-0 !font-fraunces"
            >
              Gia đình trong thời kỳ quá độ lên CNXH
            </Title>
          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={[activeSection]}
            items={menuItems}
            onClick={handleMenuClick}
            className="!bg-transparent !border-none flex-1 justify-end"
            style={{ fontSize: "14px" }}
          />
        </div>
      </Header>

      <Content>
        {/* Introduction Section */}
        <section
          id="intro"
          className="min-h-screen flex items-center bg-soft-red content-section"
        >
          <div className="container mx-auto px-6 py-20">
            <Row gutter={[48, 48]} align="middle">
              <Col xs={24} lg={14}>
                <div className="text-center lg:text-left">
                  <Badge.Ribbon
                    text="MLN131 - Assignment"
                    color="#d43731"
                    style={{ color: "white", fontWeight: "bold" }}
                  >
                    <div className="simple-card">
                      <Title
                        level={1}
                        className="!text-vn-red-700 !font-fraunces !text-5xl !mb-6"
                      >
                        GIA ĐÌNH TRONG THỜI KỲ QUÁ ĐỘ LÊN CHỦ NGHĨA XÃ HỘI
                      </Title>
                      <Paragraph className="!text-xl !text-gray-600 !mb-6 !leading-relaxed">
                        Nghiên cứu quan điểm của <Text strong>Mác - Lênin</Text>{" "}
                        về sự biến đổi gia đình và liên hệ với thực tiễn Việt
                        Nam
                      </Paragraph>
                      <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                        <Button
                          type="primary"
                          size="large"
                          icon={<BookOutlined />}
                          onClick={() => handleMenuClick({ key: "theory" })}
                        >
                          Lý thuyết
                        </Button>
                        <Button
                          size="large"
                          icon={<TeamOutlined />}
                          onClick={() => handleMenuClick({ key: "vietnam" })}
                        >
                          Thực tiễn VN
                        </Button>
                        <Button
                          size="large"
                          icon={<QuestionCircleOutlined />}
                          onClick={() =>
                            handleMenuClick({ key: "cq-questions" })
                          }
                        >
                          Câu hỏi CQ
                        </Button>
                        <Button
                          size="large"
                          icon={<RobotOutlined />}
                          onClick={() => handleMenuClick({ key: "ai-usage" })}
                        >
                          AI Usage
                        </Button>
                      </div>
                    </div>
                  </Badge.Ribbon>
                </div>
              </Col>

              <Col xs={24} lg={10}>
                <div className="text-center">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="simple-card text-center">
                      <Image
                        src="https://cdn-media.sforum.vn/storage/app/media/anh-vinh-ha-long-28.jpg"
                        alt="Vịnh Hạ Long"
                        width={200}
                        height={120}
                        className="rounded-lg mb-3 w-full object-cover"
                      />
                      <Text strong className="text-emphasis">
                        Việt Nam hôm nay
                      </Text>
                    </div>
                    <div className="simple-card text-center">
                      <div className="icon-container mx-auto bg-soft-red mb-3">
                        <TeamOutlined className="text-2xl" />
                      </div>
                      <Text strong className="text-emphasis">
                        Gia đình XHCN
                      </Text>
                    </div>
                    <div className="simple-card text-center">
                      <div className="icon-container mx-auto bg-soft-yellow mb-3">
                        <UserOutlined className="text-2xl" />
                      </div>
                      <Text strong className="text-emphasis">
                        Marx-Lenin
                      </Text>
                    </div>
                    <div className="simple-card text-center">
                      <div className="icon-container mx-auto bg-soft-blue mb-3">
                        <HistoryOutlined className="text-2xl" />
                      </div>
                      <Text strong className="text-emphasis">
                        Quá độ lịch sử
                      </Text>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </section>

        {/* Theory Section */}
        <section id="theory" className="content-section bg-soft-gray">
          <div className="container mx-auto px-6">
            <div className="text-center clean-spacing">
              <Badge
                count="PHẦN 1"
                style={{ backgroundColor: "#d43731", color: "white" }}
              >
                <div className="simple-card inline-block">
                  <Title
                    level={1}
                    className="!text-vn-red-700 !font-fraunces !text-4xl !mb-4"
                  >
                    LÝ THUYẾT MÁC-LÊNIN VỀ GIA ĐÌNH
                  </Title>
                  <Paragraph className="!text-xl !text-gray-600 max-w-4xl mx-auto !leading-relaxed">
                    Gia đình luôn là "tế bào của cơ thể xã hội", sự biến đổi
                    không tách rời khỏi sự phát triển của các hình thái kinh tế
                    - xã hội
                  </Paragraph>
                </div>
              </Badge>
            </div>

            {/* Marx-Engels Section */}
            <div className="clean-spacing">
              <div className="subtle-border mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="icon-container">
                    <UserOutlined className="text-xl" />
                  </div>
                  <Title
                    level={2}
                    className="!text-vn-red-700 !font-fraunces !mb-0"
                  >
                    1.1. Quan điểm của C. Mác và Ph. Ăngghen về gia đình
                  </Title>
                </div>
              </div>

              <Row gutter={[24, 24]} className="mb-12">
                <Col xs={24} lg={8}>
                  <div className="simple-card text-center h-full">
                    <div className="icon-container mx-auto mb-4 bg-soft-red">
                      <HistoryOutlined className="text-2xl" />
                    </div>
                    <Title level={4} className="text-emphasis">
                      Nguồn gốc lịch sử
                    </Title>
                    <Paragraph className="text-left mb-4">
                      <Text strong>Gia đình xuất hiện và phát triển</Text> theo
                      các giai đoạn lịch sử cụ thể, không phải là thể chế bất
                      biến.
                    </Paragraph>
                    <List
                      size="small"
                      dataSource={[
                        "Gia đình Punalua (hôn nhân tập thể)",
                        "Gia đình đối ngẫu (một vợ một chồng)",
                        "Gia đình phụ quyền (xã hội giai cấp)",
                      ]}
                      renderItem={(item) => (
                        <List.Item>
                          <ArrowRightOutlined className="text-vn-red-500 mr-2" />
                          {item}
                        </List.Item>
                      )}
                    />
                  </div>
                </Col>

                <Col xs={24} lg={8}>
                  <div className="simple-card text-center h-full">
                    <div className="icon-container mx-auto mb-4 bg-soft-yellow">
                      <BulbOutlined className="text-2xl" />
                    </div>
                    <Title level={4} className="text-emphasis">
                      Mối quan hệ với kinh tế
                    </Title>
                    <Paragraph className="text-left mb-4">
                      <Text strong>Cơ sở kinh tế quyết định</Text> tính chất và
                      hình thức tổ chức gia đình trong mỗi thời đại.
                    </Paragraph>
                    <Timeline
                      size="small"
                      items={[
                        {
                          color: "red",
                          children: "Công xã nguyên thủy → Gia đình tập thể",
                        },
                        {
                          color: "orange",
                          children: "Chế độ nô lệ → Gia đình phụ quyền",
                        },
                        {
                          color: "green",
                          children:
                            "Tư bản chủ nghĩa → Gia đình tư sản vs vô sản",
                        },
                      ]}
                    />
                  </div>
                </Col>

                <Col xs={24} lg={8}>
                  <div className="simple-card text-center h-full">
                    <div className="icon-container mx-auto mb-4 bg-soft-green">
                      <HeartOutlined className="text-2xl" />
                    </div>
                    <Title level={4} className="text-emphasis">
                      Tương lai gia đình
                    </Title>
                    <Paragraph className="text-left mb-4">
                      <Text strong>Gia đình xã hội chủ nghĩa</Text> sẽ được xây
                      dựng trên cơ sở bình đẳng và tình yêu thương thực sự.
                    </Paragraph>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <Steps
                        direction="vertical"
                        size="small"
                        current={2}
                        items={[
                          {
                            title: "Xóa bỏ tư hữu tư bản",
                            description: "Cơ sở vật chất",
                          },
                          {
                            title: "Giải phóng phụ nữ",
                            description: "Bình đẳng giới",
                          },
                          {
                            title: "Bình đẳng thực sự",
                            description: "Mục tiêu cuối cùng",
                          },
                        ]}
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>

            {/* Lenin Section */}
            <div className="clean-spacing">
              <div className="subtle-border mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="icon-container">
                    <StarOutlined className="text-xl" />
                  </div>
                  <Title
                    level={2}
                    className="!text-vn-red-700 !font-fraunces !mb-0"
                  >
                    1.2. Quan điểm của V.I. Lênin về gia đình
                  </Title>
                </div>
              </div>

              <Row gutter={[24, 24]}>
                <Col xs={24} lg={12}>
                  <div className="simple-card h-full">
                    <Title
                      level={4}
                      className="text-emphasis flex items-center gap-3"
                    >
                      <TeamOutlined />
                      Vai trò của phụ nữ
                    </Title>
                    <Paragraph>
                      Lênin nhấn mạnh{" "}
                      <Text strong>vai trò quan trọng của phụ nữ</Text> trong
                      việc xây dựng xã hội mới và cần thiết giải phóng họ khỏi
                      "ách nô lệ gia đình".
                    </Paragraph>
                    <List
                      dataSource={[
                        "Tham gia sản xuất xã hội hóa",
                        "Quyền bình đẳng về chính trị",
                        "Tự do về hôn nhân và ly hôn",
                        "Giáo dục và phát triển bản thân",
                      ]}
                      renderItem={(item) => (
                        <List.Item>
                          <CheckCircleOutlined className="text-green-500 mr-2" />
                          {item}
                        </List.Item>
                      )}
                    />
                  </div>
                </Col>

                <Col xs={24} lg={12}>
                  <div className="simple-card h-full">
                    <Title
                      level={4}
                      className="text-emphasis flex items-center gap-3"
                    >
                      <BulbOutlined />
                      Xây dựng gia đình mới
                    </Title>
                    <Paragraph>
                      Lênin chỉ ra rằng{" "}
                      <Text strong>gia đình xã hội chủ nghĩa</Text> phải được
                      xây dựng trên những nguyên tắc hoàn toàn mới.
                    </Paragraph>
                    <Timeline
                      items={[
                        {
                          children:
                            "Xóa bỏ sự phân biệt giai cấp trong gia đình",
                          color: "red",
                        },
                        {
                          children:
                            "Thiết lập quan hệ bình đẳng giữa nam và nữ",
                          color: "orange",
                        },
                        {
                          children: "Xã hội hóa việc nuôi dạy trẻ em",
                          color: "green",
                        },
                      ]}
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </section>

        {/* Vietnam Practice Section - Simplified */}
        <section id="vietnam" className="content-section bg-soft-blue">
          <div className="container mx-auto px-6">
            <div className="text-center clean-spacing">
              <Badge
                count="PHẦN 2"
                style={{ backgroundColor: "#d43731", color: "white" }}
              >
                <div className="simple-card inline-block">
                  <Title
                    level={1}
                    className="!text-vn-red-700 !font-fraunces !text-4xl !mb-4"
                  >
                    THỰC TIỄN VIỆT NAM
                  </Title>
                  <Paragraph className="!text-xl !text-gray-600 !leading-relaxed">
                    Quá trình chuyển đổi từ gia đình truyền thống sang gia đình
                    xã hội chủ nghĩa
                  </Paragraph>
                </div>
              </Badge>
            </div>

            {/* Historical periods */}
            <Row gutter={[32, 32]} className="clean-spacing">
              <Col xs={24} lg={8}>
                <div className="simple-card text-center h-full">
                  <div className="icon-container mx-auto mb-4 bg-soft-red">
                    <HistoryOutlined className="text-2xl" />
                  </div>
                  <Badge
                    count="1945-1975"
                    style={{ backgroundColor: "#d43731" }}
                  >
                    <Title level={4} className="text-emphasis">
                      Kháng chiến - Giải phóng
                    </Title>
                  </Badge>
                  <Paragraph className="mt-4">
                    Phong trào <Text strong>"Ba đảm đang"</Text> của phụ nữ miền
                    Bắc. Gia đình trở thành đơn vị chính trị-cách mạng.
                  </Paragraph>
                </div>
              </Col>

              <Col xs={24} lg={8}>
                <div className="simple-card text-center h-full">
                  <div className="icon-container mx-auto mb-4 bg-soft-yellow">
                    <BookOutlined className="text-2xl" />
                  </div>
                  <Badge
                    count="Trước 1986"
                    style={{ backgroundColor: "#f9f350", color: "#862921" }}
                  >
                    <Title level={4} className="text-emphasis">
                      Xây dựng CNXH
                    </Title>
                  </Badge>
                  <Paragraph className="mt-4">
                    Phong trào <Text strong>"gia đình văn hóa"</Text> và
                    <Text strong> "xây dựng nếp sống mới"</Text>. Gia đình là
                    "trường học" đầu tiên.
                  </Paragraph>
                </div>
              </Col>

              <Col xs={24} lg={8}>
                <div className="simple-card text-center h-full">
                  <div className="icon-container mx-auto mb-4 bg-soft-green">
                    <GlobalOutlined className="text-2xl" />
                  </div>
                  <Badge count="Từ 1986" style={{ backgroundColor: "#52c41a" }}>
                    <Title level={4} className="text-emphasis">
                      Đổi mới - Hội nhập
                    </Title>
                  </Badge>
                  <div className="mt-4">
                    <Statistic
                      title="Quy mô hộ gia đình (2019)"
                      value={3.6}
                      suffix="người/hộ"
                      valueStyle={{ color: "#d43731", fontSize: "20px" }}
                    />
                    <Paragraph className="mt-2">
                      Xu hướng gia đình hạt nhân thay thế gia đình đa thế hệ
                    </Paragraph>
                  </div>
                </div>
              </Col>
            </Row>

            {/* Current status */}
            <Row gutter={[32, 32]}>
              <Col xs={24} lg={12}>
                <div className="simple-card h-full">
                  <Title
                    level={3}
                    className="text-emphasis flex items-center gap-3"
                  >
                    <TrophyOutlined />
                    Thành tựu đạt được
                  </Title>
                  <List
                    dataSource={[
                      "Gia đình ngày càng bình đẳng và dân chủ",
                      "Đời sống vật chất được nâng cao đáng kể",
                      "Các giá trị truyền thống tốt đẹp được giữ gìn",
                      "Quan hệ vợ chồng dựa trên tình yêu và tôn trọng",
                    ]}
                    renderItem={(item) => (
                      <List.Item>
                        <CheckCircleOutlined className="text-green-500 mr-2" />
                        {item}
                      </List.Item>
                    )}
                  />
                </div>
              </Col>

              <Col xs={24} lg={12}>
                <div className="simple-card h-full">
                  <Title
                    level={3}
                    className="text-emphasis flex items-center gap-3"
                  >
                    <WarningOutlined />
                    Thách thức hiện tại
                  </Title>
                  <List
                    dataSource={[
                      "Xuống cấp một số giá trị văn hóa gia đình",
                      "Gia tăng các tệ nạn xã hội như ly hôn, bạo lực",
                      "Xung đột thế hệ do khác biệt lối sống",
                      "Mất cân bằng giới tính (111.5 bé trai/100 bé gái)",
                    ]}
                    renderItem={(item) => (
                      <List.Item>
                        <ExclamationCircleOutlined className="text-orange-500 mr-2" />
                        {item}
                      </List.Item>
                    )}
                  />
                </div>
              </Col>
            </Row>
          </div>
        </section>

        {/* CQ Questions Section - Simplified */}
        <section id="cq-questions" className="content-section bg-soft-purple">
          <div className="container mx-auto px-6">
            <div className="text-center clean-spacing">
              <Badge
                count="PHẦN 3"
                style={{ backgroundColor: "#d43731", color: "white" }}
              >
                <div className="simple-card inline-block">
                  <Title
                    level={1}
                    className="!text-vn-red-700 !font-fraunces !text-4xl !mb-4"
                  >
                    CÂU HỎI THẢO LUẬN (CQ)
                  </Title>
                  <Paragraph className="!text-xl !text-gray-600 !leading-relaxed">
                    Phân tích và giải đáp các câu hỏi chuyên sâu về lý thuyết
                    Gia đình
                  </Paragraph>
                </div>
              </Badge>
            </div>

            <div className="max-w-5xl mx-auto">
              {/* CQ1 */}
              <div className="clean-spacing">
                <div className="simple-card">
                  <div className="subtle-border">
                    <Badge count="CQ1" style={{ backgroundColor: "#d43731" }}>
                      <Title level={2} className="text-emphasis">
                        Tại sao Mác - Ăngghen khẳng định gia đình sẽ diễn ra một
                        cuộc cách mạng?
                      </Title>
                    </Badge>
                  </div>

                  <Row gutter={[24, 24]} className="mt-6">
                    <Col xs={24} lg={12}>
                      <Title level={4} className="text-emphasis">
                        Căn cứ lý thuyết
                      </Title>
                      <Steps
                        direction="vertical"
                        size="small"
                        current={3}
                        items={[
                          {
                            title: "Cơ sở kinh tế",
                            description:
                              "Gia đình tư bản dựa trên chế độ tư hữu và quan hệ tước đoạt",
                          },
                          {
                            title: "Mâu thuẫn xã hội",
                            description:
                              "Bất bình đẳng giữa nam-nữ, cha mẹ-con cái trong gia đình tư sản",
                          },
                          {
                            title: "Tất yếu lịch sử",
                            description:
                              "Khi tư hữu tư bản bị xóa bỏ, cơ sở gia đình cũ cũng mất đi",
                          },
                          {
                            title: "Gia đình mới",
                            description:
                              "Hình thành dựa trên bình đẳng, tự do và tình yêu thương",
                          },
                        ]}
                      />
                    </Col>

                    <Col xs={24} lg={12}>
                      <Title level={4} className="text-emphasis">
                        Nội dung cách mạng
                      </Title>
                      <List
                        dataSource={[
                          "Cách mạng về cơ sở kinh tế: Từ tư hữu → công hữu XHCN",
                          "Cách mạng về quan hệ xã hội: Từ bất bình đẳng → bình đẳng",
                          "Cách mạng về ý thức: Từ gia trưởng → dân chủ gia đình",
                          "Cách mạng về hôn nhân: Từ sắp đặt → tự do, tình yêu",
                        ]}
                        renderItem={(item) => (
                          <List.Item>
                            <ArrowRightOutlined className="text-vn-red-500 mr-2" />
                            {item}
                          </List.Item>
                        )}
                      />
                    </Col>
                  </Row>
                </div>
              </div>

              {/* CQ2 */}
              <div className="clean-spacing">
                <div className="simple-card">
                  <div className="subtle-border">
                    <Badge
                      count="CQ2"
                      style={{ backgroundColor: "#f9f350", color: "#862921" }}
                    >
                      <Title level={2} className="text-emphasis">
                        Nghiên cứu thực trạng gia đình hiện nay ở Việt Nam
                      </Title>
                    </Badge>
                  </div>

                  <Tabs
                    defaultActiveKey="1"
                    items={[
                      {
                        key: "1",
                        label: "Thống kê tổng quan",
                        children: (
                          <Row gutter={[24, 24]}>
                            <Col xs={12} lg={6}>
                              <Statistic
                                title="Quy mô hộ gia đình"
                                value={3.6}
                                suffix="người"
                                valueStyle={{ color: "#d43731" }}
                              />
                            </Col>
                            <Col xs={12} lg={6}>
                              <Statistic
                                title="Tỷ lệ gia đình hạt nhân"
                                value={65.2}
                                suffix="%"
                                valueStyle={{ color: "#52c41a" }}
                              />
                            </Col>
                            <Col xs={12} lg={6}>
                              <Statistic
                                title="Tỷ lệ ly hôn"
                                value={24.3}
                                suffix="%"
                                valueStyle={{ color: "#ff4d4f" }}
                              />
                            </Col>
                            <Col xs={12} lg={6}>
                              <Statistic
                                title="Tuổi kết hôn TB"
                                value={25.2}
                                suffix="tuổi"
                                valueStyle={{ color: "#1890ff" }}
                              />
                            </Col>
                          </Row>
                        ),
                      },
                      {
                        key: "2",
                        label: "Thành tựu & Thách thức",
                        children: (
                          <Row gutter={[24, 24]}>
                            <Col xs={24} lg={12}>
                              <Alert
                                message="Thành tựu tích cực"
                                description="Quan hệ gia đình dân chủ hơn, đời sống vật chất được cải thiện, giá trị truyền thống được duy trì"
                                type="success"
                                showIcon
                              />
                            </Col>
                            <Col xs={24} lg={12}>
                              <Alert
                                message="Thách thức nghiêm trọng"
                                description="Mất cân bằng giới tính (111.5/100), gia tăng tệ nạn xã hội, xung đột thế hệ"
                                type="warning"
                                showIcon
                              />
                            </Col>
                          </Row>
                        ),
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Usage Section - Simplified */}
        <section id="ai-usage" className="content-section bg-soft-gray">
          <div className="container mx-auto px-6">
            <div className="text-center clean-spacing">
              <Badge
                count="PHẦN 4"
                style={{ backgroundColor: "#d43731", color: "white" }}
              >
                <div className="simple-card inline-block">
                  <Title
                    level={1}
                    className="!text-vn-red-700 !font-fraunces !text-4xl !mb-4"
                  >
                    SỬ DỤNG CÔNG NGHỆ AI
                  </Title>
                  <Paragraph className="!text-xl !text-gray-600 !leading-relaxed">
                    Ứng dụng trí tuệ nhân tạo trong nghiên cứu và phát triển bài
                    thuyết trình
                  </Paragraph>
                </div>
              </Badge>
            </div>

            <Row gutter={[32, 32]} className="clean-spacing">
              <Col xs={24} lg={8}>
                <div className="simple-card text-center h-full">
                  <div className="icon-container mx-auto mb-4 bg-soft-blue">
                    <RobotOutlined className="text-2xl" />
                  </div>
                  <Title level={3} className="text-emphasis">
                    GitHub Copilot
                  </Title>
                  <List
                    dataSource={[
                      "Hỗ trợ viết code HTML, CSS, JavaScript",
                      "Tối ưu hóa cấu trúc và layout",
                      "Debug và sửa lỗi tự động",
                    ]}
                    renderItem={(item) => (
                      <List.Item>
                        <CodeOutlined className="text-blue-500 mr-2" />
                        <Text className="text-sm">{item}</Text>
                      </List.Item>
                    )}
                  />
                </div>
              </Col>

              <Col xs={24} lg={8}>
                <div className="simple-card text-center h-full">
                  <div className="icon-container mx-auto mb-4 bg-soft-green">
                    <MessageOutlined className="text-2xl" />
                  </div>
                  <Title level={3} className="text-emphasis">
                    Claude AI
                  </Title>
                  <List
                    dataSource={[
                      "Phân tích và tổng hợp nội dung học thuật",
                      "Gợi ý ý tưởng và cách trình bày",
                      "Chỉnh sửa ngữ pháp và văn phong",
                    ]}
                    renderItem={(item) => (
                      <List.Item>
                        <FileTextOutlined className="text-green-500 mr-2" />
                        <Text className="text-sm">{item}</Text>
                      </List.Item>
                    )}
                  />
                </div>
              </Col>

              <Col xs={24} lg={8}>
                <div className="simple-card text-center h-full">
                  <div className="icon-container mx-auto mb-4 bg-soft-purple">
                    <PictureOutlined className="text-2xl" />
                  </div>
                  <Title level={3} className="text-emphasis">
                    AI Image Tools
                  </Title>
                  <List
                    dataSource={[
                      "Tạo hình ảnh minh họa cho bài thuyết trình",
                      "Thiết kế biểu đồ và infographic",
                      "Tạo background và pattern decoration",
                    ]}
                    renderItem={(item) => (
                      <List.Item>
                        <CameraOutlined className="text-purple-500 mr-2" />
                        <Text className="text-sm">{item}</Text>
                      </List.Item>
                    )}
                  />
                </div>
              </Col>
            </Row>

            {/* Benefits */}
            <div className="simple-card">
              <Title level={3} className="text-emphasis text-center mb-6">
                Lợi ích khi sử dụng AI trong nghiên cứu
              </Title>
              <Row gutter={[24, 24]}>
                <Col xs={24} lg={12}>
                  <List
                    header={<Text strong>Hiệu quả công việc</Text>}
                    dataSource={[
                      "Tăng tốc độ nghiên cứu và xử lý thông tin",
                      "Tiết kiệm thời gian trong việc thiết kế giao diện",
                      "Tự động hóa các tác vụ lặp đi lặp lại",
                    ]}
                    renderItem={(item) => (
                      <List.Item>
                        <CheckCircleOutlined className="text-green-500 mr-2" />
                        {item}
                      </List.Item>
                    )}
                  />
                </Col>
                <Col xs={24} lg={12}>
                  <List
                    header={<Text strong>Chất lượng nội dung</Text>}
                    dataSource={[
                      "Nâng cao chất lượng nội dung và hình ảnh",
                      "Hỗ trợ kiểm tra và hoàn thiện bài thuyết trình",
                      "Cải thiện tính tương tác và trải nghiệm",
                    ]}
                    renderItem={(item) => (
                      <List.Item>
                        <TrophyOutlined className="text-yellow-500 mr-2" />
                        {item}
                      </List.Item>
                    )}
                  />
                </Col>
              </Row>
            </div>
          </div>
        </section>
      </Content>

      <Footer className="!bg-dark-red-800 !text-center !py-8">
        <div className="container mx-auto">
          <Paragraph className="!text-cream-100 !mb-2">
            <Text className="!text-cream-100">
              Báo cáo được thực hiện bởi sinh viên khóa MLN131 - Triết học
              Mác-Lênin
            </Text>
          </Paragraph>
          <Paragraph className="!text-cream-300 !text-sm !mb-0">
            © 2024 - Nghiên cứu về gia đình trong thời kỳ quá độ lên chủ nghĩa
            xã hội
          </Paragraph>
        </div>
      </Footer>

      <FloatButton.BackTop
        icon={<ArrowUpOutlined />}
        className="!bg-vn-red-600 !border-vn-red-600"
      />
    </Layout>
  );
}
