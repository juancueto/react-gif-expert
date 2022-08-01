import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from "../../src/components/AddCategory";



describe('Pruebas en <AddCategory />', () => {
    test('debe de cambiar el valor de la caja de texto', () => { 
        render(<AddCategory onNewCategory={ () => { } } />);
        
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value : 'Saitama' }});

        // screen.debug();
        expect(input.value).toBe('Saitama');
    });

    test('debe de llamar onNewCategory si el input tiene un valor', () => {
        const inputValue = 'Saitama';

        // crear mock function: jest function
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory } />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value : inputValue }});
        fireEvent.submit(form);

        expect(input.value).toBe('');

        // screen.debug();
        
        // 1. Validar que se llame a funcion y se envie el valor del input
        // 1.1. Validar que se llame a funcion:
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        // 1,2 Validar que se envie el valor del input
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });

    test('no debe llamar al onNewCategory si el input esta vacio', () => { 
        // crear mock function: jest function
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory } />);

        const form = screen.getByRole('form');

        fireEvent.submit(form);

        expect(onNewCategory).not.toHaveBeenCalled();
    });

    test('no debe llamar al onNewCategory si el input tiene un caracter', () => { 
        const inputValue = 's';

        // crear mock function: jest function
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory } />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value : inputValue }});
        fireEvent.submit(form);

        expect(input.value).toBe(inputValue);
        expect(onNewCategory).not.toHaveBeenCalled();
    });
});

