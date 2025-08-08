import { Gamepad2, Star, Clock } from "lucide-react";
import Image from "next/image";

type Game = {
  id: number;
  name: string;
  genre: string;
  platform: string;
  rating: number;      // 1..5
  hours: string;       // "120+"
  favorite: boolean;
  description: string; // opcional (no se muestra en la lista compacta)
  cover?: string;      // opcional: /covers/zelda.png
};

const Games = () => {
  const games: Game[] = [
    {
      id: 1,
      name: "Outer Wilds",
      genre: "Aventura, exploración",
      platform: "PC/PS4/Xbox",
      rating: 5,
      hours: "30+",
      favorite: true,
      description:
        "Un juego de exploración espacial único con una narrativa profunda y un mundo abierto fascinante.",
      cover: "/outerwilds.png",
    },
    {
      id: 2,
      name: "Deltarune",
      genre: "Rpg, aventura",
      platform: "PC/PS4/Xbox",
      rating: 5,
      hours: "20+",
      favorite: true,
      description:
        "Un juego de rol con una historia cautivadora y personajes memorables.",
      cover: "/deltarune.png",
    },
    {
      id: 3,
      name: "Gris",
      genre: "Aventura, plataformas",
      platform: "PC/PS4/Switch",
      rating: 4,
      hours: "5+",
      favorite: false,
      description:
        "Una experiencia visual y sonora única, con una narrativa poética.",
      cover: "/gris.png",
    },
    {
      id: 4,
      name: "Dark Souls",
      genre: "Acción/RPG",
      platform: "PC/PS4/Xbox",
      rating: 5,
      hours: "50+",
      favorite: true,
      description:
        "Un juego desafiante con un mundo interconectado y una historia profunda.",
      cover: "/darksouls.png",
    },
    {
      id: 5,
      name: "Cult of the lamb ",
      genre: "Roguelike, simulación",
      platform: "PC/Switch",
      rating: 4,
      hours: "30+",
      favorite: true,
      description: "Un juego de simulación de culto con elementos roguelike y un estilo artístico encantador.",
      cover: "/cotl.png",
    },
    {
      id: 6,
      name: "Balatro",
      genre: "Roguelike, cartas",
      platform: "PC/Switch/Mobile",
      rating: 5,
      hours: "100+",
      favorite: false,
      description: "Un juego de cartas roguelike con mecánicas únicas y un estilo artístico encantador.",
      cover: "/balatro.png",
    },
    {
      id: 7,
      name: "Hollow Knight",
      genre: "Metroidvania",
      platform: "PC/Switch",
      rating: 5,
      hours: "50+",
      favorite: true,
      description: "Arte y música increíbles.",
      cover: "/hollowknight.png",
    },
    {
      id: 8,
      name: "Persona 4 Golden",
      genre: "JRPG, simulación social",
      platform: "PC/PS Vita",
      rating: 5,
      hours: "70+",
      favorite: true,
      description: "Humor inteligente y mecánicas únicas.",
      cover: "/p4g.png",
    },
  ];

  // (Opcional) separar en favoritos y otros
  const favoriteGames = games.filter((g) => g.favorite);
  const otherGames = games.filter((g) => !g.favorite);

  const getTier = (rating: number) => {
    if (rating >= 5) return "Tier S";
    if (rating === 4) return "Tier A";
    if (rating === 3) return "Tier B";
    return "Tier C";
  };

  const TierPill = ({ rating }: { rating: number }) => {
    const tier = getTier(rating);
    const tierStyles =
      tier === "Tier S"
        ? "text-yellow-300 border-yellow-300/40"
        : tier === "Tier A"
        ? "text-pink-300 border-pink-300/40"
        : "text-purple-200 border-purple-200/30";
    return (
      <span
        className={`px-3 py-1 rounded-full text-xs border ${tierStyles} whitespace-nowrap`}
      >
        {tier}
      </span>
    );
  };

  const Stars = ({ n }: { n: number }) => (
    <div className="flex items-center gap-1">
      {Array.from({ length: n }).map((_, i) => (
        <Star key={i} size={14} className="text-yellow-400 fill-current" />
      ))}
    </div>
  );

  const Section = ({
    title,
    data,
  }: {
    title: string;
    data: Game[];
  }) => (
    <section className="w-full">
      <div className="flex items-center gap-3 mb-3">
        <Gamepad2 className="text-pink-400" />
        <h2 className="pixel-text text-2xl text-white">{title}</h2>
      </div>
      <div className="h-px bg-white/20 mb-4" />

      <ul className="space-y-3">
        {data.map((game) => (
          <li
            key={game.id}
            className="group rounded-lg border border-white/10 bg-gradient-to-r from-[#1a0f2e]/60 to-[#1a0f2e]/40 hover:border-pink-400/40 transition-colors"
          >
            <div className="flex items-center justify-between gap-4 px-4 py-3">
              {/* Izquierda: cover + nombre */}
              <div className="flex items-center gap-4 min-w-0">
                <div className="relative shrink-0 w-12 h-12 rounded-full border border-white/20 overflow-hidden bg-black/30">
                  {game.cover ? (
                    <Image
                      src={game.cover}
                      alt={game.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full grid place-items-center text-white/60 text-xs">
                      N/A
                    </div>
                  )}
                </div>
                <div className="min-w-0">
                  <div className="text-white pixel-text text-lg truncate">
                    {game.name}
                  </div>
                  <div className="text-white/70 text-xs truncate">
                    {game.platform}
                  </div>
                </div>
              </div>

              {/* Centro: chips (género) — oculto en xs si quieres más compacto */}
              <div className="hidden sm:flex items-center gap-2">
                <span className="text-xs px-2 py-1 rounded border border-purple-300/20 bg-purple-500/10 text-purple-200">
                  {game.genre}
                </span>
              </div>

              {/* Derecha: rating + horas + tier */}
              <div className="flex items-center gap-4">
                <div className="hidden md:flex">
                  <Stars n={game.rating} />
                </div>

                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <Clock size={14} className="text-white/60" />
                  <span className="whitespace-nowrap">+{game.hours} horas</span>
                </div>

                <TierPill rating={game.rating} />
              </div>
            </div>

            {/* Línea divisoria inferior al pasar el mouse (detalle) */}
            <div className="h-px bg-white/10 mx-2 mb-1 group-hover:bg-pink-400/30 transition-colors" />
          </li>
        ))}
      </ul>
    </section>
  );

  return (
    <div className="w-full px-4 sm:px-8 lg:px-16 py-8 text-white">
      {/* Título principal */}
      <h1 className="pixel-text text-4xl text-center mb-3">Videoguejitos</h1>
      <div className="relative flex items-center justify-center mb-8">
        <div className="h-px w-full bg-white/20" />
        <div className="absolute px-2 py-0.5 text-white/60">◈</div>
      </div>

      {/* Sección favoritos y otros en lista */}
      <div className="space-y-10">
        <Section title="Juegos Favoritos" data={favoriteGames} />
        <Section title="Otros Juegos" data={otherGames} />
      </div>
    </div>
  );
};

export default Games;
