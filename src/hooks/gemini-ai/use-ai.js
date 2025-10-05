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
    const keys = [
      { key: process.env.NEXT_PUBLIC_GEMINI_API_KEY, version: "v1" },
      { key: process.env.NEXT_PUBLIC_GEMINI_API_KEY_V2, version: "v2" },
      { key: process.env.NEXT_PUBLIC_GEMINI_API_KEY_V3, version: "v3" },
    ];

    const availableKeys = keys.filter((k) => k.key);

    if (availableKeys.length === 0) {
      setError("No API keys available");
      return null;
    }

    try {
      setLoading(true);
      setError(null);

      // Chọn ngẫu nhiên một key
      const selected =
        availableKeys[Math.floor(Math.random() * availableKeys.length)];
      console.log(`Using ${selected.version}`);

      const genAI = new GoogleGenAI({
        apiKey: selected.key,
      });

      // Using generateContent with Gemini 2.5 Flash model
      const response = await genAI.models.generateContent({
        model: "gemini-2.5-flash",
        contents: SYSTEM_PROMPT + "\n\n" + userInput,
      });

      return response.text;
    } catch (err) {
      console.error(`Error with ${selected.version}:`, err);

      // Thử key còn lại nếu có
      const remaining = availableKeys.filter((k) => k !== selected);
      if (remaining.length > 0) {
        const fallback = remaining[0];
        console.log(`Falling back to ${fallback.version}`);

        try {
          const genAI = new GoogleGenAI({
            apiKey: fallback.key,
          });

          const response = await genAI.models.generateContent({
            model: "gemini-2.5-flash",
            contents: SYSTEM_PROMPT + "\n\n" + userInput,
          });

          return response.text;
        } catch (fallbackErr) {
          console.error(`Error with ${fallback.version}:`, fallbackErr);
          setError("Both API keys failed");
          return null;
        }
      } else {
        setError("API key failed");
        return null;
      }
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
