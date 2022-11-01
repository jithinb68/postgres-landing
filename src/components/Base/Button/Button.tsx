import { Icons } from '../../../utils/IconUtils';
import Icon from '../Icon/Icon'

type IconItem = {
    name: string,
    customClass: string
}

type ButtonProps = {
    label: string,
    icon?: IconItem,
    customClass?: string
}

const getIcon = (name: string) => {
     // @ts-ignore - to prevent ts warning for accesing enums dynamically
    return Icons[name.toUpperCase()]
}

const Button = ({ label, icon, customClass }: ButtonProps) => {
    
    return (
        <button
            className={`flex cursor-pointer ${customClass}`}
        >   
            {icon && <Icon customClass={icon.customClass} name={getIcon(icon.name)} />}
            {label}
        </button>
    )
}

export default Button;