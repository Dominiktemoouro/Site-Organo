import Botao from '../Button'
import ListaSuspensa from '../ListaSuspensa'
import CampoTexto from '../CampoTexto'
import './Formulario.css'
import { useState } from 'react'

//sempre tirar o '}' da constante variavel quando der erro de localização na função de local 'CampoTexte", apos retirar, clicar em cima do 'CampoTexto' e aperta Ctrl + Espaço, depois adicionar o '}'
//const Formulario = () => {
 //   const times = [


 //  ]

    //aqui e utilizando junto com o codigo da pasta "CampoTexto" para que o texto escrito seja alterado e nao somente visto
    // useStates e para falar ao react (leia isso aqui) e o setConstant e utlizando para falar ao react (Quero alterar esse valor aqui ein, redesenhe ai)
   const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    // declara a constante aoSalvar para que a pagina nao tenha que ir no servidor, carregar e voltar
    //event.preventDefault e utilizado para mostrar ao navegador que ele não precisa carregar a pagina, tomando autonomia da pagina
    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado ({
        nome,
        cargo, 
        imagem, 
        time


        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
        }
    // aqui e onde e criado os botões
    // Na parte <form onSubmit={aoSalvar} e utilizando junto da constante "aoSAlvar" para a criação da função de click
    //o campo 'obrigatorio= {True}' e a continuação do codigo na pasta "CampoTexto' para que a pagina nao carregue se todos os dados nao forem preenchidos

       
    return (
        <section className="Formulario">
            <form onSubmit={aoSalvar}>
                
                <h2>Preencher os dados para criar o card de Colaborador</h2>
                <CampoTexto obrigatorio = {true} 
                label="Nome" 
                placeholder="Digite seu nome"
                //valor recebe 'nome'
                valor={nome}
                //aoAlterado recebe 'valor' deve ser alterado para setNome e salvar em valor
                aoAlterado={valor => setNome(valor)} />

                <CampoTexto obrigatorio = {true} 
                label="Cargo" 
                placeholder="Digite o cargo"
                valor={cargo}
                aoAlterado ={valor => setCargo(valor)} />

                <CampoTexto obrigatorio = {true} 
                label="Imagem" 
                placeholder="https://github.com/usuario.png"
                valor={imagem}
                aoAlterado={valor => setImagem(valor)} />


                <ListaSuspensa 
                obrigatorio = {true}
                label="Time" 
                itens={props.times} 
                placeholder="Cartao card"
                valor={time}
                aoAlterado={valor => setTime(valor)}
                />


                <Botao>
                    Criar card
                 </Botao> 
            </form>
        </section>
    )
    }
 
export default Formulario
