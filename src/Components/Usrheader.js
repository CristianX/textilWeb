import React from 'react';
import logo2 from '../img/logo.png';
import { Link } from 'react-router-dom';
import Rata from '../Rata';

const Usrheader = () => {
    return (
        <div>
            <header class="header">
                <div class="header__top">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-md-7">
                                <div class="header__top__left">
                                    <p>Maquinaria texil, repuestos y servicio técnico.</p>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-5">
                                <div class="header__top__right">
                                    <div class="header__top__links">
                                    <Link to="/Login">Ingresar</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-3">
                            <div class="header__logo">
                            <Link to="/Inicio"><img src={logo2} style={{ width: 100 }} alt="" /></Link>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <nav class="header__menu mobile-menu">
                                <ul>
                                    <li><Link to="/Inicio">Inicio</Link></li>
                                    <li><Link to="/Nosotros">Nosotros</Link></li>
                                    <li><Link to="/Catalogo">Catálogo</Link></li>
                                    <li><Link to="/Contactos">Contactos</Link></li>
                                    <li><Link to="/Registro">Registro</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div class="canvas__open"><i class="fa fa-bars"></i></div>
                </div>
            </header>


            </div>
            )
}

            export default Usrheader