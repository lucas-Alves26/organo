import './TextBox.css'

const TextBox =(props) => {

    const placeHolderModificado = `${props.placeholder}...`

    const valueEntered = (event) => {
        props.changedValue(event.target.value)
    }

    return (
        <div className='text-box'>
            <label>{props.label}</label>
            <input value={props.value} onChange={valueEntered} required={props.required} placeholder={placeHolderModificado}/>
        </div>
    )
    
}

export default TextBox