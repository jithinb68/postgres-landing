import { IconMap } from "../../../utils/IconUtils"

const getIcon = (str: string): string => {
    return IconMap[str] || ''
}

type ButtonProps = {
    label: string,
    icon?: string
}

const Button = ({ label, icon }: ButtonProps) => {
    return (
        <button
            className="cursor-pointer"
        >
            {icon && <img src={getIcon(icon)} alt={`${icon}-icon`} />}
            {label}
        </button>
    )
}

export default Button;