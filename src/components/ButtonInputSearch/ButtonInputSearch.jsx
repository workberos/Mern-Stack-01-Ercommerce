import { SearchOutlined } from '@ant-design/icons';
import InputComponent from "../InputComponent/InputComponent";
import ButtonComponent from '../ButtonComponent/ButtonComponent';

export default function ButtonInputSearch(props) {
    const {
        size, placeholder, textButton,
        backgroundColorInput = "#ffff",
        backgroundColorButton = "rgb(253,141,28)",
        colorButton = "#ffff",
        variant = "borderless",
    } = props;
    return (
        <div style={{ display: 'flex'}}>
            <InputComponent
                size={size}
                placeholder={placeholder}
                variant= {variant}
                style={{ borderRadius: 0, backgroundColor: backgroundColorInput }}
            />
            <ButtonComponent
                size={size}
                styleButton ={{ borderRadius: 0, border: variant === "borderless" &&  'none', backgroundColor: backgroundColorButton }}
                icon={<SearchOutlined style={{ color: colorButton }} />}
                textButton={textButton}
                styleTextButton={{color: colorButton}}
            />
        </div>
    )
}