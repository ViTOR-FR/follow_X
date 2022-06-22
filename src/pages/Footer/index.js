import facebookLogo from 'svg/icon-facebook.svg';
import instagramLogo from 'svg/icon-instagram.svg';
import youtubeLogo from 'svg/icon-youtube.svg';
import twitterLogo from 'svg/icon-twitter.svg';

const Footer = () => {
    return(
        <>
            <div className="row footer-custom">
                <div className="grid-9 ">
                    <p>2022 | Todos os direitos reservados. Desenvolvido por <a href="https://www.cwvdigital.com.br" rel="noopener"> CWV Digital Soluções LTDA.</a> </p>
                </div>

                <div className="grid-3">
                    <img src={facebookLogo} className="icon-s" alt="" />
                    <img src={instagramLogo} className="icon-s ml-2" alt="" />
                    <img src={youtubeLogo} className="icon-s ml-2" alt="" />
                    <img src={twitterLogo} className="icon-s ml-2" alt="" />
                </div>
            </div>
        </>
    );
}

export default Footer;