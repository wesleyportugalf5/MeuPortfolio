import Image from "next/image";

export default function About() {
  return (
    <section className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center animate-in slide-in-from-right-10 duration-500">
      <div className="space-y-6 order-2 md:order-1">
        <h2 className="text-3xl font-bold">Sobre Mim</h2>
        <p className="text-muted-foreground">
          Sou um desenvolvedor apaixonado por criar experiências digitais que
          impactam positivamente a vida das pessoas. Com anos de experiência em
          desenvolvimento web, foco em criar interfaces limpas, performáticas e
          acessíveis.
        </p>
        <p className="text-muted-foreground">
          Quando não estou codando, gosto de contribuir para projetos
          open-source, ler sobre novas tecnologias e explorar design de
          interfaces.
        </p>
      </div>
      <div className="order-1 md:order-2 flex justify-center">
        <div className="relative w-64 h-64 bg-gradient-to-tr from-blue-500 to-primary rounded-2xl rotate-3 shadow-2xl flex items-center justify-center text-white text-2xl font-bold overflow-hidden">
          <Image
            src="/IMG_7205.JPEG"
            alt="Sobre Mim"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
