import { render, screen } from "@testing-library/react";
import Button from './Button';
import SplitButton from './SplitButton'

test('verify if button renders with the correct text', () => {
    render(<Button label="sample label" />);
    const buttonLabel = screen.getByText('sample label');
    expect(buttonLabel).toBeInTheDocument();
});

test('verify if button with an icon renders correctly', () => {
    render(<Button label="sample label" icon={{ name: 'search' }} />);
    const buttonLabel = screen.getByText('sample label');
    expect(buttonLabel).toBeInTheDocument();
    const imgTag = screen.getByRole('img');
    expect(imgTag).toHaveAttribute('alt', 'search-icon'); 
    expect(imgTag).toHaveAttribute('src', 'search.svg');
});

test('verify if a button with an icon name passed invalid doesnt renders img tag', () => {
    render(<Button label="sample label" icon={{ name: 'searchds' }} />);
    const buttonLabel = screen.getByText('sample label');
    expect(buttonLabel).toBeInTheDocument();
    const imgTag = screen.queryAllByRole('img');
    expect(imgTag).toEqual([])
});

test('verify if split button renders 2 buttons', () => {
    const gitHubBtns = [
        {
            id: 1,
            label: 'Star',
            icon: {
                name: 'github',
                customClass: 'h-4 pr-0.5'
            }
        },
        {
            id: 2,
            label: '883',
        }
    ];
    render(<SplitButton btnArr={gitHubBtns} />);
    const buttonTag = screen.queryAllByRole('button');
    expect(buttonTag.length).toEqual(2)
});