// components/music.tsx
import Image from "next/image";
import Link from "next/link";
import {
  Music as MusicIcon,
  Youtube,
  ExternalLink,
} from "lucide-react";

type Playlist = {
  id: number;
  name: string;
  description: string;
  image: string;
  platform: "spotify" | "youtube";
  url: string;
};

type Artist = {
  id: number;
  name: string;
  tagline: string;
  image: string;
  spotifyUrl: string;
  youtubeUrl?: string;
};

const Music = () => {
  // --- Datos de ejemplo (links reales a Spotify) ---
  const playlists: Playlist[] = [
    {
      id: 1,
      name: "Rizzo Core",
      description: "Musica esencial para mi existir.",
      image: "/rizzo.jpg",
      platform: "spotify",
      url: "https://open.spotify.com/playlist/03jr77Swx2hnH7u35QDW9E?si=6c27c7863755418d",
    },
    {
      id: 2,
      name: "Chilean Indie",
      description: "Musica chilena indie que me encanta.",
      image: "/chilean-indie.png",
      platform: "spotify",
      url: "https://open.spotify.com/playlist/6S1NAtFhcSSHffkJXXiw0O?si=5fc65412ec114338",
    },
    {
      id: 3,
      name: "1001 album generator",
      description: "Canciones de cada album de mi 1001 album generator.",
      image: "/1001.png",
      platform: "spotify",
      url: "https://open.spotify.com/playlist/1yc0HfZtrepELWaxF1aMTx?si=ad88f22f0d354ac6",
    },
    {
      id: 4,
      name: "J rock",
      description: "Rock Japonés que me encanta.",
      image: "/jrock.png",
      platform: "spotify",
      url: "https://open.spotify.com/playlist/6zyEGmzGzlfuA8mXfewJ9o?si=7fe2b52a9a134ca8",
    },
  ];

  const artists: Artist[] = [
    {
      id: 1,
      name: "Radiohead",
      tagline: "Psychedelic pop / rock con capas de synth.",
      image: "/radiohead.png",
      spotifyUrl: "https://open.spotify.com/intl-es/artist/4Z8W4fKeB5YxbusRsdQVPb?si=-wlepeIeRZOravdJCQZmbg",
      youtubeUrl: "https://www.youtube.com/@Radiohead",
    },
    {
      id: 2,
      name: "Daft Punk",
      tagline: "Iconos del french house y cascos brillantes.",
      image: "/daftpunk.png",
      spotifyUrl: "https://open.spotify.com/artist/4tZwfgrHOc3mvqYbE4q2Yt",
      youtubeUrl: "https://www.youtube.com/@daftpunk",
    },
    {
      id: 3,
      name: "Black country new road",
      tagline: "Garage/indie rock de manual, riffs para el recuerdo.",
      image: "/bcnr.png",
      spotifyUrl: "https://open.spotify.com/intl-es/artist/3PP6ghmOlDl2jaKaH0avUN?si=4nbFEUE7QDuPOh6jhZL9tg",
      youtubeUrl: "https://www.youtube.com/@BCNRband",
    },
    {
      id: 4,
      name: "Hesse Kassel",
      tagline: "Synthwave oscuro para persecuciones nocturnas.",
      image: "/hk.png",
      spotifyUrl: "https://open.spotify.com/intl-es/artist/5H88ECGf9hb6CqElLAKgld?si=VXlOWt-tTyyco7Z8jNaftQ",
      youtubeUrl: "https://www.youtube.com/@hessekassel",
    },
    {
      id: 5,
      name: "Black Midi",
      tagline: "Experimental rock con caos controlado.",
      image: "/bm.jpg",
      spotifyUrl: "https://open.spotify.com/intl-es/artist/7Hvq85OU8T7Hsd63zNBwaL?si=s3LpgY9fRqyJU709RKGjdw",
      youtubeUrl: "https://www.youtube.com/@blackmidi5762",
    },
  ];

  // --- Mini “ventana” retro reutilizable ---
  const Window = ({
    titleLeft,
    titleRight,
    children,
  }: {
    titleLeft: string;
    titleRight?: string;
    children: React.ReactNode;
  }) => (
    <div className="border border-purple-400/70 rounded-sm overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.05)]">
      <div className="bg-purple-600/80 px-2 py-1 flex justify-between items-center text-[11px] tracking-wide border-b border-purple-300/60">
        <span className="select-none">{titleLeft}</span>
        <span className="flex items-center gap-1 select-none">
          {titleRight && <span className="opacity-80">{titleRight}</span>}
          <span className="ml-2 -mt-[1px] space-x-[6px]">
            <span>–</span>
            <span>▢</span>
            <span>×</span>
          </span>
        </span>
      </div>
      {children}
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto font-mono text-white space-y-10">
      {/* Encabezado general */}
      <div className="flex justify-between items-end">
        <h2 className="pixel-text text-2xl">Música</h2>
        <div className="text-xs text-white/80">
          Playlists: {playlists.length} • Artistas: {artists.length}
        </div>
      </div>

      {/* --- Ventana: Playlists --- */}
      <Window titleLeft="~/iPod" titleRight="Playlists">
        <div className="divide-y divide-purple-900/70">
          {playlists.map((p) => (
            <Link
              key={p.id}
              href={p.url}
              target="_blank"
              className="flex items-center gap-3 bg-purple-500/40 hover:bg-purple-500/55 transition-colors p-3"
            >
              <div className="w-16 h-16 flex-shrink-0">
                <Image
                  src={p.image}
                  alt={p.name}
                  width={64}
                  height={64}
                  className="w-16 h-16 object-cover border border-purple-300/70"
                />
              </div>
              <div className="min-w-0">
                <h3 className="font-bold truncate">{p.name}</h3>
                <p className="text-sm text-purple-200/90 truncate">
                  {p.description}
                </p>
              </div>
              <div className="ml-auto flex items-center gap-2 text-xs opacity-90">
                {p.platform === "spotify" ? (
                  <>
                    <MusicIcon size={16} className="text-green-400" />
                    <span className="hidden sm:inline">Spotify</span>
                  </>
                ) : (
                  <>
                    <Youtube size={16} className="text-red-400" />
                    <span className="hidden sm:inline">YouTube</span>
                  </>
                )}
                <ExternalLink size={14} className="opacity-70" />
              </div>
            </Link>
          ))}
        </div>
      </Window>

      {/* --- Ventana: Artistas --- */}
      <Window titleLeft="~/Library/Music" titleRight="Artists">
        <div className="divide-y divide-purple-900/70">
          {artists.map((a) => (
            <div
              key={a.id}
              className="flex items-center gap-3 bg-purple-500/30 hover:bg-purple-500/45 transition-colors p-3"
            >
              <div className="w-12 h-12 flex-shrink-0">
                <Image
                  src={a.image}
                  alt={a.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 object-cover border border-purple-300/70"
                />
              </div>
              <div className="min-w-0">
                <h3 className="font-bold truncate">{a.name}</h3>
                <p className="text-sm text-purple-200/90 truncate">
                  {a.tagline}
                </p>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <Link
                  href={a.spotifyUrl}
                  target="_blank"
                  className="inline-flex items-center gap-1 text-xs bg-green-600 hover:bg-green-700 px-2 py-1 rounded"
                >
                  <MusicIcon size={14} /> Spotify
                </Link>
                {a.youtubeUrl && (
                  <Link
                    href={a.youtubeUrl}
                    target="_blank"
                    className="inline-flex items-center gap-1 text-xs bg-red-600 hover:bg-red-700 px-2 py-1 rounded"
                  >
                    <Youtube size={14} /> YouTube
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </Window>
    </div>
  );
};

export default Music;
