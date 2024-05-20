import React from 'react'
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./item.js";
import smallimg from '../../assets/tig.png'
import '../HotsellsSection/Hotsell.css';

const HotSellSection = () => {

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <div className='hot-sells-main-div'>
        <h2>Hot Collection</h2>
        <Carousel breakPoints={breakPoints}>
          <Item> 
             <div className="hot-sells">
                <img src={smallimg}  alt="Logo" />
                <div className="banner-rightcontent">
                  <h3>Lorem Ipsum</h3>
                </div>
              </div>
              </Item>
              <Item> 
             <div className="hot-sells">
                <img src={smallimg}  alt="Logo" />
                <div className="banner-rightcontent">
                  <h3>Lorem Ipsum</h3>
                </div>
              </div>
              </Item>
              <Item> 
             <div className="hot-sells">
                <img src={smallimg}  alt="Logo" />
                <div className="banner-rightcontent">
                  <h3>Lorem Ipsum</h3>
                </div>
              </div>
              </Item>
              <Item> 
             <div className="hot-sells">
                <img src={smallimg}  alt="Logo" />
                <div className="banner-rightcontent">
                  <h3>Lorem Ipsum</h3>
                </div>
              </div>
              </Item>
              <Item> 
             <div className="hot-sells">
                <img src={smallimg}  alt="Logo" />
                <div className="banner-rightcontent">
                  <h3>Lorem Ipsum</h3>
                </div>
              </div>
              </Item>
        </Carousel>
        
    </div>
  )
}

export default HotSellSection