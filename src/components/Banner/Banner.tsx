type BannerProps = {
    children: React.ReactNode,
    customStyles?: React.CSSProperties
}

const Banner = ({ children, customStyles }: BannerProps) => {
    return (
        <div className="h-screen" style={customStyles}>
            {children}
        </div>
    )
}

export default Banner;