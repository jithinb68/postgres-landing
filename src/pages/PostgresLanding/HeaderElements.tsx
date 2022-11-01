import SplitButton from '../../components/Base/Button/SplitButton';
import Icon from '../../components/Base/Icon/Icon';
import { Icons } from '../../utils/IconUtils';

const gitHubBtns = [
    {
        id: 1,
        label: 'Star',
        customClass: 'flex items-center px-2 py-1 rounded-l text-xs font-medium border border-grey-dark bg-grey',
        icon: {
            name: 'github',
            customClass: 'h-4 pr-0.5'
        }
    },
    {
        id: 2,
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

export { GitHubBtn, Search }