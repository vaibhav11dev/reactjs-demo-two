import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import testimonialList from '../elements/TestimonialContent';

export default class TestimonialSection extends Component {
    render() {
        return (
            <div className="rn-testimonial-area bg_color--5 ptb--120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <Tabs>
                                {
                                    testimonialList.map(
                                        (val, i) => {
                                            let authorList = val.author.split(' - ');
                                            return (<TabPanel key={i}>
                                                <div className="rn-testimonial-content text-center">
                                                    <div className="inner">
                                                        <p>{val.title}</p>
                                                    </div>
                                                    <div className="author-info">
                                                        <h6><span>{authorList[0]} </span>{` - ${authorList[1]}`}</h6>
                                                    </div>
                                                </div>
                                            </TabPanel>)
                                        }
                                    )
                                }

                                <TabList className='testimonial-thumb-wrapper'>
                                    {
                                        testimonialList.map(
                                            (val, i) => (
                                                <Tab key={i}>
                                                    <div className="testimonial-thumbnai">
                                                        <div className="thumb"><img src={require(`../assets/images/client/testimonial-${i + 1}.jpg`)} alt="Testimonial Images" /></div>
                                                    </div>
                                                </Tab>
                                            )
                                        )
                                    }
                                </TabList>

                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
