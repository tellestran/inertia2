import React, { createContext, useState } from 'react';
import './App.css';

import { Col, Row } from 'antd';
import {
  SearchOutlined
} from '@ant-design/icons';
import { Dropdown,Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch, Link,Routes, BrowserRouter } from 'react-router-dom';
import Features from './Features';
import Pages from './Pages';

export const themecontext = createContext()


function App  ()  {
  const features = (
  
    <Menu>
      <Menu.Item key="1">Layputs</Menu.Item>
      <Menu.Item key="2">Sidebar</Menu.Item>
      <Menu.Item key="3">Post Layouts</Menu.Item>
      <Menu.Item key="3">Post Templates</Menu.Item>
      <Menu.Item key="3">Archive Pages</Menu.Item>
      <Menu.Item key="3">Search Pages</Menu.Item>
      <Menu.Item key="3">Author Pages</Menu.Item>
      <Menu.Item key="3">Cookies Notice</Menu.Item>
    </Menu>
  );
  
  const pages = (
    <Menu>
      <Menu.Item key="4">About Pages - 1</Menu.Item>
      <Menu.Item key="5">About Pages - 2</Menu.Item>
      <Menu.Item key="6">Markup & Formatting</Menu.Item>
      <Menu.Item key="3">Fullwidth Pages</Menu.Item>
      <Menu.Item key="3">Alignes Pages</Menu.Item>
      <Menu.Item key="3">Services Pages</Menu.Item>
      <Menu.Item key="3">Contact Pages</Menu.Item>
      <Menu.Item key="3">404 Error Pages</Menu.Item>
      <Menu.Item key="3">Comming Soon</Menu.Item>
      <Menu.Item key="3">Mainternance</Menu.Item>
    </Menu>
  );
  
  const shop = (
    <Menu>
      <Menu.Item key="7">Shop Demo</Menu.Item>
      <Menu.Item key="8">Cart</Menu.Item>
      <Menu.Item key="9">Chekout</Menu.Item>
      <Menu.Item key="3">My Account</Menu.Item>
    </Menu>
  );
  
  const lightlogo = "https://inertiawp.com/demo/wp-content/uploads/sites/2/2022/08/logo.png";
  const darklogo = "https://inertiawp.com/demo/wp-content/uploads/sites/2/2022/08/logo-white-1.png";
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    setlogo(!logo);
  };
  const [logo, setlogo] = useState(false);

  return (
    <themecontext.Provider value={isDarkMode}>
      <BrowserRouter>
    <div className={isDarkMode ? 'app dark' : 'app light'}>
    <div style={{color:'white'}} className='title'>      <Row>
      <Col span={24}><p>15% OFF - SALE FOR LIMITED TIME.   BUY NOW!</p></Col>
    </Row></div>  
    <header className='app-header'>

        <div className='left'>

      <Row>
    <Col xs={2} sm={4} md={6} lg={8} xl={10}>
    <Row className='navbar' justify="start">
    
      <Col span={4}><Link to={"/"} >HOME</Link></Col>
      <Col span={4}><Dropdown overlay={features}>
        <a href='..' className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
        <Link to={"/Features"}>FEATURES</Link><DownOutlined />
        </a>
      </Dropdown></Col>
      <Col span={4}><Dropdown overlay={pages}>
        <a href='..' className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
        <Link to={"/Pages"}>PAGES</Link><DownOutlined />
        </a>
      </Dropdown></Col>
      <Col span={4}><Dropdown overlay={shop}>
        <a href='...' className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          SHOP <DownOutlined />
        </a>
      </Dropdown></Col>
    
    </Row>
    </Col>
    
    <Col xs={20} sm={16} md={12} lg={8} xl={4}>
      <a href='.'>
      <img alt='' style={{width:100}} src={logo ? darklogo : lightlogo}></img>
      </a>
    </Col>
    <Col xs={2} sm={4} md={6} lg={8} xl={10}>
    <div className='right'>
    <Row justify="end">
      <Col span={3}><SearchOutlined />Search</Col>
      <Col span={3}><a href='.'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pinterest" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z"/>
</svg></a></Col>
      <Col span={3}><a href='.'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
</svg></a></Col>
      <Col span={3}><a href='.'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
</svg></a></Col>
      <Col span={3}><a href='.'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
</svg></a></Col>
      <Col span={4}><button>SUBSCRIBE</button></Col>
    </Row>
    </div>
    </Col>
  </Row>
        </div>
      <hr></hr>
      <Row>
      <Col span={12} offset={6}>
      <Row justify="center">
      <Col span={3}><a href='.'>TRENDING</a></Col>
      <Col span={3}><a href='.'>LIFESTYLE</a></Col>
      <Col span={2}><a href='.'>BEAUTY</a></Col>
      <Col span={2}><a href='.'>DECOR</a></Col>
      <Col span={3}><a href='.'>NUTRITION</a></Col>
      <Col span={2}><a href='.'>TRAVEL</a></Col>
      <Col span={3}><a href='.'>WELLBEING</a></Col>
      <Col span={3}><a href='.'>WORKOUT</a></Col>
      <Col span={2}><a href='.'>DIY</a></Col>
    </Row>
      </Col>
    </Row>
    <hr></hr>
      </header>
      <Routes>
        <Route path='' element={<Home/>}>Home</Route>
        <Route path='/Features' element={<Features></Features>}>Features</Route>
        <Route path='/Pages' element={<Pages></Pages>}>Features</Route>
      </Routes>
      <button className='thememode' onClick={toggleDarkMode}>
      {isDarkMode ? 'Light' : 'Dark'}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lightbulb-fill" viewBox="0 0 16 16">
  <path d={isDarkMode?   " M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6m6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1": "M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6m3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5"}/>
</svg>
      </button>
    </div>
      </BrowserRouter>
      <Router></Router>
      
    </themecontext.Provider>
  );
};

export default App;
