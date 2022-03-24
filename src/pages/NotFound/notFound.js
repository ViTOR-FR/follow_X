//Header e Footer
import Header from "pages/Header";
import Footer from "pages/Footer";

//LINK
import { Link } from "react-router-dom";


const NotFound = () => {
    return(
        <>
            <section className="container">
                <div className="row flex-center-column">
                    <div className="grid-4">
                        <img src="/svg/followX_logo.svg" alt="follow_x_logo" />
                        <div className="error-desc flex-center-column">
                            <h1 className="h0 color-primary">404</h1>
                            <h6>Página não encontrada!</h6>
                            <p>A página que você está procurando não existe ou foi removida.</p>
                            <p>Clique para voltar ao sistema.</p>
                            <button className="btn mt-3"><Link to="/" >Voltar p/ Home</Link></button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default NotFound;