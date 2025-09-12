import { Outlet } from '@tanstack/react-router'
import Navbar from '../components/Navbar'

const PrivateLayout = () => {
  return (
    <div>
      <Navbar/>
      <main className='p-4'>

      <Outlet/>
      </main>
    </div>
  )
}
  
export default PrivateLayout
