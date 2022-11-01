import { render, screen } from '@testing-library/react';
import PostgresLanding from './PostgresLanding';

test('renders PostgresLanding', () => {
    render(<PostgresLanding />);
    const textElm = ['GraphQL API for PostgreSQL Instantly!', 'Pricing', 'New to Hasura?'];
    textElm.forEach((txt) => {
        const elm = screen.getByText(`${txt}`);
        expect(elm).toBeInTheDocument();
    });
});