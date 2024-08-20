import styled from 'styled-components'

export const VideoContainer = styled.div`
  margin-top: 20px;
  @media screen and (min-width: 768px) {
    margin: 20px;
  }
`

export const Video = styled.div`
  height: 300px;
  @media screen and (min-width: 768px) {
    height: 450px;
  }
`

export const VideoDescCont = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  @media screen and (min-width: 768px) {
    padding: 0px;
  }
`

export const VideoTitle = styled.p`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`

export const VideoStatusCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const VideoStatus = styled.p`
  font-family: Roboto;
  color: ${props => props.color};
  font-weight: 500;
`

export const PlayVideoDot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
`

export const VideoBtnCont = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const VideoBtn = styled.button`
  color: ${props => props.bgColor};
  background-color: transparent;
  margin-right: 10px;
  border: none;
  font-size: 18px;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`
export const ButtonText = styled.p`
  margin-left: 10px;
  font-weight: 500;
`
export const HrLine = styled.hr`
  border: 1px solid #909090;
`
export const ChannelContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
`
export const ChannelImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  margin-right: 20px;
`
export const ChannelInfo = styled.div`
  display: flex;
  flex-direction: column;
`
export const ChannelName = styled.p`
  font-family: Roboto;
  font-size: 15px;
  color: ${props => props.color};
  margin: 0px;
`
export const ChannelSubscribers = styled.p`
  font-family: Roboto;
  font-size: 12px;
  color: ${props => props.color};
`
export const ChannelDescription = styled.p`
  font-family: Roboto;
  font-size: 15px;
  color: ${props => props.color};
`
export const BtnContainer = styled.div`
  display: flex;
  background: none;
`
