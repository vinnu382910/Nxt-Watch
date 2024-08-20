import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'

import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  VideoContainer,
  Video,
  VideoTitle,
  VideoDescCont,
  VideoStatusCont,
  VideoStatus,
  PlayVideoDot,
  VideoBtnCont,
  VideoBtn,
  ButtonText,
  HrLine,
  ChannelImage,
  ChannelContainer,
  ChannelInfo,
  ChannelName,
  ChannelSubscribers,
  ChannelDescription,
} from './styledComponents'

import './index.css'

const VideoViewer = props => {
  const {videoDetails, isLiked, isDisLiked, clickLike, clickDislike} = props
  const {
    id,
    title,
    videoUrl,
    viewCount,
    publishedAt,
    description,
    name,
    profileImageUrl,
    subscriberCount,
  } = videoDetails
  const uploadDateToNow = formatDistanceToNow(new Date(publishedAt))
  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme, addVideo, savedVideosList} = value
        const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
        const textColor = isDarkTheme ? '#64748b' : '#231f20'
        const likeBgColor = isLiked ? '#2563eb' : '#64748b'
        const dislikeBgColor = isDisLiked ? '#2563eb' : '#64748b'

        const index = savedVideosList.findIndex(
          eachVideo => eachVideo.id === id,
        )

        const isSaved = index !== -1
        const saveIconBgColor = isSaved ? '#2563eb' : '#64748b'

        const onClicklike = () => {
          clickLike()
        }

        const onClickDislike = () => {
          clickDislike()
        }

        const onClickSave = () => {
          addVideo(videoDetails)
        }

        return (
          <VideoContainer>
            <Video>
              <ReactPlayer
                url={videoUrl}
                controls
                width="100%"
                height="100%"
                className="video-player"
              />
            </Video>
            <VideoDescCont>
              <VideoTitle color={headingColor}>{title}</VideoTitle>
              <VideoStatusCont>
                <VideoStatus color={textColor}>
                  {viewCount} views <PlayVideoDot> &#8226; </PlayVideoDot>
                  {uploadDateToNow}
                </VideoStatus>
                <VideoBtnCont>
                  <VideoBtn
                    color={textColor}
                    type="button"
                    bgColor={likeBgColor}
                    onClick={onClicklike}
                  >
                    <AiOutlineLike size="28px" />
                    <ButtonText>Like</ButtonText>
                  </VideoBtn>
                  <VideoBtn
                    color={textColor}
                    type="button"
                    bgColor={dislikeBgColor}
                    onClick={onClickDislike}
                  >
                    <AiOutlineDislike size="28px" />
                    <ButtonText>Dislike</ButtonText>
                  </VideoBtn>
                  <VideoBtn
                    color={textColor}
                    bgColor={saveIconBgColor}
                    onClick={onClickSave}
                    type="button"
                  >
                    <BiListPlus size="28px" />
                    <ButtonText>Save</ButtonText>
                  </VideoBtn>
                </VideoBtnCont>
              </VideoStatusCont>
              <HrLine />
              <ChannelContainer>
                <ChannelImage src={profileImageUrl} alt="channel logo" />
                <ChannelInfo>
                  <ChannelName color={textColor}>{name}</ChannelName>
                  <ChannelSubscribers color={textColor}>
                    {subscriberCount} Subscribers
                  </ChannelSubscribers>
                  <ChannelDescription color={textColor}>
                    {description}
                  </ChannelDescription>
                </ChannelInfo>
              </ChannelContainer>
            </VideoDescCont>
          </VideoContainer>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default VideoViewer
