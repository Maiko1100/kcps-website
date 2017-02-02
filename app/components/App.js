import React, { Component } from 'react'

import { connect } from "react-redux"
import { styles } from '../styles/app.scss'

import Scroll from 'react-scroll'
import Home from './Home'
import About from './About'
import Services from './Services'


var Link = Scroll.Link;
var DirectLink = Scroll.DirectLink;
var Element = Scroll.Element;
var Events = Scroll.Events;
var scroll = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;

connect((store) => {
    user: store.user
})

class App extends Component {

    render() {
        return (
            <div>
                <div className="header">
                    <div className="companyName">KCPSoftware</div>
                    <ul>
                        <li><Link activeClass="active" to="home" spy={true} smooth={true} duration={500}>Home</Link></li>
                        <li><Link activeClass="active" to="about" spy={true} smooth={true} duration={500}>About</Link></li>
                        <li><Link activeClass="active" to="services" spy={true} smooth={true} duration={500}>Services</Link></li>
                    </ul>
                </div>
                <Element name="home">
                    <Home/>
                </Element>
                <Element name="about">
                    <About/>
                </Element>
                <Element name="services">
                    <Services/>
                </Element>
            </div>
        );
    }
}

export default connect()(App)
