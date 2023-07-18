import TextBox from '../TextBox'
import Dropdown from '../Dropdown'
import Button from '../Button'
import { useState } from 'react'
import './Forms.css'


const Forms = (props) => {

    const times = ['Programação', 'Front-End', 'Data Science', 'Devops', 'Ux e Design', 'Mobile', 'Inovação e Gestão']

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    //const [time, setNTime] = useState('')

    const ToSave = (event) => {
        event.preventDefault();
        console.log('Formulário enviado', nome, cargo, imagem)

    }

    return (
        <section className="forms">

            <form onSubmit={ToSave}>

                <h2>{props.title}</h2>

                <TextBox required={true}
                    label="Nome"
                    placeholder="Digite o seu nome"
                    valor={nome}
                    changedValue={valor => setNome(valor)}
                />

                <TextBox required={true}
                    label="Cargo"
                    placeholder="Digite o seu cargo"
                    valor={nome}
                    changedValue={valor => setCargo(valor)}
                />

                <TextBox label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={nome}
                    changedValue={valor => setImagem(valor)}
                />

                <Dropdown required={true} label="Times" itens={times} />
                <Button>Criar Card</Button>
            </form>
        </section>

    )

}

export default Forms