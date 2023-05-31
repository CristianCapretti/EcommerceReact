import {  NavLink } from "react-router-dom";

const Sales=()=>{

    const style={
        textDecoration: 'none',
        color:'White' 
    }
    return(
        <div className="text-center bg-dark bg-gradient ">
             
                <p className="text-light py-2"> Hoy <span className="text-danger fw-bold">20% Off 🔥 </span>en alguna de nuestras prendas<NavLink to={"/category/destacado"} style={style} className="fw-bold">  click aqui </NavLink></p>
            
        </div>
    )

}

export default Sales;