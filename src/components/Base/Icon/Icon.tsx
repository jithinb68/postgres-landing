import { IconMap } from "../../../utils/IconUtils"

const getIcon = (str: string): string => {
    return IconMap[str] || ''
}

type IconProps = {
    name: string,
    customClass?: string
}

const Icon = ({ name, customClass }: IconProps) => {
    return (
        getIcon(name) ? <img className={customClass} src={getIcon(name)} alt={`${name?.toLowerCase()}-icon`} /> : null
    )
}

export default Icon;