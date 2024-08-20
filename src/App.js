import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import TrendingVideos from './components/TrendingVideos'
import GamingVideos from './components/GamingVideos'
import NotFound from './components/NotFound'

import ThemeAndVideoContext from './context/ThemeAndVideoContext'

import './App.css'

// Replace your code here
class App extends Component {
  state = {savedVideosList: [], isDarkTheme: false, activeTab: 'Home'}

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  changeActiveTab = tabId => {
    this.setState({activeTab: tabId})
  }

  addVideo = video => {
    const {savedVideosList} = this.state
    const index = savedVideosList.findIndex(
      eachVideo => eachVideo.id === video.id,
    )
    if (index === -1) {
      this.setState({savedVideosList: [...savedVideosList, video]})
    } else {
      savedVideosList.splice(index, 1)
      this.setState({savedVideosList})
    }
  }

  render() {
    const {isDarkTheme, activeTab, savedVideosList} = this.state
    return (
      <ThemeAndVideoContext.Provider
        value={{
          savedVideosList,
          isDarkTheme,
          toggleTheme: this.toggleTheme,
          changeActiveTab: this.changeActiveTab,
          addVideo: this.addVideo,
          activeTab,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/trending" component={TrendingVideos} />
          <ProtectedRoute exact path="/gaming" component={GamingVideos} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </ThemeAndVideoContext.Provider>
    )
  }
}

export default App
