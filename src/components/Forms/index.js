import TextBox from '../TextBox'
import './Forms.css'


const Forms = (props) => {

    return (
        <section className="forms">
            <form>
                <h2>{props.title}</h2>
                <TextBox label="Nome" placeholder="Digite o seu nome" />
                <TextBox label="Cargo" placeholder="Digite o seu cargo" />
                <TextBox label="Imagem" placeholder="Digite o endereço da imagem" />
            </form>
        </section>

    )

}

export default Forms