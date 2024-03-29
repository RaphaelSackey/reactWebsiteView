import './video.css'



export default function Vid({video_info, show_video}){
    
    if (video_info.state){
        return (<div className= 'vid-wrapper ' key={video_info.url} onClick={()=>show_video('')}>
                    <video src={video_info.url} controls onClick={(event) => event.stopPropagation()}></video>
                    </div> 
                    )
    }else{
       return(<></>)
    }

    

}