import React from 'react';
import { StarOutlined } from '@ant-design/icons';
import {
  StyleNameProduct,
  WrapperCardStyle,
  WrapperImageStyle,
  WrapperPriceDiscountText,
  WrapperPriceText,
  WrapperReportText
} from './style';

import logo from "../../../assets/images/logo.png";

function CardComponent() {
  return (
    <WrapperCardStyle
      hoverable
      styles={{ body: { padding: 10 } }}
      style={{ width: 200 }}
      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
      <WrapperImageStyle src={logo} />
      <StyleNameProduct>Iphone</StyleNameProduct>
      <WrapperReportText>
        <span>
          <span style={{ marginRight: 4 }}>4.96</span> <StarOutlined style={{ fontSize: 12, color: 'yellow' }} />
        </span>
        <span> | Đã bán 1000+</span>
      </WrapperReportText>
      <WrapperPriceText>
        1.000.000đ
        <WrapperPriceDiscountText>
          -5%
        </WrapperPriceDiscountText>
      </WrapperPriceText>
    </WrapperCardStyle>
  )
};

export default CardComponent;
