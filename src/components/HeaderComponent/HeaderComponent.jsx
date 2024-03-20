import { Badge, Col } from "antd";
import { UserOutlined, CaretDownOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { WrapperHeader, WrapperHeaderAccount, WrapperTextHeader, WrapperTextHeaderSmall } from "./style";
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";

export default function HeaderComponent() {
    return (
        <div style={{width: '100%', background:"rgb(26, 148, 255)", display: "flex", justifyContent: 'center'}}>
            <WrapperHeader>
                <Col span={5}>
                    <WrapperTextHeader>Paws & More</WrapperTextHeader>
                </Col>
                <Col span={13} >
                    <ButtonInputSearch
                        size="large"
                        textButton="Tìm kiếm"
                        placeholder="Nhập sản phẩm muốn tìm"
                    />
                </Col>
                <Col span={6} style={{ display: 'flex', gap: 54, alignItems: 'center' }}>
                    <WrapperHeaderAccount>
                        <UserOutlined style={{ fontSize: "30px" }} />
                        <div>
                            <WrapperTextHeaderSmall>Đăng nhập/Đăng ký</WrapperTextHeaderSmall>
                            <div>
                                <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                                <CaretDownOutlined />
                            </div>
                        </div>
                    </WrapperHeaderAccount>
                    <div>
                        <Badge count={4} size="small">
                            <ShoppingCartOutlined style={{ color: "#ffff", fontSize: 30 }} />
                        </Badge>
                        <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
                    </div>
                </Col>
            </WrapperHeader>
        </div>
    )
}