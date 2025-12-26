import { Button } from "@/components/ui/button";

export default function Header({
  activeSection,
  onNavigate,
}: {
  activeSection: string;
  onNavigate: (section: string) => void;
}) {
  const navItems = ["Início", "Projetos", "Saiba Mais", "Contato", "Sobre"];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div
          className="flex items-center gap-2 font-bold text-xl tracking-tight cursor-pointer"
          onClick={() => onNavigate("Início")}
        >
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
            P
          </div>
          <span>Portfólio</span>
        </div>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Button
              key={item}
              variant={activeSection === item ? "secondary" : "ghost"}
              onClick={() => onNavigate(item)}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item}
            </Button>
          ))}
        </nav>

        {/* Navegação Mobile - Implementação simples sem componente Sheet especializado para evitar dependências ausentes */}
        <div className="md:hidden flex gap-2 overflow-x-auto max-w-[200px] no-scrollbar">
          {/* Visão mobile simplificada - apenas mostrando botões básicos */}
        </div>
        {/* Usando a mesma lista de navegação, mas visível no mobile via overflow-x-auto */}
        <nav className="flex md:hidden items-center gap-1 overflow-x-auto pb-0 -mr-4 pr-4 mask-fade-right">
          {navItems.map((item) => (
            <Button
              key={item}
              variant={activeSection === item ? "secondary" : "ghost"}
              onClick={() => onNavigate(item)}
              size="sm"
              className="text-xs whitespace-nowrap"
            >
              {item}
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
}
