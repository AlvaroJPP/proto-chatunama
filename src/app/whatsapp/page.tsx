"use client";

import { useState } from "react";

export default function WhatsappPage() {
  const groupLink = "https://chat.whatsapp.com/ERs7lYDtJGE6KlFUwalxCT";
  const [copySuccess, setCopySuccess] = useState("");

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(groupLink);
      setCopySuccess("Link copiado com sucesso!");
      setTimeout(() => setCopySuccess(""), 2500);
    } catch (err) {
      setCopySuccess("Falha ao copiar o link.");
      setTimeout(() => setCopySuccess(""), 2500);
    }
  };

  return (
    <main
      style={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px 20px",
        backgroundColor: "#f0f0f0",
        minHeight: "100vh",
      }}
    >
      {/* Logo WhatsApp */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp Logo"
        width={96}
        height={96}
        style={{ marginBottom: 24 }}
      />

      {/* Título */}
      <h1
        style={{
          fontSize: "2rem",
          marginBottom: 8,
          color: "#075E54",
          fontWeight: "bold",
        }}
      >
        Entrar no grupo
      </h1>

      {/* Nome do grupo */}
      <h2
        style={{
          fontSize: "1.25rem",
          marginBottom: 24,
          color: "#128C7E",
          fontWeight: "600",
        }}
      >
        Grupo Oficial IAra COP 30
      </h2>

      {/* Imagem do grupo */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/5/5f/WhatsApp_group_chat_icon.svg"
        alt="Ícone do grupo"
        width={140}
        height={140}
        style={{ marginBottom: 24, borderRadius: "16px" }}
      />

      {/* Descrição */}
      <p
        style={{
          maxWidth: 320,
          textAlign: "center",
          marginBottom: 24,
          color: "#262626",
          fontSize: "1rem",
          lineHeight: 1.4,
        }}
      >
        Este grupo foi criado para facilitar a comunicação durante a COP 30. Aqui
        você pode tirar dúvidas, trocar dicas e se conectar com outros
        participantes.
      </p>

      {/* Link do grupo e botão copiar */}
      <div
        style={{
          display: "flex",
          maxWidth: 380,
          width: "100%",
          gap: 8,
        }}
      >
        <input
          type="text"
          readOnly
          value={groupLink}
          style={{
            flexGrow: 1,
            padding: "12px 16px",
            fontSize: "1rem",
            borderRadius: "6px",
            border: "1px solid #ddd",
            userSelect: "all",
          }}
          aria-label="Link do grupo WhatsApp"
          onFocus={(e) => e.target.select()}
        />

        <button
          onClick={copyToClipboard}
          style={{
            backgroundColor: "#25D366",
            border: "none",
            color: "#fff",
            fontWeight: "600",
            fontSize: "1rem",
            borderRadius: "6px",
            cursor: "pointer",
            padding: "12px 20px",
            transition: "background-color 0.3s ease",
          }}
          aria-label="Copiar link do grupo"
          onMouseDown={(e) => e.preventDefault()} // evita perda de foco no input
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#1ebe5a")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#25D366")
          }
        >
          Copiar
        </button>
      </div>

      {/* Mensagem de sucesso ou erro */}
      {copySuccess && (
        <p
          role="alert"
          style={{
            marginTop: 16,
            color: copySuccess.includes("sucesso") ? "green" : "red",
            fontWeight: "600",
          }}
        >
          {copySuccess}
        </p>
      )}
    </main>
  );
}
