import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

import logo from '../assets/images/logo/logo.png';

class Header extends Component {

  constructor(props) {
    super(props);
    this.menuTrigger = this.menuTrigger.bind(this);

    window.addEventListener('load', function () {
      let elements = document.querySelectorAll('.has-droupdown > a');
      for (let i in elements) {
        if (elements.hasOwnProperty(i)) {
          elements[i].onclick = function (e) {
            e.preventDefault();
            this.parentElement.querySelector('.submenu').classList.toggle("active");
            this.classList.toggle("open");
          }
        }
      }
    })
  }


  menuTrigger() {
    document.querySelector('.header-wrapper').classList.toggle('menu-open');
  }

  render() {
    return (
      <header className="header-area formobile-menu header--transparent default-color">
        <div className="header-wrapper" id="header-wrapper">
          <div className="header-left">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="Digital Agency" />
              </Link>
            </div>
          </div>
          <div className="header-right">
            <nav className="mainmenunav d-lg-block">
              <ul className="mainmenu">
                <li className="has-droupdown">
                  <Link to="#">Home</Link>
                </li>
                <li className="has-droupdown">
                  <Link to="/">Service</Link>
                  <ul className="submenu">
                    <li>
                      <Link to="/">Service</Link>
                    </li>
                    <li>
                      <Link to="/">Service Details</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/">About</Link>
                </li>
                <li className="has-droupdown">
                  <Link to="/">Blog</Link>
                </li>
                <li className="has-droupdown">
                  <Link to="/">Gallery</Link>
                </li>
              </ul>
            </nav>
            <div className="header-btn">
              <Link className="rn-btn" to="#">
                <span>contact</span>
              </Link>
            </div>

            <div className="humberger-menu d-block d-lg-none pl--20">
              <span onClick={this.menuTrigger} className="menutrigger text-white">
                <FiMenu />
              </span>
            </div>

            <div className="close-menu d-block d-lg-none">
              <span onClick={this.menuTrigger} className="closeTrigger">
                <FiX />
              </span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
