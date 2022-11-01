import { render, screen } from "@testing-library/react";
import Icon from './Icon';
import { Icons } from '../../../utils/IconUtils';

test('verify if icon renders with correct label and alt atribute', () => {
    render(<Icon name={Icons.SEARCH} />);
    const imgTag = screen.getByRole('img');
    expect(imgTag).toHaveAttribute('alt', 'search-icon');
    expect(imgTag).toHaveAttribute('src', 'search.svg');
});