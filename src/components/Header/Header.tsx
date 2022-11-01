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
    isLogoRequired?: boolean
    left?: HeaderElement,
    right?: HeaderElement
}

const Header: React.FC<HeaderProps> = ({ left, right, isLogoRequired }) => {
    return (
        <div className='flex items-center'>
            {isLogoRequired && <LogoWrapper />}
            {left && <LinkWrapper
                menuItems={left.headerLinks}
                linkCustomClass="font-medium px-5 hover:text-blue"
                startSlot={left.startSlot}
                endSlot={left.endSlot}
            />} 
            {right && <LinkWrapper
                linkCustomClass="font-medium px-5 hover:text-blue"
                customClass="justify-end grow"
                menuItems={right.headerLinks}
                startSlot={right.startSlot}
                endSlot={right.endSlot}
            />}
        </div>
    )
}

export default Header;