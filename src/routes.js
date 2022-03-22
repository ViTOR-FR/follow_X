import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// Pages
import Home from "pages/Home";
import Login from "pages/Login/autentication";
import NotFound from "pages/NotFound/notFound";
import Profile from "pages/Profile/profile";
import Search from "pages/Search/search";
import Contact from "pages/Contato/contact";

const Paths = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/perfil" element={<Profile />} />
                    <Route path="/pesquisa" element={<Search />} />
                    <Route path="/contato" element={<Contact />} />


                    <Route path="*" element={<NotFound />} />
                </Routes> 
            </BrowserRouter>
        </>
    );
}

export default Paths;