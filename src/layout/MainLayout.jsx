import React from 'react'
import Home from '../pages/Home'

const MainLayout = ({ children }) => {
  return (
    <div>
      <main>{ children }</main>
    </div>
  )
}

export default MainLayout
