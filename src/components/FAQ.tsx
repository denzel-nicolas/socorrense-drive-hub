import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quanto tempo dura o curso de habilitação?",
    answer: "O curso completo para primeira habilitação tem duração média de 3 a 6 meses, incluindo aulas teóricas e práticas. O tempo pode variar de acordo com a disponibilidade do aluno e cumprimento das etapas exigidas pelo DETRAN."
  },
  {
    question: "Quais documentos são necessários para matrícula?",
    answer: "Para se matricular, você precisa: RG e CPF originais, comprovante de residência atualizado, 1 foto 3x4 recente e certificado de conclusão do ensino fundamental (ou superior). Menores de 18 anos também precisam da autorização dos pais ou responsáveis."
  },
  {
    question: "Vocês oferecem parcelamento?",
    answer: "Sim! Trabalhamos com diversas opções de pagamento e parcelamento para facilitar sua matrícula. Entre em contato conosco para conhecer as condições especiais e escolher o plano que melhor se encaixa no seu orçamento."
  },
  {
    question: "Qual a idade mínima para tirar a CNH?",
    answer: "A idade mínima para iniciar o processo de habilitação é 18 anos. No entanto, você pode fazer o curso teórico aos 17 anos e 6 meses, mas só poderá fazer as aulas práticas e os exames após completar 18 anos."
  },
  {
    question: "Como funciona a primeira aula experimental?",
    answer: "Oferecemos uma primeira aula prática experimental para você conhecer nosso método de ensino, os instrutores e os veículos. É uma oportunidade de tirar dúvidas e sentir-se mais confiante antes de se matricular. Agende a sua!"
  },
  {
    question: "Quantas aulas práticas são necessárias?",
    answer: "O DETRAN exige no mínimo 25 horas-aula práticas para a categoria B (carro). No entanto, oferecemos aulas extras caso você sinta necessidade de mais prática antes de fazer o exame prático."
  },
  {
    question: "O que acontece se eu reprovar no exame?",
    answer: "Caso ocorra reprovação, você terá direito a remarcar o exame após cumprir o prazo estabelecido pelo DETRAN. Nossa equipe te apoiará com orientação e, se necessário, aulas de reforço para garantir sua aprovação na próxima tentativa."
  },
  {
    question: "Vocês oferecem aulas aos finais de semana?",
    answer: "Nosso funcionamento é de segunda a sexta-feira, das 8h às 18h. Oferecemos horários flexíveis durante a semana para atender quem trabalha ou estuda. Entre em contato para verificar disponibilidade e agendar seus horários."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 bg-muted" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre o processo de habilitação
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background border-2 rounded-lg px-6 data-[state=open]:border-primary"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
