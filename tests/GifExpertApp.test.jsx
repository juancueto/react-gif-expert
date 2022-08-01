import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';


describe('Pruebas en <GifExpertApp/>', () => {
    test('debe de hacer match con el snapshot', () => {
        const { container } =  render(<GifExpertApp></GifExpertApp>);
        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar un valor al enviarse al form', () => { 
        const inputValue = 'Naruto';
        
        render(<GifExpertApp></GifExpertApp>);
        
        const form = screen.getByRole('form');
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value : inputValue }});
        fireEvent.submit(form);     
        expect(input.value).toBe('');
        expect(screen.getByText(inputValue)).toBeTruthy();
    });

    test('debe de mostrar un unico valor al enviarse al form si se envie mas de una vez', () => { 
        const inputValue = 'Naruto';
        
        render(<GifExpertApp></GifExpertApp>);
        
        const form = screen.getByRole('form');
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value : inputValue }});
        fireEvent.submit(form);                

        fireEvent.input(input, { target: { value : inputValue }});
        fireEvent.submit(form);                
        // screen.debug();
        expect(screen.getAllByText(inputValue).length).toBe(1);
    });

    test('no debe de mostrar inputValue si es de un character al enviarse al form', () => { 
        const inputValue = 'N';
        
        render(<GifExpertApp></GifExpertApp>);
        
        const form = screen.getByRole('form');
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value : inputValue }});
        fireEvent.submit(form);                

        expect(input.value).toBe(inputValue);
    });
});