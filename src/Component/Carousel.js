import React from "react";
import { Col, Row } from "antd";
import "./Carousel.css";
import { themecontext } from "../App";
import { useContext } from "react";
function Carousel() {
  const isDarkMode = useContext(themecontext);
  const data2 = [
    {
      img: "https://inertiawp.com/demo/wp-content/uploads/sites/2/2022/08/pexels-jj-jordan-10668576-300x300.jpg",
      p: "The Beginner’s Guide To The Paleo Diet",
    },
    {
      img: "https://inertiawp.com/demo/wp-content/uploads/sites/2/2022/08/pexels-ella-olsson-1640777-150x150.jpg",
      p: "According to Nutritionists, These Are the 7 Ingredients Your Food Should Have",
    },
    {
      img: "https://inertiawp.com/demo/wp-content/uploads/sites/2/2022/08/pexels-tijana-drndarski-3338676-150x150.jpg",
      p: "10 Evidence-Based Benefits of Green Tea",
    },
    {
      img: "https://inertiawp.com/demo/wp-content/uploads/sites/2/2022/08/pexels-ella-olsson-1640771-150x150.jpg",
      p: "The 11 Best Meal Planning Apps to Help You Lose Weight",
    },
  ];
  return (
    <div className="Carousel-container">
      <Row>
        <Col span={24}>
          <div className="carousel-item" style={{ display: "flex" }}>
            {data2.map((item) => (
              <div className="item">
                <div
                  style={{ width: 300, height: 100 }}
                  className={isDarkMode ? "darkcarousel" : "lightcarousel"}
                >
                  <img alt="" width={100} height={100} src={item.img}></img>
                  <p>{item.p}</p>
                </div>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default Carousel;
