
import Colaborador from '../Colaborador'
import './time.css'

const Time =(props) => {
    return (

//'props.colaboradores.length > 0 &&' cria a condição de que se o colaborador for menor que zero, a seção de time nao deve aparecer, somente a que for adicionado um usuario

// O '?' tem a função de If, no final contem o ": ''" pois siginifica (se o valor de colaborador for maior que 0, faça a section, caso contrario devolva nada
(props.colaboradores.length > 0) &&
<section className='time' style={{backgroundColor: props.corSecundaria }}>
    <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>

    <div className='colaboradoresCard'>
        {props.colaboradores.map(colaborador => <Colaborador corSecundaria={props.corSecundaria} corPrimaria={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
        </div>
</section>
    )
}

export default Time