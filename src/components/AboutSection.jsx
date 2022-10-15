import React, { Component } from 'react'

export default class AboutSection extends Component {
  render() {
    return (
        <div className="about-area about-position-top pb--120">
        <div className="about-wrapper">
            <div className="container">
                <div className="row row--35 align-items-center">
                    <div className="col-lg-5 col-md-12">
                        <div className="thumbnail"><img className="w-100" src={require("../assets/images/about/about-1.jpg")} alt="About Images" /></div>
                    </div>
                    <div className="col-lg-7 col-md-12">
                        <div className="about-inner inner">
                            <div className="section-title">
                                <h2 className="title">About</h2>
                                <p className="description">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum,</p>
                            </div>
                            <div className="row mt--30 mt_sm--10">
                                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                    <div className="about-us-list">
                                        <h3 className="title">Who we are</h3>
                                        <p>There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                    <div className="about-us-list">
                                        <h3 className="title">Who we are</h3>
                                        <p>There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}
