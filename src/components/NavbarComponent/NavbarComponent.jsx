import React from 'react'
import { WrapperContent, WrapperLabelText, WrapperTextPrice, WrapperTextValue } from './style'
import { Checkbox, Rate } from 'antd';

function NavbarComponent() {
    const renderContent = (type, options) => {
        switch (type) {
            case "text":
                return options.map(opt => {
                    return (
                        <WrapperTextValue key={opt}>{opt}</WrapperTextValue>
                    )
                });

            case "checkbox":
                return (
                    <Checkbox.Group
                        style={{
                            width: '100%',
                            flexDirection: 'column',
                            gap: 12
                        }}
                        onChange={() => { }}
                    >
                        {options.map((opt) => {
                            return (
                                <Checkbox key={opt.value} value={opt.value}>{opt.label}</Checkbox>
                            )
                        })}
                    </Checkbox.Group>
                )

            case "star":
                return (
                    options.map((opt) => {
                        return (
                            <div key={opt} style={{ display: 'flex', gap: 4 }}>
                                <Rate style={{ fontSize: 12 }} disabled defaultValue={opt} />
                                <span>Từ {opt} sao</span>
                            </div>
                        )
                    })
                )

            case "price":
                return (
                    options.map((opt) => {
                        return (
                            <WrapperTextPrice key={opt}>{opt}</WrapperTextPrice>
                        )
                    })
                )
            default:
                return {};
        }
    }
    return (
        <div>
            <WrapperLabelText>label</WrapperLabelText>
            <WrapperContent>
                {renderContent("text", ["Tủ lạnh", "Máy tính", "Điện thoại"])}
            </WrapperContent>

            <WrapperContent>
                {renderContent("checkbox", [
                    { value: 1, label: "A" },
                    { value: 2, label: "B" },
                    { value: 3, label: "C" }
                ])}
            </WrapperContent>

            <WrapperContent>
                {renderContent("star", [3, 4, 5])}
            </WrapperContent>

            <WrapperContent>
                {renderContent("price", ["duoi 40", "tren 50"])}
            </WrapperContent>
        </div>
    )
}

export default NavbarComponent
