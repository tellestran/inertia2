import Content from "./Component/Content";
import Carousel from "./Component/Carousel";
import Editorial from "./Component/Editorial";
import Homedecor from "./Component/Homedecor";
import FrontPageCover from "./Component/FrontPageCover";
import ShopProducts from "./Component/ShopProducts";
import BloackWrapper from "./Component/BlockWrapper";
import Footer from "./Component/Footer";

function Features(){
    return(
        <div>
            <Content></Content>
            <Carousel></Carousel>
            <Editorial></Editorial>
            <Homedecor></Homedecor>
            <FrontPageCover></FrontPageCover>
            <ShopProducts></ShopProducts>
            <BloackWrapper></BloackWrapper>
            <Footer></Footer>

        </div>
    )
}
export default Features;