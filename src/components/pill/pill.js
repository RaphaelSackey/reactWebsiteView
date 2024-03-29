import './pill.css'
import Button from '../buttons/button'




export default function Pill ({info, pillType, show_video}){

    // function vidClicked (e){
    //     console.log('clicke');
    //     console.log(e.target.id);
    //     <Vid id = {e.target.id} Play = 'active'></Vid>
    // }

    return(
        <div className='pill-wrapper space'>
            {pillType === 'reg'?
            <>
                <div className='left-pill'>
                    <div className='h2 bold-h2'>{info.header}</div>
                    <p className='h6 writing-h6'>{info.description}</p>
                    <div className='button-container'>
                        <Button name = {'Source Code'} action={info.source_code}/>
                    </div>
                </div>
                <div className='right-pill'>
                    <img src= {info.image} alt = 'project-pic' className='proj-image'></img>
                </div>
                {info.video.hasVid? <img src='./images/playbutton/play.png' alt = '-' className='playButton' id = {info.video.url} onClick={(e)=> show_video(e.target.id)}></img> : ''}
            </>


            :
        <>
                <div className='left-pill '>
                    <img src={info.image} alt = '-' className='proj-image-left'></img>
                   
                </div>
                <div className='right-pill '>
                    <div className='h2 bold-h2'>{info.header}</div>
                    <p className='h6 writing-h6'>{info.description}</p>
                    <div className='button-container'>
                        <Button name = {'Source Code'} action={info.source_code}/>
                    </div>

                </div>
                {info.video.hasVid? <img src='./images/playbutton/play.png' alt = 'play-button'className='playButton' id = {info.video.url} onClick={(e)=> show_video(e.target.id)}></img> : ''}
        
        </>
            
        
        }
        </div>
    )
}