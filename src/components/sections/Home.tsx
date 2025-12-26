import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home({
  onNavigate,
}: {
  onNavigate: (section: string) => void;
}) {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6 animate-in fade-in duration-500">
      <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary shadow-xl">
        <Image
          src="/IMG_7205.JPEG"
          alt="Foto de Perfil"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="space-y-2">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          Olá, eu sou [Wesley Portugal]
        </h1>
        <p className="text-xl text-muted-foreground md:text-2xl font-light">
          Desenvolvedor Full Stack & Estudante de Engenharia de Software
        </p>
      </div>

      <div className="flex gap-4 pt-4">
        <Button
          onClick={() => onNavigate("Projetos")}
          size="lg"
          className="rounded-full"
        >
          Ver Projetos
        </Button>
        <Button
          onClick={() => onNavigate("Contato")}
          variant="outline"
          size="lg"
          className="rounded-full"
        >
          Entre em Contato
        </Button>
      </div>
    </section>
  );
}
