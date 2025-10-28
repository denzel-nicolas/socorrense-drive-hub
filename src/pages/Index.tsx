import { Helmet } from "react-helmet";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import BookingForm from "@/components/BookingForm";
import Location from "@/components/Location";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Autoescola Socorrense - A direção certa para sua habilitação | Nossa Senhora do Socorro, SE</title>
        <meta 
          name="description" 
          content="Autoescola Socorrense em Nossa Senhora do Socorro, SE. 1º lugar em aprovação. Aulas teóricas e práticas, primeira habilitação, reciclagem e mais. Entre em contato: (79) 3256-0105" 
        />
        <meta 
          name="keywords" 
          content="autoescola, Nossa Senhora do Socorro, habilitação SE, CNH Sergipe, aulas de direção, autoescola Marcos Freire, carteira de motorista" 
        />
        <link rel="canonical" href="https://autoescolasocorrense.com.br" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Autoescola Socorrense - 1º Lugar em Aprovação" />
        <meta property="og:description" content="A direção certa para sua habilitação em Nossa Senhora do Socorro, SE" />
        <meta property="og:locale" content="pt_BR" />
        
        {/* Schema.org Local Business */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DrivingSchool",
            "name": "Autoescola Socorrense",
            "image": "https://autoescolasocorrense.com.br/logo.png",
            "description": "A direção certa para sua habilitação. 1º lugar em aprovação.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Av Moacir Oliveira, 1525 - Marcos Freire I",
              "addressLocality": "Nossa Senhora do Socorro",
              "addressRegion": "SE",
              "addressCountry": "BR"
            },
            "telephone": "+55-79-3256-0105",
            "priceRange": "$$",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "08:00",
              "closes": "18:00"
            }
          })}
        </script>
      </Helmet>

      <main className="min-h-screen">
        <Hero />
        <Services />
        <WhyChoose />
        <BookingForm />
        <Location />
        <Testimonials />
        <FAQ />
        <Footer />
        <WhatsAppFloat />
      </main>
    </>
  );
};

export default Index;
