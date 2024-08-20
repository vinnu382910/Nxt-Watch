import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const NavBar = styled.div`
  display: flex;
`

export const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 92%;
  position: fixed;
  top: 60px;
  background-color: ${props => props.bgColor};
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavOptionContainer = styled.ul`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  list-style-type: none;
  padding: 0px;
  margin-top: 0px;
  background-color: ${props => props.activeTabBg};
`

export const NavLink = styled(Link)`
  text-decoration: none;
`
export const NavLinkContainer = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.bgColor};
  padding-left: 20px;
`

export const NavOption = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 22px;
  cursor: pointer;
}
`
export const NavText = styled.p`
  color: ${props => props.color};
  font-family: Roboto;
  font-weight: 500;
  margin-left: 10px;
`

export const ContactInfoContainer = styled.div`
  margin-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const ContactHeading = styled.h1`
  font-size: 22px;
  color: ${props => props.color};
  font-family: Roboto;
  font-weight: bold;
`

export const SocialMediaIconCont = styled.div`
  margin-left: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 130px;
`
export const SocialMediaIcon = styled.img`
  height: 30px;
  width: 30px;
`

export const ContactPara = styled.p`
  font-size: 16px;
  color: ${props => props.color};
  font-family: Roboto;
  font-weight: 500;
`

export const NavigationSmallContainer = styled.nav`
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: space-between;
  padding: 10px;
  background-color: ${props => props.bgColor};
  position: fixed;
  bottom: 0;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
