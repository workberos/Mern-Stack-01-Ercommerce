import { Row } from "antd";
import styled from "styled-components";

const WrapperHeader = styled(Row)`
    width: 100%;
    padding: 10px 120px;
    background-color: rgb(24, 148, 255); 
    align-item: center;
    gap: 16px;
    flex-wrap: nowrap;  
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
    white-space: nowrap;
`



export {
    WrapperHeader,
    WrapperTextHeader,
    WrapperHeaderAccount,
    WrapperTextHeaderSmall,
}