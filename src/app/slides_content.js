import { Typography } from "antd";
import { Slide1 } from "../component/slide_1/slide_1";
import { Slide10 } from "../component/slide_10/slide_10";
import { Slide11 } from "../component/slide_11/slide_11";
import { Slide12 } from "../component/slide_12/slide_12";
import { Slide13 } from "../component/slide_13/slide_13";
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

      <Slide11 scrollToSection={scrollToSection} />

      <Slide12 scrollToSection={scrollToSection} />

      <Slide13 scrollToSection={scrollToSection} />
    </>
  );
};
