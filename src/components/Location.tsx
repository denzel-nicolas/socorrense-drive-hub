import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const Location = () => {
  const address = "Av Moacir Oliveira, 1525 — Marcos Freire I, Nossa Senhora do Socorro, SE";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=Av+Moacir+Oliveira+1525+Nossa+Senhora+do+Socorro+SE`;
  const googleMapsEmbed = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.0!2d-37.12!3d-10.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDUxJzAwLjAiUyAzN8KwMDcnMTIuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890!5m2!1spt-BR!2sbr`;

  return (
    <section className="py-20 bg-muted" id="localizacao">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossa Localização
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Venha nos visitar! Estamos bem localizados e fáceis de encontrar
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Address Card */}
          <div className="bg-background rounded-xl p-6 md:p-8 shadow-lg text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <MapPin className="w-6 h-6 text-primary" />
              <p className="text-lg md:text-xl text-foreground font-medium">
                {address}
              </p>
            </div>
            <p className="text-muted-foreground">
              Próximo ao terminal de ônibus
            </p>
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground font-bold"
            >
              <a 
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Navigation className="mr-2 h-5 w-5" />
                Como Chegar
              </a>
            </Button>
          </div>

          {/* Map Embed */}
          <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-primary/20">
            <iframe
              src={googleMapsEmbed}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Autoescola Socorrense"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
