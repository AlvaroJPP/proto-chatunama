"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./Chat.module.css";
import router from "next/dist/client/router";

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

  const [chatList, setChatList] = useState([
    { id: 1, title: "Chat 1" },
    { id: 2, title: "Chat 2" },
    { id: 3, title: "Chat 3" },
    { id: 4, title: "Chat 4" },
    { id: 5, title: "Chat 5" },
    { id: 6, title: "Chat 6" },
    { id: 7, title: "Chat 7" },
    { id: 8, title: "Chat 8" },
    { id: 9, title: "Chat 9" },
    { id: 10, title: "Chat 10" },
    { id: 11, title: "Chat 11" },
    { id: 12, title: "Chat 12" },
    { id: 13, title: "Chat 13" },
    { id: 14, title: "Chat 14" },
    { id: 15, title: "Chat 15" },
    { id: 16, title: "Chat 16" },
    { id: 17, title: "Chat 17" },
    { id: 18, title: "Chat 18" },
    { id: 19, title: "Chat 19" },
    { id: 20, title: "Chat 20" },
    { id: 21, title: "Chat 21" },
    { id: 22, title: "Chat 22" },
    { id: 23, title: "Chat 23" },
    { id: 24, title: "Chat 24" },
    { id: 25, title: "Chat 25" },
    { id: 26, title: "Chat 26" },
    { id: 27, title: "Chat 27" },
    { id: 28, title: "Chat 28" },
    { id: 29, title: "Chat 29" },
    { id: 30, title: "Chat 30" },
    { id: 31, title: "Chat 31" },
    { id: 32, title: "Chat 32" },
    { id: 33, title: "Chat 33" },
    { id: 34, title: "Chat 34" },
    { id: 35, title: "Chat 35" },
    { id: 36, title: "Chat 36" },
    { id: 37, title: "Chat 37" },
    { id: 38, title: "Chat 38" },
    { id: 39, title: "Chat 39" },
    { id: 40, title: "Chat 40" },
    { id: 41, title: "Chat 41" },
    { id: 42, title: "Chat 42" },
    { id: 43, title: "Chat 43" },
    { id: 44, title: "Chat 44" },
    { id: 45, title: "Chat 45" },
    { id: 46, title: "Chat 46" },
    { id: 47, title: "Chat 47" },
    { id: 48, title: "Chat 48" },
    { id: 49, title: "Chat 49" },
    { id: 50, title: "Chat 50" },
    { id: 51, title: "Chat 51" },
    { id: 52, title: "Chat 52" },
    { id: 53, title: "Chat 53" },
    { id: 54, title: "Chat 54" },
    { id: 55, title: "Chat 55" },
    { id: 56, title: "Chat 56" },
    { id: 57, title: "Chat 57" },
    { id: 58, title: "Chat 58" },
    { id: 59, title: "Chat 59" },
    { id: 60, title: "Chat 60" },
    { id: 61, title: "Chat 61" },
    { id: 62, title: "Chat 62" },
    { id: 63, title: "Chat 63" },
    { id: 64, title: "Chat 64" },
    { id: 65, title: "Chat 65" },
  ]);

  return (
    <main className={styles.appContainer}>
      <nav className={styles.sidebar}>

        <div className={styles.topButtons}>
  <div className={styles.topButtons}>
  <button
    className={styles.iaButton}
    onClick={() => window.location.href = "/"}
    aria-label="Voltar para home"
  >
    IAra
  </button>

  <button
    className={styles.closeButton}
    onClick={() => window.location.href = "/"}
    aria-label="Fechar e voltar para home"
  >
    ×
  </button>
</div>
</div>
        <div className={styles.buttonRow}>
          <button className={styles.newChatBtn}>
            <svg
              className={styles.svgIcon}
              viewBox="0 0 512 512"
              height="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
            </svg>
            Explora
          </button>

          <button className={styles.newChatBtn2}>
            <svg
              className={styles.svgIcon}
              viewBox="0 0 512 512"
              height="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
            </svg>
            Novo Chat
          </button>
        </div>
        <input
          type="text"
          placeholder="Buscar chat..."
          className={styles.searchInput}
        // Você pode implementar filtro aqui
        />
        <div className={styles.chatList}>
          {chatList.map((chat) => (
            <div key={chat.id} className={styles.chatListItem}>
              {chat.title}
            </div>
          ))}
        </div>
      </nav>

      <section className={styles.chatContainer}>
        <div className={styles.chatArea}>
          {messages.map((m) => (
            <div
              key={m.id}
              className={`${styles.message} ${m.role === "user" ? styles.user : styles.bot
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
              className={`${styles.sendBtn} ${isEmpty ? styles.disabled : styles.active
                }`}
              disabled={isEmpty}
            >
              ➤
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

