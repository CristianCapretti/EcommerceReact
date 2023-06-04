import ItemCount from './ItemCount'


const ItemDetail=({item})=>{

    return(
        <div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-5 offset-md-1">
                        <img src={item.imagen} alt={item.titulo} className="img-fluid" />
                    </div>
                    <div className="col-md-5">
                        <h1>{item.titulo}</h1>
                        <h3>{item.descripcion}</h3>
                        <p><b>${item.precio}</b></p>
                        <ItemCount stock={item.stock} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;