import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const Location = () => {
  const address = "Av. Pref. Humberto dos Santos, 1525 - Conj. Marcos Freire I, Nossa Sra. do Socorro - SE, 49160-000";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=Av.+Pref.+Humberto+dos+Santos+1525+Conj.+Marcos+Freire+I+Nossa+Sra.+do+Socorro+SE+49160-000`;
  const googleMapsEmbed = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Av.+Pref.+Humberto+dos+Santos+1525+Conj.+Marcos+Freire+I+Nossa+Sra.+do+Socorro+SE+49160-000&zoom=15`;

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
