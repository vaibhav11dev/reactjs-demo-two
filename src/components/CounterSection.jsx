import React, { Component } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";

const counterList = [
    { count: 199, desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.' },
    { count: 575, desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.' },
    { count: 69, desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.' },
]

export default class CounterSection extends Component {
    constructor(props) {
        super(props);
        this.state = {isVisible: false};
        this.onChange = this.onChange.bind(this);
    }

    onChange(isVisible){
        if (isVisible) {
            this.setState({isVisible: true});
        }
    }

    render() {
        return (
            <div className="rn-counterup-area pt--25 pb--110 bg_color--1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <h3 className="fontWeight500">Our Fun Facts</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            counterList.map(
                                (val, i) => (
                                    <div className="counterup_style--1 col-lg-4 col-md-4 col-sm-6 col-12" key={i}>
                                        <VisibilitySensor onChange={this.onChange} offset={{top:10}} delayedCall>
                                            <h5 className="counter">
                                                <span><CountUp end={ this.state.isVisible ? val.count : 0}/></span>
                                            </h5>
                                        </VisibilitySensor>
                                        <p className="description">{val.desc}</p>
                                    </div>
                                )
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}
