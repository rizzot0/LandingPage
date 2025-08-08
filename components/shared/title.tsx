
interface TitleProps {
    title: string
    subtitle: string
}

const Title = (props: TitleProps) => {
    const { title, subtitle } = props

    return (
        <div className="flex flex-col items-center mb-8">
            <h3 className="text-white/70 text-sm mb-2 pixel-text">{title}</h3>
            <h2 className="text-2xl md:text-3xl text-white font-bold pixel-text text-center">
                {subtitle}
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-white to-transparent mt-4"></div>
        </div>
    );
}

export default Title;