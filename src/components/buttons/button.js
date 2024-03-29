import './button.css'

export default function Button({name, action}){
    return (

        <div className="button-wrapper">
            <button className="btn" >
                <a href={action}>
                    {name}
                </a>
            </button>
        </div>
    )
}