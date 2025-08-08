interface ContainerProps {
    children: React.ReactNode
}

const Container = (props: ContainerProps) => {
    const { children } = props

    return (
        <div className="w-full">
            {children}
        </div>
    );
}

export default Container;