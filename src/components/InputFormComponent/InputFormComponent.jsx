import { Input } from "antd";
import { useState } from "react";
import { WrapperInputStyle } from "./style";

export default function InputFormComponent(props) {
    const [valueInput, setValueInput] = useState('');
    const {placeholder = "Nhập nội dung", ...rest} = props;
  return (
        <WrapperInputStyle placeholder={placeholder}  {...rest}/>
  )
}
