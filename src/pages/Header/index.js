import logo from 'svg/followX_logo2.svg'

//LINK
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <>
            <header className="px-2 py-1">
                <nav>
                    <div className="logo">
                        <Link to="/"> <img src={logo} alt="followX_logo" /></Link>
                    </div>
                    <ul className="menu">
                        <li><Link to="/">Página Inicial</Link></li>
                        <li><Link to="/agendamento">Agenda</Link></li>
                        <li><Link to="/estoque">Estoque</Link></li>
                        <li><Link to="/faturamento">Faturamento</Link></li>
                        <li><Link to="/fiscal">Fiscal</Link></li>
                        <li><Link to="/financeiro">Financeiro</Link></li>
                        <li><Link to="/configuracoes">Sistema</Link></li>
                    </ul>
                </nav>

                <div className="bx"></div>

                <div className="flex-start-row">
                    <div className="search">
                        <form className="flex">
                            <input type="text" name="search" placeholder="Pesquisa..."/>
                            <button className="btn-search"></button>
                        </form>
                    </div>

                    <div className="cta-desktop ml-3" >
                        <Link to="/login" className="btn">Login</Link>
                    </div>
                    <div className="cta-mobile">
                        <Link to="/login" className="link color-primary">Login</Link>
                    </div>
                </div>
            </header>

            {/* MENU MOBILE */}

            <div className="relative">
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
            </div>
        </>
    );
}

export default Header;