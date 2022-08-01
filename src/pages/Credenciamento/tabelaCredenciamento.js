// LINKS
import Icons from "./Icons/iconsComponent";

const TabelaAGR = ( { content } ) => {

    return(
        <>
            <section className="request-table">
                <div className="row">
                    <div className="flex-space">
                        <div className="text-center">
                            <h6 className="mb-2">ID AGR</h6>
                            {
                                content?.map((dados, index) => {
                                    return <p key={index} className="line-bottom mb-2">{dados.id_agr}</p>
                                })
                            }
                        </div>

                        <div className="text-center">
                            <h6 className="mb-2">Nome do AGR</h6>
                            {
                                content?.map((dados, index) => {
                                    return <p key={index} className="line-bottom mb-2">{dados.nome_agr}</p>
                                })
                            }
                        </div>
            
                        <div className="text-center">
                            <h6 className="mb-2">CPF/CNPJ</h6>
                            {
                                content?.map((dados, index) => {
                                    return <p key={index} className="line-bottom mb-2">{dados.cpf}</p>
                                })
                            }
                        </div>

                        <div className="text-center">
                            <h6 className="mb-2">Data de Credenciamento</h6>
                            {
                                content?.map((dados, index) => {
                                    return <p key={index} className="line-bottom mb-2">{dados.data_credenciamento}</p>
                                })
                            }
                        </div>
            
                        <div className="text-center">
                            <h6 className="mb-2">E-Mail</h6>
                            {
                                content?.map((dados, index) => {
                                    return <p key={index} className="line-bottom mb-2">{dados.email}</p>
                                })
                            }
                        </div>

                        <div className="text-center">
                            <h6 className="mb-2">Cidade</h6>
                            {
                                content?.map((dados, index) => {
                                    return <p key={index} className="line-bottom mb-2">{dados.municipio}</p>
                                })
                            }
                        </div>

                        <div className="text-center">
                            <h6 className="mb-2">Ações</h6>
                            {
                                content?.map((dados, index) => {
                                    return <Icons  key={index} />
                                })
                            }
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default TabelaAGR;