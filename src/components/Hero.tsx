import FadeIn from "./FadeIn";
import logo from "@/assets/logo-solcirkeln.png";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-36 pb-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-16">
          
          <FadeIn delay={0.1}>
            <img
              src={logo}
              alt="Solcirkeln"
              className="h-24 md:h-32 w-auto mx-auto"
            />
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="section-heading text-foreground">
              Solskydd för alla lägen
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-xl md:text-2xl mx-auto text-muted-foreground leading-loose max-w-4xl">
              Skräddarsytt solskydd till ditt hem eller företag med kostnadsfritt
              hembesök och offert.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-loose space-y-10">
              <p>
                Solcirkeln erbjuder kvalitetslösningar för både inomhus- och
                utomhussolskydd som kombinerar funktion, design och hållbarhet.
                Våra produkter bidrar till ett behagligare inomhusklimat,
                minskat värmeinsläpp och effektiv avskärmning mot solens
                strålar – anpassat efter ditt behov.
              </p>

              <p>
                Vi erbjuder även service och reparationer av befintliga
                solskydd när det är tekniskt möjligt, vilket bedöms av våra
                montörer på plats.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-12">
              <button
                onClick={scrollToContact}
                className="bg-primary text-primary-foreground px-12 py-6 rounded-full font-medium hover:bg-primary/90 transition-all hover:scale-105"
              >
                Boka kostnadsfritt hembesök
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById("produkter")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="border border-border text-foreground px-12 py-6 rounded-full font-medium hover:bg-secondary transition-colors"
              >
                Se våra produkter
              </button>
            </div>
          </FadeIn>

        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-secondary/10 to-transparent" />
    </section>
  );
};

export default Hero;
