


const IndicadorEmissao = ( {content} ) => {
    return(
        <>
            <div className="grid-3">
                <div className="frame color-primary">
                <h5>Emissões</h5>
                    <div className="mt-1">
                        <p>Hoje: <span> 0 </span>
                        </p>
                        <p>Esta Semana: <span> 0 </span></p>
                        <p>Este Mês: <span> 0 </span></p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default IndicadorEmissao;