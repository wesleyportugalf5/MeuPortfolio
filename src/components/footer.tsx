const Footer = () => {
  return (
    <footer className="w-full border-t bg-background/95 p-6 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row md:py-0">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          &copy; 2025 Portfolio. Todos os direitos reservados.
        </p>
        <div className="flex gap-4">
          {/* Adicionar links sociais/placeholders aqui se desejado no futuro */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
