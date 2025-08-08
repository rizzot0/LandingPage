import { 
    BookText, 
    Briefcase, 
    Brush,
    Code2,
    CodeSquare, 
    Github, 
    Home, 
    Inbox,
    LayoutPanelTop,
    UserRound, 
    UsersRound, 
    Wrench 
} from "lucide-react";

export const dataAboutMe = [
    {
        id: 1,
        name: "Experiencia",
        icon: <Briefcase />,
        description: "+4 años de experiencia",
    },
    {
        id: 2,
        name: "Clientes",
        icon: <UsersRound />,
        description: "+200 clientes satisfechos",
    },
    {
        id: 3,
        name: "Proyectos",
        icon: <Wrench />,
        description: "+50 completados",
    },
];

export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <Home size={20} />,
        link: "#home",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={20} />,
        link: "#about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={20} />,
        link: "#services",
    },
    {
        id: 4,
        title: "Portfolio",
        icon: <CodeSquare size={20} />,
        link: "#portfolio",
    },
    {
        id: 5,
        title: "GitHub",
        icon: <Github size={20} />,
        link: "https://github.com/rizzot0",
        external: true
    },
];

export const dataSlider = [
    {
        id: 1,
        url: "/slider-1.jpg",
    },
    {
        id: 2,
        url: "/slider-2.jpg",
    },
    {
        id: 3,
        url: "/slider-3.jpg",
    },
    {
        id: 4,
        url: "/slider-4.jpg",
    },
]

export const dataPortfolio = [
    {
        id: 1,
        title: "RIZZOFLIX - Netflix Clone",
        image: "/rizzoflix.png",
        urlGithub: "https://github.com/rizzot0/NetflixClone",
        urlDemo: "https://netflix-clone-kappa-bice-81.vercel.app/",
        description: "Clon completo de Netflix con sistema de autenticación, selección de perfiles, y catálogo de películas. Tecnologías: Next.js, TypeScript, Tailwind CSS.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
        features: ["Autenticación", "Perfiles múltiples", "Catálogo de películas", "Responsive design"]
    },
    {
        id: 2,
        title: "English Learning App",
        image: "/englishapp.png",
        urlGithub: "https://github.com/rizzot0/englishapp-web-template",
        urlDemo: "https://englishappca.netlify.app/",
        description: "Aplicación educativa de inglés con 6 minijuegos para niños de primer ciclo básico. Temáticas: frutas, animales, colores y más.",
        technologies: ["React", "JavaScript", "CSS3", "HTML5"],
        features: ["6 minijuegos", "Educativo", "Orientado a niños", "Múltiples temáticas"]
    },
    {
        id: 3,
        title: "Web Pro",
        image: "/image-3.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
        description: "Proyecto web profesional con enfoque en UX/UI moderno.",
        technologies: ["React", "Node.js", "MongoDB"],
        features: ["Diseño moderno", "Responsive", "Optimizado"]
    },
    {
        id: 4,
        title: "Estrategias Web",
        image: "/image-4.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
        description: "Desarrollo de estrategias web innovadoras.",
        technologies: ["Next.js", "TypeScript", "Tailwind"],
        features: ["Estrategia", "Innovación", "Performance"]
    },
    {
        id: 5,
        title: "Sitios Web Impactantes",
        image: "/image-5.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
        description: "Creación de sitios web con alto impacto visual.",
        technologies: ["React", "Three.js", "GSAP"],
        features: ["Animaciones", "3D", "Interactivo"]
    },
    {
        id: 6,
        title: "Proyectos Web Dinámicos",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
        description: "Desarrollo de aplicaciones web dinámicas y escalables.",
        technologies: ["Vue.js", "Node.js", "PostgreSQL"],
        features: ["Escalabilidad", "Performance", "Mantenible"]
    },
];


export const dataExperience = [
    {
        id: 1,
        title: "Frontend Development  💄",
        experience: [
            {
                name: "HTML",
                subtitle: "Experimentado",
                value: 80,
            },
            {
                name: "CSS",
                subtitle: "Intermedio",
                value: 75,
            },
            {
                name: "JavaScript",
                subtitle: "Experimentado",
                value: 60,
            },
            {
                name: "Tailwind CSS",
                subtitle: "Experimentado",
                value: 30,
            },
            {
                name: "React",
                subtitle: "Experimentado",
                value: 60,
            },
            {
                name: "Bootstrap",
                subtitle: "Basic",
                value: 50,
            },
        ],
    },
    {
        id: 2,
        title: "Backend Development  🥷",
        experience: [
            {
                name: "Node JS",
                subtitle: "Experimentado",
                value: 80,
            },
            {
                name: "Mongo DB",
                subtitle: "Intermedio",
                value: 75,
            },
            {
                name: "Python",
                subtitle: "Basic",
                value: 60,
            },
            {
                name: "MySQL",
                subtitle: "Experimentado",
                value: 60,
            },
            {
                name: "PHP",
                subtitle: "Experimentado",
                value: 60,
            },
            {
                name: "Django",
                subtitle: "Basic",
                value: 60,
            },
        ],
    },
];


export const dataServices = [
    {
        id: 1,
        title: "Desarrollo Web",
        icon: <LayoutPanelTop />,
        features: [
            {
                name: "Desarrollo de sitios web personalizados",
            },
            {
                name: "Diseño y desarrollo responsive",
            },
            {
                name: "Optimización SEO",
            },
            {
                name: "Desarrollo de aplicaciones web",
            },
            {
                name: "Gestión de contenido",
            },
            {
                name: "Comercio electrónico",
            },
            {
                name: "Mantenimiento y soporte continuo",
            },
        ],
    },
    {
        id: 2,
        title: "Creación de contenido",
        icon: <Brush />,
        features: [
            {
                name: "Redacción de contenido original y de calidad",
            },
            {
                name: "Creación de vídeos atractivos y dinámicos",
            },
            {
                name: "Diseño gráfico para una imagen impactante",
            },
            {
                name: "Edición profesional de textos y materiales visuales",
            },
            {
                name: "Estrategias de marketing de contenidos efectivas",
            },
            {
                name: "Producción de podcasts informativos y entretenidos",
            },
            {
                name: "Generación de infografías claras y visualmente atractivas",
            },
            {
                name: "Fotografía profesional para capturar momentos excepcionales",
            },
        ],
    },
    {
        id: 3,
        title: "UI/UX Design",
        icon: <Brush />,
        features: [
            {
                name: "Diseño intuitivo para una experiencia de usuario fluida",
            },
            {
                name: "Prototipado interactivo para visualizar la interfaz",
            },
            {
                name: "Investigación de usuarios para comprender necesidades y expectativas",
            },
            {
                name: "Optimización de la usabilidad para mejorar la accesibilidad",
            },
            {
                name: "Pruebas de usabilidad para evaluar la experiencia",
            },
            {
                name: "Diseño responsive para adaptarse a diferentes dispositivos",
            },
        ],
    },
];


export const dataContact = [
    {
        id: 1,
        title: "Github",
        subtitle: "github.com/rizzot0",
        link: "https://github.com/rizzot0/",
        icon: <Code2 />,
    },
    {
        id: 2,
        title: "Email",
        subtitle: "bastianalonso92@email.com",
        link: "mailto:bastianalonso92@gmail.com",
        icon: <Inbox />,
    },
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile-1.jpeg",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile-2.jpeg",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile-3.jpeg",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile-3.jpeg",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile-2.jpeg",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile-3.jpeg",
    },
];