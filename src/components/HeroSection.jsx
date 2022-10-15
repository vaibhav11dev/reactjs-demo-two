import React, { Component } from 'react'
import serviceList from '../elements/ServiceContent';

class HeroSection extends Component {
  render() {

    const heroServiceList = serviceList.slice(0, 3);

    return (
      <div className="slider-wrapper">
        <div className="slider-activation">
          <div className="slide slide-style-1 slider-fixed--height d-flex align-items-center bg_image bg_image--1" data-black-overlay="6">
            <div className="container position-relative">
              <div className="row">
                <div className="col-lg-12">
                  <div className="inner">
                    <h1 className="title theme-gradient">A digital <br /> agency. </h1>
                  </div>
                </div>
              </div>
              <div className="service-wrapper service-white">
                <div className="row">
                  {
                    heroServiceList.map(
                      (val, i) => (
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                          <div className="service service__style--1">
                            <div className="icon"><img src={require(`../assets/images/icons/icon-0${i+1}.png`)} alt="Digital Agency" /></div>
                            <div className="content">
                              <h4 className="title">{val.title}</h4>
                              <p>{val.description}</p>
                            </div>
                          </div>
                        </div>
                      )
                    )
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HeroSection;