import {CgPlayListAdd} from 'react-icons/cg'

import Header from '../Header'
import Navigations from '../Navigations'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import SavedVideoCard from '../SavedVideoCard'

import {
  VideoDetailViewContainer,
  SavedVideoList,
  FailureViewContainer,
  FailedImg,
  FailedHeading,
  FailedText,
  SavedTitleIconContainer,
  SavedBanerCont,
  BannerHeading,
} from './styledComponents'

const SavedVideos = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideosList} = value

      const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9 '
      const bannerBgColor = isDarkTheme ? '#212121' : '#f9f9f9'
      const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
      const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'

      return (
        <>
          <Header />
          <Navigations />
          <VideoDetailViewContainer
            data-testid="gaming"
            bgColor={bannerBgColor}
          >
            {savedVideosList.length > 0 ? (
              <>
                <SavedBanerCont>
                  <SavedTitleIconContainer>
                    <CgPlayListAdd size={35} color="#ff0000" />
                  </SavedTitleIconContainer>
                  <BannerHeading headingColor={headingColor}>
                    Saved Videos
                  </BannerHeading>
                </SavedBanerCont>
                <SavedVideoList bgColor={bgColor}>
                  {savedVideosList.map(eachVideo => (
                    <SavedVideoCard
                      key={eachVideo.id}
                      videoDetails={eachVideo}
                    />
                  ))}
                </SavedVideoList>
              </>
            ) : (
              <FailureViewContainer bgColor={bgColor}>
                <FailedImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="no saved videos"
                />
                <FailedHeading headingColor={headingColor}>
                  No saved videos found
                </FailedHeading>
                <FailedText noteColor={noteColor}>
                  You can save your videos while watching them
                </FailedText>
              </FailureViewContainer>
            )}
          </VideoDetailViewContainer>
        </>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default SavedVideos
