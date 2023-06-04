import ItemListContainer from "../Products/ItemListContainer"
import Banner from "./Banner";
import Carrousel from "./Carrousel"
import ExclusiveSales from "./ExclusiveSales";

const Home=()=>{

    return(
        <div>
            <Banner />
            <Carrousel />
            <ItemListContainer/>
            <ExclusiveSales/>
        </div>
    )


}

export default Home;