// src/main.ts
import { google } from "@ai-sdk/google";
import { generateText } from "ai";
import { systemPrompt } from "./prompts";  // ✅ match the export name

async function runJarvis() {
  // Example user input (later replace with CLI or voice input)
  const userMessage = "Tell me a joke about robots";

  // Generate a response using Google Gemini
  const result = await generateText({
    model: google("gemini-1.5-flash"),
    system: systemPrompt, // ✅ fixed variable name
    messages: [
      {
        role: "user",
        content: userMessage,
      },
    ],
  });

  console.log("🤖 Mini-Jarvis:", result.text);
}

runJarvis().catch(console.error);
