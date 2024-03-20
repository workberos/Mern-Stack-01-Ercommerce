import { Image } from "antd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { WrapperSliderStyle } from "./style";

export default function SliderComponent({ arrImages }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };
    return (
        <WrapperSliderStyle {...settings}>
            {arrImages.map((image) => {
                return(
                    <Image key={image} src={image} alt="slider" width="100%" preview={false} />
                )
            })}
        </WrapperSliderStyle>
    )
}