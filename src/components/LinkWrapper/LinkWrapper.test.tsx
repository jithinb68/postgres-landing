import { render, screen } from "@testing-library/react";
import LinkWrapper from './LinkWrapper';
import Button from '../Base/Button/Button';

test('verify if link wrapper renders with the correct text', () => {
    const menu = [
        {
            name: 'Product',
            url: "#"
        }
    ];
    render(<LinkWrapper menuItems={menu} />);
    const headerLabel = screen.getByText('Product');
    expect(headerLabel).toBeInTheDocument();
});



test('verify if link wrapper loads with start and end slot', () => {
    const menu = [
        {
            name: 'Product',
            url: "#"
        }
    ];
    render(<LinkWrapper menuItems={menu} startSlot={<Button label="start-slot" />} endSlot={<Button label="end-slot" />} />);
    const startSlotLabel = screen.getByText('start-slot');
    const endSlotLabel = screen.getByText('end-slot');
    expect(startSlotLabel).toBeInTheDocument();
    expect(endSlotLabel).toBeInTheDocument();
});