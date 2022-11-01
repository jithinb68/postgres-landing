type LinkItem = {
    name: string,
    url: string
}

type LinksProps = {
    linkItem: LinkItem,
    customClass?: string
}

const Links = ({ linkItem, customClass }: LinksProps) => {
    return (
        <a className={customClass} href={linkItem.url}> {
            linkItem.name
        }</a>
    )
}


export default Links;