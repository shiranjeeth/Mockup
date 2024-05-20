import React from 'react'
import './Footer.css';
import Logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div>

<footer class="footer-container">
    <div class="container-fluid container-theme container-lg">
        <div class="footergrid">
            <div class="foote1">
                <div class="footer-company">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#">Vision</a></li>
                        <li><a href="#">Mission</a></li>
                        <li><a href="#">Core Values</a></li>
                        <li><a href="#">Branding</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
                <div class="footer-products">
                    <h4>Products</h4>
                    <ul>
                        <li><a href="#">EDA Token</a></li>
                        <li><a href="#">Digital Clinic</a></li>
                        <li><a href="#">School of Cryptos</a></li>
                        <li><a href="#">Litepaper</a></li>
                        <li><a href="#">Whitepaper</a></li>
                        <li><a href="#">Welfare Donations</a></li>
                        <li><a href="#">How to use EdaFace</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-center">
                <img src={Logo} className='' />
                <h3 class="subxcribe">Subscribe to Our Newsletter</h3>
                <div class="newsletter_grp">
                    <input type="email" class="newsletter_inp" placeholder="Your Email Address" value="" />
                    {/* <div class="newsletter_grp_append">
                        <button class="newletter-button" type="button" id="news_submit">Subscribe</button>
                    </div> */}
                </div>
            </div>
            <div class="footer-left-part">
                <div class="footer-legal">
                    <h4>Legal</h4>
                    <ul>
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Disclaimers</a></li>
                        <li><a href="#">Listing T&amp;C</a></li>
                    </ul>
                </div>
                <div class="footer-community">
                    <h4>Community</h4>
                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Telegram</a></li>
                        <li><a href="#">Twitter</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="bordrline"></div>
            <p class="copyright_txt">Copyright © 2022. EdaFace is a product of EDA Holding .All Rights Reserved</p>
    </div>
</footer>

    </div>
  )
}

export default Footer