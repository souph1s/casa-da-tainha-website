import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import praiaTainha from "@/assets/praia-da-tainha.jpeg.asset.json";
import casal from "@/assets/casal.jpeg.asset.json";
import vistoMar from "@/assets/visto-mar.jpeg.asset.json";
import praiaParticular from "@/assets/praia-particular.jpeg.asset.json";
import casaArvore from "@/assets/casa-arvore-2.jpeg.asset.json";
import deck from "@/assets/deck-2.jpeg.asset.json";
import jetSki from "@/assets/jet-ski.jpeg.asset.json";
import cafe from "@/assets/cafe-da-manha.jpeg.asset.json";
import petFriendly from "@/assets/pet-friendly.jpeg.asset.json";
import porDoSol from "@/assets/por-do-sol.jpeg.asset.json";
import logo from "@/assets/logo.png.asset.json";

const WHATSAPP_URL = "https://wa.me/5547997956734";
const INSTAGRAM_URL = "https://www.instagram.com/casa_da_tainha";
const CASA_JARDIM_URL = "https://www.airbnb.com.br/rooms/48789826?guests=1&adults=1&s=67&unique_share_id=58aef065-82a1-4059-a745-c9d48c383dfe";
const CASA_MAR_URL = "https://www.airbnb.com.br/rooms/47032546?guests=1&adults=1&s=67&unique_share_id=b3e830ee-bf6c-40e8-b22f-6bb84086d69e";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Casa da Tainha — Refúgio à beira-mar" },
      { name: "description", content: "Um refúgio particular entre o mar e a Mata Atlântica, onde cada detalhe foi pensado para criar momentos inesquecíveis." },
      { property: "og:title", content: "Casa da Tainha" },
      { property: "og:description", content: "Refúgio boutique entre o mar e a Mata Atlântica." },
      { property: "og:image", content: praiaTainha.url },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Experience />
      <Nature />
      <Accommodation />
      <Experiences />
      <Pet />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Final />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 flex items-center justify-between mix-blend-difference text-white">
      <a href="#top" className="flex items-center gap-3">
        <img src={logo.url} alt="Casa da Tainha" className="h-16 md:h-20 w-auto invert" />
      </a>
      <div className="hidden md:flex items-center gap-10 eyebrow">
        <a href="#experiencia" className="hover:opacity-60 transition">Refúgio</a>
        <a href="#acomodacoes" className="hover:opacity-60 transition">Acomodações</a>
        <a href="#experiencias" className="hover:opacity-60 transition">Experiências</a>
        <a href="#galeria" className="hover:opacity-60 transition">Galeria</a>
        <a href="#faq" className="hover:opacity-60 transition">Informações</a>
      </div>
      <a href="#reservar" className="eyebrow border border-current px-4 py-2 hover:bg-white hover:text-black transition">Reservar</a>
    </nav>
  );
}

function Hero() {
  return (
    <section id="top" className="relative h-[100svh] w-full overflow-hidden">
      <img src={praiaTainha.url} alt="Praia da Tainha vista entre a Mata Atlântica" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/60" />
      <div className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-28 px-6 md:px-16 text-white">
        <div className="max-w-4xl">
          <p className="eyebrow mb-6 opacity-90">Bombinhas · Santa Catarina</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] font-light">
            Desconecte da rotina.<br/><em className="not-italic opacity-80">Reconecte-se ao que importa.</em>
          </h1>
          <p className="mt-8 max-w-xl text-base md:text-lg font-light leading-relaxed opacity-90">
            Um refúgio particular entre o mar e a Mata Atlântica, onde cada detalhe foi pensado para criar momentos inesquecíveis.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#reservar" className="eyebrow bg-white text-black px-7 py-4 hover:bg-white/90 transition">Consultar disponibilidade</a>
            <a href="#experiencias" className="eyebrow border border-white px-7 py-4 hover:bg-white hover:text-black transition">Explorar experiências</a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 right-6 md:right-12 eyebrow text-white/80 z-10">Scroll ↓</div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow text-muted-foreground mb-6">{children}</p>;
}

function Experience() {
  return (
    <section id="experiencia" className="py-28 md:py-40 px-6 md:px-16 bg-background">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-center">
        <Reveal className="md:col-span-5">
          <SectionLabel>I — O refúgio</SectionLabel>
          <h2 className="font-display text-4xl md:text-6xl font-light leading-tight">
            Mais do que uma hospedagem. <em className="not-italic" style={{ color: "var(--ocean)" }}>Um destino.</em>
          </h2>
        </Reveal>
        <Reveal className="md:col-span-6 md:col-start-7" delay={150}>
          <p className="text-lg md:text-xl font-light leading-relaxed text-foreground/80">
            Acorde com o som do mar. Caminhe entre a natureza preservada. Observe o pôr do sol do seu próprio refúgio à beira d'água.
          </p>
          <p className="mt-6 text-lg md:text-xl font-light leading-relaxed text-foreground/80">
            Na Casa da Tainha, cada estadia acontece no seu ritmo.
          </p>
        </Reveal>
      </div>
      <Reveal className="mt-20 md:mt-28 max-w-7xl mx-auto" delay={200}>
        <img src={casal.url} alt="Casal contemplando o mar do deck" className="w-full h-[60vh] md:h-[85vh] object-cover" />
      </Reveal>
    </section>
  );
}

function Nature() {
  return (
    <section className="py-28 md:py-40 px-6 md:px-16" style={{ backgroundColor: "var(--sand)" }}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <Reveal>
          <img src={vistoMar.url} alt="Vista do mar entre as árvores" className="w-full aspect-[3/4] object-cover" />
        </Reveal>
        <Reveal delay={150}>
          <SectionLabel>II — Natureza & Privacidade</SectionLabel>
          <h2 className="font-display text-4xl md:text-6xl font-light leading-tight">
            Cercado pela natureza. <br/><em className="not-italic opacity-70">Isolado do mundo.</em>
          </h2>
          <p className="mt-8 text-lg font-light leading-relaxed text-foreground/80">
            Entre a Mata Atlântica e o oceano, existe um lugar onde o tempo desacelera.
          </p>
          <p className="mt-4 text-lg font-light leading-relaxed text-foreground/80">
            Aqui, o silêncio é interrompido apenas pelo som das ondas e pelo canto dos pássaros.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6 eyebrow text-foreground/60">
            <div><div className="text-3xl font-display text-foreground mb-1">∞</div>Vista mar</div>
            <div><div className="text-3xl font-display text-foreground mb-1">01</div>Reserva por vez</div>
            <div><div className="text-3xl font-display text-foreground mb-1">100%</div>Privado</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Accommodation() {
  return (
    <section id="acomodacoes" className="py-28 md:py-40 px-6 md:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <Reveal className="max-w-3xl mb-16 md:mb-24">
          <SectionLabel>III — Acomodação</SectionLabel>
          <h2 className="font-display text-4xl md:text-6xl font-light leading-tight">
            Duas casas. <em className="not-italic" style={{ color: "var(--ocean)" }}>Uma mesma alma.</em>
          </h2>
          <p className="mt-8 text-lg font-light leading-relaxed text-foreground/70 max-w-2xl">
            Escolha entre o frescor da mata ou o som constante do mar. Cada casa é um refúgio independente, pensado para acolher poucos hóspedes por vez.
          </p>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-10 md:gap-12">
          <Reveal>
            <a href={CASA_JARDIM_URL} target="_blank" rel="noopener noreferrer" className="block group">
              <div className="overflow-hidden">
                <img src={casaArvore.url} alt="Casa Jardim — varanda entre as árvores" className="w-full h-[55vh] md:h-[70vh] object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="mt-6 flex items-baseline justify-between gap-6">
                <div>
                  <p className="eyebrow text-muted-foreground">Casa Jardim</p>
                  <h3 className="font-display text-3xl md:text-4xl font-light mt-2">Entre as árvores</h3>
                </div>
                <span className="eyebrow border-b border-foreground/40 pb-1 group-hover:border-foreground transition">Ver no Airbnb →</span>
              </div>
              <p className="mt-4 text-foreground/70 font-light leading-relaxed max-w-md">
                Imersa na Mata Atlântica, com varanda suspensa, café da manhã ao som dos pássaros e o frescor da natureza ao redor.
              </p>
            </a>
          </Reveal>
          <Reveal delay={150}>
            <a href={CASA_MAR_URL} target="_blank" rel="noopener noreferrer" className="block group">
              <div className="overflow-hidden">
                <img src={praiaParticular.url} alt="Casa Mar — vista do oceano" className="w-full h-[55vh] md:h-[70vh] object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="mt-6 flex items-baseline justify-between gap-6">
                <div>
                  <p className="eyebrow text-muted-foreground">Casa Mar</p>
                  <h3 className="font-display text-3xl md:text-4xl font-light mt-2">À beira do oceano</h3>
                </div>
                <span className="eyebrow border-b border-foreground/40 pb-1 group-hover:border-foreground transition">Ver no Airbnb →</span>
              </div>
              <p className="mt-4 text-foreground/70 font-light leading-relaxed max-w-md">
                Acorde com o som das ondas. Praia particular a poucos passos, pôr do sol da varanda e o mar como horizonte permanente.
              </p>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const experiencesList = [
  { n: "01", t: "Jet Ski", d: "Velocidade e horizonte aberto pelo litoral catarinense." },
  { n: "02", t: "Café da manhã especial", d: "Mesa farta, ingredientes locais, servida onde você quiser." },
  { n: "03", t: "Massagem relaxante", d: "Terapeutas levam o spa até sua varanda." },
  { n: "04", t: "Sushi man privativo", d: "Balcão omakase montado exclusivamente para você." },
  { n: "05", t: "DJ exclusivo", d: "Trilha sonora para uma noite que não termina." },
  { n: "06", t: "Celebrações especiais", d: "Aniversários, pedidos, brindes — preparados ao detalhe." },
  { n: "07", t: "Experiências sob medida", d: "Conte o que você sonha. Nós desenhamos o resto." },
];

function Experiences() {
  return (
    <section id="experiencias" className="py-28 md:py-40 px-6 md:px-16" style={{ backgroundColor: "var(--sand)" }}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5 md:sticky md:top-24 self-start">
          <Reveal>
            <SectionLabel>IV — Experiências</SectionLabel>
            <h2 className="font-display text-4xl md:text-6xl font-light leading-tight">
              Experiências criadas <em className="not-italic opacity-70">para você.</em>
            </h2>
            <p className="mt-8 font-display text-xl md:text-2xl font-light italic text-foreground/70">
              Porque algumas viagens merecem ser extraordinárias.
            </p>
            <img src={jetSki.url} alt="Jet ski no mar" className="mt-10 w-full aspect-[4/5] object-cover hidden md:block" />
          </Reveal>
        </div>
        <div className="md:col-span-7">
          <ul>
            {experiencesList.map((e, i) => (
              <Reveal key={e.n} delay={i * 60}>
                <li className="border-t border-foreground/15 py-8 grid grid-cols-[auto_1fr] gap-8 items-baseline">
                  <span className="eyebrow text-foreground/40">{e.n}</span>
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl font-light">{e.t}</h3>
                    <p className="mt-3 text-foreground/70 font-light leading-relaxed">{e.d}</p>
                  </div>
                </li>
              </Reveal>
            ))}
            <li className="border-t border-foreground/15" />
          </ul>
        </div>
      </div>
    </section>
  );
}

function Pet() {
  return (
    <section className="py-28 md:py-40 px-6 md:px-16 bg-background">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <Reveal delay={150} className="md:order-2">
          <img src={petFriendly.url} alt="Hóspede com seu cachorro no deck" className="w-full aspect-[4/3] object-cover" />
        </Reveal>
        <Reveal className="md:order-1">
          <SectionLabel>V — Pet Friendly</SectionLabel>
          <h2 className="font-display text-4xl md:text-6xl font-light leading-tight">
            Seu melhor amigo também é <em className="not-italic" style={{ color: "var(--forest)" }}>nosso convidado.</em>
          </h2>
          <p className="mt-8 text-lg font-light leading-relaxed text-foreground/80">
            Momentos especiais ficam ainda melhores quando compartilhados.
          </p>
          <p className="mt-4 text-lg font-light leading-relaxed text-foreground/80">
            Aqui, seu pet encontra espaço, liberdade e natureza para aproveitar cada instante ao seu lado.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Gallery() {
  const imgs = [
    { src: deck.url, alt: "Deck à beira-mar ao entardecer", h: "h-[70vh] md:h-[95vh]", span: "md:col-span-12" },
    { src: cafe.url, alt: "Café da manhã servido em mesa rústica", h: "h-[50vh] md:h-[70vh]", span: "md:col-span-7" },
    { src: porDoSol.url, alt: "Pôr do sol da varanda", h: "h-[50vh] md:h-[70vh]", span: "md:col-span-5" },
    { src: praiaParticular.url, alt: "Praia particular entre as pedras", h: "h-[60vh] md:h-[90vh]", span: "md:col-span-6" },
    { src: vistoMar.url, alt: "Vista enquadrada pela mata", h: "h-[60vh] md:h-[90vh]", span: "md:col-span-6" },
  ];
  return (
    <section id="galeria" className="py-28 md:py-40 px-6 md:px-12" style={{ backgroundColor: "var(--sand)" }}>
      <Reveal className="max-w-7xl mx-auto mb-16 md:mb-20">
        <SectionLabel>VI — Galeria</SectionLabel>
        <h2 className="font-display text-4xl md:text-6xl font-light leading-tight max-w-3xl">
          Um lugar que se <em className="not-italic opacity-70">conta em imagens.</em>
        </h2>
      </Reveal>
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-4 md:gap-6">
        {imgs.map((g, i) => (
          <Reveal key={i} className={g.span} delay={i * 80}>
            <img src={g.src} alt={g.alt} className={`w-full object-cover ${g.h}`} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const testimonials = [
  { q: "Saímos com saudade antes mesmo de fechar a porta. Foi como se a casa nos pertencesse por aqueles dias.", a: "Marina & Rafael" },
  { q: "Nunca dormi tão bem ouvindo o mar. Voltamos transformados, mais calmos, mais nós.", a: "Helena" },
  { q: "O café na varanda, o cachorro correndo livre, o silêncio à noite. Um lugar raro.", a: "Família Bertolazzi" },
];

function Testimonials() {
  return (
    <section className="py-28 md:py-40 px-6 md:px-16 bg-background">
      <div className="max-w-6xl mx-auto">
        <Reveal className="mb-16 md:mb-24">
          <SectionLabel>VII — Memórias</SectionLabel>
          <h2 className="font-display text-4xl md:text-6xl font-light leading-tight max-w-3xl">
            O que fica depois <em className="not-italic opacity-70">de ir embora.</em>
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-10 md:gap-14">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 120}>
              <p className="font-display text-xl md:text-2xl font-light italic leading-snug text-foreground/85">"{t.q}"</p>
              <p className="eyebrow mt-6 text-muted-foreground">— {t.a}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqs = [
  { q: "Pets são bem-vindos?", a: "Sim. Recebemos pets com carinho — temos espaço, natureza e tranquilidade para que eles aproveitem tanto quanto você." },
  { q: "Como funciona o check-in?", a: "Check-in a partir das 15h e check-out até as 12h. Atendimento personalizado na chegada para apresentar o refúgio." },
  { q: "Posso contratar experiências extras?", a: "Sim. Jet ski, sushi man privativo, massagens, DJ, celebrações e roteiros sob medida — basta solicitar antes da estadia." },
  { q: "Onde fica a Casa da Tainha?", a: "Em Bombinhas, Santa Catarina, entre a Mata Atlântica e o oceano. Endereço completo enviado após a confirmação." },
  { q: "Como faço uma reserva?", a: "Pelo WhatsApp ou diretamente pelos perfis no Airbnb das casas Jardim e Mar. Respondemos cada solicitação pessoalmente para garantir que sua estadia seja única." },
];

function FAQ() {
  return (
    <section id="faq" className="py-28 md:py-40 px-6 md:px-16" style={{ backgroundColor: "var(--sand)" }}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12">
        <Reveal className="md:col-span-4">
          <SectionLabel>VIII — Informações</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl font-light leading-tight">
            Tudo o que você precisa <em className="not-italic opacity-70">saber.</em>
          </h2>
        </Reveal>
        <div className="md:col-span-8">
          {faqs.map((f, i) => (
            <Reveal key={i} delay={i * 60}>
              <details className="group border-t border-foreground/15 py-6">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="font-display text-xl md:text-2xl font-light pr-6">{f.q}</span>
                  <span className="eyebrow text-foreground/40 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-foreground/70 font-light leading-relaxed max-w-2xl">{f.a}</p>
              </details>
            </Reveal>
          ))}
          <div className="border-t border-foreground/15" />
        </div>
      </div>
    </section>
  );
}

function Final() {
  return (
    <section id="reservar" className="relative h-[100svh] w-full overflow-hidden">
      <img src={porDoSol.url} alt="Pôr do sol na Casa da Tainha" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/40" />
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 text-white">
        <Reveal>
          <p className="eyebrow mb-8 opacity-80">IX — Até breve</p>
          <h2 className="font-display text-4xl md:text-7xl font-light leading-[1.05] max-w-4xl">
            Algumas viagens terminam.<br/><em className="not-italic opacity-80">As melhores se transformam em lembranças.</em>
          </h2>
          <p className="mt-8 max-w-xl mx-auto font-light text-base md:text-lg opacity-90">
            Reserve sua estadia e descubra por que tantos hóspedes desejam voltar antes mesmo de partir.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-block mt-12 eyebrow bg-white text-black px-8 py-4 hover:bg-white/90 transition">
            Reservar minha experiência
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <img src={logo.url} alt="Casa da Tainha" className="h-20 md:h-24 w-auto invert mb-4" />
          <p className="text-sm font-light opacity-70 max-w-xs">Refúgio boutique entre o mar e a Mata Atlântica. Bombinhas, Santa Catarina.</p>
        </div>
        <div className="eyebrow space-y-3 opacity-80">
          <p>Reservas</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block font-light normal-case tracking-normal text-sm hover:opacity-100">WhatsApp · +55 47 99795-6734</a>
        </div>
        <div className="eyebrow space-y-3 opacity-80">
          <p>Acomodações</p>
          <a href={CASA_JARDIM_URL} target="_blank" rel="noopener noreferrer" className="block font-light normal-case tracking-normal text-sm hover:opacity-100">Casa Jardim — Airbnb</a>
          <a href={CASA_MAR_URL} target="_blank" rel="noopener noreferrer" className="block font-light normal-case tracking-normal text-sm hover:opacity-100">Casa Mar — Airbnb</a>
        </div>
        <div className="eyebrow space-y-3 opacity-80">
          <p>Siga</p>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="block font-light normal-case tracking-normal text-sm hover:opacity-100">Instagram @casa_da_tainha</a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-background/20 eyebrow opacity-50 flex justify-between">
        <span>© Casa da Tainha</span>
        <span>Santa Catarina · Brasil</span>
      </div>
    </footer>
  );
}