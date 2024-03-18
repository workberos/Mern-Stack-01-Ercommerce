import TypeProduct from "../../components/TypeProduct/TypeProduct"
import { WrapperType } from "./style";

export default function HomePage() {
    const arr = ['TV', 'Tủ lạnh', 'Laptop'];
    return (
        <div style={{ padding: "0 120px" }}>
            <WrapperType >
                {arr.map(product => <TypeProduct key={product} name={product} />)}
            </WrapperType>
            <div>Homepage</div>
        </div>
    )
}