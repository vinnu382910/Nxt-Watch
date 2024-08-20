import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const ItemLink = styled(Link)`
  text-decoration: none;
`

export const SavedListItem = styled.div`
  background: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
    padding: 40px;
    padding-bottom: 0px;
  }
`
export const SavedItemThumbNailImage = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) {
    max-width: 300px;
  }
`
export const SavedVideoDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`
export const SavedProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  margin: 20px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const SavedContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 8px;
  @media screen and (min-width: 768px) {
    margin-left: 20px;
    padding: 0px;
  }
`
export const SavedTitle = styled.p`
  font-family: Roboto;
  font-size: 15px;
  color: ${props => props.color};
  margin-top: 0px;
`
export const SavedChannelName = styled.p`
  font-family: Roboto;
  font-size: 13px;
  color: ${props => props.color};
`
export const SavedViewsAndDate = styled.p`
  font-family: Roboto;
  font-size: 12px;
  color: ${props => props.color};
`
export const SavedDot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
`