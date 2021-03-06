import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import youtube from '../img/social/youtube.svg'
import whatsapp from '../img/social/whatsapp.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Westend Eye Hospital Cochin"
            style={{ width: '14em', height: '10em' }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/directions">
                        Directions
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/specialities">
                        Specialities
                      </Link>
                    </li>
                    
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Latest Blog Stories
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/team">
                        Our Team
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/gallery">
                        Gallery
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="facebook" href="https://www.facebook.com/WestendEyeHospital">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com/WestendEye">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://www.instagram.com/WestendEyeHospital">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="youtube" href="https://www.youtube.com/channel/UCij2uTW4gvbF80lgLlRM_oQ">
                  <img
                    src={youtube}
                    alt="YouTube"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="whatsapp" href="https://api.whatsapp.com/send?phone=919446707272">
                  <img
                    src={whatsapp}
                    alt="WhatsApp"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
