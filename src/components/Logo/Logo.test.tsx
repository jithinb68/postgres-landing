import { render, screen } from "@testing-library/react";
import Logo from './Logo';

test('verify if logo loads', () => {
    render(<Logo />);
    const imgTag = screen.getByRole('img');
    expect(imgTag).toHaveAttribute('alt', 'brand-logo');
    expect(imgTag).toHaveAttribute('src', 'logo.svg');
});