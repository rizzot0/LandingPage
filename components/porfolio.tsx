import { dataPortfolio } from "@/data";
import Title from "./shared/title";
import Image from "next/image";
import Link from "next/link";

const Portfolio = () => {
    // Proyectos destacados (los dos primeros)
    const featuredProjects = dataPortfolio.slice(0, 2);

    return (
        <div className="p-4 max-w-6xl md:py-24 mx-auto" id="portfolio">
            <div className="crt-frame">
                <Title title="Portfolio" subtitle="Trabajos recientes 💼" />

                {/* Proyectos destacados */}
                <div>
                    <h3 className="text-white font-bold mb-6 pixel-text text-center text-lg">
                        Proyectos Destacados ⭐
                    </h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        {featuredProjects.map((data) => (
                            <div key={data.id} className="group">
                                <div className="relative overflow-hidden rounded-lg border-2 border-white bg-gradient-to-br from-purple-900 to-pink-900 p-6 transition-all duration-300 hover:scale-105">
                                    <div className="relative mb-4">
                                        <Image
                                            src={data.image}
                                            alt={data.title}
                                            width={400}
                                            height={300}
                                            className="w-full h-48 object-cover rounded-lg"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>

                                        <div className="absolute top-2 right-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs px-2 py-1 rounded-full font-bold">
                                            ⭐ Destacado
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="text-white font-bold text-lg pixel-text">
                                            {data.title}
                                        </h3>

                                        {data.description && (
                                            <p className="text-gray-300 text-sm leading-relaxed">
                                                {data.description}
                                            </p>
                                        )}

                                        {data.technologies && (
                                            <div className="space-y-2">
                                                <h4 className="text-white/80 text-xs font-bold">Tecnologías:</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {data.technologies.map((tech, index) => (
                                                        <span
                                                            key={index}
                                                            className="bg-white/20 text-white text-xs px-3 py-1 rounded-full border border-white/30"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {data.features && (
                                            <div className="space-y-2">
                                                <h4 className="text-white/80 text-xs font-bold">Características:</h4>
                                                <div className="flex flex-wrap gap-1">
                                                    {data.features.map((feature, index) => (
                                                        <span
                                                            key={index}
                                                            className="bg-pink-500/20 text-pink-300 text-xs px-2 py-1 rounded border border-pink-500/30"
                                                        >
                                                            {feature}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        <div className="flex gap-3 pt-2">
                                            <Link
                                                className="retro-button text-xs flex-1 text-center"
                                                href={data.urlGithub}
                                                target="_blank"
                                            >
                                                📁 Github
                                            </Link>

                                            <Link
                                                className="retro-button text-xs flex-1 text-center"
                                                href={data.urlDemo}
                                                target="_blank"
                                            >
                                                🌐 Live Demo
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
