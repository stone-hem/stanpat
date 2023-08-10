import {createBrowserRouter, Navigate} from 'react-router-dom'
import Home from './views/Home'
import App from './App'
import About from './views/About'
import Contacts from './views/Contacts'
import Services from './views/Services'
import Projects from './views/Projects'
import News from './views/News'

const router= createBrowserRouter([
   
   {
    path:'/',
    element:<App/>,
    children:[
        {
            path:'/',
            element:<Navigate to="/home" />
        },
        {
            path:'/home',
            element: <Home/>
        },
        {
            path:'/about',
            element: <About/>
        },
        {
            path:'/services',
            element: <Services/>
        },
        {
            path:'/projects',
            element: <Projects/>
        },
        {
            path:'/news',
            element: <News/>
        },
        {
            path:'/contacts',
            element: <Contacts/>
        },
    ]
   }
])

export default router