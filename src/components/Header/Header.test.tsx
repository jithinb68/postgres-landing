import { render, screen } from "@testing-library/react";
import Header from './Header';
import Button from '../Base/Button/Button'

test('verify if header loads with atleast one link', () => {
    const menu = [
        {
            name: 'Product',
            url: "#"
        }
    ];
    render(
        <Header
            left={{ headerLinks: menu }}
        />);
    const headerLabel = screen.getByText('Product');
    expect(headerLabel).toBeInTheDocument();
});

test('verify if header loads with start and end slot', () => {
    const menu = [
        {
            name: 'Product',
            url: "#"
        }
    ];
    render(
        <Header
            left={{ headerLinks: menu, startSlot: <Button label="start-slot" />, endSlot: <Button label="end-slot" /> }}
        />);
    const startSlotLabel = screen.getByText('start-slot');
    const endSlotLabel = screen.getByText('end-slot');
    expect(startSlotLabel).toBeInTheDocument();
    expect(endSlotLabel).toBeInTheDocument();
});