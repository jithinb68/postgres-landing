type LinkItem = {
    name: string,
    url: string
}

type LinksProps = {
    linkItem: LinkItem
}

const Links = ({ linkItem }: LinksProps) => {
    return (
        <a href={linkItem.url}> {
            linkItem.name
        }</a>
    )
}


export default Links;