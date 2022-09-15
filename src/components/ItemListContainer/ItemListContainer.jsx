import "./ItemListContainer.css"

// Aquí estamos recibiendo el Saludo de la Página por props
export const ItemListContainer = ({welcomePage}) => {
  return <h1 className="funColor">{welcomePage}</h1>;
}


export default ItemListContainer