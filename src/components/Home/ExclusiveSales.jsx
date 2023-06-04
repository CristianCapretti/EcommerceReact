
const ExclusiveSales=()=>{

    return (
        <div className="container-fluid exclusiveSales">
            <div className="row">
                <div className="text-center">
                    <div className="fw-bold ">
                        <h4>Registrate para obtener las ultimas novedades</h4>
                    </div>
                    <div>
                        <span className="textSecondary">Sé el primero en conocer los lanzamientos y ofertas exclusivas</span>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center ">
                <div className=" text-center divInput position-relative">
                    <input className="inputStyle position-absolute translate-middle " placeholder="Ingrese su email"/>
                    <button className="btnEnviarEmail position-absolute translate-middle  "></button>
                </div>
                <div className="text-center">
                    <p className="textTertiary">Al registrarte, aceptás los Términos y Condiciones  y la Política de Privacidad y Cookies</p>
                    <p className="textTertiary">Tus datos serán administrados por Southbay S.R.L.</p>
                </div>
            </div>
        </div>
    )

}
export default ExclusiveSales;