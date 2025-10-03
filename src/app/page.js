"use client";

import {
  BookOutlined,
  HistoryOutlined,
  RocketOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Card, Col, FloatButton, Image, Row, Statistic, Timeline } from "antd";
import { useEffect, useState } from "react";

export default function GiaDinhPresentation() {
  const [activeSection, setActiveSection] = useState("intro");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "intro",
        "theory",
        "marx-engels",
        "lenin",
        "vietnam-practice",
        "historical-stages",
        "achievements",
        "conclusion",
      ];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-cream-50 text-readable font-fraunces">
      {/* Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-vn-red-600 to-vn-yellow-500 z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      ></div>
      {/* Fixed Navigation */}
      <nav className="fixed top-0 w-full bg-vn-red-600 shadow-lg z-50">
        <div className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-8 bg-vn-red-700 relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-vn-yellow-500 text-lg font-bold">
                  ★
                </div>
              </div>
              <h1 className="text-white font-bold text-xl font-fraunces">
                Gia đình trong thời kỳ quá độ
              </h1>
            </div>
            <div className="hidden md:flex space-x-4 text-sm">
              {[
                { id: "intro", label: "Mở đầu" },
                { id: "theory", label: "Lý thuyết" },
                { id: "marx-engels", label: "Mác-Ăngghen" },
                { id: "lenin", label: "Lênin" },
                { id: "vietnam-practice", label: "Thực tiễn VN" },
                { id: "historical-stages", label: "Giai đoạn lịch sử" },
                { id: "achievements", label: "Thành tựu" },
                { id: "conclusion", label: "Kết luận" },
              ].map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`text-white hover:text-vn-yellow-400 transition duration-300 font-fraunces ${
                    activeSection === id
                      ? "text-vn-yellow-400 font-semibold border-b-2 border-vn-yellow-400"
                      : ""
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                className="text-white hover:text-vn-yellow-400 transition duration-300"
                onClick={() => {
                  const menu = document.getElementById("mobile-menu");
                  menu.classList.toggle("hidden");
                }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className="hidden md:hidden bg-vn-red-700 border-t border-vn-red-500"
        >
          <div className="px-6 py-4 space-y-2">
            {[
              { id: "intro", label: "Mở đầu" },
              { id: "theory", label: "Lý thuyết" },
              { id: "marx-engels", label: "Mác-Ăngghen" },
              { id: "lenin", label: "Lênin" },
              { id: "vietnam-practice", label: "Thực tiễn VN" },
              { id: "historical-stages", label: "Giai đoạn lịch sử" },
              { id: "achievements", label: "Thành tựu" },
              { id: "conclusion", label: "Kết luận" },
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => {
                  scrollToSection(id);
                  document
                    .getElementById("mobile-menu")
                    .classList.add("hidden");
                }}
                className={`block w-full text-left py-2 px-4 text-white hover:text-vn-yellow-400 hover:bg-vn-red-600 rounded transition duration-300 ${
                  activeSection === id
                    ? "text-vn-yellow-400 bg-vn-red-600 font-semibold"
                    : ""
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section-height hero-academic">
        <div className="hero-content">
          <div className="w-16 h-10 bg-vn-red-700 mx-auto mb-6 relative flag-wave">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-vn-yellow-500 text-2xl font-bold">
              ★
            </div>
          </div>
          <h1 className="hero-title">
            GIA ĐÌNH TRONG THỜI KỲ QUÁ ĐỘ LÊN CHỦ NGHĨA XÃ HỘI
          </h1>
          <div className="hero-description">
            <h2 className="hero-subtitle">
              Từ Lý luận Kinh điển Mác-Lênin đến Thực tiễn Việt Nam
            </h2>
            <p className="text-white text-lg">
              Phân tích hệ thống quan điểm lý luận và vận dụng thực tiễn trong
              xây dựng gia đình xã hội chủ nghĩa
            </p>
          </div>
          <div className="mt-8">
            <button
              onClick={() => scrollToSection("intro")}
              className="btn-secondary"
            >
              Bắt đầu tìm hiểu
            </button>
          </div>
        </div>
      </section>

      {/* Section 1: Mở đầu */}
      <section id="intro" className="section-height bg-white py-20">
        <div className="academic-container">
          <div className="section-header mb-16">
            <h2 className="text-4xl font-bold mb-4 font-fraunces">1. MỞ ĐẦU</h2>
            <p className="text-xl opacity-90">Bối cảnh và ý nghĩa nghiên cứu</p>
          </div>
          <Row gutter={[32, 32]} align="middle">
            <Col xs={24} lg={14}>
              <Card className="academic-card theory-card">
                <div className="space-y-6">
                  <p className="text-readable text-lg leading-relaxed">
                    Trong suốt chiều dài lịch sử nhân loại, gia đình luôn là một
                    hình thức cộng đồng xã hội đặc biệt, có vị trí là{" "}
                    <span className="text-highlight font-semibold">
                      "tế bào của cơ thể xã hội"
                    </span>
                    .
                  </p>

                  <div className="academic-quote">
                    <p className="text-emphasis text-lg font-semibold mb-2">
                      Quan điểm cốt lõi:
                    </p>
                    <p className="text-readable">
                      Sự tồn tại và biến đổi của gia đình không tách rời khỏi sự
                      phát triển của các hình thái kinh tế - xã hội.
                    </p>
                  </div>

                  <p className="text-readable text-lg leading-relaxed">
                    Trong bối cảnh Việt Nam đang trong thời kỳ quá độ lên chủ
                    nghĩa xã hội, việc nghiên cứu về gia đình từ góc độ lý luận
                    và thực tiễn có ý nghĩa đặc biệt quan trọng.
                  </p>
                </div>
              </Card>
            </Col>

            <Col xs={24} lg={10}>
              <div className="space-y-6">
                <div className="academic-image">
                  <Image
                    src="https://cdn-media.sforum.vn/storage/app/media/anh-vinh-ha-long-28.jpg"
                    alt="Gia đình Việt Nam"
                    width="100%"
                    height={250}
                    style={{ objectFit: "cover" }}
                    preview={false}
                  />
                </div>

                <Card className="practice-card text-center">
                  <BookOutlined className="text-3xl text-vn-red-600 mb-3" />
                  <h4 className="text-emphasis text-lg font-semibold mb-2">
                    Phương pháp luận
                  </h4>
                  <p className="text-readable-light">
                    Chủ nghĩa duy vật biện chứng và duy vật lịch sử
                  </p>
                  <div className="mt-3 text-sm text-readable-light">
                    Phân tích định tính + định lượng
                  </div>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Section 2: Phân tích lý thuyết */}
      <section id="theory" className="section-height hero-academic">
        <div className="academic-container">
          <div className="section-header mb-16">
            <h2 className="text-4xl font-bold mb-4 font-fraunces">
              PHẦN 1: PHÂN TÍCH LÝ THUYẾT VỀ GIA ĐÌNH
            </h2>
            <p className="text-xl opacity-90">
              Cơ sở lý luận Mác-Lênin về gia đình
            </p>
          </div>

          <Row gutter={[32, 32]}>
            <Col xs={24} lg={12}>
              <Card className="academic-card theory-card h-full">
                <div className="text-center mb-6">
                  <BookOutlined className="text-4xl text-vn-red-600 mb-3" />
                  <h3 className="text-2xl font-bold text-emphasis mb-4">
                    Quan điểm Mác-Ăngghen
                  </h3>
                </div>
                <div className="space-y-4">
                  <p className="text-readable text-lg leading-relaxed">
                    Gia đình không phải là một phạm trù vĩnh cửu hay tự nhiên,
                    mà là một{" "}
                    <span className="text-highlight">phạm trù lịch sử</span>.
                  </p>
                  <div className="practice-card">
                    <h4 className="text-emphasis font-semibold mb-3">
                      Đặc điểm cốt lõi:
                    </h4>
                    <ul className="academic-list">
                      <li>Luôn biến đổi theo xã hội</li>
                      <li>Gắn với phương thức sản xuất</li>
                      <li>Phản ánh chế độ xã hội</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </Col>

            <Col xs={24} lg={12}>
              <Card className="academic-card theory-card h-full">
                <div className="text-center mb-6">
                  <HistoryOutlined className="text-4xl text-vn-red-600 mb-3" />
                  <h3 className="text-2xl font-bold text-emphasis mb-4">
                    Quan điểm Lênin
                  </h3>
                </div>
                <div className="space-y-4">
                  <p className="text-readable text-lg leading-relaxed">
                    Gia đình là{" "}
                    <span className="text-highlight">"tế bào của xã hội"</span>{" "}
                    và môi trường chuyển tiếp trong thời kỳ quá độ.
                  </p>
                  <div className="practice-card">
                    <h4 className="text-emphasis font-semibold mb-3">
                      Vai trò đặc biệt:
                    </h4>
                    <ul className="academic-list">
                      <li>Nuôi dưỡng con người mới</li>
                      <li>Xây dựng xã hội mới</li>
                      <li>Cải tạo quan hệ xã hội</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>

          <div className="mt-12">
            <Card className="academic-quote text-center">
              <h3 className="text-xl font-bold text-emphasis mb-4">
                Trích dẫn kinh điển
              </h3>
              <p className="text-lg text-readable italic">
                "Gia đình là cái nôi thân yêu nuôi dưỡng cả đời người và là môi
                trường quan trọng giáo dục nếp sống và hình thành nhân cách"
              </p>
              <p className="text-emphasis text-sm mt-3 font-semibold">
                - V.I. Lênin -
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 3: Quan điểm Mác-Ăngghen chi tiết */}
      <section id="marx-engels" className="section-height bg-white py-20">
        <div className="academic-container">
          <div className="section-header mb-16">
            <h2 className="text-4xl font-bold text-vn-red-600 font-fraunces">
              1.1. Quan điểm C. Mác và Ph. Ăngghen
            </h2>
            <p className="text-xl opacity-90">
              Nguồn gốc và bản chất lịch sử của gia đình
            </p>
          </div>

          <Row gutter={[24, 24]}>
            <Col xs={24}>
              <Card className="academic-card theory-card">
                <h3 className="text-2xl font-bold text-emphasis mb-4">
                  Nguồn gốc và bản chất lịch sử của gia đình
                </h3>
                <p className="text-lg leading-relaxed mb-6 text-readable">
                  Dựa trên công trình của nhà dân tộc học Lewis H. Morgan, Mác
                  và Ăngghen đã luận giải một cách khoa học về nguồn gốc gia
                  đình.
                </p>
                <Card className="practice-card">
                  <h4 className="font-semibold text-lg mb-4 text-emphasis">
                    Quá trình tiến hóa:
                  </h4>
                  <Row gutter={[16, 16]}>
                    <Col xs={24} md={8}>
                      <div className="text-center">
                        <Card className="theory-card mb-3">
                          <h5 className="font-bold text-emphasis">
                            Công xã nguyên thủy
                          </h5>
                        </Card>
                        <p className="text-sm text-readable">
                          Hôn nhân quần hôn, hôn nhân cặp đôi
                        </p>
                      </div>
                    </Col>
                    <Col xs={24} md={8}>
                      <div className="text-center">
                        <Card className="theory-card mb-3">
                          <h5 className="font-bold text-emphasis">
                            Chế độ tư hữu
                          </h5>
                        </Card>
                        <p className="text-sm text-readable">
                          Gia đình một vợ một chồng
                        </p>
                      </div>
                    </Col>
                    <Col xs={24} md={8}>
                      <div className="text-center">
                        <Card className="theory-card mb-3">
                          <h5 className="font-bold text-emphasis">
                            Đơn vị kinh tế
                          </h5>
                        </Card>
                        <p className="text-sm text-readable">Thừa kế tài sản</p>
                      </div>
                    </Col>
                  </Row>
                </Card>
              </Card>
            </Col>
          </Row>

          <Row gutter={[24, 24]} className="mt-8">
            <Col xs={24} md={12}>
              <Card className="academic-card practice-card h-full">
                <h4 className="text-xl font-bold text-emphasis mb-4">
                  Gia đình trong xã hội tư bản
                </h4>
                <div className="mb-4">
                  <Image
                    src="https://cdn-media.sforum.vn/storage/app/media/anh-vinh-ha-long-28.jpg"
                    alt="Gia đình thời phong kiến"
                    width="100%"
                    height={128}
                    style={{ objectFit: "cover" }}
                    preview={false}
                  />
                </div>
                <ul className="academic-list">
                  <li>Hôn nhân trở thành "hợp đồng kinh tế"</li>
                  <li>Tính gia trưởng và bất bình đẳng giới</li>
                  <li>Phụ nữ bị loại trừ khỏi sản xuất xã hội</li>
                  <li>Sự áp bức về mặt kinh tế và xã hội</li>
                </ul>
              </Card>
            </Col>

            <Col xs={24} md={12}>
              <Card className="academic-card theory-card h-full">
                <h4 className="text-xl font-bold text-emphasis mb-4">
                  Triển vọng xã hội cộng sản
                </h4>
                <div className="mb-4">
                  <Image
                    src="https://cdn-media.sforum.vn/storage/app/media/anh-vinh-ha-long-28.jpg"
                    alt="Gia đình xã hội chủ nghĩa"
                    width="100%"
                    height={128}
                    style={{ objectFit: "cover" }}
                    preview={false}
                  />
                </div>
                <ul className="academic-list">
                  <li>Dựa trên tình yêu tự nguyện</li>
                  <li>Bình đẳng thực sự</li>
                  <li>Giải phóng phụ nữ</li>
                  <li>Độc lập kinh tế của phụ nữ</li>
                </ul>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      {/* Section 4: Quan điểm Lênin chi tiết */}
      <section id="lenin" className="section-height hero-academic py-20">
        <div className="academic-container">
          <div className="section-header mb-16">
            <h2 className="text-4xl font-bold text-vn-yellow-400 font-fraunces">
              1.2. Quan điểm V.I. Lênin về gia đình
            </h2>
            <p className="text-xl opacity-90">
              Lý luận về gia đình trong thời kỳ quá độ
            </p>
          </div>

          <Row gutter={[24, 24]} className="mb-12">
            <Col xs={24} md={8}>
              <Card className="academic-card theory-card h-full">
                <div className="text-center mb-4">
                  <HistoryOutlined className="text-3xl text-vn-yellow-400 mb-3" />
                </div>
                <h3 className="text-xl font-bold text-vn-yellow-400 mb-4 text-center">
                  Vai trò đặc biệt
                </h3>
                <p className="leading-relaxed text-white">
                  Gia đình là môi trường chuyển tiếp, nơi các quan hệ cũ dần bị
                  xóa bỏ và quan hệ mới được hình thành.
                </p>
              </Card>
            </Col>

            <Col xs={24} md={8}>
              <Card className="academic-card theory-card h-full">
                <div className="text-center mb-4">
                  <UserOutlined className="text-3xl text-vn-yellow-400 mb-3" />
                </div>
                <h3 className="text-xl font-bold text-vn-yellow-400 mb-4 text-center">
                  Con người mới
                </h3>
                <p className="leading-relaxed text-white">
                  Xây dựng "con người mới xã hội chủ nghĩa" với ý thức giai cấp
                  rõ ràng và lòng trung thành với lý tưởng cộng sản.
                </p>
              </Card>
            </Col>

            <Col xs={24} md={8}>
              <Card className="academic-card theory-card h-full">
                <div className="text-center mb-4">
                  <RocketOutlined className="text-3xl text-vn-yellow-400 mb-3" />
                </div>
                <h3 className="text-xl font-bold text-vn-yellow-400 mb-4 text-center">
                  Chiến lược cải tạo
                </h3>
                <p className="leading-relaxed text-white">
                  Các chính sách cấp tiến nhằm giải phóng phụ nữ và cải tạo gia
                  đình thành cái nôi của cách mạng.
                </p>
              </Card>
            </Col>
          </Row>

          <Card className="academic-quote">
            <h3 className="text-2xl font-bold mb-4 text-center text-emphasis">
              Chính sách của Nhà nước Xô viết
            </h3>
            <Row gutter={[24, 24]}>
              <Col xs={24} md={12}>
                <Card className="practice-card h-full">
                  <h4 className="font-bold mb-4 text-emphasis">
                    Các biện pháp pháp lý:
                  </h4>
                  <ul className="academic-list">
                    <li>Bảo vệ quyền phụ nữ</li>
                    <li>Cấm chế độ đa thê</li>
                    <li>Quy định tuổi kết hôn tối thiểu</li>
                    <li>Thành lập "ban phụ nữ" (Zhenotdely)</li>
                  </ul>
                </Card>
              </Col>
              <Col xs={24} md={12}>
                <Card className="theory-card h-full">
                  <h4 className="font-bold mb-4 text-emphasis">
                    Thách thức trong thực tiễn:
                  </h4>
                  <ul className="academic-list">
                    <li>Gánh nặng kép của phụ nữ</li>
                    <li>Sự chống đối từ xã hội</li>
                    <li>Mâu thuẫn chính sách - thực tế</li>
                    <li>Tư tưởng bảo thủ ăn sâu</li>
                  </ul>
                </Card>
              </Col>
            </Row>
          </Card>
        </div>
      </section>

      {/* Section 5: Thực tiễn Việt Nam */}
      <section id="vietnam-practice" className="section-height bg-white py-20">
        <div className="academic-container">
          <div className="section-header mb-16">
            <h2 className="text-4xl font-bold text-vn-red-600 font-fraunces">
              PHẦN 2: THỰC TIỄN VIỆT NAM
            </h2>
            <p className="text-xl opacity-90">
              Quá trình chuyển đổi gia đình trong lịch sử
            </p>
          </div>

          <div className="space-y-8">
            <Card className="academic-card">
              <h3 className="text-2xl font-bold text-emphasis mb-6">
                2.1. Quá trình chuyển đổi gia đình
              </h3>

              <Row gutter={[24, 24]}>
                <Col xs={24} lg={12}>
                  <Card className="theory-card h-full">
                    <h4 className="text-xl font-bold text-emphasis mb-4">
                      Gia đình truyền thống Việt Nam
                    </h4>
                    <p className="mb-4 text-readable">
                      Xây dựng trên nền tảng Nho giáo:
                    </p>
                    <ul className="academic-list mb-4">
                      <li>
                        <strong>Gia đạo:</strong> Đạo đức gia đình
                      </li>
                      <li>
                        <strong>Gia phong:</strong> Truyền thống gia đình
                      </li>
                      <li>
                        <strong>Gia lễ:</strong> Nghi lễ gia đình
                      </li>
                    </ul>
                    <Card className="practice-card">
                      <p className="text-sm text-readable">
                        <strong>Đặc điểm:</strong> Chế độ gia trưởng, phụ quyền,
                        tôn ti trật tự
                      </p>
                    </Card>
                  </Card>
                </Col>

                <Col xs={24} lg={12}>
                  <Card className="practice-card h-full">
                    <h4 className="text-xl font-bold text-emphasis mb-4">
                      Gia đình xã hội chủ nghĩa
                    </h4>
                    <p className="mb-4 text-readable">
                      Theo định hướng Mác-Lênin:
                    </p>
                    <ul className="academic-list mb-4">
                      <li>
                        <strong>Gia đình văn hóa:</strong> No ấm, bình đẳng
                      </li>
                      <li>
                        <strong>Tự nguyện:</strong> Hôn nhân tự do
                      </li>
                      <li>
                        <strong>Dân chủ:</strong> Bình đẳng giới
                      </li>
                    </ul>
                    <Card className="theory-card">
                      <p className="text-sm text-readable">
                        <strong>Mục tiêu:</strong> Tiến bộ, hạnh phúc, xóa bỏ
                        quan hệ phong kiến
                      </p>
                    </Card>
                  </Card>
                </Col>
              </Row>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 6: Giai đoạn lịch sử */}
      <section
        id="historical-stages"
        className="section-height hero-academic py-20"
      >
        <div className="academic-container">
          <div className="section-header mb-16">
            <h2 className="text-4xl font-bold text-vn-yellow-400 font-fraunces">
              2.2. Vai trò gia đình qua các giai đoạn lịch sử
            </h2>
            <p className="text-xl opacity-90">
              Timeline phát triển của gia đình Việt Nam
            </p>
          </div>

          <Timeline
            mode="left"
            className="mt-8"
            items={[
              {
                color: "#fadb14",
                children: (
                  <Card className="academic-card theory-card ml-6">
                    <h3 className="text-2xl font-bold text-vn-yellow-400 mb-4">
                      Giai đoạn kháng chiến (1945-1975)
                    </h3>
                    <Row gutter={[16, 16]}>
                      <Col xs={24} md={12}>
                        <h4 className="text-xl font-bold mb-3 text-white">
                          Phong trào "Ba đảm đang" (1965)
                        </h4>
                        <div className="mb-4">
                          <Image
                            src="https://cdn-media.sforum.vn/storage/app/media/anh-vinh-ha-long-28.jpg"
                            alt="Phụ nữ Việt Nam trong kháng chiến"
                            width="100%"
                            height={128}
                            style={{ objectFit: "cover" }}
                            preview={false}
                          />
                        </div>
                        <ul className="space-y-3">
                          <li className="flex items-start space-x-3">
                            <span className="text-vn-yellow-400 text-lg font-bold">
                              ⚙️
                            </span>
                            <div>
                              <strong className="text-vn-yellow-400">
                                Đảm sản xuất:
                              </strong>
                              <p className="text-sm text-white">
                                Thay thế nam giới ra tiền tuyến
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start space-x-3">
                            <span className="text-vn-yellow-400 text-lg font-bold">
                              🏠
                            </span>
                            <div>
                              <strong className="text-vn-yellow-400">
                                Đảm gia đình:
                              </strong>
                              <p className="text-sm text-white">
                                Để chồng con yên tâm chiến đấu
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start space-x-3">
                            <span className="text-vn-yellow-400 text-lg font-bold">
                              ⚔️
                            </span>
                            <div>
                              <strong className="text-vn-yellow-400">
                                Đảm phục vụ:
                              </strong>
                              <p className="text-sm text-white">
                                Hỗ trợ trực tiếp chiến đấu
                              </p>
                            </div>
                          </li>
                        </ul>
                      </Col>
                      <Col xs={24} md={12}>
                        <Card className="practice-card">
                          <p className="font-bold text-lg text-emphasis mb-2">
                            Ý nghĩa:
                          </p>
                          <p className="text-readable">
                            Gia đình trở thành "chiến tuyến" không chính thức,
                            phụ nữ trở thành chủ thể cách mạng
                          </p>
                        </Card>
                      </Col>
                    </Row>
                  </Card>
                ),
              },
              {
                color: "#fadb14",
                children: (
                  <Card className="academic-card theory-card ml-6">
                    <h3 className="text-2xl font-bold text-vn-yellow-400 mb-4">
                      Thời kỳ xây dựng CNXH (trước Đổi mới)
                    </h3>
                    <Row gutter={[16, 16]}>
                      <Col xs={24} md={8}>
                        <Card className="practice-card text-center">
                          <h4 className="font-bold text-emphasis">
                            Kinh tế tập thể
                          </h4>
                          <p className="text-sm text-readable">
                            Thực hiện chính sách xã hội chủ nghĩa
                          </p>
                        </Card>
                      </Col>
                      <Col xs={24} md={8}>
                        <Card className="practice-card text-center">
                          <h4 className="font-bold text-emphasis">
                            Nếp sống mới
                          </h4>
                          <p className="text-sm text-readable">
                            Xây dựng "gia đình văn hóa"
                          </p>
                        </Card>
                      </Col>
                      <Col xs={24} md={8}>
                        <Card className="practice-card text-center">
                          <h4 className="font-bold text-emphasis">Giáo dục</h4>
                          <p className="text-sm text-readable">
                            "Trường học" đầu tiên về CNXH
                          </p>
                        </Card>
                      </Col>
                    </Row>
                  </Card>
                ),
              },
              {
                color: "#fadb14",
                children: (
                  <Card className="academic-card theory-card ml-6">
                    <h3 className="text-2xl font-bold text-vn-yellow-400 mb-4">
                      Giai đoạn Đổi mới (từ 1986)
                    </h3>
                    <Row gutter={[16, 16]}>
                      <Col xs={24} md={12}>
                        <h4 className="text-lg font-bold mb-3 text-vn-yellow-400">
                          Những thay đổi tích cực:
                        </h4>
                        <ul className="space-y-2 text-white">
                          <li>✓ Phát triển kinh tế, nâng cao đời sống</li>
                          <li>✓ Gia đình hạt nhân thay thế đa thế hệ</li>
                          <li>✓ Hôn nhân dựa trên tình yêu chân chính</li>
                          <li>✓ Tăng sự bình đẳng và dân chủ</li>
                        </ul>
                      </Col>
                      <Col xs={24} md={12}>
                        <Card className="practice-card">
                          <Statistic
                            title="Quy mô hộ gia đình trung bình"
                            value={3.6}
                            suffix="người/hộ"
                            precision={1}
                            valueStyle={{
                              color: "#d43731",
                              fontSize: "2.5rem",
                              fontWeight: "bold",
                            }}
                          />
                          <p className="text-readable text-sm mt-3">
                            Dữ liệu năm 2019 - Xu hướng giảm phản ánh sự thay
                            đổi cấu trúc gia đình
                          </p>
                        </Card>
                      </Col>
                    </Row>
                  </Card>
                ),
              },
            ]}
          />
        </div>
      </section>

      {/* Section 7: Thành tựu và hạn chế */}
      <section id="achievements" className="section-height bg-white py-20">
        <div className="academic-container">
          <div className="section-header mb-16">
            <h2 className="text-4xl font-bold text-vn-red-600 font-fraunces">
              2.3. Đánh giá thành tựu và hạn chế hiện tại
            </h2>
            <p className="text-xl opacity-90">
              Phân tích thực trạng gia đình Việt Nam hiện tại
            </p>
          </div>

          <Row gutter={[24, 24]}>
            {/* Thành tựu */}
            <Col xs={24} lg={12}>
              <Card className="academic-card theory-card h-full">
                <h3 className="text-2xl font-bold text-green-700 mb-6 flex items-center">
                  <span className="text-3xl mr-3">✅</span>
                  Thành tựu đạt được
                </h3>
                <div className="space-y-4">
                  <Card className="practice-card">
                    <h4 className="font-bold text-emphasis mb-2">
                      Bình đẳng và dân chủ
                    </h4>
                    <p className="text-sm text-readable">
                      Gia đình Việt Nam ngày càng bình đẳng hơn, đặc biệt trong
                      quan hệ vợ chồng
                    </p>
                  </Card>
                  <Card className="practice-card">
                    <h4 className="font-bold text-emphasis mb-2">
                      Nâng cao đời sống
                    </h4>
                    <p className="text-sm text-readable">
                      Đời sống vật chất được cải thiện, đáp ứng tốt hơn nhu cầu
                      các thành viên
                    </p>
                  </Card>
                  <Card className="practice-card">
                    <h4 className="font-bold text-emphasis mb-2">
                      Giữ gìn truyền thống
                    </h4>
                    <p className="text-sm text-readable">
                      Các giá trị tốt đẹp như đạo hiếu, tình nghĩa vợ chồng vẫn
                      được phát huy
                    </p>
                  </Card>
                </div>
              </Card>
            </Col>

            {/* Hạn chế */}
            <Col xs={24} lg={12}>
              <Card className="academic-card theory-card h-full">
                <h3 className="text-2xl font-bold text-red-700 mb-6 flex items-center">
                  <span className="text-3xl mr-3">⚠️</span>
                  Hạn chế và thách thức
                </h3>
                <div className="space-y-4">
                  <Card className="practice-card">
                    <h4 className="font-bold text-emphasis mb-2">
                      Suy thoái giá trị
                    </h4>
                    <p className="text-sm text-readable">
                      Một số giá trị văn hóa gia đình truyền thống bị xuống cấp
                    </p>
                  </Card>
                  <Card className="practice-card">
                    <h4 className="font-bold text-emphasis mb-2">
                      Tệ nạn xã hội
                    </h4>
                    <p className="text-sm text-readable">
                      Gia tăng tình trạng ly hôn, bạo lực gia đình
                    </p>
                  </Card>
                  <Card className="practice-card">
                    <h4 className="font-bold text-emphasis mb-2">
                      Xung đột thế hệ
                    </h4>
                    <p className="text-sm text-readable">
                      Khác biệt về lối sống và cách ứng xử giữa các thế hệ
                    </p>
                  </Card>
                  <Card className="practice-card">
                    <h4 className="font-bold text-emphasis mb-2">
                      Giảm gắn kết
                    </h4>
                    <p className="text-small text-readable">
                      Sự ly tán về nơi ở làm giảm sự gắn bó giữa các thế hệ
                    </p>
                  </Card>
                </div>
              </Card>
            </Col>
          </Row>

          {/* Biểu đồ minh họa */}
          <Card className="academic-quote mt-8">
            <h3 className="text-xl font-bold text-emphasis mb-6 text-center">
              Xu hướng biến đổi gia đình Việt Nam
            </h3>
            <Row gutter={[16, 16]}>
              {[
                {
                  period: "Truyền thống",
                  size: "6-8 người",
                  type: "Đa thế hệ",
                },
                {
                  period: "Kháng chiến",
                  size: "5-7 người",
                  type: "Gia đình cách mạng",
                },
                {
                  period: "Xây dựng CNXH",
                  size: "4-6 người",
                  type: "Gia đình văn hóa",
                },
                {
                  period: "Đổi mới",
                  size: "3,6 người",
                  type: "Gia đình hạt nhân",
                },
              ].map((item, index) => (
                <Col key={index} xs={12} md={6}>
                  <Card className="practice-card text-center h-full">
                    <p className="font-bold text-emphasis">{item.period}</p>
                    <p className="text-2xl font-bold text-vn-red-600">
                      {item.size}
                    </p>
                    <p className="text-sm text-readable">{item.type}</p>
                  </Card>
                </Col>
              ))}
            </Row>
          </Card>
        </div>
      </section>

      {/* Section 8: Kết luận */}
      <section
        id="conclusion"
        className="min-h-screen bg-gradient-to-br from-vn-red-600 to-dark-red-800 py-20 text-white"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-vn-yellow-400 mb-12 font-fraunces">
              Kết luận
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-bold text-vn-yellow-400 mb-4 font-fraunces">
                  Vận dụng sáng tạo
                </h3>
                <p className="leading-relaxed">
                  Việt Nam đã vận dụng sáng tạo lý luận Mác-Lênin về gia đình
                  vào thực tiễn cụ thể của đất nước.
                </p>
              </div>

              <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-bold text-vn-yellow-400 mb-4 font-fraunces">
                  Thành tựu quan trọng
                </h3>
                <p className="leading-relaxed">
                  Đạt được những thành tựu đáng kể trong việc xây dựng gia đình
                  mới, bình đẳng và tiến bộ.
                </p>
              </div>

              <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-bold text-vn-yellow-400 mb-4 font-fraunces">
                  Nhiệm vụ tương lai
                </h3>
                <p className="leading-relaxed">
                  Cần tiếp tục hoàn thiện và phát triển để ứng phó với thách
                  thức của thời đại mới.
                </p>
              </div>
            </div>

            <div className="bg-vn-yellow-400 text-vn-red-700 p-8 rounded-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 font-fraunces">
                Thông điệp chính
              </h3>
              <p className="text-lg leading-relaxed">
                Gia đình Việt Nam trong thời kỳ quá độ lên chủ nghĩa xã hội đã
                trải qua quá trình biến đổi sâu sắc, từ một đơn vị kinh tế-xã
                hội truyền thống trở thành một cấu trúc xã hội hiện đại, góp
                phần xây dựng và bảo vệ thành quả cách mạng, đồng thời nuôi
                dưỡng thế hệ tương lai của đất nước.
              </p>
            </div>

            <div className="mt-12">
              <div className="w-16 h-10 bg-vn-red-700 mx-auto relative animate-bounce">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-vn-yellow-400 text-2xl font-bold">
                  ★
                </div>
              </div>
              <p className="mt-4 text-vn-yellow-400 text-xl font-bold">
                Cảm ơn quý vị đã lắng nghe!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Toggle Summary Button for smaller screens */}
      <button
        className="fixed bottom-4 right-4 bg-vn-red-600 text-white p-3 rounded-full shadow-lg xl:hidden z-50 font-fraunces"
        onClick={() => {
          const panel = document.getElementById("summary-panel");
          panel.classList.toggle("hidden");
        }}
      >
        📋
      </button>

      {/* Mobile Summary Panel */}
      <div
        id="summary-panel"
        className="fixed inset-0 bg-black bg-opacity-50 z-50 hidden xl:hidden"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            e.target.classList.add("hidden");
          }
        }}
      >
        <div className="bg-white m-4 rounded-lg shadow-lg max-h-full overflow-y-auto">
          <div className="bg-vn-red-600 text-white p-3 rounded-t-lg flex justify-between items-center">
            <h3 className="font-bold font-fraunces">
              📋 Ý chính cho người thuyết trình
            </h3>
            <button
              onClick={() =>
                document.getElementById("summary-panel").classList.add("hidden")
              }
              className="text-xl"
            >
              ×
            </button>
          </div>
          <div className="p-4">
            <div className="space-y-3 text-sm">
              <div className="border-l-4 border-vn-yellow-500 pl-3">
                <strong className="text-vn-red-600">Mở đầu:</strong>
                <p>
                  Gia đình = "tế bào xã hội", biến đổi theo phương thức sản xuất
                </p>
              </div>

              <div className="border-l-4 border-vn-yellow-500 pl-3">
                <strong className="text-vn-red-600">Mác-Ăngghen:</strong>
                <p>
                  • Gia đình là phạm trù lịch sử
                  <br />• Từ công xã → tư hữu → cộng sản
                  <br />• Giải phóng phụ nữ là chìa khóa
                </p>
              </div>

              <div className="border-l-4 border-vn-yellow-500 pl-3">
                <strong className="text-vn-red-600">Lênin:</strong>
                <p>
                  • "Cái nôi nuôi dưỡng con người"
                  <br />• Xây dựng con người mới XHCN
                  <br />• Chính sách giải phóng phụ nữ
                </p>
              </div>

              <div className="border-l-4 border-vn-yellow-500 pl-3">
                <strong className="text-vn-red-600">Việt Nam:</strong>
                <p>
                  • "Ba đảm đang" (1965)
                  <br />• Từ gia đình truyền thống → XHCN
                  <br />• 3,6 người/hộ (2019)
                </p>
              </div>

              <div className="border-l-4 border-vn-yellow-500 pl-3">
                <strong className="text-vn-red-600">Thành tựu:</strong>
                <p>
                  • Bình đẳng, dân chủ hơn
                  <br />• Đời sống vật chất tăng
                  <br />• Giữ gìn truyền thống tốt
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-3">
                <strong className="text-red-600">Thách thức:</strong>
                <p>
                  • Suy thoái một số giá trị
                  <br />• Tệ nạn xã hội gia tăng
                  <br />• Xung đột thế hệ
                </p>
              </div>
            </div>

            <div className="mt-4 p-3 bg-vn-yellow-100 rounded-lg">
              <p className="text-xs text-vn-red-700">
                <strong>💡 Lưu ý:</strong> Kết hợp nội dung trên slide với thực
                tế hiện tại để bài thuyết trình sinh động hơn
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Float Button for Back to Top */}
      <FloatButton.BackTop
        style={{
          right: 24,
          bottom: 24,
        }}
        tooltip="Về đầu trang"
      />
    </div>
  );
}
