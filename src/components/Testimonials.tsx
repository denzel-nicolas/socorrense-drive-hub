import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Maria Silva",
    rating: 5,
    text: "Melhor autoescola da região! Passei de primeira graças aos excelentes instrutores. Recomendo muito!"
  },
  {
    name: "João Santos",
    rating: 5,
    text: "Estrutura impecável e atendimento nota 10. Os instrutores são muito pacientes e profissionais."
  },
  {
    name: "Ana Paula",
    rating: 5,
    text: "Consegui minha habilitação super rápido. O método de ensino é realmente diferenciado!"
  },
  {
    name: "Carlos Eduardo",
    rating: 5,
    text: "Fui muito bem preparado para as provas. A equipe toda está de parabéns pelo profissionalismo!"
  },
  {
    name: "Juliana Costa",
    rating: 5,
    text: "Ambiente acolhedor, preço justo e resultados garantidos. Indico de olhos fechados!"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background" id="depoimentos">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            O Que Dizem Nossos Alunos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Histórias reais de quem conquistou a CNH com a gente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow border-2 hover:border-primary/50">
              <CardContent className="p-6 space-y-4">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                {/* Author */}
                <p className="font-bold text-foreground pt-2 border-t">
                  — {testimonial.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
