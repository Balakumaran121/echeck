import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import UserLayout from './layout/UserLayout';

const AppRouter = ()=>{
    return (
        <Routes>
            <Route element={<UserLayout/>}>

            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
            </Route>
        </Routes>
    )
}

export default AppRouter    