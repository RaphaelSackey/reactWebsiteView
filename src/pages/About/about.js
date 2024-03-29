import React from "react";
import Information from "../../components/information/information";
import Picture from "../../components/picture/pic";
import Footer from "../../components/Footer/footer";
import './about.css'



export default function About(){

    const info = {
        top: {
            mainHeader:'About Me',
            newline: false,
            span:false,

        },
        button: false,
        text : "Hello, my name is Raphael Sackey, a fourth-year Computer Science student at SUNY Plattsburgh. I specialize in APIs, cross-platform mobile apps, and full-stack web development, skills critical for today's digital world. My coursework has covered key areas like Data Structures, Operating Systems, and Software Engineering, alongside programming in Python, JavaScript, HTML, CSS, and SQL. Proficient in React, Git, MySQL, and React Native, and experienced with Visual Studio Code and Android Studio, I'm focused on developing seamless, user-centric solutions. I'm eager to apply my knowledge and skills in practical settings and further my growth in the tech industry."
    }

    return(
        <div className=" about-wrapper ">
            <section className=" about container space" >
            <Information top={info.top} button={info.button} text={info.text}/>
                <Picture />
            </section>
            <div className="about-footer-container container">
                <Footer />
            </div>
            
        
           
        </div>
        
        
    )

}