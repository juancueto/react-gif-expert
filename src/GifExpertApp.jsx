import { useState } from "react";
// import { AddCategory } from "./components/AddCategory";
// import { GifGrid } from "./components/GifGrid";
import { AddCategory, GifGrid } from "./components";

export  const GitExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    // console.log(categories);
    const onAddCategory = (newCategory) => {
        // categories.push(newCategory);
        // console.log(newCategory);
        if(categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
        // setCategories( cat => [...cat, 'Naruto']);
    };

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
                // setCategories={setCategories} 
                onNewCategory={ event => onAddCategory(event)}
            />

            {/* Listado de Gif */}
            {/* <button onClick={ onAddCategory }>Agregar</button> */}
            {/* <ol>
            { 
                categories.map( (category) => 
                    (
                        <li key={category}>{category}</li> 
                    )
                )
            }
            </ol> */}

            { 
                categories.map( (category) => 
                    (
                        <GifGrid 
                            key={category} 
                            category={ category }
                        />
                    )
                )
            }

                {/* Gif Item */}
        </>
    )
}
