import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {SiYoutubegaming} from 'react-icons/si'

import Header from '../Header'
import Navigations from '../Navigations'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import FailureView from '../FailureView'
import GameVideoCard from '../GameVideoCard'

import {VideosLoaderContainer, GamingVideoList} from './styledComponents'

import {
  VideoDetailViewContainer,
  SavedTitleIconContainer,
  SavedBanerCont,
  BannerHeading,
} from '../SavedVideos/styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class GamingVideos extends Component {
  state = {
    gammingVideosList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const url = `https://apis.ccbp.in/videos/gaming`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        gammingVideosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderGamingVideosView = () => (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const {gammingVideosList} = this.state

        const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
        const bannerBgColor = isDarkTheme ? '#212121' : '#f9f9f9'
        const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
        return (
          <VideoDetailViewContainer
            data-testid="gaming"
            bgColor={bannerBgColor}
          >
            <SavedBanerCont>
              <SavedTitleIconContainer>
                <SiYoutubegaming size={35} color="#ff0000" />
              </SavedTitleIconContainer>
              <BannerHeading headingColor={headingColor}>
                Trending Videos
              </BannerHeading>
            </SavedBanerCont>
            <GamingVideoList bgColor={bgColor}>
              {gammingVideosList.map(eachVideo => (
                <GameVideoCard key={eachVideo.id} videoDetails={eachVideo} />
              ))}
            </GamingVideoList>
          </VideoDetailViewContainer>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )

  renderLoadingView = () => (
    <VideosLoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </VideosLoaderContainer>
  )

  onRetry = () => {
    this.getTrendingVideos()
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderGameVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderGamingVideosView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <Navigations />
        {this.renderGameVideos()}
      </>
    )
  }
}

export default GamingVideos
