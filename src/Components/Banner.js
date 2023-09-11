import React from "react";
import {Link, NavLink} from "react-router-dom";
import logo from "../Assets/logo.svg"
import "../Styles/Banner.scss"





function Banner () {

   

    return (
        <div>
            <div className="BannerDiv">
                <div>
                 
                    <Link to="/">
                        <img src={logo} alt="logo_kasa" className="BannerDiv_Kasa_logo"/>
                    </Link>
                </div>

             
                <div className="BannerDiv_MainNav">
                    <NavLink
                        className="BannerDiv_Links"
                        to="/home"
                        style={({ isActive }) => ({
                            color: isActive ? '#FF6060' : '#FF6060',
                            background: isActive ? '#f0f0f0' : '',
                            textDecoration: isActive ? "underline" : '',
                            padding: isActive ? "5px" : '',
                            borderRadius: isActive ? "10px" : ''
                        })}
                    >
                        Accueil
                    </NavLink>
                    <NavLink
                        className="BannerDiv_Links"
                        to="/about"
                        style={({ isActive }) => ({
                            color: isActive ? '#FF6060' : '#FF6060',
                            background: isActive ? '#f0f0f0' : '',
                            textDecoration: isActive ? "underline" : '',
                            padding: isActive ? "5px" : '',
                            borderRadius: isActive ? "10px" : ''
                        })}
                    >
                        À Propos
                    </NavLink>
                   
                </div>
            </div>
        </div>
    )
}

export default Banner
