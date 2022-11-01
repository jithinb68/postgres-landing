import { render, screen } from "@testing-library/react";
import Link from './Link'

test('verify if link loads', () => {
    const menu = {
        name: 'Google',
        url: "google.com"
    };
    render(<Link linkItem={menu}></Link>);
    expect(screen.getByRole('link')).toHaveAttribute('href', menu.url)
});