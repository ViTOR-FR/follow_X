
//IMPORT SVG's
import mail_icon from "../../../svg/mail.svg"
import confirm_icon from "../../../svg/confirm_icon.svg";
import receipt_icon from "../../../svg/receipt_icon.svg";
import find_icon from "../../../svg/find_icon.svg";
import cancel_icon from "../../../svg/cancel_icon.svg";
import edit_icon from "../../../svg/edit_icon.svg";

const IconsFinanceiro = () => {

    //Ajuste de tamanho ícones de ação
    const styleScale = {
        transform: 'scale(0.8)',
    }

    return(
        <>
            <div className="flex-space">
                <img className="icon-m ml-2 mb-3" src={mail_icon} alt="mail" style={styleScale} />
                <img className="icon-m ml-2 mb-3" src={confirm_icon} alt="confirm" style={styleScale} />
                <img className="icon-m ml-2 mb-3" src={receipt_icon} alt="receipt" style={styleScale} />
                <img className="icon-m ml-2 mb-3" src={find_icon} alt="find" style={styleScale} />
                <img className="icon-m ml-2 mb-3" src={cancel_icon} alt="cancel" style={styleScale} />
                <img className="icon-m ml-2 mb-3" src={edit_icon} alt="edit" style={styleScale} />                                   
            </div>
        </>
    );
}

export default IconsFinanceiro;