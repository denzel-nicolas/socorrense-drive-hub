import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Calendar, Clock, User, Phone, MessageSquare } from "lucide-react";

const BookingForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    observations: ""
  });

  const whatsappNumber = "5579988009580";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.name.trim() || !formData.phone.trim() || !formData.service) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Formatar mensagem para WhatsApp
      const message = `
🎓 *Nova Solicitação de Agendamento*

*Nome:* ${formData.name}
*Telefone:* ${formData.phone}
*Serviço:* ${formData.service}
*Data Preferida:* ${formData.date || "A definir"}
*Horário Preferido:* ${formData.time || "A definir"}
*Observações:* ${formData.observations || "Nenhuma"}
      `.trim();

      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

      // Mostrar toast de sucesso
      toast.success("Solicitação enviada! Redirecionando para WhatsApp...", {
        description: "Você será redirecionado em instantes.",
      });

      // Aguardar um momento antes de redirecionar
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
        // Limpar formulário
        setFormData({
          name: "",
          phone: "",
          service: "",
          date: "",
          time: "",
          observations: ""
        });
      }, 1500);

    } catch (error) {
      toast.error("Erro ao enviar solicitação. Tente novamente.");
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-secondary" id="agendar">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-2xl border-0">
            <CardHeader className="text-center space-y-2 pb-8">
              <CardTitle className="text-3xl md:text-4xl font-bold text-foreground">
                Agende sua Aula
              </CardTitle>
              <CardDescription className="text-lg">
                Preencha seus dados e entraremos em contato via WhatsApp
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2 text-base">
                    <User className="w-4 h-4" />
                    Nome Completo *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2 text-base">
                    <Phone className="w-4 h-4" />
                    Telefone/WhatsApp *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(79) 98800-0000"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service" className="flex items-center gap-2 text-base">
                    <MessageSquare className="w-4 h-4" />
                    Serviço Desejado *
                  </Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => handleChange("service", value)}
                    required
                  >
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Selecione o serviço" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="primeira-habilitacao">Primeira Habilitação (CNH)</SelectItem>
                      <SelectItem value="adicao-categoria">Adição de Categoria</SelectItem>
                      <SelectItem value="reciclagem">Reciclagem</SelectItem>
                      <SelectItem value="aulas-extras">Aulas Extras</SelectItem>
                      <SelectItem value="aula-teorica">Aula Teórica</SelectItem>
                      <SelectItem value="aula-pratica">Aula Prática</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="flex items-center gap-2 text-base">
                      <Calendar className="w-4 h-4" />
                      Data Preferida
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleChange("date", e.target.value)}
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time" className="flex items-center gap-2 text-base">
                      <Clock className="w-4 h-4" />
                      Horário Preferido
                    </Label>
                    <Input
                      id="time"
                      type="time"
                      value={formData.time}
                      onChange={(e) => handleChange("time", e.target.value)}
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="observations" className="text-base">
                    Observações
                  </Label>
                  <Textarea
                    id="observations"
                    placeholder="Alguma informação adicional que gostaria de compartilhar?"
                    value={formData.observations}
                    onChange={(e) => handleChange("observations", e.target.value)}
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full h-14 text-lg font-bold bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                >
                  {isSubmitting ? "Enviando..." : "Enviar Solicitação"}
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  Ao enviar, você será redirecionado para o WhatsApp para confirmar o agendamento
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
