import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Westend Eye Hospital Cochin" style={{ width: '88px' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/directions">
                Directions
              </Link>
              <Link className="navbar-item" to="/specialities">
                Specialities
              </Link>
              <Link className="navbar-item" to="/team">
                Our Team
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                Contact Us
              </Link>
              <Link className="navbar-item" to="/gallery">
                Gallery
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://www.google.com/search?q=westend%20eye%20hospital%20map&oq=westendeyehospital+map&aqs=chrome..69i57j0j69i64.6424j0j7&sourceid=chrome&ie=UTF-8&sxsrf=ALeKk00OjMXvis0GGPyTdhD4nMVh6pn13w:1590085230783&npsic=0&rflfq=1&rlha=0&rllag=9986151,76278870,476&tbm=lcl&rldimm=15763189651392616148&lqi=Chh3ZXN0ZW5kIGV5ZSBob3NwaXRhbCBtYXBaHwoDbWFwIhh3ZXN0ZW5kIGV5ZSBob3NwaXRhbCBtYXA&ved=2ahUKEwi2nN-KycXpAhUMzTgGHfuVCxkQvS4wAHoECAwQIA&rldoc=1&tbs=lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2&rlst=f#rlfi=hd:;si:15763189651392616148,l,Chh3ZXN0ZW5kIGV5ZSBob3NwaXRhbCBtYXBaHwoDbWFwIhh3ZXN0ZW5kIGV5ZSBob3NwaXRhbCBtYXA;mv:[[9.988313699999999,76.2832193],[9.9839887,76.2745209]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={logo} alt="Best Eye Hospital in Cochin" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
