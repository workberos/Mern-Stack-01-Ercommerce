import React from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style';
import InputFormComponent from '../../components/InputFormComponent/InputFormComponent';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import { Image } from 'antd';
import loginbanner from "../../../assets/images/loginbanner.png";


function SignUpPage() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0, 0, 0, 0.53)",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          width: 800,
          height: 527,
          borderRadius: 6,
          background: "#fff",
        }}
      >
        <WrapperContainerLeft>
            <h1>Xin chào</h1>
            <p>Đăng nhập hoặc tạo tài khoản</p>
            <InputFormComponent style={{margin: "10px 0"}} placeholder="Email@gmail.com"/>
            <InputFormComponent placeholder="Nhập mật khẩu" style={{marginBottom: "10px"}}/>
            <InputFormComponent placeholder="Xác nhận lại mật khẩu" />

            <ButtonComponent
              size={40}
              variant="borderless"
              styleButton={{
                background: "rgb(255, 57, 69)",
                height: 45,
                width: "100%",
                border: "none",
                borderRadius: 4,
                margin: "26px 0 10px"
              }}
              textButton="Đăng ký"
              styleTextButton={{ color: "#fff", fontSize: 15, fontWeight: 700, }}
            />
            <p>Đã có tài khoản?<WrapperTextLight>Đăng nhập</WrapperTextLight></p>
        </WrapperContainerLeft>

        <WrapperContainerRight>
          <Image
            src={loginbanner}
            preview={false}
            alt="image logo"
            width={203}
          />
          <h4>Mua sắm tại Paws&More</h4>
        </WrapperContainerRight>
      </div>
    </div>
  );
}

export default SignUpPage
