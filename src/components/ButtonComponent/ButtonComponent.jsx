import { Button } from "antd";

export default function ButtonComponent({size, styleButton, styleTextButton, textButton, ...rests}) {

    return (
        <Button
            size={size}
            style={styleButton}
            {...rests}
        >
            <span style={styleTextButton}>{textButton}</span>
        </Button>
    )
};