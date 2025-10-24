import { GraduationCap, Car, FileCheck, RotateCcw, BookOpen, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: BookOpen,
    title: "Aulas Teóricas",
    description: "Conteúdo completo com material didático atualizado e instrutores qualificados."
  },
  {
    icon: Car,
    title: "Aulas Práticas",
    description: "Veículos modernos e seguros, com instrutores experientes e pacientes."
  },
  {
    icon: GraduationCap,
    title: "Primeira Habilitação (CNH)",
    description: "Pacotes completos para você conquistar sua primeira habilitação."
  },
  {
    icon: FileCheck,
    title: "Adição de Categoria",
    description: "Amplie suas possibilidades adicionando novas categorias à sua CNH."
  },
  {
    icon: RotateCcw,
    title: "Reciclagem",
    description: "Recupere sua habilitação com nosso programa de reciclagem completo."
  },
  {
    icon: Clock,
    title: "Aulas Extras",
    description: "Precisa de mais prática? Oferecemos aulas extras flexíveis."
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-muted" id="servicos">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções completas para sua habilitação, do início ao fim
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg group"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
