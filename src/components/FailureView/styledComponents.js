import styled from 'styled-components'

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${props => props.bgColor};
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    padding: 30px;
    text-align: center;
  }
`
export const FailedImg = styled.img`
  height: 200px;
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 450px;
    height: 400px;
  }
`

export const FailedHeading = styled.h1`
  color: ${props => props.headingColor};
`

export const FailedText = styled.p`
  color: ${props => props.noteColor};
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
