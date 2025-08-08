import Image from 'next/image';
import { Youtube, FileText, BookMarked, GamepadIcon, ListMusic } from 'lucide-react';
import Container from './shared/container';

const Introduction = () => {
    return (
        <Container>
            <div className="min-h-screen w-full px-6 py-12 text-white font-mono">
                {/* Diálogo estilo juego */}
                <div className="bg-black border-4 border-white rounded-lg p-8 mb-8">
                    <div className="flex items-start gap-6">
                        <div className="w-32 h-32 bg-black border-2 border-white p-1">
                            <div className="w-full h-full relative">
                                <Image 
                                    src="/rizzo.jpg"
                                    alt="rizzo sprite"
                                    className="pixel-image object-contain"
                                    width={128}
                                    height={128}
                                />
                            </div>
                        </div>
                        <div className="flex-1 space-y-6">
                            <h2 className="text-2xl text-white pixel-text">* rizzo</h2>
                            <div className="text-lg text-white font-pixel leading-relaxed space-y-4">
                                <p>* ¡Bienvenido a mi página personal de desarrollador!</p>
                                <p>* Aquí guardaré cosas sobre mí, como música, proyectos y más.</p>
                                <p>* Busco que sea un sitio seguro para expresarme y compartir.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="border-white/20 mb-8 w-full" />

                {/* Links con estilo pixel art */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                    <button onClick={() => window.dispatchEvent(new CustomEvent('openSection', { detail: 'about' }))} className="flex flex-col items-center gap-4 bg-black/30 border border-white/10 p-4 rounded-lg hover:bg-black/50 transition-colors">
                        <FileText className="w-8 h-8 text-pink-400" />
                        <span className="text-white/80 font-pixel">Sobre mi</span>
                    </button>
                    <button onClick={() => window.dispatchEvent(new CustomEvent('openSection', { detail: 'portfolio' }))} className="flex flex-col items-center gap-4 bg-black/30 border border-white/10 p-4 rounded-lg hover:bg-black/50 transition-colors">
                        <Youtube className="w-8 h-8 text-pink-400" />
                        <span className="text-white/80 font-pixel">Portfolio</span>
                    </button>
                    <button onClick={() => window.dispatchEvent(new CustomEvent('openSection', { detail: 'about' }))} className="flex flex-col items-center gap-4 bg-black/30 border border-white/10 p-4 rounded-lg hover:bg-black/50 transition-colors">
                        <BookMarked className="w-8 h-8 text-pink-400" />
                        <span className="text-white/80 font-pixel">Skills</span>
                    </button>
                    <button onClick={() => window.dispatchEvent(new CustomEvent('openSection', { detail: 'games' }))} className="flex flex-col items-center gap-4 bg-black/30 border border-white/10 p-4 rounded-lg hover:bg-black/50 transition-colors">
                        <GamepadIcon className="w-8 h-8 text-pink-400" />
                        <span className="text-white/80 font-pixel">Juegos</span>
                    </button>
                    <button onClick={() => window.dispatchEvent(new CustomEvent('openSection', { detail: 'music' }))} className="flex flex-col items-center gap-4 bg-black/30 border border-white/10 p-4 rounded-lg hover:bg-black/50 transition-colors">
                        <ListMusic className="w-8 h-8 text-pink-400" />
                        <span className="text-white/80 font-pixel">Música</span>
                    </button>
                </div>
            </div>
        </Container>
    );
};

export default Introduction;
