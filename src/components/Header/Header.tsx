import LogoWrapper from '../Logo/Logo';
import LinkWrapper from '../LinkWrapper/LinkWrapper';

type Item = {
    name: string,
    url: string
}

type HeaderElement = {
    startSlot?: React.ReactNode,
    endSlot?: React.ReactNode,
    headerLinks: Item[]
}

type HeaderProps = {
    left: HeaderElement,
    right: HeaderElement
}

const Header: React.FC<HeaderProps> = ({ left, right }) => {
    return (
        <div className='flex items-center'>
            <LogoWrapper />
            <LinkWrapper
                menuItems={left.headerLinks}
                linkCustomClass="font-medium px-5 hover:text-blue"
                startSlot={left.startSlot}
            />
            <LinkWrapper
                linkCustomClass="font-medium px-5 hover:text-blue"
                customClass="justify-end grow"
                menuItems={right.headerLinks}
                startSlot={right.startSlot}
                endSlot={right.endSlot}
            />
        </div>
    )
}

export default Header;