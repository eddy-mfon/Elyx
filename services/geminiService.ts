import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

let client: GoogleGenAI | null = null;

// Initialize the client only when needed to avoid issues if API key is missing initially
const getClient = (): GoogleGenAI => {
  if (!client) {
    const apiKey = process.env.API_KEY || ''; 
    if (!apiKey) {
      console.warn("Gemini API Key is missing. AI features will not work.");
    }
    client = new GoogleGenAI({ apiKey });
  }
  return client;
};

export const sendMessageToGemini = async (message: string, history: {role: string, parts: {text: string}[]}[] = []): Promise<string> => {
  try {
    const ai = getClient();
    
    // We use generateContent for a single turn or manage history manually for a simple chat.
    // To keep it simple and stateless for this demo, we'll just send the current prompt with context instruction,
    // or use the chat feature if we wanted to maintain state. Let's use chat.
    
    const chat = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
            systemInstruction: SYSTEM_INSTRUCTION,
        },
        history: history.map(h => ({
            role: h.role,
            parts: h.parts
        }))
    });

    const result = await chat.sendMessage({ message });
    return result.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "I'm currently offline. Please try again later.";
  }
};