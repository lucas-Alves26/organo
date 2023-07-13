import './TextBox.css'

const TextBox =(props) => {

    const placeHolderModificado = `${props.placeholder}...`

    return (
        <div className='text-box'>
            <label>{props.label}</label>
            <input placeholder={placeHolderModificado}/>
        </div>
    )
    
}

export default TextBox