import './ListaSuspensa.css'
//o '<select required={props.required}>' e a continuação do codigo utilizado para que a pagina nao carregue se nao tiver todos os paramentros preenchidos na barra de time, utilizando a função '{props.obrigatorio}'
// o .map ira aparecer sempre que for exigido uma interação em cima de uma renderização. Utilizado para criar listas, no caso time de profissão
//O Key e a chave unica, podendo ser do mesmo nome utilizado para item.


const  ListaSuspensa = (props) =>{
    return(
        <div className='lista-suspensa'>
            <label>
            {props.label}
            </label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} 
            required={props.required} value={props.valor}> 
            <option value = "">None</option>
                {props.itens.map(item => {
                return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )

}

export default ListaSuspensa