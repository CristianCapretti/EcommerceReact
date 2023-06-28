
import { useState } from "react";

const ExclusiveSales=()=>{

    //no hace un envio sino limpia el input a modo de parecer que cargo e hizo el envio
    const [inputValue, setInputValue] = useState('');
    const cambioDatos=(e)=>{
        setInputValue(e.target.value)

    }
    const EnvioEmail=()=>{
        if (inputValue.length > 0){
            setInputValue('');

        }
            
    }

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
                    <input className="inputStyle position-absolute translate-middle "style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} placeholder="Ingrese su email" onInput={cambioDatos} value={inputValue}/>
                    <button className="btnEnviarEmail position-absolute translate-middle  " onClick={EnvioEmail}></button>
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