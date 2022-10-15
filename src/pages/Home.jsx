import React, { Component, Fragment } from 'react'
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServiceSection from '../components/ServiceSection';
import PortfolioSection from '../components/PortfolioSection';
import CounterSection from '../components/CounterSection';
import TestimonialSection from '../components/TestimonialSection';
import BlogSection from '../components/BlogSection';
import BrandSection from '../components/BrandSection';


class Home extends Component {
    render() {
        return (
            <Fragment>
                <Helmet>
                    <title>Themevedanta - ReactJS Version</title>
                </Helmet>

                <Header />
                <HeroSection />
                <AboutSection />
                <ServiceSection />
                <PortfolioSection />
                <CounterSection />
                <TestimonialSection />
                <BlogSection />
                <BrandSection />
                <Footer />
            </Fragment>
        )
    }
}

export default Home;