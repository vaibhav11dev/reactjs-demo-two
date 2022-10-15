import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";


const socialShare = [
    { icon: <FaFacebookF />, link: 'https://www.facebook.com/' },
    { icon: <FaInstagram />, link: 'https://www.instagram.com/' },
    { icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/' },
    { icon: <FaTwitter />, link: 'https://www.twitter.com/' }
]

class Footer extends Component {
    render() {
        return (
            <footer className="footer-area">
                <div className="footer-wrapper">
                    <div className="row align-items-end row--0">
                        <div className="col-lg-6">
                            <div className="footer-left">
                                <div className="inner"><span>Ready To Do This</span>
                                    <h2>Let's get <br /> to work</h2><Link className="rn-button-style--2" to="/contact"><span>Contact Us</span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="footer-right" data-black-overlay="6">
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6 col-12">
                                        <div className="footer-link">
                                            <h4>Quick Link</h4>
                                            <ul className="ft-link">
                                                <li><Link to="/portfolio">Work</Link></li>
                                                <li><Link to="/about">About</Link></li>
                                                <li><Link to="/contact">Let's Talk</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt_mobile--30">
                                        <div className="footer-link">
                                            <h4>Say Hello</h4>
                                            <ul className="ft-link">
                                                <li><Link to="mailto:admin@example.com">admin@example.com</Link></li>
                                                <li><Link to="mailto:hr@example.com">hr@example.com</Link></li>
                                            </ul>
                                            <div className="social-share-inner">
                                                <ul className="social-share social-style--2 d-flex justify-content-start liststyle mt--15">
                                                    {
                                                        socialShare.map(
                                                            (val, i) => (
                                                                <li key={i}><Link to={val.link}>{val.icon}</Link></li>
                                                            )
                                                        )
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="copyright-text">
                                            <p>Copyright © 2022 Themevedanta-Themes. All Rights Reserved.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;