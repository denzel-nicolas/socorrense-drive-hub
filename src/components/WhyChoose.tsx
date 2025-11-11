import { Trophy, Users, CarFront, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const reasons = [
  {
    icon: Trophy,
    title: "Alta Taxa de Aprovação",
    description: "Somos a autoescola nº 1 em aprovações na região. Nosso método de ensino comprovado garante seu sucesso."
  },
  {
    icon: Users,
    title: "Instrutores Experientes",
    description: "Equipe altamente qualificada e credenciada pelo DETRAN, com anos de experiência em formação de condutores."
  },
  {
    icon: CarFront,
    title: "Frota Moderna",
    description: "Veículos novos, revisados e equipados com sistemas de segurança para seu aprendizado tranquilo."
  },
  {
    icon: Target,
    title: "Foco no Aluno",
    description: "Metodologia personalizada que respeita o ritmo de cada estudante até a conquista da aprovação."
  }
];

const WhyChoose = () => {
  return (
    <section className="py-20 bg-background" id="diferenciais">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Por Que Escolher a Gente?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A experiência e qualidade que você merece para conquistar sua CNH
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const whatsappMessage = encodeURIComponent(
              `Olá! Gostaria de agendar uma aula na Autoescola Socorrense. Me interessei por: ${reason.title}`
            );
            const whatsappUrl = `https://wa.me/5579988009580?text=${whatsappMessage}`;
            
            return (
              <div 
                key={index}
                className="text-center space-y-4 p-6 rounded-lg hover:bg-muted transition-colors group"
              >
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <Icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
                <Button
                  onClick={() => window.open(whatsappUrl, '_blank')}
                  className="w-full"
                >
                  Agendar Agora
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
