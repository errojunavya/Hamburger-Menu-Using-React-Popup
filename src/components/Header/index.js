// Write your code here
import Popup from 'reactjs-popup'
import {withRouter, Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <div className="header-container">
    <div className="header-content">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="website-logo"
        />
      </Link>
      <Popup
        modal
        trigger={
          <button
            className="hamburger-button"
            data-testid="hamburgerIconButton"
            type="button"
          >
            <GiHamburgerMenu size="30" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="modal-container">
            <button
              type="button"
              className="close-button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose size="30" color="#616e7c" />
            </button>
            <ul className="list-container">
              <li className="item-list">
                <Link to="/" className="link" onClick={() => close()}>
                  <AiFillHome size="36" />
                  <p className="item-text">Home</p>
                </Link>
              </li>
              <li className="item-list">
                <Link to="/about" className="link" onClick={() => close()}>
                  <BsInfoCircleFill size="34" />
                  <p className="item-text">About</p>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </div>
)
export default withRouter(Header)
