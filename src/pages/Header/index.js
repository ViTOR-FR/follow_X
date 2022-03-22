import logo from 'svg/followX_logo2.svg'

const Header = () => {
    return(
        <>
            <header className="px-2 py-1">
                <nav>
                    <div className="logo">
                        <a href=""> <img src={logo} alt="followX_logo" /> </a>
                    </div>
                    <ul className="menu">
                        <li><a href="">Página Inicial</a></li>
                        <li><a href="">Agenda</a></li>
                        <li><a href="">Estoque</a></li>
                        <li><a href="">Faturamento</a></li>
                        <li><a href="">Fiscal</a></li>
                        <li><a href="">Financeiro</a></li>
                        <li><a href="">Sistema</a></li>
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
                        <a href="#" className="btn">Login</a>
                    </div>
                    <div className="cta-mobile">
                        <a href="#" className="link color-primary">Login</a>
                    </div>
                </div>
            </header>

            {/* MENU MOBILE */}

            <div className="relative">
                <div className="menu-mobile">
                    <ul className="nav-mobile">
                        <li><a href="#" className="link-menu-mobile">Página Inicial</a></li>
                        <li><a href="#" className="link-menu-mobile">Agenda</a></li>
                        <li><a href="#" className="link-menu-mobile">Estoque</a></li>
                        <li><a href="#" className="link-menu-mobile">Faturamento</a></li>
                        <li><a href="#" className="link-menu-mobile">Fiscal</a></li>
                        <li><a href="#" className="link-menu-mobile">Financeiro</a></li>
                        <li><a href="#" className="link-menu-mobile">Sistema</a></li>

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