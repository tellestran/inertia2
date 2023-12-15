import React from 'react';
import { Col, Row } from 'antd';
import './Homedecor.css';
function Homedecor(){
    const data = [
        {
            id : 1 ,
            img : 'https://inertiawp.com/demo/wp-content/uploads/sites/2/2022/08/pexels-atbo-245208-300x217.jpg',
            a : "Interior Design – A Comprehensive Guide for Enthusiasts",
            href : 'https://inertiawp.com/demo/interior-design-comprehensive-guide-for-enthusiasts/'

        },
        {
            id : 2 ,
            img : 'https://inertiawp.com/demo/wp-content/uploads/sites/2/2022/08/pexels-dmitry-zvolskiy-2062426-300x200.jpg',
            a : "Kitchen Essentials – What Your Brand New Apartment Really Needs",
            href : 'https://inertiawp.com/demo/kitchen-essentials-what-your-brand-new-apartment-really-needs/'

        },
        {
            id : 3 ,
            img : 'https://inertiawp.com/demo/wp-content/uploads/sites/2/2022/08/pexels-parth-shah-824197-300x225.jpg',
            a : "5 Design Books You Can Get This Summer",
            href : 'https://inertiawp.com/demo/5-design-books-you-can-get-this-summer/'

        },
        {
            id : 4 ,
            img : 'https://inertiawp.com/demo/wp-content/uploads/sites/2/2022/08/pexels-daria-shevtsova-698170-225x300.jpg',
            a : "Furnished Versus Unfurnished Apartments: The Pros and Cons",
            href : 'https://inertiawp.com/demo/furnished-versus-unfurnished-apartments-the-pros-and-cons/'

        },
    ]
    return(
        <div className="Container-homedecor">
            <Row>
      <Col span={7}><h2>HOME DECOR</h2></Col>
      <Col span={7}><a href='...'>MORE HOME DECOR ⟶</a></Col>
    </Row>
    <Row>
      <Col span={24}>
        <div className='homedecor-item'>
       {data.map((item)=>(
        <div style={{width:300,textAlign:'left',padding:30,justifyContent:'space-between'}}><img width={300}  height={200} src={item.img}></img>
        <div> <a href={item.href}><p>{item.a}</p></a></div></div>

       ))}</div> </Col>
    </Row>

        </div>
    )
}
export default Homedecor;