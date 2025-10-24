import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppFloat = () => {
  const whatsappNumber = "5579988009580";
  const message = encodeURIComponent("Olá! Gostaria de mais informações sobre a Autoescola Socorrense.");

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Conversar no WhatsApp"
    >
      <Button
        size="lg"
        className="h-16 w-16 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-2xl group-hover:scale-110 transition-all duration-300 p-0"
      >
        <MessageCircle className="h-8 w-8 text-white" />
      </Button>
      
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping" />
    </a>
  );
};

export default WhatsAppFloat;
