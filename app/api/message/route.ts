import {
  ChatGPTMessage,
  OpenAIStreamPayload,
  OpenAIStream,
} from "@/lib/open-ai-stream";
import { chatbotPrompt } from "@/lib/helpers/chatbot-prompt";
import { MessageArraySchema } from "@/lib/validators/message";

export async function POST(request: Request) {
  const { messages } = await request.json();

  // Validate the messages sent by the client
  const parsedMessages = MessageArraySchema.parse(messages);

  const outboundMessages: ChatGPTMessage[] = parsedMessages.map((message) => {
    return {
      role: message.isUserMessage ? "user" : "system",
      content: message.text,
    };
  });
  outboundMessages.unshift({
    role: "system",
    content: chatbotPrompt,
  });

  const payload: OpenAIStreamPayload = {
    model: "gpt-3.5-turbo",
    messages: outboundMessages,
    temperature: 0.4,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    max_tokens: 150,
    stream: true,
    n: 1,
  };

  const stream = await OpenAIStream(payload);

  return new Response(stream);
}
