const Carrousel=()=>{

    return(
        <div className="mb-5">
            <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
                <div className="carousel-inner">
                    
                    <div className="carousel-item active">
                        <img src="https://img.lojasrenner.com.br/banner/UY/01-home/P01_230601_HOME-URUGUAI_CARROSSEL_50OFF2PECAS_DESK_GERALv2.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    
                    <div className="carousel-item ">
                        <img src="https://img.lojasrenner.com.br/banner/UY/01-home/P03_230515_HOME-URUGUAI_CARROSSEL_NOVIDADES_DESK_GERAL.jpg" className="d-block w-100 " alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )

}

export default Carrousel;