import SliderComponent from "../../components/SliderComponent/SliderComponent";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import slider1 from "../../../assets/images/slider1.png";
import slider2 from "../../../assets/images/slider2.png";
import slider3 from "../../../assets/images/slider3.png";
import { WrapperType } from "./style";

export default function HomePage() {
    const arr = ['TV', 'Tủ lạnh', 'Laptop'];
    return (
        <>
            <div style={{ padding: "0 120px" }}>
                <WrapperType >
                    {arr.map(product => <TypeProduct key={product} name={product} />)}
                </WrapperType>
            </div>
            <div className="container" style={{ backgroundColor: "#efefef", padding: ' 0 120px'}}>
                <SliderComponent arrImages={[slider1, slider2, slider3]}/>
            </div>
        </>
    )
}