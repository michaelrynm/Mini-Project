import Layout from "../components/layout";
import ailogo from "../assets/openai-white-logomark.png";
import Button from "../components/button";
import OpenAI from "openai";
import Swal from "sweetalert2";
import { useState } from "react";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export default function Consult() {
  const [isLoading, setIsLoading] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const userMessage = { role: "user", content: prompt };
    setMessages([...messages, userMessage]);
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: "I want to have a haircut, what is the best hair model that suite my personality," }, userMessage],
      });
      const choice = response.choices[0].message.content;
      const assistantMessage = { role: "assistant", content: choice };
      setMessages([...messages,userMessage, assistantMessage]);
    } catch (error) {
      Swal.fire("Error Message", `${error}`, "error");
    } finally {
      setIsLoading(false);
      setPrompt("");
    }
  };

  return (
    <div>
      <Layout />
      <div className="bg-zinc-900 h-screen flex flex-col">
        <div className="flex flex-col items-center">
          <img
            src={ailogo}
            alt="ailogo"
            className="w-32"
          />
          <p>Powered by OpenAI</p>
        </div>
        <div className="flex justify-center border-b-4 border-yellow-600 pb-5">
          <p className="font-bold text-lg">Feel free to talk to us. Let us know your preferences, so we can suit the best cut for you</p>
        </div>
        {/* Chat Start */}
        <div className="flex-grow">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`chat ${message.role === "user" ? "chat-start" : "chat-end"}`}
            >
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="chat-bubble">{message.content}</div>
            </div>
          ))}
        </div>
        <div className="flex gap-2 fixed bottom-10 w-full ps-5">
          <input
            type="text"
            placeholder="Ex: Im a bussines man, i have rounded face, what is the best cut for me?"
            className="input input-bordered w-full bg-transparent"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <Button
            label="Send"
            className={isLoading ? "loading loading-spinner loading-lg bg-yellow-600" : "btn bg-yellow-600 align-middle border-2 border-white w-24"}
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}
