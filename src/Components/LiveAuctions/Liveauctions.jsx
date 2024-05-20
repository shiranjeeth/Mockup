import React from 'react'
import '../LiveAuctions/liveauctions.css';
import bannerimage from '../../assets/bannerheade.png'
import { FaHeart } from "react-icons/fa";

const Liveauctions = () => {
  return (
    <div className='liveaut-main'>
    <div className='Liveauctions-container'>
        <h2>Live Auctions</h2>

        <div  className='Liveauctions-content'>

        <div className="card">      
<img src={bannerimage} alt="Sample" className="card-image" />
  <div className="time-overlay"><span>12</span>:<span>05</span>:<span>38</span></div>
  <div className="card-content">
    <h3>Women NFT #325</h3>
    <div className='card-below-text'>
    <p>Highest Bird</p>
    <p>15000 BUSD</p>
    </div>
    <div className='whole-card-text'>
        <div className='card-img'>
        <img src={bannerimage}/>
        <img src={bannerimage}/>
        </div>
        <div className='card-text'>
        <p className='card-text-email'>@robert03</p>
        <p>by lorem ipsum</p>
        </div>
        <div className='card-icon'>
        <FaHeart />
        <p>246</p>
        </div>
    </div>
  </div>
</div>


<div className="card">
<img src={bannerimage} alt="Sample" className="card-image" />
  <div className="time-overlay"><span>12</span>:<span>05</span>:<span>38</span></div>
  <div className="card-content">
    <h3>Women NFT #325</h3>
    <div className='card-below-text'>
    <p>Highest Bird</p>
    <p>15000 BUSD</p>
    </div>
    <div className='whole-card-text'>
        <div className='card-img'>
        <img src={bannerimage}/>
        <img src={bannerimage}/>
        </div>
        <div className='card-text'>
        <p className='card-text-email'>@robert03</p>
        <p>by lorem ipsum</p>
        </div>
        <div className='card-icon'>
        <FaHeart />
        <p>246</p>
        </div>
    </div>
  </div>
</div>

<div className="card">
<img src={bannerimage} alt="Sample" className="card-image" />
  <div className="time-overlay"><span>12</span>:<span>05</span>:<span>38</span></div>
  <div className="card-content">
    <h3>Women NFT #325</h3>
    <div className='card-below-text'>
    <p>Highest Bird</p>
    <p>15000 BUSD</p>
    </div>
    <div className='whole-card-text'>
        <div className='card-img'>
        <img src={bannerimage}/>
        <img src={bannerimage}/>
        </div>
        <div className='card-text'>
        <p className='card-text-email'>@robert03</p>
        <p>by lorem ipsum</p>
        </div>
        <div className='card-icon'>
        <FaHeart />
        <p>246</p>
        </div>
    </div>
  </div>
</div>

<div className="card">
<img src={bannerimage} alt="Sample" className="card-image" />
  <div className="time-overlay"><span>12</span>:<span>05</span>:<span>38</span></div>
  <div className="card-content">
    <h3>Women NFT #325</h3>
    <div className='card-below-text'>
    <p>Highest Bird</p>
    <p>15000 BUSD</p>
    </div>
    <div className='whole-card-text'>
        <div className='card-img'>
        <img src={bannerimage}/>
        <img src={bannerimage}/>
        </div>
        <div className='card-text'>
        <p className='card-text-email'>@robert03</p>
        <p>by lorem ipsum</p>
        </div>
        <div className='card-icon'>
        <FaHeart />
        <p>246</p>
        </div>
    </div>
  </div>
</div>

</div>

 </div>
 </div>
  )
}

export default Liveauctions