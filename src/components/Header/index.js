import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import {FiLogOut} from 'react-icons/fi'
import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  NavbarHeader,
  ThemeButton,
  LogoutButton,
  LogoutIcon,
} from './styledComponents'

import './index.css'

const Header = props => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const color = isDarkTheme ? '#ffffff' : '#00306e'
      const bgColor = isDarkTheme ? '#231f20' : '#f1f5f9'

      const onChangeTheme = () => {
        toggleTheme()
      }

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <NavbarHeader bgColor={bgColor}>
          <Link to="/">
            <img
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
              alt="website logo"
              className="logo"
            />
          </Link>

          <div className="actions-container">
            <ThemeButton
              type="button"
              data-testid="theme"
              onClick={onChangeTheme}
            >
              {isDarkTheme ? (
                <BsBrightnessHigh color="#ffffff" size={25} />
              ) : (
                <BsMoon size={25} />
              )}
            </ThemeButton>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
              className="profile-img"
            />
            <Popup
              modal
              trigger={
                <LogoutButton type="button" isDarkTheme={isDarkTheme}>
                  Logout
                </LogoutButton>
              }
            >
              {close => (
                <div className="popup-cont">
                  <div>
                    <p>Are you sure, you want to logout?</p>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="close-button"
                      onClick={() => close()}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="confirmr-button"
                      onClick={onClickLogout}
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              )}
            </Popup>
            <Popup
              modal
              trigger={
                <LogoutIcon type="button" color={color}>
                  <FiLogOut />
                </LogoutIcon>
              }
            >
              {close => (
                <div className="popup-cont">
                  <div>
                    <p>Are you sure, you want to logout?</p>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="close-button"
                      onClick={() => close()}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="confirmr-button"
                      onClick={onClickLogout}
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              )}
            </Popup>
          </div>
        </NavbarHeader>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default withRouter(Header)
