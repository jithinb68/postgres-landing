import { render, screen } from "@testing-library/react";
import Card from './Card';
import Button from '../Button/Button';

test('verify if card renders', () => {
    render(<Card cardItem={{ title: 'card title', content: 'card content' }} />);
    const cardTitle = screen.getByText('card title');
    const cardContent = screen.getByText('card content');
    expect(cardTitle).toBeInTheDocument();
    expect(cardContent).toBeInTheDocument();
});

test('verify if card renders with custom card content', () => {
    render(<Card cardItem={{ title: 'card title', content: 'card content' }} customCardContent={<Button label="card-button" />} />);
    const cardTitle = screen.getByText('card title');
    const cardContent = screen.queryAllByText('card content');
    const buttonTag = screen.queryAllByRole('button');
    const buttonTitle = screen.getByText('card-button');
    expect(buttonTitle).toBeInTheDocument();
    expect(cardTitle).toBeInTheDocument();
    expect(buttonTag).toBeTruthy();
    expect(cardContent).toEqual([]);
});