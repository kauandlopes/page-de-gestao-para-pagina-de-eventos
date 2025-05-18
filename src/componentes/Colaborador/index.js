import './Colaborador.css'

const Colaborador = ({ nome, imagem, cargo, corDeFundo, aoDeletar, id }) => { 
    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
                <img src={imagem} alt={nome} />
            </div>
             <button  // <<<< LINHA NOVA (todo o botão é novo)
                className='deletar' 
                onClick={() => aoDeletar(id)}
                style={{ backgroundColor: corDeFundo }}
            >
                X
            </button>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador
