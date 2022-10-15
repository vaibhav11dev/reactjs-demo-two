import React, { Component } from 'react'

export default class BrandSection extends Component {
    render() {
        const list = [];

        for (let i = 1; i <= 6; i++) {
            list.push(<li key={i}><img src={require(`../assets/images/brand/brand-0${i}.png`)} alt="Logo Images" /></li>);
        }

        return (
            <div className="rn-brand-area brand-separation bg_color--5 pb--120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="brand-style-2">
                                {list}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
