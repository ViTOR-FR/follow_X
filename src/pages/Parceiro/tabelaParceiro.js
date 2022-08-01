// LINKS
import Icons from "./Icons/iconsComponent";

const TabelaParceiro = ( { content } ) => {

    return(
        <>
            <section className="request-table">
                <div className="row">
                    <div className="flex-space">
                        <div className="text-center">
                            <h6 className="mb-2">ID Parceiro</h6>
                            {
                                content?.map((dados, index) => {
                                    return <p key={index} className="line-bottom mb-2">{dados.id_parceiro}</p>
                                })
                            }
                        </div>

                        <div className="text-center">
                            <h6 className="mb-2">Nome da Contabilidade</h6>
                            {
                                content?.map((dados, index) => {
                                    return <p key={index} className="line-bottom mb-2">{dados.nome}</p>
                                })
                            }
                        </div>

                        <div className="text-center">
                            <h6 className="mb-2">Tipo</h6>
                            {
                                content?.map((dados, index) => {
                                    return <p key={index} className="line-bottom mb-2">{dados.tipo_pessoa}</p>
                                })
                            }
                        </div>
            
                        <div className="text-center">
                            <h6 className="mb-2">CPF/CNPJ</h6>
                            {
                                content?.map((dados, index) => {
                                    return <p key={index} className="line-bottom mb-2">{dados.cnpj || dados.cpf}</p>
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
                            <h6 className="mb-2">Telefone</h6>
                            {
                                content?.map((dados, index) => {
                                    return <p key={index} className="line-bottom mb-2">{dados.telefone_responsavel}</p>
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

export default TabelaParceiro;