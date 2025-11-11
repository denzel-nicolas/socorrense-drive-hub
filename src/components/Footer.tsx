import { MapPin, Phone, Clock, Mail, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "5579988009580";
  const phoneNumber = "+557932560105";

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-secondary">
              AUTOESCOLA SOCORRENSE
            </h3>
            <p className="text-background/80 text-sm">
              A direção certa para sua habilitação. 1º lugar em aprovação na região.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-primary">Contato</h4>
            <div className="space-y-3 text-sm">
              <a 
                href={`tel:${phoneNumber}`}
                className="flex items-center gap-2 text-background/80 hover:text-secondary transition-colors"
              >
                <Phone className="w-4 h-4" />
                79 3256-0105
              </a>
              <a 
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-background/80 hover:text-secondary transition-colors"
              >
                <Phone className="w-4 h-4" />
                79 98800-9580
              </a>
              <div className="flex items-start gap-2 text-background/80">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>
                  Av Moacir Oliveira, 1525<br />
                  Marcos Freire I<br />
                  Nossa Senhora do Socorro, SE
                </span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-primary">Horário de Funcionamento</h4>
            <div className="space-y-2 text-sm text-background/80">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-1" />
                <div>
                  <p>Segunda a Sexta:</p>
                  <p className="font-medium">7h às 18h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-primary">Links Rápidos</h4>
            <nav className="flex flex-col gap-2 text-sm">
              <a href="#servicos" className="text-background/80 hover:text-secondary transition-colors">
                Serviços
              </a>
              <a href="#diferenciais" className="text-background/80 hover:text-secondary transition-colors">
                Por Que Escolher
              </a>
              <a href="#agendar" className="text-background/80 hover:text-secondary transition-colors">
                Agendar Aula
              </a>
              <a href="#localizacao" className="text-background/80 hover:text-secondary transition-colors">
                Localização
              </a>
              <a href="#faq" className="text-background/80 hover:text-secondary transition-colors">
                Perguntas Frequentes
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
          <p>
            © {currentYear} Autoescola Socorrense. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-secondary transition-colors">
              Política de Privacidade
            </a>
            <span>|</span>
            <a href="#" className="hover:text-secondary transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
