import React from "react";
import './projects.css'
import Pill from "../../components/pill/pill";
import Footer from "../../components/Footer/footer";
import Sample from "../../sample";

export default function Projects({show_video}){
    let pillType = 'reg'
    const togglePillType = () => pillType = (pillType === 'reg' ? 'flipped' : 'reg');

    let proj_maker = Sample.map(item => {
        let instance = <Pill key = {item.id} info = {item} pillType = {pillType} show_video = {show_video}/>
        togglePillType()
        return instance
               
    })

    return(
        <div className="projects-wrapper container ">
            {/* <Vid video_info = {video_info} show_video = {show_video}/> */}
            <div className="project container bold-h2 space">Projects</div>
            <section className="proj container">
                {proj_maker}
            </section>

            <footer className="Project-footer container">
                <Footer />
            </footer>
           
        </div>
    )

}