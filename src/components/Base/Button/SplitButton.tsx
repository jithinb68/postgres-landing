import Button from "./Button";

type IconItem = {
    name: string,
    customClass: string
}

type Item = {
    id: number,
    label: string,
    customClass?: string,
    icon?: IconItem
}

type ButtonProps = {
    customClass: string,
    btnArr: Item[]
}

const SplitButton = ({ customClass, btnArr }: ButtonProps) => {
    return (
        <div className={customClass}>
            { 
                btnArr.map((btnItem) => <Button key={btnItem.id} label={btnItem.label} icon={btnItem.icon} customClass={btnItem.customClass} />)
            }
        </div>
    )
}

export default SplitButton