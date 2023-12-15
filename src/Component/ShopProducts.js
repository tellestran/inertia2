import React from 'react';
import { Col, Row } from 'antd';

import './Products.css';
import { themecontext } from '../App';
import { useContext } from 'react';

function ShopProducts(){
  const buttonmode = useContext(themecontext)
    const products = [

        {
            id : 1 ,
            a : 'BEAUTY',
            img : 'https://inertiawp.com/demo/wp-content/uploads/sites/2/2022/08/pexels-ann-poan-5797999.jpg',
            title : 'The Take It (All) Off Kit',
            price : '$11.05'

        },
        {
          id : 2 ,
          a : 'LIFESTYLE PRODUCTS',
          img : 'https://inertiawp.com/demo/wp-content/uploads/sites/2/2022/08/pexels-karolina-grabowska-4041391.jpg',
          title : 'Minty Mineral Hydration Mist',
          price : '$18.00 – $45.00'
      },
      {
        id : 2 ,
        a : 'SKINCARE',
        img : 'https://inertiawp.com/demo/wp-content/uploads/sites/2/2022/08/pexels-karolina-grabowska-4202325.jpg',
        title : 'Cloudberry Exfoliating Jelly Cleanser',
        price : '$20.00 $18.00'

    },
    {
      id : 2 ,
      a : 'CLEANSERS',
      img : 'https://inertiawp.com/demo/wp-content/uploads/sites/2/2022/08/pexels-karolina-grabowska-4202328.jpg',
      title : 'Nourishing Repair Body Butter',
      price : '$18.00'

  },

    ]
    return(
      <div>
                        <Row>
      <Col span={24}><h1>Products We Love</h1>
      <p>Featured products your will love from the shop.</p></Col>
    </Row>
        <div style={{justifyContent:'center',display:'flex'}}>

    <Row> 
    <div className='products' style={{display:'flex',justifyContent:'center'}}>
      {products.map((item)=>(
       
      <div className='card'>
        <div className='boder'>
      <img alt='' className='cardimg' src={item.img}></img>
      <div  className='cardinfor'>
      <a href='sss'>{item.a}</a>
      <h2>{item.title}</h2>
      <a href='sss'>{item.price}</a>
      </div></div>
    

     </div>
    
  
        
       

        
      ))}
      </div>

    </Row>



        </div>
        <div className= 'button'> <div className={buttonmode ? 'shopall' : 'darkbutton'}><h3>SHOP ALL</h3></div> </div>
       </div>
    )
}
export default ShopProducts;