import {
  FailureViewContainer,
  FailedImg,
  FailedHeading,
  FailedText,
  RetryButton,
  VideoCardList,
} from './styledComponents'

import HomeVideoCard from '../HomeVideoCard'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

const HomeMedia = props => {
  const {homeVideos, totalVideos, onRetry} = props
  const onClickRetry = () => {
    onRetry()
  }

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
        const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'
        const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'

        return totalVideos > 0 ? (
          <VideoCardList>
            {homeVideos.map(eachVideo => (
              <HomeVideoCard video={eachVideo} key={eachVideo.id} />
            ))}
          </VideoCardList>
        ) : (
          <FailureViewContainer bgColor={bgColor}>
            <FailedImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <FailedHeading headingColor={headingColor}>
              No Search results found
            </FailedHeading>
            <FailedText noteColor={noteColor}>
              Try different key words or remove search filter
            </FailedText>
            <RetryButton type="button" onClick={onClickRetry}>
              Retry
            </RetryButton>
          </FailureViewContainer>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default HomeMedia
