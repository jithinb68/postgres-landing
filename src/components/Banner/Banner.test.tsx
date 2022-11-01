import { render, screen } from "@testing-library/react";
import Banner from './Banner';
import BannerContent from "./BannerContent/BannerContent";

test('verify if banner base component loads children', () => {
    render(<Banner >Im a child element</Banner>);
    const buttonLabel = screen.getByText('Im a child element');
    expect(buttonLabel).toBeInTheDocument();
});

test('verify if banner content component loads children', () => {
    render(<BannerContent >Im a child element</BannerContent>);
    const buttonLabel = screen.getByText('Im a child element');
    expect(buttonLabel).toBeInTheDocument();
});