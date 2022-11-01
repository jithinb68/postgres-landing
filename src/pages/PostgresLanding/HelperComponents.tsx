import SplitButton from '../../components/Base/Button/SplitButton';
import Icon from '../../components/Base/Icon/Icon';
import { Icons } from '../../utils/IconUtils';

const gitHubBtns = [
    {
        label: 'Star',
        customClass: 'flex items-center px-2 py-1 rounded-l text-xs font-medium border border-grey-dark bg-grey-light',
        icon: {
            name: 'github',
            customClass: 'h-4 pr-0.5'
        }
    },
    {
        label: '883',
        customClass: 'flex items-center px-2 py-1 rounded-r text-xs font-medium border-r border-y border-grey-dark',
    }
];

const GitHubBtn = () => {
    return (
        <SplitButton customClass='mx-2.5 flex' btnArr={gitHubBtns} />
    )
}

const Search = () => {
    return (
        <Icon name={Icons.SEARCH} />
    )
}

type CustomCardContentProps = {
    cardContent: string
}

const CustomCardContent: React.FC<CustomCardContentProps> = ({ cardContent }) => {
    return (
        <div className='flex justify-between items-end'>
            <div className='text-lg text-black-light'>{cardContent}</div>
            <div className='flex justify-end basis-28'>
                <Icon name={Icons.ARROW} customClass="mb-1" />
            </div>
        </div>
    )
}

export { GitHubBtn, Search, CustomCardContent }