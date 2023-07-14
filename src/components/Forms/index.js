import TextBox from '../TextBox'
import Dropdown from '../Dropdown'
import './Forms.css'


const Forms = (props) => {

    const times = ['Programação', 'Front-End', 'Data Science', 'Devops', 'Ux e Design', 'Mobile', 'Inovação e Gestão']

    return (
        <section className="forms">
            <form>
                <h2>{props.title}</h2>
                <TextBox label="Nome" placeholder="Digite o seu nome" />
                <TextBox label="Cargo" placeholder="Digite o seu cargo" />
                <TextBox label="Imagem" placeholder="Digite o endereço da imagem" />
                <Dropdown label="Times" itens={times}/>
            </form>
        </section>

    )

}

export default Forms