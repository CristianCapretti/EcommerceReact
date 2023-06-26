import Item from "./Item";

const ItemList=({listaProductos})=>{
    console.log( "listando"+listaProductos);
return (
    
        <>
            {listaProductos.map(producto => <Item key={producto.id} producto={producto} />)}
        </>
    
)

}

export default ItemList;