import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <button onClick={() => navigate("/books")} className="nav-link active">Books List</button>
            </div>
        </nav>
    );
    
};

export default Navbar;
