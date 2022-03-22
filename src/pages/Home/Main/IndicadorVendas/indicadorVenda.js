

const IndicadorVenda = () => {
    return(
        <>
            <div className="grid-3">
                <div className="frame color-primary">
                    <h5>Vendas</h5>
                    <div className="mt-1">
                        <p>Hoje: <span>R$ 0,00</span></p>
                        <p>Esta Semana: <span>R$ 0,00</span></p>
                        <p>Este Mês: <span>R$ 0,00</span></p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default IndicadorVenda;