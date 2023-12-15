import React from "react";

import "./Content.css";

function Content() {
  const data = [
    {
      id: 1,
      img: "https://inertiawp.com/demo/wp-content/uploads/sites/2/2022/08/pexels-daria-shevtsova-1619488-1365x2048.jpg",
      a: "LIFESTYLE",
      h3: "8 Homemade Coconut Oil Shampoo Recipes For Beautiful Hair",
      time: "August 17, 2022",
    },
    {
      id: 2,
      img: "https://inertiawp.com/demo/wp-content/uploads/sites/2/2022/08/pexels-atbo-245208-2048x1479.jpg",
      a: "HOME DECOR",
      h3: "Interior Design – A Comprehensive Guide for Enthusiasts",
      time: "August 17, 2022",
    },
    {
      id: 3,
      img: "https://inertiawp.com/demo/wp-content/uploads/sites/2/2022/08/pexels-karolina-grabowska-4219654-2048x1366.jpg",
      a: "LIFESTYLE",
      h3: "6 DIY Summer Crafts for Your Home, Outdoor, and Family Fun",
      time: "August 17, 2022",
    },
  ];
  return (
    <div className="Home-Container">
      <h1>TOP STORIES</h1>
      <div style={{ padding: 100, paddingLeft: 200, display: "flex" }}>
        <div className="front-page">
          <img
            width={600}
            height={400}
            alt=""
            src="https://inertiawp.com/demo/wp-content/uploads/sites/2/2022/08/pexels-nugroho-wahyu-3119180-2048x1498.jpg"
          />
          <a href="..">LIFESTYLE</a>
          <h3>
            24 Summer Wardrobe Staples That Are Simple, Sustainable, and
            Editor-Approved
          </h3>
          <a href="..">NOVEMBER 4, 2022</a>
        </div>
        <div>
          {data.map((item) => (
            <div style={{ paddingLeft: 20 }} className="front-item">
              <div style={{ paddingLeft: 30 }}>
                <img alt="" width={200} height={200} src={item.img}></img>
              </div>
              <div style={{ paddingLeft: 20 }}>
                <a href="...">{item.a}</a>
                <h3>{item.h3}</h3>
                <a href="..">{item.time}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Content;
