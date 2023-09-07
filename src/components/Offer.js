import React from 'react';
import { Card, Col, Row } from 'antd';
import { DollarOutlined, BankOutlined, HomeOutlined } from '@ant-design/icons';
import './NavBar.css';

const Offer = () => {
  return (
    <div className="offer">
    <span className="whatOffer">What we offer</span>
    <h2 className='hitam'>Find the Offer That <span className="biru">Suits You Best ini biru</span></h2>
    <Row gutter={16} className="centered-row">
    <Col span={5}>
      <Card bordered={true} className="box">
      <HomeOutlined />
           <p className='atas'>1. BUYING A HOME</p>
    <p className='bawah'>Connect with lender wo can help you with pre-approved</p>
      </Card>
    </Col>
    <Col span={5}>
    <Card bordered={true} className="box">
    <BankOutlined />
           <p className='atas'>2. REFINANCING</p>
    <p className='bawah'>Connect with lender wo can help you with pre-approved</p>
    </Card>
    </Col>
    <Col span={5}>
    <Card bordered={true}>
    <DollarOutlined />
           <p className='atas'>3. EQUITY TAKE-OUT</p>
    <p className='bawah'>Connect with lender wo can help you with pre-approved</p>
      </Card>
    </Col>
  </Row>
    </div>
  );
};

export default Offer;
