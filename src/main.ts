import { generateText } from "ai";
import { google } from "@ai-sdk/google";
import { SYSTEM_PROMPT } from "./prompts.js";

const runAgent = async () => {
  const codeReview = await generateText({
    model: google("gemini-1.5-flash"),
    system: SYSTEM_PROMPT,
    messages: [
      { role: "user", content: "Hello Mini-Jarvis! Tell me a joke." },
    ],
  });
  console.log(codeReview.text);
};

await runAgent();
