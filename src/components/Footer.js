import React from 'react';
import logoBawah from '../assets/7.jpg';
import { Input } from 'antd';
import {SendOutlined, InstagramOutlined, TwitterOutlined, YoutubeOutlined  } from '@ant-design/icons'; // Import the SearchOutlined icon

const Footer = () => {
  return (
    <div className='niFooter'>
      <div className='bagianKiri'>
        <img src={logoBawah} alt="logo"/>
        <p>Copyright &copy;2023 Borrow4Leess</p>
        <p>All right reserved</p>
        <div className="sosmed">
        <InstagramOutlined className='sosmed1'/>
        <TwitterOutlined className='sosmed1'/>
        <YoutubeOutlined className='sosmed1'/>
        </div>
      </div>
      <div className='company'>
        <h2 className='judulBawah'>Company</h2>
        <ul>
          <li><a href="">About</a></li>
          <li><a href="">Blog</a></li>
          <li><a href="">Contact us</a></li>
          <li><a href="">Pricing</a></li>
        </ul>
      </div>
      <div className='Support'>
        <h2 className='judulBawah'>Support</h2>
        <ul>
          <li><a href="">About</a></li>
          <li><a href="">Blog</a></li>
          <li><a href="">Contact us</a></li>
          <li><a href="">Pricing</a></li>
        </ul>
      </div>
      <div className='inputin'>
        <h2 className='judulBawah'>Stay Up To Date</h2>
        <Input placeholder='your email address' suffix={<SendOutlined />} />
      </div>
    </div>
  )
}

export default Footer;
