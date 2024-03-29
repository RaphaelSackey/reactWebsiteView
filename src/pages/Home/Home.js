import Information from "../../components/information/information"
import Picture from "../../components/picture/pic"
import Pill from "../../components/pill/pill"
import Footer from "../../components/Footer/footer"
import Sample from "../../sample"
import './home.css'
import React from "react"
export default function Home({ show_video}){
    const [proj_maker, setProj_maker] = React.useState([])
    React.useEffect(() => {
        let used_numbers = new Set()
        let temp_holder = [...proj_maker]
        let pillType = 'reg'
        const togglePillType = () => pillType = (pillType === 'reg' ? 'flipped' : 'reg');
        for (let i = 0; i < 2; i++  ){
            let random_number = Math.ceil(Math.random()*Sample.length - 1)
            while (used_numbers.has(random_number)){
                random_number = Math.ceil(Math.random()*Sample.length - 1)
            }
            used_numbers.add(random_number)
            Sample.forEach(item => {
                if(item.id === random_number){
                    temp_holder.push(<Pill key = {item.id} info = {item} pillType = {pillType} show_video = {show_video} />)
                    togglePillType();
                    
                }
                
            })
        };
        console.log('generating random')
        setProj_maker(temp_holder)
    },[])

    const info = {
        top: {
            mainHeader:'Hi,',
            newline: "I'm ",
            span:'Raphael',

        },
        button: true,
        text : "Thanks for visiting my website. this website provides more information about me and allows you to see some of the projects I've worked on by either clicking the projects button below or navigating to the portfolio page. this site is linked to my Github which will give you hands on code review. Feel free to explore."
    }
    return(
        <div className="home-wrapper container">
            <section className="top_with_picture container space" >
                <Information top={info.top} button={info.button} text={info.text}/>
                <Picture />
            </section>
            
            <div className="project container bold-h2 space">Project Preview</div>
        
            <section className="home-project-section container space" >
                {proj_maker}
            </section>
       
            <footer className="home-footer container">
                <Footer />
            </footer>
           
        </div>

    )

}