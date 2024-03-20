import React, { Fragment } from "react";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import { Col, Pagination, Row } from "antd";
import { WrapperCardComponent, WrapperNavBar, WrapperProducts, WrapperTypeCard } from "./style";

export default function TypeProductPage() {
  return (
    <div style={{width: "100%", backgroundColor: "#efefef"}}>
      <div style={{width: 1270, margin: "0 auto", paddingTop: 10 }}>
        <Row style={{ flexWrap: "nowrap", paddingTop: 12 }}>
          <WrapperNavBar span={4}>
            <NavbarComponent />
          </WrapperNavBar>
          <Col span={20}>
            <WrapperProducts>
              <WrapperCardComponent />
              <WrapperCardComponent />
              <WrapperCardComponent />
              <WrapperCardComponent />
              <WrapperCardComponent />
              <WrapperCardComponent />
              <WrapperCardComponent />
              <WrapperCardComponent />
              <WrapperCardComponent />
              <WrapperCardComponent />
            </WrapperProducts>
            <Pagination
              defaultCurrent={2}
              total={100}
              onChange={() => {}}
              style={{ textAlign: "center", marginTop: 12 }}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}
