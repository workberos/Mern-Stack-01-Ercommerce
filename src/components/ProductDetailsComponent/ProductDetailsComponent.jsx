import { Col, Image, InputNumber, Row } from 'antd'
import React from 'react';
import testimg from "../../../assets/images/testimg.png";
import miniimg from "../../../assets/images/miniimg.png";
import { WrapperAddressProduct,  WrapperInputNumber, WrapperQuantityProduct, WrapperStyleColImage, WrapperStyleImageSmall, WrapperStyleNameProduct, WrapperStylePrice, WrapperStyleTextPrice, WrapperStyleTextSell } from './style';
import {StarFilled, PlusOutlined, MinusOutlined} from '@ant-design/icons';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

export default function ProductDetailsComponent() {
  return (
    <Row style={{padding: 16, background: "#fff"}}>
        <Col span={10} style={{borderRight: '1px solid #e5e5e5', paddingRight: 8, borderRadius: 4}}>
            <Image src={testimg} alt="image product" preview={false}/>
            <Row style={{paddingTop: 10}}>
                <WrapperStyleColImage span={4}>
                    <WrapperStyleImageSmall src={miniimg} alt="image small" preview={false}/>
                </WrapperStyleColImage>
                <WrapperStyleColImage span={4}>
                    <WrapperStyleImageSmall src={miniimg} alt="image small" preview={false}/>
                </WrapperStyleColImage>
                <WrapperStyleColImage span={4}>
                    <WrapperStyleImageSmall src={miniimg} alt="image small" preview={false}/>
                </WrapperStyleColImage>
                <WrapperStyleColImage span={4}>
                    <WrapperStyleImageSmall src={miniimg} alt="image small" preview={false}/>
                </WrapperStyleColImage>
                <WrapperStyleColImage span={4}>
                    <WrapperStyleImageSmall src={miniimg} alt="image small" preview={false}/>
                </WrapperStyleColImage>
                <WrapperStyleColImage span={4}>
                    <WrapperStyleImageSmall src={miniimg} alt="image small" preview={false}/>
                </WrapperStyleColImage>
                
            </Row>
        </Col>


        <Col span={14} style={{paddingLeft: 12}}>
            <WrapperStyleNameProduct>Sách Tương Tác Vừa Học Vừa Chơi - Vũ Trụ Diệu Kỳ</WrapperStyleNameProduct>
            <div>
                <StarFilled style={{ fontSize: 12, color: "#FFC400" }}/>
                <StarFilled style={{ fontSize: 12, color: "#FFC400" }}/>
                <StarFilled style={{ fontSize: 12, color: "#FFC400" }}/>
                <StarFilled style={{ fontSize: 12, color: "#FFC400" }}/>
                <WrapperStyleTextSell> | Đã bán 1000+</WrapperStyleTextSell>
                <WrapperStylePrice>
                    <WrapperStyleTextPrice>200.000</WrapperStyleTextPrice>
                </WrapperStylePrice>
                <WrapperAddressProduct>
                    <span> Giao đến </span>
                    <span className='address'>Giao đến Q. Hoàn Kiếm, P. Hàng Trống, Hà Nội</span> - 
                    <span className='change-address'> Đổi địa chỉ</span>
                </WrapperAddressProduct>
                <div style={{margin: '10px 0 20px', borderTop: '1px solid #e5e5e5', borderBottom: '1px solid #e5e5e5', padding: '10px 0'}}>
                    <div style={{marginBottom: 10}}>Số lượng</div>
                    <WrapperQuantityProduct>
                        <button style={{border: 'none', background: "transparent"}}>
                        <MinusOutlined style={{fontSize: 20}}/>
                        </button>                    
                            <WrapperInputNumber defaultValue={3}  controls={false} />
                        <button style={{border: 'none', background: "transparent"}}>
                            <PlusOutlined style={{fontSize: 20}}/>
                        </button>
                    </WrapperQuantityProduct>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                    <ButtonComponent 
                        size={40} 
                        variant ="borderless"
                        styleButton={{
                            background: "rgb(255, 57, 69)", 
                            height: 45, 
                            width:220,
                            border: "none",
                            borderRadius: 4
                        }}
                        textButton="Chọn mua"
                        styleTextButton={{color: "#fff", fontSize: 15, fontWeight: 700 }}
                    />
                    <ButtonComponent
                        size={40} 
                        variant ="borderless"
                        styleButton={{
                            background: "#fff", 
                            height: 45, 
                            width:220,
                            border: "1px solid rgb(13, 82, 192)",
                            borderRadius: 4
                        }}
                        textButton="Mua trả sau"
                        styleTextButton={{color: "rgb(13, 82, 192)", fontSize: 15, fontWeight: 700 }}
                    />
                </div>
            </div>
        </Col>
    </Row>
  )
}
