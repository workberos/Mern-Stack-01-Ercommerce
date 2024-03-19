import SliderComponent from "../../components/SliderComponent/SliderComponent";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import slider1 from "../../../assets/images/slider1.png";
import slider2 from "../../../assets/images/slider2.png";
import slider3 from "../../../assets/images/slider3.png";
import { WrapperTypeProduct } from "./style";
import CardComponent from "../../components/CardComponent/CardComponent";

export default function HomePage() {
    const arr = ['TV', 'Tủ lạnh', 'Laptop'];
    return (
        <>
            <div style={{ padding: "0 120px" }}>
                <WrapperTypeProduct >
                    {arr.map(product => <TypeProduct key={product} name={product} />)}
                </WrapperTypeProduct>
            </div>
            <div className="container" style={{ backgroundColor: "#efefef", padding: ' 0 120px', height: 1000}}>
                <SliderComponent arrImages={[slider1, slider2, slider3]}/>
                <div style={{marginTop: 20, display: 'flex', alignItems: 'center', gap: 20}}>
                    <CardComponent/>
                </div>
            </div>
        </>
    )
}