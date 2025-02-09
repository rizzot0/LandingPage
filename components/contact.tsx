import { dataContact } from "@/data";
import Title from "./shared/title";
import Link from "next/link";

const Contact = () => {
    return (
        <div className="p-6 md:px-12 md:py-44 max-w-7xl mx-auto" id="contact">
            <Title title="Contacta conmigo" subtitle="Ponte en contacto conmigo 👋" />

            <div className="flex flex-col md:flex-row justify-center items-center md:gap-7 mt-8">
                {/* Contenedor flex que asegura que los tres apartados estén distribuidos horizontalmente y centrados */}
                {dataContact.map((data) => (
                    <div
                        key={data.id}
                        className="flex flex-col items-center justify-center dark:bg-slate-800 rounded-lg mb-5 p-6 text-center w-full md:w-1/3"
                    >
                        {/* Contenedor para los íconos centrados */}
                        <div className="flex justify-center items-center mb-3">
                            {data.icon}
                        </div>
                        {/* Título y subtítulo centrados */}
                        <p className="text-xl font-semibold mb-2">{data.title}</p>
                        <p className="text-gray-400 mb-4">{data.subtitle}</p>
                        {/* Enlace centrado */}
                        <Link
                            href={data.link}
                            target="_blank"
                            className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-400"
                        >
                            Enviar mensaje
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Contact;
