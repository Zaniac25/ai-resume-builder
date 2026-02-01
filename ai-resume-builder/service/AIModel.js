import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GOOGLE_AI_API_KEY,
});

const model = "gemini-flash-latest"; // works perfectly

export const AIChatSession = async (prompt) => {
  try {
    const response = await ai.models.generateContent({
      model,
      contents: [
        {
          role: "user",
          parts: [{ text: prompt }],
        },
      ],
    });

    // ✅ This is where your actual text is stored
    const textResponse = response.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!textResponse) {
      console.warn("⚠️ No text found in response:", response);
      return "Error generating summary. Try again.";
    }

    return textResponse;
  } catch (error) {
    console.error("AIChatSession Error:", error);
    return "Error generating summary. Try again.";
  }
};
