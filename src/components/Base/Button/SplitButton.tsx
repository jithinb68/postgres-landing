import Button from "./Button";

type IconItem = {
    name: string,
    customClass?: string
}

type Item = {
    label: string,
    customClass?: string,
    icon?: IconItem
}

type ButtonProps = {
    customClass?: string,
    btnArr: Item[]
}

const SplitButton = ({ customClass, btnArr }: ButtonProps) => {
    return (
        <div className={customClass}>
            { 
                btnArr.map((btnItem, index) => <Button key={index} label={btnItem.label} icon={btnItem.icon} customClass={btnItem.customClass} />)
            }
        </div>
    )
}

export default SplitButton