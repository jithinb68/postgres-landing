type BannerProps = {
    children: React.ReactNode,
    specificStyles?: React.CSSProperties
}

const Banner = ({ children, specificStyles }: BannerProps) => {
    return (
        <div className="h-screen" style={specificStyles}>
            {children}
        </div>
    )
}

export default Banner;