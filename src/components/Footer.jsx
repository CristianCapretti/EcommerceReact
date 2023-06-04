import { Link } from "react-router-dom";


const Footer=()=>{

    return (
        <div className="mt-5">
            <div className="container-fluid text-light bg-dark py-5">
                <div className="container">
                    <div className="row justify-content-center mb-3">
                        <div className="col-md-3">
                            <h6 className="fw-bold font-monospace">Colecciones</h6> 
                            <ul className="">
                                <li className="nav-item  ">
                                    <Link className="nav-Link text-light ms-3 " aria-current="page" to={'/'}>Home</Link>
                                </li >
                                <li className="nav-item " >
                                    <Link className="nav-Link text-light ms-3 " aria-current="page" to={'/category/hombre'}>Hombre</Link>                                                
                                </li>
                                <li className="nav-item  me-3 ">
                                    <Link className="nav-Link text-light ms-3 " aria-current="page" to={'/category/mujer'}>Mujer</Link>    
                                </li>
                                <li className="nav-item  me-3 ">
                                    <Link className="nav-Link text-light ms-3 " aria-current="page" to={'/category/destacado'}>Destacado</Link>    
                                </li>
                            </ul>   
                        </div>
                        <div className="col-md-3">
                            <h6 className="fw-bold font-monospace">Ayuda</h6>  
                            <ul className="">
                                <li className="nav-item  ">
                                    <Link className="nav-Link text-light ms-3 " aria-current="page" to={'/'}>Preguntas Frecuentes</Link>
                                </li >
                                <li className="nav-item " >
                                    <Link className="nav-Link text-light ms-3 " aria-current="page" to={'/'}>Envio Gratis</Link>                                                
                                </li>
                                <li className="nav-item  me-3 ">
                                    <Link className="nav-Link text-light ms-3 " aria-current="page" to={'/'}>Politica de cambios</Link>    
                                </li>
                            </ul>     
                        </div>
                        <div className="col-md-3">
                            <h6 className="fw-bold font-monospace">Acerca de</h6> 
                            <ul className="">
                                <li className="nav-item  ">
                                    <Link className="nav-Link text-light ms-3 " aria-current="page" to={'/'}>Quienes somos</Link>
                                </li >
                                <li className="nav-item  ">
                                    <Link className="nav-Link text-light ms-3 " aria-current="page" to={'/'}>Ubicacion</Link>
                                </li >
                            </ul>        
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-md-12 text-center">
                            <Link to={"https://twitter.com/"} className="text-light ms-2 "><i class="fa-brands fa-twitter iconSocial"></i></Link>
                            <Link to={"https://www.facebook.com/"} className="text-light ms-2"><i class="fa-brands fa-facebook iconSocial"></i></Link>
                            <Link to={"https://www.tiktok.com/"} className="text-light ms-2"><i class="fa-brands fa-tiktok iconSocial"></i></Link>
                            <Link to={"https://www.instagram.com/"} className="text-light ms-2"><i class="fa-brands fa-instagram iconSocial"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;