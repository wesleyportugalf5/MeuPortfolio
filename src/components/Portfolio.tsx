"use client";

import { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import LearnMore from "./sections/LearnMore";
import Contact from "./sections/Contact";
import About from "./sections/About";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("Início");

  const renderSection = () => {
    switch (activeSection) {
      case "Início":
        return <Home onNavigate={setActiveSection} />;
      case "Projetos":
        return <Projects />;
      case "Saiba Mais": // Nota: Correspondência de chave normalizada
        return <LearnMore />;
      case "Contato":
        return <Contact />;
      case "Sobre":
        return <About />;
      default:
        return <Home onNavigate={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans antialiased text-foreground">
      <Header activeSection={activeSection} onNavigate={setActiveSection} />

      <main className="flex-1 container mx-auto px-4 py-8 md:py-12 fade-in">
        {renderSection()}
      </main>

      <Footer />
    </div>
  );
}
