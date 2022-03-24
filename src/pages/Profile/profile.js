//Header e Footer
import Header from "pages/Header";
import Footer from "pages/Footer";
import ShowUserName from "./showUser";

import { useEffect, useState } from "react";
import api from 'services/api';

import profile_image from '../../img/09.png';


const Profile = () => {

    const [userName, setUserName] = useState([]);

    userName.forEach((userName, index) => {
        index += userName
    })

    useEffect(() => {

        api.get("/user/")
        .then((response) => {
            setUserName(response.data)
        });

    }, []);

    return(
        <>
            <Header />
            <section className="container">
                <div className="row">
                    <div className="grid-6">
                        <div className="flex-start-row">
                            <div className="profile-big">
                                <img className="profile-img" src={profile_image} alt="" />
                            </div>
                        </div>
                        <ShowUserName content={userName[0]} />
                    </div>
                    <div className="grid-6 flex-center">
                        <a href="#" className="btn">Meus Dados</a>
                        <a href="#" className="btn ml-3">Editar Perfil</a>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Profile;