import './utils/modern-normalize.css'
import './app.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/about'
import Projects from './pages/Projects/projects'
import Contact from './pages/Contact/contact'
import Navbar from './components/Navbar/navbar'
import Sidebar from './components/sidebar/sidebar'
import Vid from './components/video/video'
import React from 'react'
import emailjs from '@emailjs/browser'
import './utils/util.css'



export default function App(){

    const [isClickedSidebar, setIsClickedSidebar] = React.useState(false)
    const [formData, setFormData] = React.useState(
        {
            name: '',
            email: '',
            message: ''
        }
    )
    const [vidIsClicked, setVidIsClicked] = React.useState({
        url : '',
        state : false
    })

    function toggleSidebar(){
        setIsClickedSidebar(prev => !prev)
    }

    function playVid(event){
        setVidIsClicked(prev => { 
            
            return ({...prev,
                    url: event,
                    state: !prev.state
                    })      
        })
    }
    function updateForm(e){
        const name = e.target.name
        // console.log(e.target.text)
        setFormData(prev => ({
            ...prev,
            [name]: e.target.value
        }))
    }

    function submitForm(e){
        e.preventDefault()
        emailjs.send(
            process.env.REACT_APP_YOUR_SERVICE_ID, 
            process.env.REACT_APP_YOUR_TEMPLATE_ID, 
            formData, 
            {
            publicKey: process.env.REACT_APP_YOUR_PUBLIC_KEY,
            })
        .then(
          () => {
            alert('Message sent successfully')
            setFormData(
                {
                    name: '',
                    email: '',
                    message: ''
                }
            )

          },
          (error) => {
            alert('failed');
          },
        );
    }

    return(
        <BrowserRouter>
            <Vid video_info = {vidIsClicked} show_video = {playVid}/>
            <Sidebar isClicked  = {isClickedSidebar} toggleSidebar = {toggleSidebar}/>
            <Navbar toggleSidebar= {toggleSidebar}/>
            <Routes>
                <Route path = '/' element = {<Home show_video = {playVid}/>}></Route>
                <Route path = '/home' element = {<Home  show_video = {playVid}/>}></Route>
                <Route path = '/about' element = {<About />}></Route>
                <Route path = '/projects' element = {<Projects video_info = {vidIsClicked} show_video = {playVid}/>}></Route>
                <Route path = '/contact' element = {<Contact updateForm = {updateForm} formData = {formData} submitForm = {submitForm}/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}