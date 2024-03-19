import React, { Fragment } from 'react'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import CardComponent from '../../components/CardComponent/CardComponent'
import { Col, Pagination, Row } from 'antd'
import { WrapperNavBar, WrapperProducts } from './style'

export default function TypeProductPage() {
  return (
    <div style={{ padding: '0 120px', backgroundColor: "#efefef" }}>
      <Row style={{ flexWrap: "nowrap", paddingTop: 12 }}>
        <WrapperNavBar span={4} >
          <NavbarComponent />
        </WrapperNavBar>
        <Col span={20}>
          <WrapperProducts>
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </WrapperProducts>
          <Pagination defaultCurrent={2} total={100} onChange={() => { }} style={{textAlign: 'center', marginTop: 12}} />
        </Col>
      </Row>
    </div>
  )
}
