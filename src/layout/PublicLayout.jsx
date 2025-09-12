import { Outlet } from '@tanstack/react-router'
import React from 'react'

const PublicLayout = () => {
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default PublicLayout
