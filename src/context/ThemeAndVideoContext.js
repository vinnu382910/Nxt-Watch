import React from 'react'

const ThemeAndVideoContext = React.createContext({
  savedVideosList: [],
  isDarkTheme: false,
  toggleTheme: () => {},
  activeTab: 'Home',
  changeActiveTab: () => {},
  addVideo: () => {},
})

export default ThemeAndVideoContext
