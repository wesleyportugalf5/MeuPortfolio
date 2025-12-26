export default function LearnMore() {
  return (
    <section className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-700">
      <h2 className="text-3xl font-bold text-center">Saiba Mais</h2>
      <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
        <p>
          Este portfólio foi construído com as tecnologias mais modernas do
          ecossistema React. O objetivo é demonstrar não apenas habilidades de
          codificação, mas também atenção ao design e experiência do usuário.
        </p>
        <p>
          Utilizando <strong>Next.js</strong> para a estrutura,{" "}
          <strong>Tailwind CSS</strong> para estilização rápida e eficiente, e{" "}
          <strong>shadcn/ui</strong> para componentes acessíveis e elegantes.
        </p>
        <div className="p-6 bg-muted/50 rounded-lg border border-dashed text-base">
          <h3 className="font-semibold text-foreground mb-2">
            Stack Tecnológica:
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>React & Next.js 14+</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
            <li>Framer Motion (opcional para animações extras)</li>
            <li>Radix UI Primitives (via shadcn/ui)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
