import { itemsNavbar } from "@/data"
import { ToggleTheme } from "./toggle-theme"

const Navbar = () => {
    return (
        <nav className="fixed z-20 flex flex-col items-center w-full mt-auto justify-center h-max bottom-20">
            <div className="flex items-center gap-2 justify-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border-2 border-white/30 shadow-lg">
                {itemsNavbar.map((item) => (
                    <div key={item.id} className="cursor-pointer hover:bg-white/20 px-3 py-2 rounded-full transition duration-150 group">
                        <a 
                            href={item.link} 
                            className="flex items-center text-white hover:text-pink-300 transition-colors"
                            target={item.external ? "_blank" : undefined}
                            rel={item.external ? "noopener noreferrer" : undefined}
                        >
                            <div className="group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                        </a>
                    </div>
                ))}
                <div className="border-l border-white/30 h-6 mx-2"></div>
                <ToggleTheme/>
            </div>
        </nav>
    )
}

export default Navbar