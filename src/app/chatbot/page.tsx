"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./Chat.module.css";

type Message = {
  id: number;
  role: "user" | "bot";
  content: string;
};

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLDivElement>(null);

  // Scroll automático quando chegam mensagens
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function sendMessage(text: string) {
    if (!text.trim()) return;

    const newUserMsg: Message = {
      id: Date.now(),
      role: "user",
      content: text.trim(),
    };

    setMessages((prev) => [...prev, newUserMsg]);
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: newUserMsg.content }),
      });

      const data = await res.json();
      const botMsg: Message = {
        id: Date.now() + 1,
        role: "bot",
        content: data.response || "Desculpe, não entendi.",
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, role: "bot", content: "Erro de conexão." },
      ]);
    } finally {
      setIsTyping(false);
    }
  }

  const handleInput = () => {
    const text = inputRef.current?.innerText.trim() || "";
    setIsEmpty(text.length === 0);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      const text = inputRef.current?.innerText.trim();
      if (text) {
        sendMessage(text);
        inputRef.current!.innerText = "";
        setIsEmpty(true);
      }
    }
  };

  return (
    <main className={styles.chatContainer}>
      <div className={styles.chatArea}>
        {messages.map((m) => (
          <div
            key={m.id}
            className={`${styles.message} ${
              m.role === "user" ? styles.user : styles.bot
            }`}
          >
            {m.content}
          </div>
        ))}
        {isTyping && (
  <div className={styles.loaderWrapper}>
    <div className={styles.loader} />
  </div>
)}
        <div ref={endRef} />
      </div>

      {/* Campo de input fixo e redondo */}
      <div className={styles.inputWrapper}>
        <div className={styles.inputBox}>
          <div
            ref={inputRef}
            contentEditable
            suppressContentEditableWarning
            translate="no"
            onInput={handleInput}
            onKeyDown={handleKeyDown}
            data-placeholder="Digite sua mensagem..."
            className={styles.contentEditable}
          />
          <button
            onClick={() => {
              const text = inputRef.current?.innerText.trim();
              if (text) {
                sendMessage(text);
                inputRef.current!.innerText = "";
                setIsEmpty(true);
              }
            }}
            className={`${styles.sendBtn} ${
              isEmpty ? styles.disabled : styles.active
            }`}
            disabled={isEmpty}
          >
            ➤
          </button>
        </div>
      </div>
    </main>
  );
}
