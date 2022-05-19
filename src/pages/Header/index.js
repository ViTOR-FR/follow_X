import logo from 'svg/followX_logo2.svg'

//LINK
import { Link } from 'react-router-dom';

const Header = ( { hideMenu } ) => {
    return(
        <>
            <header className="px-2 py-1">
                {!hideMenu && <nav>
                    <div className="logo">
                        <Link to="/inicio"> <img src={logo} alt="followX_logo" /></Link>
                    </div>

                    <ul className="menu  flex-center">
                        <li><Link to="/inicio">Página Inicial</Link></li>

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
                        <form className="flex">
                            <input type="text" name="search" placeholder="Pesquisa..."/>
                            <button className="btn-search">Sair</button>
                        </form>
                    </div>

                    <div className="cta-desktop ml-3" >
                        <Link to="/login" className="btn">Login</Link>
                    </div>
                    <div className="cta-mobile">
                        <Link to="/login" className="link color-primary">Sair</Link>
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