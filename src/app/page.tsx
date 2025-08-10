"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./Home.module.css";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Turista",
    text: "O IAra me ajudou a aproveitar cada minuto da COP 30. Recomendo demais!",
  },
  {
    name: "João Pereira",
    role: "Visitante",
    text: "Assistente inteligente, fácil de usar e super útil para explorar Belém.",
  },
  {
    name: "Ana Costa",
    role: "Turista",
    text: "Nunca viajei tão preparado. IAra é meu novo guia favorito!",
  },
];

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };
  return (
    <div className={styles.container}>
      {/* HEADER */}
      <header className={styles.header}>
        <div className={styles.logo}>IAra</div>
        <nav className={styles.nav}>
          <Link href="/telegram" className={styles.navLink}>
            Telegram
          </Link>
          <Link href="/whatsapp" className={styles.navLink}>
            WhatsApp
          </Link>
          <Link href="#about" className={styles.navLink}>
            Sobre nós
          </Link>
          <Link href="#benefits" className={styles.navLink}>
            Benefícios
          </Link>
          <Link href="#how" className={styles.navLink}>
            Como funciona
          </Link>
          <Link href="#testimonials" className={styles.navLink}>
            Depoimentos
          </Link>
        </nav>
      </header>

      {/* HERO */}
      <motion.section
        className={styles.hero}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <h1>Seu guia inteligente para a COP 30</h1>
            <p>
              Explore Belém e a Amazônia com facilidade, praticidade e
              assistência personalizada. Nosso agente de IA estará disponível
              24h para garantir a melhor experiência durante a COP 30.
            </p>
            <div className={styles.btns}>
              <Link href="/chatbot" className={styles.button}>
                CONVERSAR PELO CHAT
              </Link>
              <Link href="/whatsapp" className={styles.button}>
                CONVERSAR PELO WHATSAPP
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <img
              src="/images/logo-header-desktop.961cb6f4.png"
              alt="Logo da COP30"
            />
          </div>
        </section>
      </motion.section>
      {/* APRESENTAÇÃO */}
      <motion.section
        id="about"
        className={styles.presentation}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <section id="about" className={styles.presentation}>
          <h2>Por que escolher o IAra?</h2>
          <div className={styles.cards}>
            <article className={styles.card}>
              <div className={styles.icon}>🤖</div>
              <h3>Assistente 24h</h3>
              <p>
                Disponível a qualquer hora para ajudar você a explorar a cidade.
              </p>
            </article>
            <article className={styles.card}>
              <div className={styles.icon}>📍</div>
              <h3>Roteiros Personalizados</h3>
              <p>Planos de viagem sob medida para o seu perfil e interesses.</p>
            </article>
            <article className={styles.card}>
              <div className={styles.icon}>🌿</div>
              <h3>Foco na Sustentabilidade</h3>
              <p>Turismo consciente valorizando a Amazônia e sua cultura.</p>
            </article>
          </div>
        </section>
      </motion.section>
      {/* BENEFÍCIOS */}
      <motion.section
        id="benefits"
        className={styles.benefits}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <section id="benefits" className={styles.benefits}>
          <h2>Benefícios exclusivos</h2>
          <ul>
            <li>✔️ Atendimento personalizado</li>
            <li>✔️ Informações atualizadas e confiáveis</li>
            <li>✔️ Mapas interativos e dicas locais</li>
            <li>✔️ Alertas e notificações importantes</li>
            <li>✔️ Fácil acesso via Telegram e WhatsApp</li>
          </ul>
        </section>
      </motion.section>
      {/* COMO FUNCIONA */}
      <motion.section
        id="how"
        className={styles.howItWorks}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <section id="how" className={styles.howItWorks}>
          <h2>Como funciona?</h2>
          <ol>
            <li>
              <strong>Conecte-se</strong> com nosso assistente no Telegram ou
              WhatsApp.
            </li>
            <li>
              <strong>Personalize</strong> seu roteiro e receba dicas
              instantâneas.
            </li>
            <li>
              <strong>Explore</strong> Belém e a Amazônia com todo o suporte
              necessário.
            </li>
            <li>
              <strong>Aproveite</strong> a experiência única da COP 30 com
              tranquilidade.
            </li>
          </ol>
        </section>
      </motion.section>

      {/* DEPOIMENTOS */}
      <motion.section
        id="testimonials"
        className={styles.testimonials}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <section id="testimonials" className={styles.testimonials}>
          <h2>O que dizem nossos usuários</h2>
          <blockquote className={styles.testimonial}>
            “{testimonials[currentTestimonial].text}”
            <footer>
              — {testimonials[currentTestimonial].name},{" "}
              {testimonials[currentTestimonial].role}
            </footer>
          </blockquote>
          <div className={styles.dots}>
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={
                  i === currentTestimonial ? styles.activeDot : styles.dot
                }
                onClick={() => setCurrentTestimonial(i)}
                aria-label={`Depoimento ${i + 1}`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter") setCurrentTestimonial(i);
                }}
              />
            ))}
          </div>
        </section>
      </motion.section>
      {/* CALL TO ACTION */}
      <motion.section
        className={styles.callToAction}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <section className={styles.callToAction}>
          <h2>Pronto para explorar a COP 30 com IAra?</h2>
          <Link href="/chatbot" className={styles.button}>
            ABRIR CHAT AGORA
          </Link>
        </section>
      </motion.section>
      {/* FOOTER */}
      <footer className={styles.footer}>
        <p>© 2025 IAra - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
