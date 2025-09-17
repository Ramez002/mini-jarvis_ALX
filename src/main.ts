// src/main.ts
import { google } from "@ai-sdk/google";
import { generateText } from "ai";
import { SYSTEM_PROMPT } from "./prompts";

async function runJarvis() {
  // Example user input (later you can replace this with voice or CLI input)
  const userMessage = "Tell me a joke about robots";

  // Generate a response using Google Gemini
  const result = await generateText({
    model: google("gemini-1.5-flash"),
    system: SYSTEM_PROMPT,
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
