import PropTypes from "prop-types";


export const GifItem = ({title, url}) => {
    
  return (
    <div className="card">
        <img src={url} alt={title}></img>
        <p>{title}</p>
    </div>
  )
}

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

/* Tarea

1. Añadir PropTypes ???? yarn add
  a. title obligatorio
  b. url obligatorio

2. Evaluar snapshot
*/