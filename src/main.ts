import "dotenv/config";
import { generateText } from "ai";
import { createOpenAI } from "@ai-sdk/openai";
import { systemPrompt, greetingPrompt, helpPrompt } from "./prompts";

const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY!,  
  baseURL: "https://api.openai.com/v1",
});

async function run() {
  console.log(greetingPrompt);

  const response = await generateText({
    model: openai("gpt-4o-mini"),
    system: systemPrompt,
    prompt: helpPrompt,
  });

  console.log("🤖 Mini-Jarvis Response:");
  console.log(response.text);
}

run().catch(console.error);
