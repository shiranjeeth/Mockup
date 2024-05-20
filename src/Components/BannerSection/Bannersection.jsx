import React from 'react'
import '../BannerSection/bannersection.css';
import bannerimage from '../../assets/bannerheade.png'
import smallimg from '../../assets/tig.png'


const Bannersection = () => {
  return (
    <div className="Banner-whole-section">
    <div className="banner_section">
        <div className="banner-block">
          <div className="banner-left">
            <h2>
              <span className='banner-left-discover'>Discover</span><br />
              <span>Digital art &</span><br />
              <span>Collect NFTs</span>
            </h2>
            <p className='banner-left-para'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
               ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
            </p>
          </div>

          <div className="banner-right">

            <div className="banner-rightblk">
              <div className="right-img">
                <img src={bannerimage} className="img-responsive" alt="Banner Header" />
              </div>
              <div className="banner-rightchild">
                <img src={smallimg} className="img-responsive" alt="Logo" />
                <div className="banner-rightcontent">
                  <h3>Blue studios Nft</h3>
                  <p> Lorem Ipsum is simply dummy</p>
                </div>
              </div>
            </div>
            
          </div>

        </div>
  </div>
  </div>
  )
}

export default Bannersection