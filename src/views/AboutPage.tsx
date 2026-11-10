// Static copy — Hungarian. Extract to translations when EN localization is needed.
// Personal name: "Nagy Viktor" in bio (explicit in brief); "Viktor" in conversational CTA copy.

import Image from "next/image";
import Link from "next/link";
import Section from "@/lib/components/atoms/Section";
import Container from "@/lib/components/atoms/Container";
import Reveal from "@/lib/components/atoms/Reveal";
import SectionBadge from "@/lib/components/badges/SectionBadge";
import TestimonialCard from "@/lib/components/cards/TestimonialCard";
import { STAGGER_REVEAL_DELAY } from "@/config";

// Unsplash: entrepreneur catching up on work at a desk. Swap photo ID if the shot changes.
const HERO_SRC =
  "https://images.unsplash.com/photo-1758876019043-cedb0b6f56ea?w=1600&q=80&auto=format&fit=crop";

// Swap any photo ID if a 404 occurs — keep aspect-[4/3] consistent.
const SITUATIONS = [
  {
    heading: "Folyamatautomatizálás",
    problem:
      "Ha valaki időpontot kér, megnézem a naptáramat, elküldöm a szabad időpontokat, aztán beírom, amelyiket választotta. Ha közben át kell tenni a foglalást, kezdhetem elölről...",
    solution:
      "Olyan weboldalt készítek, ahol az ügyfeleid látják a szabad időpontokat, és maguk foglalhatnak. A foglalás automatikusan bekerül a naptáradba, így te nyugodtan foglalkozhatsz a munkával.",
    src: "https://images.unsplash.com/photo-1784798429938-039db6783292?w=800&q=80&auto=format&fit=crop",
    alt: "Vállalkozó üzenetváltásokkal egyezteti az időpontokat",
  },
  {
    heading: "Egyedi szoftver",
    problem:
      "Minden nap végignézem a webshopjaimat és a számlázót, hogy lássam a rendelések állapotát, a visszárut, a kiállított és hiányzó számlákat. Jó lenne, ha egy helyen lenne minden...",
    solution:
      "Automatizálom a rendszeres ellenőrzéseket. Egy helyen láthatod, melyik rendelés igényel figyelmet, és jelzést kaphatsz a problémákról. Így órákat spórolhatsz hetente.",
    src: "https://images.unsplash.com/photo-1772588627373-729b0f47e5bb?w=800&q=80&auto=format&fit=crop",
    alt: "Vállalkozó több ablak között keresgéli az elakadt rendeléseket",
  },
  {
    heading: "Rendszer felújítás",
    problem:
      "Már külön táblázatot vezetünk ahhoz is, amit elvileg a rendszernek kellene tudnia. Egyre több ilyen kerülőút van, de enélkül nem tud dolgozni a csapat...",
    solution:
      "A napi munkátokhoz illő új rendszert fejlesztek. Amíg elkészül és fokozatosan álltok át rá, a jelenlegi rendszerhez is folyamatos támogatást nyújtok.",
    src: "https://images.unsplash.com/photo-1573164574511-73c773193279?w=800&q=80&auto=format&fit=crop",
    alt: "Frusztrált felhasználó küzd egy elavult rendszerrel",
  },
];

const PROJECTS = [
  {
    label: "Online jegyfoglalás",
    problem:
      "Egy mozi kezelte a jegyfoglalásokat telefonon és e-mailben. Forgalmas időszakokban a személyzet ideje nagy részét telefonálással töltötte.",
    work: "Újraépítettem a weboldalukat és beépítettem egy online foglalási folyamatot. Az ügyfelek most böngészhetik a műsorrendet, kiválaszthatják a helyüket, és lefoglalhatják a jegyüket hívás nélkül.",
    link: "/portfolio",
  },
  {
    label: "Automatikus adatkezelés",
    problem:
      "Egy vállalkozó minden este kézzel másolta a weboldaláról érkező rendelések adatait egy táblázatba — naponta szinte egy óra munkát.",
    work: "Összekötöttem a két rendszert: az új rendelések automatikusan megjelennek a táblázatban, kézi másolás nélkül.",
    link: null,
  },
];

const TESTIMONIALS = [
  {
    quote:
      "We worked together for 4,5 years. During this time, he showcased incredible dedication to his tasks and willingness to grow as a developer. His work ethic and positive attitude make him a valuable asset to any project. I'd highly recommend him.",
    author: "Ferenc",
    role: "CIO, Magyar Közút",
    avatar: "F",
    stars: 5,
  },
  {
    quote:
      "Viktor is an excellent professional with solid technical skills and a proactive approach. He communicates clearly, meets deadlines, and always goes the extra mile to deliver quality work. A pleasure to work with.",
    author: "András",
    role: "CEO, Etheron Systems",
    avatar: "A",
    stars: 5,
  },
];

function Problems() {
  return (
    <Section depth="circles" depthColor="bg-violet/10">
      <Container>
        <Reveal>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-fg mb-10 sm:mb-14">
            Ismerős valamelyik?
          </h2>
        </Reveal>
        <div className="space-y-16 sm:space-y-20">
          {SITUATIONS.map((s, i) => {
            // even rows: image left; odd row: image right (flex-row-reverse on md+)
            const imageRight = i % 2 !== 0;
            return (
              <Reveal key={i}>
                <div
                  className={`flex flex-col ${
                    imageRight ? "md:flex-row-reverse" : "md:flex-row"
                  } gap-8 md:gap-12 items-center`}
                >
                  {/* Image — always first in source order so it appears first on mobile */}
                  <div className="relative w-full md:w-2/5 aspect-[4/3] rounded-2xl overflow-hidden shrink-0">
                    <Image
                      src={s.src}
                      alt={s.alt}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  </div>
                  {/* Text: heading, problem in client voice, solution in my voice */}
                  <div className="md:w-3/5">
                    <span className="text-accent text-xs font-semibold uppercase tracking-widest">
                      {s.heading}
                    </span>
                    <p className="mt-3 text-fg-2 text-lg sm:text-xl font-medium italic leading-snug">
                      &ldquo;{s.problem}&rdquo;
                    </p>
                    <p className="mt-4 text-fg-3 text-base leading-relaxed">
                      {s.solution}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* 1. Hero — image-led, text overlay */}
      <div className="relative min-h-[70vh] flex items-end overflow-hidden">
        <Image
          src={HERO_SRC}
          alt="Vállalkozó, aki a munkanap végén az adminisztrációjával foglalkozik"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Overlay: dark bottom-to-top gradient, works in both themes */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 pointer-events-none" />

        <Container className="relative z-10 pb-14 sm:pb-20 pt-32">
          <Reveal>
            <SectionBadge className="border-white/20 bg-white/10 text-white/80 backdrop-blur-sm">
              Weboldalkészítés kisvállalkozásoknak
            </SectionBadge>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight max-w-3xl">
              A munkanap véget ért.{" "}
              <span className="text-white/70">Akkor most jön az admin?</span>
            </h1>
            <h2 className="mt-5 text-white/80 text-lg sm:text-xl font-medium max-w-2xl">
              Rendelések, ügyfélüzenetek és táblázatok között megy el az időd?
            </h2>
            <p className="mt-4 text-white/60 text-sm sm:text-base max-w-xl leading-relaxed">
              Olyan weboldalakat és egyedi rendszereket készítek
              kisvállalkozásoknak, amelyek átveszik ezeket a visszatérő
              feladatokat.
            </p>
            {/* GEO statement — in server-rendered HTML near the top */}
            <p className="hidden">
              Kisvállalkozóknak fejlesztek weboldalakat, webshopokat és
              automatizálásokat, hogy kevesebb idő menjen el a kézi
              adminisztrációra és az ismétlődő feladatokra.
            </p>
          </Reveal>
        </Container>
      </div>

      {/* 2. Three recognizable situations */}
      <Problems />

      {/* 3. Why work with me */}
      <Section depth="row" depthColor="via-brand/5">
        <Container>
          <Reveal className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-fg mb-5">
              Elég, ha elmondod, hol akad el a munka.
            </h2>
            <p className="text-fg-2 text-base leading-relaxed mb-4">
              Az első lépés nem az, hogy megmondom, mit kell fejleszteni. Az
              első lépés az, hogy megértjük, mi vesz el tőled időt és energiát.
              Ha ez megvan, megállapodunk abban, mit fogok elkészíteni és
              mikorra — szóval mindig tudod, hol tartunk.
            </p>
            <p className="text-fg-3 text-base leading-relaxed">
              Az egyeztetett határidőket komolyan veszem: ha valami változik,
              előre szólok, nem utólag mentegetőzöm. Átadás előtt
              végigellenőrzöm a munkát, hogy ne maradjon olyasmi, amit később
              kellene javítani.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* 4. Bio — Nagy Viktor */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-start">
            <Reveal>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-fg mb-4">
                Nagy Viktor vagyok — a Your Coding Bro mögött.
              </h2>
              <p className="text-fg-2 text-base leading-relaxed mb-3">
                Több mint 10 éve dolgozom szoftverfejlesztőként. Az elmúlt
                években főként kisvállalkozásokkal és kis csapatokkal dolgoztam:
                weboldalakat és webshopokat készítettem, meglévő rendszereket
                modernizáltam, egyedi szoftvereket és folyamatautomatizálásokat
                építettem.
              </p>
              <p className="text-fg-3 text-base leading-relaxed">
                Velem közvetlenül a kóddal foglalkozó emberrel dolgozol — nem
                projektmenedzserrel vagy közvetítővel. Szeretem, ha az átadás
                után te tudod irányítani, amit csináltunk, és nem szorulsz rá
                folyamatosan a segítségemre az alap dolgokhoz.
              </p>
            </Reveal>
            <Reveal
              delay={STAGGER_REVEAL_DELAY}
              className="flex lg:justify-end shrink-0"
            >
              {/* Portrait placeholder — replace img src when portrait is available */}
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-brand to-accent flex items-center justify-center text-white text-2xl font-bold select-none">
                NV
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 5. Testimonials */}
      <Section depth="circles" depthColor="bg-violet/10">
        <Container>
          <Reveal className="mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-fg">
              Amit az ügyfelek mondanak
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.author} delay={(i + 1) * STAGGER_REVEAL_DELAY}>
                <TestimonialCard {...t} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* 6. Portfolio */}
      <Section>
        <Container>
          <Reveal className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-fg">
              Néhány projekt
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.label} delay={(i + 1) * STAGGER_REVEAL_DELAY}>
                <div className="gradient-border rounded-2xl p-7 h-full flex flex-col">
                  <span className="text-accent text-xs font-semibold uppercase tracking-widest mb-4">
                    {p.label}
                  </span>
                  <p className="text-fg-3 text-sm leading-relaxed mb-3">
                    <span className="text-fg-2 font-medium">A helyzet: </span>
                    {p.problem}
                  </p>
                  <p className="text-fg-3 text-sm leading-relaxed mb-5">
                    <span className="text-fg-2 font-medium">
                      Mit csináltam:{" "}
                    </span>
                    {p.work}
                  </p>
                  {p.link && (
                    <div className="mt-auto pt-2">
                      <Link
                        href={p.link}
                        className="text-accent text-xs font-semibold hover:underline"
                      >
                        Részletek →
                      </Link>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-6 text-center">
            <Link
              href="/portfolio"
              className="text-accent text-sm font-semibold hover:underline"
            >
              Az összes projekt megtekintése →
            </Link>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
