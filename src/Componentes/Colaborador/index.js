import './Colaborador.css'
//const Colaboador = (props)
//return (
//    <div className='colaborador'>
//        <div className='cabecalho'>
//           <img src={props.imagem} alt={props.nome}/>
const Colaborador = ({nome, imagem, cargo, corPrimaria, CorSecundaria}) =>{
    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{backgroundColor: corPrimaria, CorSecundaria}}>
                <img src={imagem} alt={nome}/>
             </div>

             <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
        
    )
}

export default Colaborador