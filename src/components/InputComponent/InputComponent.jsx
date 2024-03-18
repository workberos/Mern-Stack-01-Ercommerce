import { Input } from "antd";

export default function InputComponent({size, placeholder, variant, style, ...rests}) {
    return (
        <Input
            size={size}
            placeholder={placeholder}
            variant={variant}
            style={style}
            {...rests}
        />
    )
}