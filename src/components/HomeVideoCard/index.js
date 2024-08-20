import {Link} from 'react-router-dom'

import {
  VideoItem,
  VideoThumbnail,
  VideoDetailsContainer,
  ProfileLogo,
  VideoContentCont,
  VideoTitle,
  ChannelName,
  ViewsAndDate,
  Dot,
} from './styledComponents'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import './index.css'

const HomeVideoCard = props => {
  const {video} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
    profileImageUrl,
  } = video
  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#475569' : '#00306e'
        const titleColor = isDarkTheme ? '#fff' : '#181818'

        return (
          <Link to={`/videos/${id}`} className="link">
            <VideoItem>
              <VideoThumbnail src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetailsContainer>
                <ProfileLogo src={profileImageUrl} alt="channel logo" />
                <VideoContentCont>
                  <VideoTitle color={titleColor}>{title}</VideoTitle>
                  <ChannelName color={textColor}>{name}</ChannelName>
                  <ViewsAndDate color={textColor}>
                    {viewCount} views<Dot> &#8226; </Dot> {publishedAt}
                  </ViewsAndDate>
                </VideoContentCont>
              </VideoDetailsContainer>
            </VideoItem>
          </Link>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default HomeVideoCard
