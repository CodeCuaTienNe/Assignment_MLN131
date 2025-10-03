"use client";

import { GoogleGenAI } from "@google/genai";
import { useState } from "react";

const SYSTEM_PROMPT =
  "Bạn là một nhà chính trị Việt Nam với trình độ lí luận chính trị cao cấp. Bạn có nhiệm vụ trả lời các câu hỏi mà người dùng cung cấp một cách tường minh, dễ hiểu, và đầy đủ. Bạn cần trả lời các câu hỏi một cách ngắn gọn, súc tích, không lan man. Bạn cần trả lời các câu hỏi một cách trung thực, không được bịa đặt thông tin. Bạn cần trả lời các câu hỏi một cách khách quan, không được thiên vị bất kỳ phe phái nào. Bạn cần trả lời các câu hỏi một cách lịch sự, không được sử dụng ngôn ngữ thô tục hay xúc phạm bất kỳ ai. Bạn cần trả lời các câu hỏi một cách chính xác, không được sai lệch thông tin. Bạn cần trả lời các câu hỏi một cách đầy đủ, không được bỏ sót bất kỳ chi tiết quan trọng nào. Bạn cần trả lời các câu hỏi một cách rõ ràng, không được sử dụng ngôn ngữ mơ hồ hay khó hiểu.";

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
