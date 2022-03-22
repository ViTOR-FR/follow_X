import Header from "pages/Header";
import Footer from "pages/Footer";

import Profile from "./profile";

const ShowUserName = ( {content} ) => {
    return(
        <>
        <div className="ml-3">
            <h3>Vitor Félix Rodrigues</h3>
            <h6 className="color-gray">Usuário: VITOR</h6>
        </div>
        </>
    );
}

export default ShowUserName;