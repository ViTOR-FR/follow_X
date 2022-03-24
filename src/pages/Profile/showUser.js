import Header from "pages/Header";
import Footer from "pages/Footer";

const ShowUserName = ( {content} ) => {
    return(
        <>
            <div className="ml-3">
                <h3>{content.name} {content.surname}</h3>
                <h6 className="color-gray">Usuário Logado: <span className="uppercase">{content.user}</span></h6>
            </div>
        </>
    );
}

export default ShowUserName;