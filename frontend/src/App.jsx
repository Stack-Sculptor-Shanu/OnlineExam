import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import './style.css'
import Landingpage from './components/LandingPage/Landingpage'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Privacy from './components/Privacy/Privacy'
import Login from './components/Login/Login'
import AdminReg from './Admin/AdminReg'
import StudentReg from './Student/StudentReg'
import ExamLists from './components/LiveExams/ExamLists/ExamLists'
import Instruction from './components/LiveExams/Instructions/Instruction'
import ExamPage from './components/LiveExams/ExamPage/ExamPage'
import AdminDashboard from './Admin/AdminDashboard/AdminDashboard'

const App = () => {
    const route = createBrowserRouter([
        {
            path:'/',
            element:<Dashboard/>,
            children:[
                {
                    path:'/',
                    element:<Landingpage/>
                },
                {
                    path:'/about',
                    element:<About/> 
                },
                {
                    path:'/contact',
                    element:<Contact/>
                },
                {
                    path:'/privacy',
                    element:<Privacy/>
                },
                {
                    path:'/login',
                    element:<Login/>
                },
                {
                    path:'/adminReg',
                    element:<AdminReg/>
                },
                {
                    path:'studentReg',
                    element:<StudentReg/>
                },
                {
                    path:'/examlists',
                    element:<ExamLists/>
                },
                {
                    path:'/instructions',
                    element:<Instruction/>
                },
                {
                    path:'/exampage',
                    element:<ExamPage/>
                },
                {
                    path:'/admin',
                    element:<AdminDashboard/>
                }
            ]
        }
    ])
  return <RouterProvider router={route}></RouterProvider>
}

export default App