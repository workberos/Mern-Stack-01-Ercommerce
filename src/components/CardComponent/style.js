import { Card } from "antd";
import styled from "styled-components";


export const WrapperCardStyle = styled(Card)`
    width: 250px;
    & img {
        width: 250px;
        height: 250px;
    }
    position: relative;
`

export const WrapperImageStyle = styled.img`
    width: 68px !important;
    height: 14px !important;
    position: absolute;
    top: 0;
    left: 0;
`

export const StyleNameProduct = styled.div`
    font-weith: 400px; 
    font-size: 12px;
    line-heigth: 16px;
    color: rgb(56, 56, 61);
    font-weigth: 400;
`

export const WrapperReportText = styled.div`
    font-size: 11px;
    color: rgb(128, 128, 137);
    display: flex;
    align-items: center;
    margin: 6px 0 0;

`

export const WrapperPriceText = styled.div`
    color: rgb(255, 66, 78);
    font-size: 16px;
    font-weigth: 500;
`

export const WrapperPriceDiscountText = styled.span`
    color: rgb(255, 66, 78);
    font-size: 12px;
    font-weigth: 500;
`

export const WrapperStyleTextSell = styled.span`
    color: rgb(120, 120, 120);
    font-size: 15px;
    line-height: 24px;
`