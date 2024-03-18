import { Row } from "antd";
import styled from "styled-components";

const WrapperHeader = styled(Row)`
    padding: 10px 120px;
    background-color: rgb(24, 148, 255); 
`;

const WrapperTextHeader = styled.span`
    font-size: 24px;
    color: #ffff;
    font-weith: bold;
    text-align: left;
`;

const WrapperHeaderAccount = styled.div`
    display: flex;
    align-item: center;
    color: #ffff;
    gap: 10px;
    font-size: 12px;
`;

const WrapperTextHeaderSmall = styled.span`
    font-size: 12px;
    color: #ffff;
`



export {
    WrapperHeader,
    WrapperTextHeader,
    WrapperHeaderAccount,
    WrapperTextHeaderSmall,
}