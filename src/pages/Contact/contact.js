import './contact.css'



export default function Contact({updateForm, formData, submitForm}){

    return(
        <div className = 'contact-wrapper'>
            <section className='section-holder container'>
                <div className='contact-left'>
                    <h1 className="bold-h2">Contact Me</h1>
                    <div className='email-container'>
                    <img src='./images/footer/send.png' alt='mail'/> <span>raphaelsacke99@gmail.com</span>
                    </div>
                    
                    <div className="social">
                        <a href='https://www.linkedin.com/in/raphael-sackey-1120381b1'><img src='./images/footer/linkedin.png' alt='linkedn'></img></a>
                        <a href='https://github.com/RaphaelSackey'><img src='./images/footer/github.png' alt='github'></img></a>
                        <a href='mailto:raphaelsackey99@gmail.com'><img src='./images/footer/mail.png' alt='mail'></img></a>
                    </div>
                    <button className='cv'><a href='./images/resume/Raphael_Sackey_Resume_2024.pdf' download= 'Raphael_Sackey_Resume'>Download CV</a></button>

                </div>
                <div className='form-section' onSubmit={submitForm}>
                    <form className='form'>
                        <input type='text' name = 'name' value = {formData.name} onChange={updateForm} placeholder='Name' required/>
                        <input type='email' name = 'email' value = {formData.email}onChange={updateForm} placeholder='Email' required/>
                        <textarea name= "message" value = {formData.message} onChange={updateForm} placeholder='Message'required/>
                        <input type='submit' className='submit'/>
                    </form>
                </div>
            </section>
           
            
        </div>

    )

}