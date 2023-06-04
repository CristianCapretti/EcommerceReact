import { Link } from "react-router-dom";

const Item = ({ producto }) => {
    const styleDiv={
        width:' 18rem'
    }
    return (
        <div className="col-md-3 mb-3">
            <div className="card shadow" style={styleDiv}>
                <img src={producto.imagen} className="card-img-top imgSize" alt={producto.descripcion}/>
                <div className="card-body">
                    <h5 className="card-title text-center">{producto.titulo}</h5>
                    <p className="card-text text-center">{producto.descripcion}</p>
                    <div className="text-center">
                        <Link to={"/item/"+producto.id}>
                            <button type="button " className="btn btn-dark ">Ver mas</button>
                        </Link>    
                    </div>                    
                </div>
            </div>
        </div>
    )
}



export default Item;