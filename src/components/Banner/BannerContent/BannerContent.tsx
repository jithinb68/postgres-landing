type BannerContentProps = {
    children: React.ReactNode
}

const BannerContent: React.FC<BannerContentProps> = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default BannerContent;