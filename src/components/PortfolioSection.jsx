import React, { Component } from 'react'
import Slider from "react-slick";
import portfolioList from '../elements/PortfolioContent';
import { Link } from 'react-router-dom';

export default class PortfolioSection extends Component {
    render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1
        };

        return (
            <div className="portfolio-area ptb--120 bg_color--1">
                <div className="portfolio-sacousel-inner mb--55">
                    <div className="portfolio-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="section-title">
                                        <h2>Our Works</h2>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-slick-activation mt--70 mt_sm--40">
                            <Slider {...settings}>
                                {
                                    portfolioList.map(
                                        (val, i) => (
                                            <div className="portfolio" key={i}>
                                                <div className="thumbnail-inner">
                                                    <div className={`thumbnail ${val.image}`}></div>
                                                    <div className={`bg-blr-image ${val.image}`}></div>
                                                </div>
                                                <div className="content">
                                                    <div className="inner">
                                                        <p>{val.category}</p>
                                                        <h4 className="title"><a href="/">{val.title}</a></h4>
                                                        <div className="portfolio-button"><a className="rn-btn" href="/">Case Study</a></div>
                                                    </div>
                                                </div>
                                                <Link to='#' className="link-overlay"></Link>
                                            </div>

                                        )
                                    )
                                }
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
