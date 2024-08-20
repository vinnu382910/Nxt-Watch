import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import Navigations from '../Navigations'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import SavedVideoCard from '../SavedVideoCard'
import FailureView from '../FailureView'

import {
  VideosLoaderContainer,
  VideoDetailViewContainer,
  SavedVideoList,
  SavedTitleIconContainer,
  SavedBanerCont,
  BannerHeading,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class TrendingVideos extends Component {
  state = {
    trendingVideosList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const url = `https://apis.ccbp.in/videos/trending`
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
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
        channelName: eachVideo.channel.name,
        channelProfileImg: eachVideo.channel.profile_image_url,
      }))
      this.setState({
        trendingVideosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  rendertrendingVideosView = () => {
    const {trendingVideosList} = this.state
    return (
      <SavedVideoList>
        {trendingVideosList.map(eachVideo => (
          <SavedVideoCard key={eachVideo.id} videoDetails={eachVideo} />
        ))}
      </SavedVideoList>
    )
  }

  renderLoadingView = () => (
    <VideosLoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </VideosLoaderContainer>
  )

  onRetry = () => {
    this.getTrendingVideos()
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderTrendingVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.rendertrendingVideosView()
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
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9 '
          const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'

          return (
            <>
              <Header />
              <Navigations />
              <VideoDetailViewContainer
                data-testid="trending"
                bgColor={bgColor}
              >
                <SavedBanerCont>
                  <SavedTitleIconContainer>
                    <HiFire size={35} color="#ff0000" />
                  </SavedTitleIconContainer>
                  <BannerHeading headingColor={headingColor}>
                    Trending
                  </BannerHeading>
                </SavedBanerCont>
                {this.renderTrendingVideos()}
              </VideoDetailViewContainer>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default TrendingVideos
