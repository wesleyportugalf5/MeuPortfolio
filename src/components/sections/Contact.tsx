import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function Contact() {
  return (
    <section className="max-w-2xl mx-auto space-y-8 animate-in zoom-in-95 duration-500">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold">Entre em Contato</h2>
        <p className="text-muted-foreground">Tem uma ideia? Vamos conversar!</p>
      </div>

      <div className="bg-card border rounded-xl p-6 md:p-8 shadow-sm">
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Nome</Label>
            <Input id="name" placeholder="Seu nome" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="seu@email.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Mensagem</Label>
            <Textarea
              id="message"
              placeholder="Conte-me sobre seu projeto..."
              className="min-h-[120px]"
            />
          </div>
          <Button type="submit" className="w-full" size="lg">
            Enviar Mensagem
          </Button>
        </form>
      </div>
    </section>
  );
}
