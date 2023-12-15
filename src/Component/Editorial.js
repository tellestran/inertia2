import React from 'react';
import { Col, Row } from 'antd';
import './Editorial.css';
function Editorial() {
    return(
        <div className='container-editorial'>
                <Row>
      <Col span={10}><img alt='' width={500} height={500} src='https://inertiawp.com/demo/wp-content/uploads/sites/2/2022/08/pexels-vlada-karpovich-7368269.jpg'></img></Col>
      
      <Col span={12}><div className='text'><a href='...'><h2>Why you should use packing cubes to improve your (traveling) life</h2></a>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Rhoncus dolor purus non enim. Ultrices gravida dictum fusce ut placerat orci. Cras ornare arcu dui vivamus arcu felis bibendum ut tristique. Et sollicitudin ac orci phasellus […]
...</p>
<a href='hello'>CONTINUE READING ⟶</a> </div></Col>

     
    </Row>


        </div>
    )
}
export default Editorial;