
// Provided the ability to wrap multiple links and also has slots ( start and end) which has a plug and use capability.

import Link from '../Base/Link/Link'

type Item = {
    name: string,
    url: string
}

type LinkWrapperProps = {
    menuItems: Item[],
    linkCustomClass?: string,
    startSlot?: React.ReactNode
    endSlot?: React.ReactNode,
    customClass?: string
}

const LinkWrapper: React.FC<LinkWrapperProps> = ({ menuItems, linkCustomClass, startSlot, endSlot, customClass }) => {
    return (
        <div className={`flex items-center ${customClass}`}>
            <div className='start-slot'>{startSlot}</div>
            {
                menuItems.map((menuItem, index) => <Link key={index} customClass={linkCustomClass} linkItem={menuItem}></Link>)
            }
            <div className='end-slot'>{endSlot}</div>
        </div>
    )
}


export default LinkWrapper;