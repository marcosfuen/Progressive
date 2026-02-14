
import { GoogleGenAI } from "@google/genai";

export async function getStorageAdvice(userQuery: string) {
  // Correctly initialize GoogleGenAI with a named parameter object using process.env.API_KEY.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `The user is asking about Progressive Freight Logistics LLC careers and services.
      
      CONTEXT FOR ADVISOR:
      - We are Progressive Freight Logistics LLC, a leader in professional trucking.
      - We offer top-tier compensation and value our drivers' time.
      - Our fleet consists of modern 18-wheelers with advanced safety technology.
      - Requirements: Class A CDL and professional driving experience.
      - Goal: Provide helpful information about joining our team.
      
      IMPORTANT: Respond in the user's language. Maintain a professional and encouraging tone.
      
      User Query: ${userQuery}`,
      config: {
        systemInstruction: "You are the head of driver recruitment at Progressive Freight Logistics. Your tone is professional, authoritative, and welcoming. Use bullet points for readability.",
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
      },
    });

    // Correctly accessing the .text property (getter) from GenerateContentResponse.
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
}
