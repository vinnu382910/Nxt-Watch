import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavbarHeader = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  height: 60px;
  width: 100%;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`

export const ThemeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`

export const LogoutButton = styled.button`
  background-color: transparent;
  text-align: center;
  color: ${props => (props.isDarkTheme ? '#fff' : '#4f46e5')};
  font-family: Roboto;
  font-weight: bold;
  border: 2px solid ${props => (props.isDarkTheme ? '#fff' : '#4f46e5')};
  width: 85px;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const LogoutIcon = styled.button`
  @media screen and (min-width: 768px) {
    display: none;
  }
  color: ${props => props.color};
  font-weight: bold;
  border: none;
  background-color: transparent;
  font-size: 18px;
`
export const LogoLink = styled(Link)`
  text-decoration: none;
`
