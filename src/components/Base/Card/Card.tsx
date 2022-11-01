type Item = {
    title: string,
    content: string
}

type CardItemProps = {
    cardItem: Item,
    customClass?: string,
    titleCustomClass?: string,
    customCardContent?: React.ReactNode
}

const Card: React.FC<CardItemProps> = ({ cardItem, customClass, titleCustomClass, customCardContent }) => {
    return (
        <div className={customClass}>
            <div className={titleCustomClass}> {cardItem.title} </div>
            <div> {customCardContent ? customCardContent : cardItem.content} </div>
        </div>
    )
}

export default Card;