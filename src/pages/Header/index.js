//HOOKS
import { useEffect, useState } from 'react';

//IMAGES
import logo from 'svg/followX_logo2.svg'

//API
import api from '../../services/api';

//LINK
import { Link } from 'react-router-dom';

const Header = ( { hideMenu, props} ) => {

    //STATE NOME USUARIO
    const [getUser, setGetUser] = useState([]);

    const logout = () => {
        localStorage.clear();
        window.location.reload();
    }

    // PEGAR NOME DO USUARIO
    useEffect(() => {

        const dataUser = async () => {
            api.post("/usuarios", {
                userName: localStorage.getItem('@user')
            })
            .then((response) => {
                setGetUser(response.data);
            })
        }

        dataUser()
        .catch(console.error);

    }, []);

    return(
        <>
            <header className="px-2 py-1">
                {!hideMenu && <nav>
                    <div className="logo">
                        <Link to="/"> <img src={logo} alt="followX_logo" /></Link>
                    </div>

                    <ul className="menu  flex-center">
                        <li><Link to="/">Página Inicial</Link></li>

                        <div className="dropdown">
                            <button className="dropbtn">Agenda</button>
                            <div className="dropdown-content">
                                <Link to="#">Agendamentos</Link>
                                <Link to="#">Horário de Funcionamento</Link>
                            </div>
                        </div>

                        <div className="dropdown">
                            <button className="dropbtn">Estoque</button>
                            <div className="dropdown-content">
                                <Link to="#">Produtos</Link>
                                <Link to="#">Movimentação de Estoque</Link>
                                <Link to="#">Gerenciamento de Estoque</Link>
                            </div>
                        </div>
                        
                        <div className="dropdown">
                            <button className="dropbtn">Faturamento</button>
                            <div className="dropdown-content">
                                <Link to="/faturamento/pedidos/criarPedido">Realizar Pedido</Link>
                                <Link to="/faturamento/pedidos">Pedidos</Link>
                                <Link to="/faturamento/parceiro">Parceiro</Link>
                                <Link to="/faturamento/cadastro/parceiro">Cadastro Parceiro</Link>
                            </div>
                        </div>

                        <div className="dropdown">
                            <button className="dropbtn">Credenciamento</button>
                            <div className="dropdown-content">
                                <Link to="/credenciamento/criarCredenciamento">Realizar Credenciamento</Link>
                                <Link to="/credenciamento/credenciamento">Meus Credenciamentos</Link>
                            </div>
                        </div>

                        <div className="dropdown">
                            <button className="dropbtn">Fiscal</button>
                            <div className="dropdown-content">
                                <Link to="#">Emitir NF-e</Link>
                                <Link to="#">Notas</Link>
                            </div>
                        </div>

                        <div className="dropdown">
                            <button className="dropbtn">Financeiro</button>
                            <div className="dropdown-content">
                                <Link to="/financeiro/contasAReceber">Contas a Receber</Link>
                                <Link to="#">Contas a Pagar</Link>
                                <Link to="#">Acerto de Saldo</Link>
                                <Link to="#">Formas de Pagamento</Link>
                            </div>
                        </div>

                        <div className="dropdown">
                            <button className="dropbtn">Sistema</button>
                            <div className="dropdown-content">
                                <Link to="#">Parâmetros do Sistema</Link>
                                <Link to="#">Alterar Senha</Link>
                            </div>
                        </div>
                    </ul>
                </nav>}

                <div className="bx"></div>

                {!hideMenu && <div className="flex-start-row">
                    <div className="search">
                        <h6 className="gray-7">Boa tarde, {getUser?.map((data) => {
                            return data.nome_completo
                        })}</h6>
                    </div>

                    <div className="cta-desktop ml-3" >
                        <button  className="btn" onClick={logout}><Link to="/login">Sair</Link></button>
                    </div>
                </div>}
            </header>

            {/* MENU MOBILE */}

            {!hideMenu && <div className="relative">
                <div className="menu-mobile">
                    <ul className="nav-mobile">
                        <li><Link to="/" className="link-menu-mobile">Página Inicial</Link></li>
                        <li><Link to="/agendamento" className="link-menu-mobile">Agenda</Link></li>
                        <li><Link to="/estoque" className="link-menu-mobile">Estoque</Link></li>
                        <li><Link to="/faturamento" className="link-menu-mobile">Faturamento</Link></li>
                        <li><Link to="/fiscal" className="link-menu-mobile">Fiscal</Link></li>
                        <li><Link to="/financeiro" className="link-menu-mobile">Financeiro</Link></li>
                        <li><Link to="/configuracoes" className="link-menu-mobile">Sistema</Link></li>

                        <li className="py-2 px-2">
                            <form className="flex">
                                <input type="text" name="search" placeholder="Pesquisa..."/>
                                <button className="btn-search"></button>
                            </form>
                        </li>
                    </ul>
                </div>
            </div>}
        </>
    );
}

export default Header;