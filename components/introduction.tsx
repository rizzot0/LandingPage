'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Youtube, FileText, BookMarked, GamepadIcon, ListMusic, Mail, ChevronRight } from 'lucide-react';
import Container from './shared/container';
import LayerStack from './shared/layers';

const dialogues = [
    {
        text: [
            "* ¡Bienvenido a mi página personal de desarrollador!",
            "* Aquí guardaré cosas sobre mí, como música, proyectos y más.",
            "* Busco que sea un sitio seguro para expresarme y compartir."
        ]
    },
    {
        text: [
            "* A veces me gusta crear cosas sin razón.",
            "* El arte digital es mi pasión.",
            "* ¿Qué tal tu día?"
        ]
    },
    {
        text: [
            "* La programación es como resolver puzzles.",
            "* Cada línea de código cuenta una historia.",
            "* ¿No lo crees?"
        ]
    },
    {
        text: [
            "* Los videojuegos indie son geniales.",
            "* Me inspiran a crear cosas únicas.",
            "* ¿Cuál es tu favorito?"
        ]
    },
    {
        text: [
            "* La música lo-fi me ayuda a concentrarme.",
            "* A veces hago mis propias mezclas.",
            "* ¿Te gustaría escuchar?"
        ]
    },
    {
        text: [
            "* El pixel art tiene un encanto especial.",
            "* Me recuerda a los juegos retro.",
            "* Simple pero efectivo."
        ]
    }
];

const Introduction = () => {
    const [currentDialogue, setCurrentDialogue] = useState(0);

    const nextDialogue = () => {
        if (currentDialogue === 0) {
            // Después del primero, elegir uno aleatorio (1-5)
            const randomIndex = Math.floor(Math.random() * (dialogues.length - 1)) + 1;
            setCurrentDialogue(randomIndex);
        } else {
            // Si ya estamos en uno aleatorio, elegir otro aleatorio
            let newIndex;
            do {
                newIndex = Math.floor(Math.random() * (dialogues.length - 1)) + 1;
            } while (newIndex === currentDialogue);
            setCurrentDialogue(newIndex);
        }
    };

    return (
        <Container>
            <div className="min-h-screen w-full px-6 py-12 text-white font-mono relative">
                {/* Layered panels background */}
                <LayerStack />
                {/* Diálogo estilo Deltarune */}
                <div className="relative z-10 deltarune-box mb-8">
                    <div className="flex items-start gap-4">
                        <div className="w-24 h-24 bg-black border-2 border-white p-1 flex-shrink-0">
                            <div className="w-full h-full relative">
                                <Image 
                                    src="/rizzo.jpg"
                                    alt="rizzo sprite"
                                    className="pixel-image object-contain"
                                    width={96}
                                    height={96}
                                />
                            </div>
                        </div>
                        <div className="flex-1 space-y-2">
                            <h2 className="text-sm text-white pixel-text">* rizzo</h2>
                            <div className="text-xs text-white font-pixel leading-relaxed space-y-1.5">
                                {dialogues[currentDialogue].text.map((line, index) => (
                                    <p key={index}>{line}</p>
                                ))}
                            </div>
                        </div>
                        <button 
                            onClick={nextDialogue}
                            className="flex-shrink-0 text-white hover:text-pink-400 transition-colors mt-auto mb-2"
                            aria-label="Next dialogue"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                <hr className="border-white/20 mb-6 w-full" />

                {/* Links con estilo pixel art */}
                <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 gap-6">
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
                    <button onClick={() => window.dispatchEvent(new CustomEvent('openSection', { detail: 'contact' }))} className="flex flex-col items-center gap-4 bg-black/30 border border-white/10 p-4 rounded-lg hover:bg-black/50 transition-colors">
                        <Mail className="w-8 h-8 text-pink-400" />
                        <span className="text-white/80 font-pixel">Contacto</span>
                    </button>
                </div>
            </div>
        </Container>
    );
};

export default Introduction;
