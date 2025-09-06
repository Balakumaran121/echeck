import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Navbar = () => {
  const {userName}=useSelector((state)=>state.user)
  return (
    <div className="px-3 py-5 bg-red-100 flex justify-between items-center">
      <div className="text-xl font-semibold text-red-500">NewGen</div>
      <ul className="flex space-x-4">
        <li className="text-red-500 hover:text-red-600 hover:cursor-pointer"><Link to="/">Home</Link></li>
        <li className="text-red-500 hover:text-red-600 hover:cursor-pointer"><Link to="/about">About</Link></li>
        <li className="text-red-500 hover:text-red-600 hover:cursor-pointer"><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full text-lg font-semibold text-red-500">
        {userName.charAt(0).toUpperCase()}
      </div>
    </div>
  )
}

export default Navbar
