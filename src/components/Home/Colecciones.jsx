import { Link } from "react-router-dom";
const Colecciones=()=>{
    
    return (
        <div >
            <div className="row justify-content-evenly my-5">
                <div className="col-lg-5 coleccionHombre shadow ">
                    <Link to={"/category/hombre"}>
                        <button type="button " className="btn btn-dark content fw-bold font-monospace btnEfect"> Ver mas</button>
                    </Link>
                </div>
                <div className="col-lg-5 coleccionMujer shadow ">
                    <Link to={"/category/mujer"}>
                        <button type="button " className="btn btn-dark content fw-bold font-monospace btnEfect"> Ver mas</button>
                    </Link>
                </div>
            </div>
        </div>
    )

}

export default Colecciones