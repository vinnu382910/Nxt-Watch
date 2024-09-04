import {Component} from 'react'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

import {
  NavigationContainer,
  NavigationSmallContainer,
  NavOptionContainer,
  NavText,
  ContactInfoContainer,
  NavLink,
  NavLinkContainer,
  SocialMediaIconCont,
  ContactHeading,
  SocialMediaIcon,
  ContactPara,
  NavBar,
} from './styledComponents'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

class Navigations extends Component {
  renderTabItems = () => (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme, changeActiveTab, activeTab} = value
        const bgColor = isDarkTheme ? '#231f20' : '#f1f5f9'
        const color = isDarkTheme ? '#f9f9f9' : '#231f20'
        const activeTabBg = isDarkTheme ? '#475569' : '#cbd5e1'
        const onClickTabHome = () => {
          changeActiveTab('Home')
        }
        const onClickTabTrending = () => {
          changeActiveTab('Trending')
        }
        const onClickTabGaming = () => {
          changeActiveTab('Gamming')
        }
        const onClickTabSaved = () => {
          changeActiveTab('Saved')
        }

        return (
          <NavBar>
            <NavigationContainer bgColor={bgColor}>
              <NavOptionContainer>
                <NavLink to="/">
                  <NavLinkContainer
                    bgColor={activeTab === 'Home' ? activeTabBg : 'none'}
                    onClick={onClickTabHome}
                  >
                    <AiFillHome
                      size={30}
                      color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                    />
                    <NavText color={color}>Home</NavText>
                  </NavLinkContainer>
                </NavLink>
                <NavLink to="/trending">
                  <NavLinkContainer
                    bgColor={activeTab === 'Trending' ? activeTabBg : 'none'}
                    onClick={onClickTabTrending}
                  >
                    <HiFire
                      size={30}
                      color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                    />
                    <NavText color={color}>Trending</NavText>
                  </NavLinkContainer>
                </NavLink>
                <NavLink to="/gaming">
                  <NavLinkContainer
                    bgColor={activeTab === 'Gamming' ? activeTabBg : 'none'}
                    onClick={onClickTabGaming}
                  >
                    <SiYoutubegaming
                      size={30}
                      color={activeTab === 'Gamming' ? '#ff0b37' : '#909090'}
                    />
                    <NavText color={color}>Gamming</NavText>
                  </NavLinkContainer>
                </NavLink>
                <NavLink to="/saved-videos">
                  <NavLinkContainer
                    bgColor={activeTab === 'Saved' ? activeTabBg : 'none'}
                    onClick={onClickTabSaved}
                  >
                    <CgPlayListAdd
                      size={30}
                      color={activeTab === 'Saved' ? '#ff0b37' : '#909090'}
                    />
                    <NavText color={color}>Saved Videos</NavText>
                  </NavLinkContainer>
                </NavLink>
              </NavOptionContainer>
              <ContactInfoContainer>
                <ContactHeading color={color}>Contact Us</ContactHeading>
                <SocialMediaIconCont>
                  <SocialMediaIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <SocialMediaIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <SocialMediaIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </SocialMediaIconCont>
                <ContactPara color={color}>
                  Enjoy! now to see your channels and recomendations!
                </ContactPara>
              </ContactInfoContainer>
            </NavigationContainer>
            <NavigationSmallContainer bgColor={bgColor}>
              <NavLink to="/">
                <AiFillHome
                  size={30}
                  color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                  onClick={onClickTabHome}
                />
              </NavLink>
              <NavLink to="/trending">
                <HiFire
                  size={30}
                  color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                  onClick={onClickTabTrending}
                />
              </NavLink>
              <NavLink to="/gaming">
                <SiYoutubegaming
                  size={30}
                  color={activeTab === 'Gamming' ? '#ff0b37' : '#909090'}
                  onClick={onClickTabGaming}
                />
              </NavLink>
              <NavLink to="/saved-videos">
                <CgPlayListAdd
                  size={30}
                  color={activeTab === 'Saved' ? '#ff0b37' : '#909090'}
                  onClick={onClickTabSaved}
                />
              </NavLink>
            </NavigationSmallContainer>
          </NavBar>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )

  render() {
    return <>{this.renderTabItems()}</>
  }
}

export default Navigations
