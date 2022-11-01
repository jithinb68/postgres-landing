import { IconMap } from "../../../utils/IconUtils"

const getIcon = (str: string): string => {
    return IconMap[str] || ''
}

type IconProps = {
    name: string
}

const Icon = ({ name }: IconProps) => {
    return (
        <img src={getIcon(name)} alt={`${name}-icon`} />
    )
}

export default Icon;