import {Component} from 'react'

import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import Header from '../Header'
import Navigations from '../Navigations'
import FailureView from '../FailureView'
import HomeMedia from '../HomeMedia'

import {
  HomeContainer,
  BannerContainer,
  LogoImg,
  CloseContainer,
  CloseIcon,
  BannerDescCont,
  BannerText,
  BannerButton,
  SearchCont,
  SearchInput,
  SearchIconCont,
  VideosLoaderContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    displayBanner: 'flex',
    searchInput: '',
    homeVideosList: [],
    totalHomeVideos: 0,
  }

  componentDidMount() {
    this.getAllVideos()
  }

  getAllVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const {searchInput} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
      }))
      this.setState({
        homeVideosList: updatedData,
        totalHomeVideos: fetchedData.total,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  closeBanner = () => {
    this.setState({displayBanner: 'none'})
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onSearchResults = () => {
    this.getAllVideos()
  }

  onEnterSearchInput = event => {
    if (event.key === 'Enter') {
      this.onSearchResults()
    }
  }

  onRetry = () => {
    this.setState({searchInput: ''}, this.getAllVideos)
  }

  renderVideosView = () => {
    const {homeVideosList, totalHomeVideos} = this.state
    return (
      <HomeMedia
        homeVideos={homeVideosList}
        totalVideos={totalHomeVideos}
        onRetry={this.onRetry}
      />
    )
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderLoadingView = () => (
    <VideosLoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </VideosLoaderContainer>
  )

  renderHome = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {displayBanner, searchInput} = this.state
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
          const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

          return (
            <>
              <Header />
              <Navigations />
              <HomeContainer data-testid="home" bgColor={bgColor}>
                <BannerContainer data-testid="banner" display={displayBanner}>
                  <CloseContainer>
                    <LogoImg
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      alt="nxt watch logo"
                      className="logo"
                    />
                    <CloseIcon data-testid="close" onClick={this.closeBanner}>
                      <AiOutlineClose size={30} />
                    </CloseIcon>
                  </CloseContainer>
                  <BannerDescCont>
                    <BannerText>
                      Buy Nxt Watch Premium prepaid plans with <br /> UPI
                    </BannerText>
                    <BannerButton>GET IT NOW</BannerButton>
                  </BannerDescCont>
                </BannerContainer>
                <SearchCont>
                  <SearchInput
                    type="search"
                    placeholder="Search"
                    value={searchInput}
                    color={textColor}
                    onChange={this.onChangeInput}
                    onKeyDown={this.onEnterSearchInput}
                  />
                  <SearchIconCont
                    data-testid="searchButton"
                    onClick={this.onSearchResults}
                  >
                    <AiOutlineSearch size={20} />
                  </SearchIconCont>
                </SearchCont>
                {this.renderHome()}
              </HomeContainer>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default Home
