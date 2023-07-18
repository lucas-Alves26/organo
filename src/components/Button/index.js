import './Button.css'

const Button = (props) => {

    return (
        <button type="submit" className='Button'>{props.children}</button>
    )
}


export default Button