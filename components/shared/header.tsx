import { Github, Twitter, Music } from "lucide-react";

const Header = () => {
  return (
    <header className="relative z-20 border-b-2 border-white/20 bg-gradient-to-b from-purple-950/80 to-transparent backdrop-blur-sm">
      <div className="flex items-center justify-end px-6 py-3">
        {/* Social icons */}
        <div className="flex items-center gap-4">
          <a href="https://github.com/rizzot0" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href="https://x.com/Rizzoto3" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
            <Twitter size={20} />
          </a>
          <a href="https://open.spotify.com/user/bastianalonso92?si=db96442f4b094792" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
            <Music size={20} />
          </a>
          {/* Language selector placeholder */}
          <div className="text-white/60 pixel-text text-xs">ES ▼</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
