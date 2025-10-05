import "./slide_1.css";

export const Slide1 = ({ scrollToSection }) => {
  return (
    <section
      id="slide1"
      className="slide hero-bg relative overflow-hidden flex items-center justify-center"
    >
      <div className="absolute top-10 left-10 decorative-corner"></div>
      <div className="absolute bottom-10 right-10 decorative-corner-br"></div>

      {/* Decorative circles */}
      <div className="absolute top-20 right-40 w-64 h-64 rounded-full border-4 border-[#D4AF37] opacity-20"></div>
      <div className="absolute bottom-10 left-20 w-96 h-96 rounded-full border-4 border-[#F5E6D3] opacity-10"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-[#F5E6D3] space-y-6">
            <div className="ornament">❋</div>
            <h1
              className="text-5xl md:text-6xl leading-tight"
              style={{ color: "#F5E6D3" }}
            >
              GIA ĐÌNH TRONG THỜI KỲ QUÁ ĐỘ LÊN CHỦ NGHĨA XÃ HỘI
            </h1>
            <div className="h-1 w-32 bg-[#D4AF37]"></div>
            <p className="text-xl md:text-2xl font-light">
              Từ lý luận kinh điển Mác-Lênin đến thực tiễn Việt Nam
            </p>
            <p className="text-lg md:text-xl font-medium text-[#ffe99f]">
              Lớp SE1737 - Nhóm 7
            </p>
            <div className="flex items-center space-x-4 pt-6">
              <div className="icon-circle">1</div>
              <span className="text-xl">
                Một hành trình khám phá văn hóa và xã hội
              </span>
            </div>
          </div>
          <div className="relative">
            <div className="image-frame rounded-lg overflow-hidden vintage-shadow">
              <img
                src="https://cdcangiang.vn/wp-content/uploads/2023/06/NgayGD_VN.jpg"
                alt="Vịnh Hạ Long"
                className="w-full h-auto max-h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#D4AF37] rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
