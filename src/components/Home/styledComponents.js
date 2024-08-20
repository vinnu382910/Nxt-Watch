import styled from 'styled-components'

export const HomeContainer = styled.div`
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin-top: 60px;
  margin-bottom: 60px;
  overflow-y: auto;
`

export const BannerContainer = styled.div`
  display: ${props => props.display};
  flex-direction: column;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  width: 100%;
  background-size: cover;
  padding: 20px;
  padding-bottom: 40px;
`
export const CloseContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const LogoImg = styled.img`
  height: 30px;
  width: 100px;
`

export const CloseIcon = styled.button`
  background-color: transparent;
  font-weight: bold;
  border: none;
  cursor: pointer;
`
export const BannerDescCont = styled.div`
  @media screen and (max-width: 768px) {
    width: 200px;
  }
`

export const BannerText = styled.p`
  font-family: Roboto;
  font-weight: 400;
`

export const BannerButton = styled.button`
  border: 2px solid #000;
  font-weight: bold;
  background-color: transparent;
  height: 35px;
  max-width: 100px;
  cursor: pointer;
`

export const SearchCont = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
  width: 300px;
  height: 40px;
  border: 1px solid #909090;
  @media screen and (min-width: 576px) {
    width: 40%;
  }
`

export const SearchIconCont = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #909090;
  width: 70px;
  height: 100%;
  border: none;
  cursor: pointer;
`

export const SearchInput = styled.input`
  background: none;
  width: 100%;
  outline: none;
  padding: 5px;
  border: none;
  color: ${props => props.color};
  font-family: Roboto;
  font-weight: 500;
  font-size: 16px;
`

export const VideosLoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
