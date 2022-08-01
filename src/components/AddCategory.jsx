import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onNewCategory  }) => { //setCategories
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) =>{
        // console.log(target.value);
        setInputValue(target.value);
    };

    const onSubmit = (event) => {
        // console.log('hola mundo desde el submit');
        event.preventDefault();
        // console.log(inputValue);

        if(inputValue.trim().length <= 1) return;
        
        // setCategories(categories => [inputValue, ...categories]);
        onNewCategory(inputValue.trim());        

        setInputValue('');
    };

    return (
        <form onSubmit={ onSubmit } aria-label="form">
            <input 
                type="text" 
                placeholder="Buscar gifs" 
                value={inputValue} 
                onChange={ onInputChange } 
            />
        </form>
    );
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}