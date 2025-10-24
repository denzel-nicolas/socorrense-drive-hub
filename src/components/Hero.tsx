import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const whatsappNumber = "5579988009580";
  const phoneNumber = "+557932560105";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de informações sobre a Autoescola Socorrense.");

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-secondary/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-2 rounded-full font-bold text-sm shadow-lg">
            🏆 1º Lugar em aprovação
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-black text-primary-foreground leading-tight">
            AUTOESCOLA<br />
            <span className="text-secondary">SOCORRENSE</span>
          </h1>

          {/* Subtitle */}
          <p className="text-2xl md:text-3xl text-primary-foreground/90 font-medium">
            A direção certa para sua habilitação
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button
              size="lg"
              asChild
              className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-lg px-8 py-6 rounded-full shadow-xl hover:scale-105 transition-transform"
            >
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-6 w-6" />
                Enviar mensagem no WhatsApp
              </a>
            </Button>

            <Button
              size="lg"
              asChild
              variant="outline"
              className="w-full sm:w-auto bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-bold text-lg px-8 py-6 rounded-full shadow-xl hover:scale-105 transition-transform"
            >
              <a href={`tel:${phoneNumber}`}>
                <Phone className="mr-2 h-6 w-6" />
                Ligar agora
              </a>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-primary-foreground/80 text-lg font-medium pt-4">
            <a href={`tel:${phoneNumber}`} className="hover:text-secondary transition-colors">
              📞 79 3256-0105
            </a>
            <span className="hidden sm:inline">|</span>
            <a 
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition-colors"
            >
              📱 79 98800-9580
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Road Lines */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-secondary" />
    </section>
  );
};

export default Hero;
