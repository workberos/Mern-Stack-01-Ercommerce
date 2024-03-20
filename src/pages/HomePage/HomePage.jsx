import slider1 from "../../../assets/images/slider1.png";
import slider2 from "../../../assets/images/slider2.png";
import slider3 from "../../../assets/images/slider3.png";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import CardComponent from "../../components/CardComponent/CardComponent";   
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import { WrapperButtonMore, WrapperProducts, WrapperTypeProduct } from "./style";

export default function HomePage() {
    const arr = ['TV', 'Tủ lạnh', 'Laptop'];
    return (
        <>
            <div style={{ padding: "0 120px" }}>
                <WrapperTypeProduct >
                    {arr.map(product => <TypeProduct key={product} name={product} />)}
                </WrapperTypeProduct>
            </div>
            <div className="body" style={{width: '100%', background: '#efefef'}}>
            <div className="container" style={{ backgroundColor: "#efefef", padding: ' 0 120px', height: "fit-content", width: 1470, margin: '0 auto'}}>
                <SliderComponent arrImages={[slider1, slider2, slider3]} />
                <WrapperProducts>
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    {/* <CardComponent />
                    <CardComponent />
                    <CardComponent /> */}
                </WrapperProducts>
                <div style={{width: '100%', display: 'flex', marginTop: 10, justifyContent: 'center'}}>
                    <WrapperButtonMore textButton="Xem thêm" type="outline" styleButton={{
                        border: '1px solid rgb(11, 116, 229)',
                        color: 'rgb(11, 116, 229)',
                        width: 240,
                        height: 38,
                        borderRadius: 4,
                    }} styleTextButton={{ fontWeight: 500 }} />
                </div>

            </div>
            </div>
        </>
    )
}