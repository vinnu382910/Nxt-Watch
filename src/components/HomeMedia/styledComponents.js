import styled from 'styled-components'

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    padding: 30px;
    text-align: center;
  }
`
export const FailedImg = styled.img`
  height: 180px;
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 390px;
    height: 350px;
  }
`

export const FailedHeading = styled.h1`
  color: ${props => props.headingColor};
`

export const FailedText = styled.p`
  color: ${props => props.noteColor};
  font-weight: 400;
  font-size: 24px;
`

export const RetryButton = styled.button`
  border: none;
  background-color: #4f46e5;
  border-radius: 3px;
  color: #ffffff;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
`
export const VideoCardList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  @media screen and (min-width: 768px) {
    margin-left: 30px;
  }
`
