import '@testing-library/jest-dom';
import { fireEvent, render, screen, userEvent } from '@testing-library/react';
import Header from '.';


describe('Header Component', () => {
    test('header renders page title', () => {
        render(<Header />);
        const header = screen.getByTestId('test')
        expect(header).toHaveTextContent('RESTy')
    });
});