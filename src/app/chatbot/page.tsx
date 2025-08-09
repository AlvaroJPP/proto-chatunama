"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./Chatbot.module.css";

type Message = {
  id: number;
  role: "user" | "bot";
  content: string;
  timestamp: Date;
};

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg: Message = {
      id: Date.now(),
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    try {
      // Faz POST para sua API Next.js
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg.content }),
      });

      if (!res.ok) {
        throw new Error("Erro na resposta da API");
      }

      const data = await res.json();

      const botMsg: Message = {
        id: Date.now() + 1,
        role: "bot",
        content: data.response ?? "Não consegui entender, tente novamente.",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      const botMsg: Message = {
        id: Date.now() + 1,
        role: "bot",
        content: "Erro ao comunicar com o servidor. Tente novamente mais tarde.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTime = (date: Date) =>
    date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.title}>IAra Chatbot</h1>
      </header>

      <section
        className={styles.chatArea}
        role="log"
        aria-live="polite"
        aria-relevant="additions"
      >
        {messages.length === 0 && !isTyping && (
          <p className={styles.emptyMsg}>Digite sua mensagem para começar...</p>
        )}

        {messages.map(({ id, role, content, timestamp }) => (
          <article
            key={id}
            className={`${styles.message} ${
              role === "user" ? styles.userMessage : styles.botMessage
            }`}
            aria-label={`${role === "user" ? "Você" : "Bot"} às ${formatTime(
              timestamp
            )}: ${content}`}
          >
            <pre className={styles.messageContent}>{content}</pre>
            <time className={styles.timestamp}>{formatTime(timestamp)}</time>
          </article>
        ))}

        {isTyping && (
          <article
            className={`${styles.message} ${styles.botMessage} ${styles.typing}`}
          >
            <span className={styles.messageContent}>IAra está digitando...</span>
          </article>
        )}

        <div ref={messagesEndRef} />
      </section>

      <form
        className={styles.inputArea}
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage();
        }}
      >
        <label htmlFor="chatInput" className="sr-only">
          Digite sua mensagem
        </label>
        <textarea
          id="chatInput"
          className={styles.input}
          placeholder="Digite sua mensagem..."
          rows={1}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          aria-label="Mensagem do usuário"
          autoComplete="off"
          spellCheck={false}
        />
        <button type="submit" className={styles.sendBtn} aria-label="Enviar mensagem">
          ➤
        </button>
      </form>
    </main>
  );
}
