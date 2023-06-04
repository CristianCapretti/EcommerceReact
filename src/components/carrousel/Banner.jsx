import { Link } from "react-router-dom";


const Banner=()=>{

    return (
        <div className="background-container mb-3 bannerBtn">
           <Link to={"/category/destacado"}>
                <button type="button " className="btn btn-dark content fw-bold font-monospace"> Nueva Coleccion</button>
            </Link>
        </div>
    )
}

export default Banner;