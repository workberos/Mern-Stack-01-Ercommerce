import { Col, Image, InputNumber } from "antd";
import styled from "styled-components";

export const WrapperStyleImageSmall = styled(Image)`
    width: 64px !important;
    height: 64px !important;
`

export const WrapperStyleColImage = styled(Col)`
    // flex-basics: unset;
    display:flex;
    justify-content: center;
`

export const WrapperStyleNameProduct = styled.h1`
    color: rgb(36, 36, 36);
    font-size: 24px;
    font-weight: 300;
    line-height: 32px;
    word-break: break-word;
`

export const WrapperStyleTextSell = styled.span`
    color: rgb(120, 120, 120);
    font-size: 15px;
    line-height: 24px;
`
export const WrapperStylePrice = styled.div`
    background: rgb(250, 250, 250);
    border-radius: 4px
`

export const WrapperStyleTextPrice = styled.h1`
    font-size: 32px;
    line-height: 40px;
    margin-right: 8px;
    font-weigth: 500;
    padding: 10px;
    margin-top: 10px
`

export const WrapperAddressProduct = styled.div`
    span.address {
        text-decoration: underline;
        font-size: 15px;
        line-height: 24px;
        font-weight: 500;
        white-space: no-wrap;
        overflow: hidden;
        text-overflow: ellipsisl;
    };

    span.change-address {
        color: rgb(10, 104, 255);
        font-size: 16px;
        line-height: 24px;
        font-weigth: 500;
    }
`

export const WrapperQuantityProduct = styled.div`
    display: flex;
    gap: 12px;
    align-item: center;
    width: fit-content;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0 8px;
`



export const WrapperInputNumber = styled(InputNumber)`
    width: 30px;
    padding: 4px;
    input {
        padding:0 !important;
        text-align: center !important;
    }
`
