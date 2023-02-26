import './campoTexto.css'
//const e de constante e o props significa propriedade
//o trecho 'required ={props.obrigatorio}' e utilizado pra que a pagina nao carregue enquanto todos os campos estejam preenchidos, continuação do codigo na pasta 'Formulario' e ListaSuspensa na parte de 'select'. index.js. O '.' significar 'se for'
const CampoTexto = (props) =>{
    const placeholderModificador =`${props.placeholder}...`

//useStates ele serve para atualizar o nome nos campos enquanto digitamos, com essa função alem de vermos, podemos editar o conteudo
   // const [valor, setValor] = useState('') /enviado para a pasta "Formulario"
//setnome e utilizado junto do UseState para que o valor digitado seja atualizado conforme digitado mais letras do nome 
    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
     //   setValor(evento.target.value)
     //   console.log(valor) } / enviado para a pasta "Formulario"
     }

    return (
        //Div no html. A tag <div> serve para alterar o estilo em partes específicas da página e posicionar objetos
        //props.label ele serve para receber todas as propriedade
        //com essa função os valores serao recebidos e impressos(usar sempre que for adicionar mais de um nome)
        //<input placeholder='Digite o seu nome'/> para imprimir somente uma mensagem dentro do retangulo, para imprimir mais de um mensagem, segue a alteração
        <div className="campo-texto">
            <label>
                {props.label} 
                </label>
            <input value={props.valor} onChange={aoDigitado} required ={props.obrigatorio} placeholder={placeholderModificador}/>
            </div>

    )
}
export default CampoTexto