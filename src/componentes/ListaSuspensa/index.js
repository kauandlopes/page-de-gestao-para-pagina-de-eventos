import './ListaSuspensa.css'


const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa'>
            
            <label>{props.label}</label>
            <select className='opcao' onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.valor}>
                <option value="" disabled hidden>
                    {props.placeholder || "Selecione o mês do evento..."}
                </option>
                {props.itens.map(item => {
                    return <option className='opcao' key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa