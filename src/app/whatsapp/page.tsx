"use client";

import { useState } from "react";
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";

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
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor: '#202020',
    }}>
      <Header />

      <main style={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        flexGrow: 1,
      }}>
        {/* Imagem do WhatsApp */}
        <img
          src="/images/zapicon4.png"
          alt="Ícone do WhatsApp"
          style={{
            width: 160,
            height: 160,
            marginBottom: 0,
            display: 'block',
            borderRadius: '30px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0)'
          }}
        />
        {/* Título da página */}
        <h1 style={{
          fontSize: "2.5rem",
          marginBottom: 8,
          color: "#00d46d",
          fontWeight: "bold",
          textAlign: "center",
        }}>
          Usar Agente IA no Seu WhatsApp
        </h1>

        {/* Descrição do grupo */}
        <p style={{
          maxWidth: 400,
          textAlign: "center",
          marginBottom: 24,
          color: "#cccccc",
          fontSize: "1rem",
          lineHeight: 1.6,
        }}>
          Esta Agente IA foi criada para facilitar a comunicação durante a COP 30. Clique no botão abaixo para copiar o link do nosso grupo oficial e interagir com ela.
        </p>

        {/* Container para o input e o botão */}
        <div style={{
          display: "flex",
          maxWidth: 420,
          width: "100%",
          gap: 12,
          marginTop: 16,
        }}>
          {/* Input para exibir o link */}
          <input
            type="text"
            readOnly
            value={groupLink}
            style={{
              flexGrow: 1,
              padding: "12px 16px",
              fontSize: "1rem",
              borderRadius: "8px",
              border: "1px solid #444",
              backgroundColor: "#333",
              color: "#ffffff",
              userSelect: "all",
            }}
            aria-label="Link do grupo WhatsApp"
            onFocus={(e) => e.target.select()}
          />
          
          {/* Botão para copiar o link */}
          <button
            onClick={copyToClipboard}
            style={{
              backgroundColor: "#00d46d",
              border: "none",
              color: "#1c1c1c",
              fontWeight: "600",
              fontSize: "1rem",
              borderRadius: "8px",
              cursor: "pointer",
              padding: "12px 24px",
              transition: "background-color 0.3s ease",
            }}
            aria-label="Copiar link do grupo"
            onMouseDown={(e) => e.preventDefault()}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#00b25a")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#00d46d")}
          >
            Copiar
          </button>
        </div>

        {/* Mensagem de sucesso ou erro ao copiar */}
        {copySuccess && (
          <p
            role="alert"
            style={{
              marginTop: 16,
              color: copySuccess.includes("sucesso") ? "#00d46d" : "red",
              fontWeight: "600",
            }}
          >
            {copySuccess}
          </p>
        )}
      </main>

      <Footer />
    </div>
  );
}