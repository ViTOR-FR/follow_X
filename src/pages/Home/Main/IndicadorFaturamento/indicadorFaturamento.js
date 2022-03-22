

const IndicadorFaturamento = () => {
    return(
        <>
            <div className="grid-3">
                <div className="frame color-primary">
                    <h5>Faturamento</h5>
                    <div className="mt-1">
                        <p>Pedidos Pendentes: <span>0</span></p>
                        <p>Pedidos Aprovados: <span>0</span></p>
                        <p>Pedidos Cancelados: <span>0</span></p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default IndicadorFaturamento;