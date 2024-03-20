import React from 'react';
import { StarFilled } from '@ant-design/icons';
import {
  StyleNameProduct,
  WrapperCardStyle,
  WrapperImageStyle,
  WrapperPriceDiscountText,
  WrapperPriceText,
  WrapperReportText
} from './style';

import logo from "../../../assets/images/logo.png";
import { WrapperStyleTextSell } from '../ProductDetailsComponent/style';

function CardComponent(props) {

  const {cardWidth = 290} = props
  return (
    <WrapperCardStyle
      hoverable
      styles={{ body: { padding: 10 , width: cardWidth}}}
      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"  width={cardWidth}/>}
    >
      <WrapperImageStyle src={logo} />
      <StyleNameProduct>Iphone</StyleNameProduct>
      <WrapperReportText>
        <span>
          <span style={{ marginRight: 4 }}>4.96</span> <StarFilled style={{ fontSize: 12, color: '#FFC400' }} />
        </span>
        <WrapperStyleTextSell> | Đã bán 1000+</WrapperStyleTextSell>
      </WrapperReportText>
      <WrapperPriceText >
        <span style={{marginRight: 8}}>1.000.000đ</span>
        <WrapperPriceDiscountText>
          -5%
        </WrapperPriceDiscountText>
      </WrapperPriceText>
    </WrapperCardStyle>
  )
};

export default CardComponent;
