import {  NavLink } from "react-router-dom";

const Sales=()=>{

    const style={
        textDecoration: 'none',
        color:'White' 
    }
    return(
        <div className="text-center bg-dark ">
                <p className="text-light "> Hoy <span className="text-danger fw-bold">20% Off  </span>en nuestras prendas destacadas<NavLink to={"/category/destacado"} style={style} className="fw-bold">  click aqui </NavLink></p>   
        </div>
    )

}

export default Sales;