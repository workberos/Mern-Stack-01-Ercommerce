import { Card, Col } from "antd";
import styled from "styled-components";

export const WrapperProducts = styled.div`
    display: flex;
    gap: 15px;
    margin-top: 20px;
    flex-wrap: wrap;
`

export const WrapperNavBar = styled(Col)`
    background: #fff;
    margin-right: 12px;
    padding: 10px;
    border-radius: 4px;
    height: fit-content;
    margin-top: 20px;
    width: 250px;
`

export const WrapperCardComponent = styled(Card)`
    width: 200px;
    & img {
        width: 200px;
        height: 200px;
    }
    position: relative;
`