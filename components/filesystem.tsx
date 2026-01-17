"use client";

import { useEffect, useState } from "react";
import Introduction from "./introduction";
import AboutMe from "./aboutme";
import Portfolio from "./porfolio";
import Games from "./games";
import Music from "./music";
import Contact from "./contact";
import { Ghost, Music as MusicIcon, Gamepad2, FolderOpen, User, Mail } from "lucide-react";

const FileSystem = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      id: "introduction",
      title: "Introducción",
      icon: <User size={20} />,
      component: <Introduction />
    },
    {
      id: "about",
      title: "Sobre mi",
      icon: <Ghost size={20} />,
      component: <AboutMe />
    },
    {
      id: "portfolio",
      title: "Proyectos",
      icon: <FolderOpen size={20} />,
      component: <Portfolio />
    },
    {
      id: "games",
      title: "Jueguitos",
      icon: <Gamepad2 size={20} />,
      component: <Games />
    },
    {
      id: "music",
      title: "Música",
      icon: <MusicIcon size={20} />,
      component: <Music />
    },
    {
      id: "contact",
      title: "Contacto",
      icon: <Mail size={20} />,
      component: <Contact />
    }
  ];

  const handleMenuClick = (sectionId: string) => {
    if (activeSection === sectionId) {
      setActiveSection(null);
    } else {
      setActiveSection(sectionId);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Permite abrir secciones desde otros componentes mediante eventos personalizados
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail;
      if (typeof detail === "string") {
        setActiveSection(detail);
      }
    };

    window.addEventListener("openSection", handler as EventListener);
    return () => window.removeEventListener("openSection", handler as EventListener);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Botón hamburguesa fijo */}
      <button
        onClick={toggleMenu}
        className="fixed top-8 left-8 z-50 p-4 rounded-xl bg-pink-500/20 hover:bg-pink-500/30 transition-all duration-300 backdrop-blur-sm border border-white/10 shadow-lg hover:shadow-pink-500/20"
        aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
      >
        <div className="w-8 h-8 relative flex items-center justify-center">
          <span className={`absolute h-0.5 bg-white transition-all duration-300 ${
            isMenuOpen ? 'w-0' : 'w-8'
          }`}></span>
          <span className={`absolute h-0.5 w-8 bg-white transition-all duration-300 ${
            isMenuOpen ? 'rotate-45' : 'translate-y-2.5'
          }`}></span>
          <span className={`absolute h-0.5 w-8 bg-white transition-all duration-300 ${
            isMenuOpen ? '-rotate-45' : '-translate-y-2.5'
          }`}></span>
        </div>
      </button>

      {/* Overlay con efecto de desvanecimiento */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-40 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      />

      {/* Off-canvas Sidebar */}
      <div 
        className={`fixed inset-y-0 left-0 w-72 bg-white/10 backdrop-blur-md border-r border-white/20 p-6 transform transition-all duration-500 ease-out z-50 shadow-2xl ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header con animación */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-xl font-bold text-white pixel-text opacity-0 animate-fadeIn">FILESYSTEM</h1>
            <div className={`w-4 h-4 bg-pink-500 rounded-full flex items-center justify-center transition-transform duration-500 ${
              isMenuOpen ? 'scale-100' : 'scale-0'
            }`}>
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
          </div>
          <div className="h-0.5 bg-gradient-to-r from-transparent via-pink-500 to-transparent transform transition-transform duration-700 delay-200"></div>
        </div>

        {/* Menú de navegación con animación */}
        <div className="space-y-2">
        {menuItems.map((item, index) => (
          <button
            key={item.id}
            onClick={() => {
              handleMenuClick(item.id);
              toggleMenu();
            }}
            className={`w-full p-3 rounded-lg transition-all duration-300 text-left transform ${
              isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
            } delay-[${100 + index * 50}ms] ${
              activeSection === item.id
                ? "bg-pink-500/20 text-pink-300"
                : "text-white hover:bg-pink-500/10"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`transition-colors duration-300 ${
                activeSection === item.id ? "text-pink-400" : "text-white/70"
              }`}>
                {item.icon}
              </div>
              <span className="font-bold text-sm pixel-text">{item.title}</span>
            </div>
          </button>
        ))}
        </div>

        {/* Footer */}
        <div className="mt-auto pt-4">
          {/* Footer con información del sistema */}
          <div className={`mt-4 p-3 text-center text-white/50 text-xs transition-all duration-500 transform ${
            isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          } delay-[600ms]`}>
            <p className="pixel-text">Rizzot0&apos;s Portfolio v2.0</p>
            <p className="mt-1">Retro Edition</p>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="p-6 md:p-8">
        {/* Contenido dinámico */}
        <div className="max-w-6xl mx-auto">
          {!activeSection ? (
            <Introduction />
          ) : (
            <div className="bg-white/5 rounded-lg border border-white/20 p-8 backdrop-blur-sm min-h-[calc(100vh-8rem)]">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-white font-bold text-2xl pixel-text">
                  {menuItems.find(item => item.id === activeSection)?.title || "Gracias"}
                </h2>
              </div>
              <div className="overflow-y-auto">
                {menuItems.find(item => item.id === activeSection)?.component}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileSystem; 