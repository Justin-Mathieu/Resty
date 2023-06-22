import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Results from '.';


describe('Results Component', () => {
    test('initial state', () => {
        render(<Results />);

        let element = screen.getByTestId('test')
        expect(element).toBeInTheDocument();
    });


});