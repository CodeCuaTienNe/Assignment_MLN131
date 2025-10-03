"use client";

import { GoogleGenAI } from "@google/genai";
import { useState } from "react";

const SYSTEM_PROMPT = `
Nhiệm vụ chính: Giải đáp các thắc mắc về chính trị, lý luận và thực tiễn Việt Nam cho sinh viên.

Nguyên tắc nội dung:
- Diễn giải nội dung một cách minh bạch, dễ hiểu và đầy đủ
- Trả lời ngắn gọn, súc tích, không lan man  
- Tuyệt đối trung thực và khách quan, không bịa đặt hay thiên vị bất kỳ phe phái nào
- Đảm bảo chính xác tuyệt đối và đầy đủ các chi tiết quan trọng

Nguyên tắc văn phong:
- Sử dụng ngôn ngữ gần gũi, tôn trọng và lịch sự
- Tránh mọi ngôn từ thô tục hay xúc phạm
- KHÔNG đề cập hay tự nhận vai trò, trình độ hay danh xưng cá nhân

Sử dụng kiến thức nền tảng vững chắc, lý luận chặt chẽ, gắn liền với thực tiễn. Tập trung vào việc lắng nghe và trả lời câu hỏi của người dùng một cách hiệu quả nhất.
`;

export function useAI() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateResponse = async (userInput) => {
    if (!process.env.NEXT_PUBLIC_GEMINI_API_KEY) {
      setError("API key is not set");
      return null;
    }

    try {
      setLoading(true);
      setError(null);

      const genAI = new GoogleGenAI({
        apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
      });

      // Using generateContent with Gemini 2.5 Flash model
      const response = await genAI.models.generateContent({
        model: "gemini-2.5-flash",
        contents: SYSTEM_PROMPT + "\n\n" + userInput,
      });

      return response.text;
    } catch (err) {
      console.error("Gemini API Error:", err);
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    generateResponse,
    loading,
    error,
  };
}
