//HEADER
import Header from "pages/Header"

//IMPORT SVG's
import calendar_icon from "../../../svg/calendar_icon.svg";
import confirm_icon from "../../../svg/confirm_icon.svg";
import receipt_icon from "../../../svg/receipt_icon.svg";
import find_icon from "../../../svg/find_icon.svg";
import cancel_icon from "../../../svg/cancel_icon.svg";
import edit_icon from "../../../svg/edit_icon.svg";

const Icons = () => {

    //Ajuste de tamanho ícones de ação
    const styleScale = {
        transform: 'scale(0.9)',
    }

    return(
        <>
            <div className="table-actions">
                <img className="icon-m ml-3 mb-2" src={calendar_icon} alt="agendamento" style={styleScale} />
                <img className="icon-m ml-3 mb-2" src={confirm_icon} alt="confirm" style={styleScale} />
                <img className="icon-m ml-3 mb-2" src={receipt_icon} alt="receipt" style={styleScale} />
                <img className="icon-m ml-3 mb-2" src={find_icon} alt="find" style={styleScale} />
                <img className="icon-m ml-3 mb-2" src={cancel_icon} alt="cancel" style={styleScale} />
                <img className="icon-m ml-3 mb-2" src={edit_icon} alt="edit" style={styleScale} />                                   
            </div>
        </>
    );
}

export default Icons;