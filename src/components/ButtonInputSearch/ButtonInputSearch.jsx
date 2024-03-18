import Input from "antd/es/input/Input";
import { SearchOutlined } from '@ant-design/icons';
import { Button } from "antd";

export default function ButtonInputSearch(props) {
    const {
        size, placeholder, textButton,
        backgroundColorInput = "#ffff",
        backgroundColorButton = "rgb( 13, 92, 182)",
        colorButton = "#ffff",
        variant = "borderless",
    } = props;
    return (
        <div style={{ display: 'flex', background: "#fff" }}>
            <Input
                size={size}
                placeholder={placeholder}
                variant= {variant}
                style={{ borderRadius: 0, backgroundColor: backgroundColorInput }}
            />
            <Button
                size={size}
                icon={<SearchOutlined style={{ color: colorButton }} />}
                style={{ borderRadius: 0, border: variant === "borderless" &&  'none', backgroundColor: backgroundColorButton }}
            >
                <span style={{ color: colorButton }}>{textButton}</span>
            </Button>
        </div>
    )
}