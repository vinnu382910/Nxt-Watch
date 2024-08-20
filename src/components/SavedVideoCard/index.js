import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  ItemLink,
  SavedListItem,
  SavedItemThumbNailImage,
  SavedVideoDetails,
  SavedContentSection,
  SavedProfileImage,
  SavedTitle,
  SavedChannelName,
  SavedViewsAndDate,
  SavedDot,
} from './styledComponents'

const SavedVideoCard = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
    profileImageUrl,
  } = videoDetails
  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

        return (
          <ItemLink to={`/videos/${id}`} className="link">
            <SavedListItem>
              <SavedItemThumbNailImage
                src={thumbnailUrl}
                alt="video thumbnail"
              />
              <SavedVideoDetails>
                <SavedProfileImage src={profileImageUrl} alt="channel logo" />
                <SavedContentSection>
                  <SavedTitle color={textColor}>{title}</SavedTitle>
                  <SavedChannelName color={textColor}>{name}</SavedChannelName>
                  <SavedViewsAndDate color={textColor}>
                    {viewCount} views<SavedDot> &#8226; </SavedDot>
                    {publishedAt}
                  </SavedViewsAndDate>
                </SavedContentSection>
              </SavedVideoDetails>
            </SavedListItem>
          </ItemLink>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default SavedVideoCard
