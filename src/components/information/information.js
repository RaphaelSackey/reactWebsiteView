import './information.css'
import Button from '../buttons/button'

export default function Information({top, button, text}){


    return (
        <div className="information-wrapper">
            <h2 className='stack-h2 bold-h2'>
                {top.mainHeader? top.mainHeader : ''}
                {top.newline? <><br /> {top.newline} </> : ''}
                {top.span? <><span>{top.span}</span></>: ''}
            </h2>
            <h6 className='writing-h6'>
                {text? text : ''}
            </h6>

            {button? <div className='button-holder-home'><Button name = 'Git Hub' action = {'https://github.com/RaphaelSackey'}/> <Button name={'Linkedn'} action={'https://www.linkedin.com/in/raphael-sackey-1120381b1'}/> </div> :'' }
            
        </div>
    )

}