"use client";

import { DownOutlined, RobotOutlined } from "@ant-design/icons";
import { Button, Dropdown, Layout, Space, Typography } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SlidesContent } from "./slides_content";

const { Header, Content } = Layout;
const { Title } = Typography;

export default function GiaDinhPresentation() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("slide1");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = [
      "slide1",
      "slide2",
      "slide3",
      "slide4",
      "slide5",
      "slide6",
      "slide7",
      "slide8",
      "slide9",
      "slide10",
      "slide11",
      "slide12",
      "slide13",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Tạo menu dropdown cho các nhóm slides
  const slideGroups = [
    {
      key: "part1",
      label: "Phần 1: Lý thuyết",
      children: [
        { key: "slide1", label: "1. Trang tiêu đề" },
        { key: "slide2", label: "2. Mở đầu" },
        { key: "slide3", label: "3. Mác-Ăngghen (1)" },
        { key: "slide4", label: "4. Mác-Ăngghen (2)" },
        { key: "slide5", label: "5. Lênin (1)" },
        { key: "slide6", label: "6. Lênin (2)" },
      ],
    },
    {
      key: "part2",
      label: "Phần 2: Thực tiễn VN",
      children: [
        { key: "slide7", label: "7. Chuyển đổi" },
        { key: "slide8", label: "8. Kháng chiến" },
        { key: "slide9", label: "9. Đổi mới" },
        { key: "slide10", label: "10. Thách thức" },
      ],
    },
    {
      key: "part3",
      label: "Phần 3: Thảo luận",
      children: [
        { key: "slide11", label: "11. Thảo luận 1" },
        { key: "slide12", label: "12. Thảo luận 2" },
        { key: "slide13", label: "13. Kết luận" },
      ],
    },
  ];

  const handleMenuClick = (e) => {
    scrollToSection(e.key);
  };

  // Helper functions for navigation
  const getCurrentSlideNumber = () => {
    return parseInt(activeSection.replace("slide", ""));
  };

  const goToPreviousSlide = () => {
    const currentIndex = getCurrentSlideNumber();
    if (currentIndex > 1) {
      scrollToSection(`slide${currentIndex - 1}`);
    }
  };

  const goToNextSlide = () => {
    const currentIndex = getCurrentSlideNumber();
    if (currentIndex < 13) {
      scrollToSection(`slide${currentIndex + 1}`);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event) => {
      // Kiểm tra nếu không phải đang focus vào input/textarea
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return;
      }

      if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        event.preventDefault();
        goToPreviousSlide();
      } else if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        event.preventDefault();
        goToNextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [activeSection]);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1000,
          background: "#d43731",
          padding: "0 16px",
          height: "56px",
          lineHeight: "56px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {/* Lá cờ Việt Nam với sao 5 cánh chính xác */}
            <div
              style={{
                width: 40,
                height: 26,
                background: "#d43731",
                position: "relative",
                borderRadius: 3,
                border: "1px solid #b91c1c",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
              }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="#f9f350"
                style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.3))" }}
              >
                <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
              </svg>
            </div>
            <Title
              level={5}
              style={{
                color: "white",
                margin: 0,
                fontFamily: "var(--font-fraunces)",
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              Gia đình trong thời kỳ quá độ
            </Title>
          </div>

          {/* Navigation cho desktop - sử dụng dropdown */}
          <Space size="medium" className="hidden lg:flex">
            {slideGroups.map((group) => (
              <Dropdown
                key={group.key}
                menu={{
                  items: group.children.map((item) => ({
                    ...item,
                    onClick: () => scrollToSection(item.key),
                    className:
                      item.key === activeSection ? "active-menu-item" : "",
                    style: {
                      backgroundColor:
                        item.key === activeSection ? "#991b1b" : "transparent",
                      color: item.key === activeSection ? "#f9f350" : "white",
                      fontWeight: item.key === activeSection ? 600 : 400,
                    },
                  })),
                }}
                trigger={["hover"]}
                placement="bottomCenter"
              >
                <Button
                  type="text"
                  style={{
                    color: group.children.some(
                      (child) => child.key === activeSection
                    )
                      ? "#f9f350"
                      : "white",
                    fontWeight: group.children.some(
                      (child) => child.key === activeSection
                    )
                      ? 600
                      : 400,
                    borderBottom: group.children.some(
                      (child) => child.key === activeSection
                    )
                      ? "2px solid #f9f350"
                      : "none",
                    fontSize: "13px",
                    height: "40px",
                    padding: "0 12px",
                  }}
                >
                  {group.label} <DownOutlined style={{ fontSize: "10px" }} />
                </Button>
              </Dropdown>
            ))}
          </Space>

          {/* Navigation nhanh cho slides hiện tại */}
          <Space size="small" className="hidden md:flex lg:hidden">
            <Button
              type="text"
              onClick={goToPreviousSlide}
              disabled={getCurrentSlideNumber() <= 1}
              style={{
                color: getCurrentSlideNumber() <= 1 ? "#666" : "white",
                fontSize: "12px",
                cursor:
                  getCurrentSlideNumber() <= 1 ? "not-allowed" : "pointer",
              }}
            >
              ← Trước
            </Button>
            <span
              style={{
                color: "#f9f350",
                fontSize: "12px",
                fontWeight: 600,
                minWidth: "40px",
                textAlign: "center",
              }}
            >
              {getCurrentSlideNumber()} / 13
            </span>
            <Button
              type="text"
              onClick={goToNextSlide}
              disabled={getCurrentSlideNumber() >= 13}
              style={{
                color: getCurrentSlideNumber() >= 13 ? "#666" : "white",
                fontSize: "12px",
                cursor:
                  getCurrentSlideNumber() >= 13 ? "not-allowed" : "pointer",
              }}
            >
              Sau →
            </Button>
          </Space>
        </div>

        <div
          id="mobile-menu"
          className="hidden md:hidden"
          style={{
            background: "#b91c1c",
            borderTop: "1px solid #991b1b",
            padding: "12px 16px",
            maxHeight: "60vh",
            overflowY: "auto",
          }}
        >
          {slideGroups.map((group) => (
            <div key={group.key} style={{ marginBottom: "12px" }}>
              <div
                style={{
                  color: "#f9f350",
                  fontSize: "12px",
                  fontWeight: 600,
                  marginBottom: "6px",
                  textTransform: "uppercase",
                }}
              >
                {group.label}
              </div>
              <Space
                direction="vertical"
                size="small"
                style={{ width: "100%" }}
              >
                {group.children.map((item) => (
                  <Button
                    key={item.key}
                    type="text"
                    block
                    onClick={() => {
                      scrollToSection(item.key);
                      document
                        .getElementById("mobile-menu")
                        .classList.add("hidden");
                    }}
                    style={{
                      color: activeSection === item.key ? "#f9f350" : "white",
                      background:
                        activeSection === item.key ? "#991b1b" : "transparent",
                      textAlign: "left",
                      fontWeight: activeSection === item.key ? 600 : 400,
                      fontSize: "13px",
                      height: "32px",
                      padding: "0 8px",
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Space>
            </div>
          ))}
        </div>
      </Header>

      <Content style={{ marginTop: 56 }}>
        <SlidesContent scrollToSection={scrollToSection} />

        {/* Navigation controls for all screens */}
        <div
          className="navigation-controls"
          style={{
            position: "fixed",
            right: 24,
            bottom: 24,
            zIndex: 1000,
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          {/* Previous slide button */}
          {getCurrentSlideNumber() > 1 && (
            <Button
              type="primary"
              shape="circle"
              onClick={goToPreviousSlide}
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
          )}

          {/* Current slide indicator */}
          <div
            className="slide-indicator"
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
            {getCurrentSlideNumber()}/13
          </div>

          {/* Next slide button */}
          {getCurrentSlideNumber() < 13 && (
            <Button
              type="primary"
              shape="circle"
              onClick={goToNextSlide}
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
          )}

          {/* AI Chat button */}
          <Button
            type="primary"
            shape="circle"
            onClick={() => router.push("Assignment_MLN131/giaidap")}
            style={{
              background: "#f9f350",
              borderColor: "#f9f350",
              color: "#171717",
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px",
              boxShadow: "0 2px 8px rgba(249, 243, 80, 0.3)",
            }}
            title="Chat AI - Giải đáp thắc mắc"
          >
            <RobotOutlined />
          </Button>
        </div>
      </Content>
    </Layout>
  );
}
